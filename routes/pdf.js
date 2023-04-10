module.exports = ({
  engineername,
  jobname,
  jobcode,
  contactnumber,
  inchargename,
  newInstall,
  reinstall,
  rectification,
  kmrTesting,
  hmrTesting,
  assetCode,
  assetDescription,
  assetReg,
  deviceImei,
  simNo,
  fuelSensorNo,
  powerSupplyBattery,
  powerSupplyAdaptor,
  powerSupplyOther,
  earthingSupplyOther,
  earthingSupplyBattery,
  earthingSupplyVehicle,
  earthingConnectionTape,
  earthingConnectionTie,
  earthingConnectionThimble,
  ignitionConnectionTie,
  ignitionConnectionThimble,
  ignitionConnectionTape,
  RealTimeMatching,
  DeviceMountedSecurely,
  cableConnectorGatewayTie,
  cableConnectorGatewayThimble,
  cableConnectorGatewayTape,
  EngineConnectionTiedSecurelyThimble,
  EngineConnectionTiedSecurelyTie,
  EngineConnectionTiedSecurelyTape,
  RealTimeMatchingEngine,
  EngineConnectionsTakenAlternators,
  EngineConnectionsTakenOps,
  EngineConnectionsTakenBattery,
  TakingPhotographsInstallations,
  hmrMachineEngineStartingTime,
  hmrMachineEngineStopTime,
  hmrMachineMeterStartRead,
  hmrMachineMeterEndRead,
  hmrGpsEngineStartingTime,
  hmrGpsEngineStopTime,
  hmrTdMachineRead,
  hmrTdGpsRead,
  kmrMachineEngineStartTime,
  kmrMachineEngineStopTime,
  kmrMeterReadStart,
  kmrMeterReadEnd,
  kmrOtherParamStart,
  kmrOtherParamEnd,
  kmrGpsParamEngineStart,
  kmrGpsParamEngineStop,
  kmrMachineParamMr,
  kmrMachineParamOtherParam,
  kmrMachineParamGpsRead,
  remark,
  oldSimNo,
  oldDeviceNo,
}) => {
  const date = new Date();
  return `
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Tracalogic</title>
    <link rel="shortcut icon" type="image/png" href="./favicon.png" />
    <style>
      * {
        box-sizing: border-box;
      }

      .table-bordered td,
      .table-bordered th {
        border: 1px solid #ddd;
        padding: 10px;
        word-break: break-all;
      }

      body {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        font-size: 16px;
      }
      .h4-14 h4 {
        font-size: 12px;
        margin-top: 0;
        margin-bottom: 5px;
      }
      .img {
        margin-left: "auto";
        margin-top: "auto";
        height: 30px;
      }
      pre,
      p {
        /* width: 99%; */
        /* overflow: auto; */
        /* bpicklist: 1px solid #aaa; */
        padding: 0;
        margin: 0;
      }
      table {
        font-family: arial, sans-serif;
        width: 100%;
        border-collapse: collapse;
        padding: 1px;
      }
      .hm-p p {
        text-align: left;
        padding: 1px;
        padding: 5px 4px;
      }
      td,
      th {
        text-align: left;
        padding: 8px 6px;
      }
      .table-b td,
      .table-b th {
        border: 1px solid #ddd;
      }
      th {
        /* background-color: #ddd; */
      }
      .hm-p td,
      .hm-p th {
        padding: 3px 0px;
      }
      .cropped {
        float: right;
        margin-bottom: 20px;
        height: 100px; /* height of container */
        overflow: hidden;
      }
      .cropped img {
        width: 400px;
        margin: 8px 0px 0px 80px;
      }
      .main-pd-wrapper {
        box-shadow: 0 0 10px #ddd;
        background-color: #fff;
        border-radius: 10px;
        padding: 15px;
      }
      .table-bordered td,
      .table-bordered th {
        border: 1px solid #ddd;
        padding: 10px;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <section class="main-pd-wrapper" style="width: 1000px; margin: auto">
      <div style="display: table-header-group">
        <h4 style="text-align: center; margin: 0">
          <b>Tracalogic</b>
        </h4>

        <table style="width: 100%; table-layout: fixed">
          <tr>
            <td
              style="border-left: 1px solid #ddd; border-right: 1px solid #ddd"
            >
              <div
                style="
                  text-align: center;
                  margin: auto;
                  line-height: 1.5;
                  font-size: 14px;
                  color: #4a4a4a;
                "
              >
              <img src="" alt="brand-logo">

                <p style="font-weight: bold; margin-top: 15px">
                  GST TIN : 06AAFCD6498P1ZT
                </p>
                <p style="font-weight: bold">
                  Toll Free No. :
                  <a href="tel:018001236477" style="color: #00bb07"
                    >1800-123-6477</a
                  >
                </p>
              </div>
            </td>
            <td
              align="right"
              style="
                text-align: right;
                padding-left: 50px;
                line-height: 1.5;
                color: #323232;
              "
            >
              <div>
                <h4 style="margin-top: 5px; margin-bottom: 5px">
                  Bill to/ Ship to
                </h4>
                <!-- <p>NAME   :- {{ customer["name"]}}</p>
                        <p>ADDRESS:- {{customer['address']}}</p>
                        <p>MOBILE :- {{customer['mobile']}}</p>
                        <p>OrderID   :- {{customer['order_id']}}</p>  -->
                <p style="font-size: 14px">
                  Aakriti Rathore,B-268, west vinod nagar, street no.2,near
                  press apartment bus stand, Patparganj, IP
                  Extension,Delhi,07,110092,Delhi(07)<br />
                  Tel:
                  <a href="tel:01241234568" style="color: #00bb07"
                    >0124-1234568</a
                  >
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <table
        class="table table-bordered h4-14"
        style="width: 100%; -fs-table-paginate: paginate; margin-top: 15px"
      >
        <thead style="display: table-header-group">
          <tr
            style="
              margin: 0;
              background: #fcbd021f;
              padding: 15px;
              padding-left: 20px;
              -webkit-print-color-adjust: exact;
            "
          >
            <td colspan="4">
              <h3>
                Engineer Name<span
                  style="
                    font-weight: 300;
                    font-size: 85%;
                    color: #626262;
                    margin-left: 5px;
                  "
                  >${engineername}</span
                >
                <p
                  style="
                    font-weight: 300;
                    font-size: 85%;
                    color: #626262;
                    margin-top: 7px;
                  "
                >
                  Job Name:
                  <span style="color: #00bb07">${jobname}</span
                  ><br />
                </p>
              </h3>
            </td>
            <td colspan="5">
              <p>Job Code:- ${jobcode}</p>
              <p style="margin: 5px 0">Generated on:- ${date}</p>
              <p style="margin-bottom: 5px">Contact No.: ${contactnumber}</p>
              <p>Incharge Name: ${inchargename}</p>
            </td>
            <td colspan="4" style="width: 300px">
              <h4 style="margin: 0">Type:</h4>
              <p>
                ${newInstall || ""} ${reinstall || ""} ${kmrTesting || ""} ${
    rectification || ""
  } ${hmrTesting || ""}
              </p>
            </td>
          </tr>

          <tr>
            <th style="width: 50px">#</th>
            <th style="width: 150px"><h4>ASSET Description</h4></th>
            <th style="width: 80px">
              <h4>
               Asset<br />
                Code
              </h4>
            </th>
            <th style="width: 80px"><h4>ASSET<br> REG. NO.</h4></th>
            <th style="width: 60px"><h4>
              SIM<br> NO.</h4></th>
            <th style="width: 80px">
              <h4>
                DEVICE <br>IMEI NO.
              </h4>
            </th>


 


            <th style="width: 120px"><h4>FUEL<br> SENSOR SR. NO.</h4></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>${assetDescription}</td>
            <td>${assetCode}</td>
            <td>${assetReg}</td>
            <td>${simNo}</td>
            <td>${deviceImei}</td>
            <td>${fuelSensorNo}</td>
            
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>

      <table class="hm-p table-bordered" style="width: 100%; margin-top: 30px">
        <tr>
          <th style="width: 400px">
           POWER SUPPLY TAKEN FROM
            <span
              style="font-size: 14px; font-weight: 300; color: rgb(87, 87, 87)"
              ></span
            >
          </th>
          <td style="vertical-align: top; color: #000">
            <b>${powerSupplyBattery || ""} ${powerSupplyAdaptor || ""} ${
    powerSupplyOther || ""
  }</b>
          </td>
        </tr>
        <tr>
          <th style="width: 400px">
            EARTHING SUPPLY TAKEN FROM
            <span
              style="font-size: 14px; font-weight: 300; color: rgb(87, 87, 87)"
              ></span
            >
          </th>
          <td style="vertical-align: top; color: #000">
            <b>${earthingSupplyBattery || ""} ${earthingSupplyOther || ""} ${
    earthingSupplyVehicle || ""
  }</b>
          </td>
        </tr>
        <tr>
          <th style="vertical-align: top">EARTHING CONNECTIONS ARE TIED SECURELY WITH</th>
          <td style="vertical-align: top; color: #000">
            <b> ${earthingConnectionTape || ""} ${
    earthingConnectionTie || ""
  } ${earthingConnectionThimble || ""}</b>
          </td>
        </tr>
        <tr>
          <th style="vertical-align: top">IGNITION CONNECTIONS ARE TIED SECURELY WITH</th>
          <td style="vertical-align: top">
            <b>${ignitionConnectionTie || ""} ${
    ignitionConnectionThimble || ""
  } ${ignitionConnectionTape || ""}</b>
          </td>
        </tr>

        <tr>
          <th style="vertical-align: top">REAL TIME MATCHING OF IGNITION ON / OFF</th>
          <td style="vertical-align: top; color: #000">
            <b>${RealTimeMatching}</b>
          </td>
        </tr>
              <tr>
          <th style="vertical-align: top">DEVICE MOUNTED SECURELY</th>
          <td style="vertical-align: top; color: #000">
            <b>${DeviceMountedSecurely}</b>
          </td>
        </tr>
              <tr>
          <th style="vertical-align: top">CABLE CONNECTOR IN GATEWAY TIED SECURELY WITH</th>
          <td style="vertical-align: top">
            <b>${cableConnectorGatewayTie || ""} ${
    cableConnectorGatewayThimble || ""
  } ${cableConnectorGatewayTape || ""}</b>
          </td>
        </tr>
         <tr>
          <th style="vertical-align: top">ENGINE CONNECTION ARE TIED SECURELY WITH</th>
          <td style="vertical-align: top">
            <b>${EngineConnectionTiedSecurelyThimble || ""} ${
    EngineConnectionTiedSecurelyTie || ""
  } ${EngineConnectionTiedSecurelyTape || ""}</b>
          </td>
        </tr>
          <tr>
          <th style="vertical-align: top">REAL TIME MATCHING OF ENGINE ON / OFF</th>
          <td style="vertical-align: top; color: #000">
            <b>${RealTimeMatchingEngine}</b>
          </td>
        </tr>
        <tr>
          <th style="vertical-align: top">ENGINE CONNECTIONS TAKEN FROM</th>
          <td style="vertical-align: top">
            <b>${EngineConnectionsTakenAlternators || ""} ${
    EngineConnectionsTakenOps || ""
  } ${EngineConnectionsTakenBattery || ""}</b>
          </td>
        </tr>
          <tr>
              <tr>
          <th style="vertical-align: top">TAKING PHOTOGRAPHS FOR INSTALLATIONS</th>
          <td style="vertical-align: top; color: #000">
            <b>${TakingPhotographsInstallations}</b>
          </td>
        </tr>
      </table>

            <table
        class="table table-bordered h4-14"
        style="width: 100%; -fs-table-paginate: paginate; margin-top: 15px"
      >
        <thead style="display: table-header-group">
          <tr
            style="
              margin: 0;
              background: #fcbd021f;
              padding: 15px;
              padding-left: 20px;
              -webkit-print-color-adjust: exact;
            "
          >
            <td colspan="4">
              <h3>
               HMR Testing<span
                  style="
                    font-weight: 300;
                    font-size: 85%;
                    color: #626262;
                    margin-left: 5px;
                  "
                  ></span
                >
                <p
                  style="
                    font-weight: 300;
                    font-size: 85%;
                    color: #626262;
                    margin-top: 7px;
                  "
                >
                  MACHINE PARAMETERS
                  <span style="color: #00bb07"></span
                  ><br />
                </p>
              </h3>
            </td>
           

            
            </td>
          </tr>

          <tr>
            <th style="width: 50px">#</th>
            <th style="width: 190px"><h4>ENGINE STARTING TIME</h4></th>
            <th style="width:  190px">
              <h4>
               ENGINE STOP TIME
              </h4>
            </th>
            <th style="width: 190px"><h4>STARTING METER READING</h4></th>
            <th style="width: 190px"><h4>
             END METER READING</h4></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>${hmrMachineEngineStartingTime}</td>
            <td>${hmrMachineEngineStopTime}</td>
           
            <td>${hmrMachineMeterStartRead}</td>
            <td>${hmrMachineMeterEndRead}</td>
            
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
              <table
        class="table table-bordered h4-14"
        style="width: 100%; -fs-table-paginate: paginate; margin-top: 15px"
      >
        <thead style="display: table-header-group">
          <tr
            style="
              margin: 0;
              background: #fcbd021f;
              padding: 15px;
              padding-left: 20px;
              -webkit-print-color-adjust: exact;
            "
          >
            <td colspan="4">
              <h3>
                <p
                  style="
                    font-weight: 300;
                    font-size: 85%;
                    color: #626262;
                    margin-top: 7px;
                  "
                >
                  GPS PARAMETERS
                  <span style="color: #00bb07"></span
                  ><br />
                </p>
              </h3>
            </td>
           

            
            </td>
          </tr>

          <tr>
            <th style="width: 50px">#</th>
            <th style="width: 190px"><h4>ENGINE STARTING TIME</h4></th>
            <th style="width:  190px">
              <h4>
               ENGINE STOP TIME
              </h4>
            </th>
   
        
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>${hmrGpsEngineStartingTime}</td>
            <td>${hmrGpsEngineStopTime}</td>
            
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
      
   <table
        class="table table-bordered h4-14"
        style="width: 100%; -fs-table-paginate: paginate; margin-top: 15px"
      >
        <thead style="display: table-header-group">
          <tr
            style="
              margin: 0;
              background: #fcbd021f;
              padding: 15px;
              padding-left: 20px;
              -webkit-print-color-adjust: exact;
            "
          >
            <td colspan="4">
              <h3>
                <p
                  style="
                    font-weight: 300;
                    font-size: 85%;
                    color: #626262;
                    margin-top: 7px;
                  "
                >
                  TOTAL DIFFERENCE
                  <span style="color: #00bb07"></span
                  ><br />
                </p>
              </h3>
            </td>
           

            
            </td>
          </tr>

          <tr>
            <th style="width: 50px">#</th>
            <th style="width: 190px"><h4>MACHINE READING</h4></th>
            <th style="width:  190px">
              <h4>
               GPS READING
              </h4>
            </th>
   
        
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>${hmrTdMachineRead}</td>
            <td>${hmrTdGpsRead}</td>
            
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>

            <table
        class="table table-bordered h4-14"
        style="width: 100%; -fs-table-paginate: paginate; margin-top: 65px"
      >
        <thead style="display: table-header-group">
          <tr
            style="
              margin: 0;
              background: #fcbd021f;
              padding: 15px;
              padding-left: 20px;
              -webkit-print-color-adjust: exact;
            "
          >
            <td colspan="4">
              <h3>
               KMR Testing<span
                  style="
                    font-weight: 300;
                    font-size: 85%;
                    color: #626262;
                    margin-left: 5px;
                  "
                  ></span
                >
                <p
                  style="
                    font-weight: 300;
                    font-size: 85%;
                    color: #626262;
                    margin-top: 7px;
                  "
                >
                  MACHINE PARAMETERS
                  <span style="color: #00bb07"></span
                  ><br />
                </p>
              </h3>
            </td>
           

            
            </td>
          </tr>

          <tr>
            <th style="width: 50px">#</th>
            <th style="width: 190px"><h4>ENGINE STARTING TIME</h4></th>
            <th style="width:  190px">
              <h4>
               ENGINE STOP TIME
              </h4>
            </th>
            <th style="width: 190px"><h4>STARTING METER READING</h4></th>
            <th style="width: 190px"><h4>
             END METER READING</h4></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>${kmrMachineEngineStartTime}</td>
            <td>${kmrMachineEngineStopTime}</td>
           
            <td>${kmrMeterReadStart}</td>
            <td>${kmrMeterReadEnd}</td>
            
          </tr>
        </tbody>
        <tfoot></tfoot>


   <table
        class="table table-bordered h4-14"
        style="width: 100%; -fs-table-paginate: paginate; margin-top: 15px"
      >
        <thead style="display: table-header-group">
          <tr
            style="
              margin: 0;
              background: #fcbd021f;
              padding: 15px;
              padding-left: 20px;
              -webkit-print-color-adjust: exact;
            "
          >
            <td colspan="4">
              <h3>
                <p
                  style="
                    font-weight: 300;
                    font-size: 85%;
                    color: #626262;
                    margin-top: 7px;
                  "
                >
                  OTHER PARAMETERS

                  <span style="color: #00bb07"></span
                  ><br />
                </p>
              </h3>
            </td>
           

            
            </td>
          </tr>

          <tr>
            <th style="width: 50px">#</th>
            <th style="width: 190px"><h4>STARTING</h4></th>
            <th style="width:  190px">
              <h4>
              END
              </h4>
            </th>
   
        
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>${kmrOtherParamStart}</td>
            <td>${kmrOtherParamEnd}</td>
            
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
      </table>
              <table
        class="table table-bordered h4-14"
        style="width: 100%; -fs-table-paginate: paginate; margin-top: 15px"
      >
        <thead style="display: table-header-group">
          <tr
            style="
              margin: 0;
              background: #fcbd021f;
              padding: 15px;
              padding-left: 20px;
              -webkit-print-color-adjust: exact;
            "
          >
            <td colspan="4">
              <h3>
                <p
                  style="
                    font-weight: 300;
                    font-size: 85%;
                    color: #626262;
                    margin-top: 7px;
                  "
                >
                  GPS PARAMETERS
                  <span style="color: #00bb07"></span
                  ><br />
                </p>
              </h3>
            </td>
           

            
            </td>
          </tr>

          <tr>
            <th style="width: 50px">#</th>
            <th style="width: 190px"><h4>ENGINE STARTING TIME</h4></th>
            <th style="width:  190px">
              <h4>
               ENGINE STOP TIME
              </h4>
            </th>
   
        
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>${kmrGpsParamEngineStart}</td>
            <td>${kmrGpsParamEngineStop}</td>
            
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>

              <table
        class="table table-bordered h4-14"
        style="width: 100%; -fs-table-paginate: paginate; margin-top: 15px"
      >
        <thead style="display: table-header-group">
          <tr
            style="
              margin: 0;
              background: #fcbd021f;
              padding: 15px;
              padding-left: 20px;
              -webkit-print-color-adjust: exact;
            "
          >
            <td colspan="4">
              <h3>
                <p
                  style="
                    font-weight: 300;
                    font-size: 85%;
                    color: #626262;
                    margin-top: 7px;
                  "
                >
                 MACHINE PARAMETERS
                  <span style="color: #00bb07"></span
                  ><br />
                </p>
              </h3>
            </td>
           

            
            </td>
          </tr>

          <tr>
            <th style="width: 50px">#</th>
            <th style="width: 190px"><h4>MACHINE READING</h4></th>
            <th style="width:  190px">
              <h4>
               OTHER PARAMETERS READING
              </h4>
            </th>
            <th style="width:  190px">
              <h4>
               GPS READING
              </h4>
            </th>
   
        
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>${kmrMachineParamMr}</td>
            <td>${kmrMachineParamOtherParam}</td>
            <td>${kmrMachineParamGpsRead}</td>
            
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
      



      <table class="hm-p table-bordered" style="width: 100%; margin-top: 30px">
        <tr>
          <th style="width: 800px">
            <p>Remark :</p>
            <p>${remark}</p>
          
          </th>
         
        </tr>
   
      </table>
      <table class="hm-p table-bordered" style="width: 100%; margin-top: 30px">
      <tr style="background: #fcbd02">
       <th>OLD SIM NO:</th>
       
       <td style="width: 70px; text-align: right; border-right: none">
         <b>{oldSimNo}</b>
       </td>
       <td colspan="5" style="border-left: none"></td>
     </tr>
        <tr style="background: #fcbd02">
       <th>OLD DEVICE NO.</th>
       
       <td style="width: 70px; text-align: right; border-right: none">
         <b>{oldDeviceNo}</b>
       </td>
       <td colspan="5" style="border-left: none"></td>
     </tr>
   </table>
     <table class="hm-p table-bordered" style="width: 100%; margin-top: 30px">
        <tr>
          <th style="width: 400px">
            <p></p>
            <p></p>
            <p>Service Engineer</p>
            
          </th>
          <td style="width: 400px; border-right: none">
            <p>&nbsp;</p>
            <p style="text-align: right"><b>SITE ENGINEER.</b></p>
           
          </td>
          <td colspan="5" style="border-left: none"></td>
        </tr>
        <tr style="background: #fcbd02">
          <th>Signature</th>
          <td style="width: 70px; text-align: right; border-right: none">
            <b>NAME & SIGNATURE

</b>
          </td>
          <td colspan="5" style="border-left: none"></td>
        </tr>
      </table>

      <table style="width: 100%" cellspacing="0" cellspadding="0" border="0">
        <tr>
          <td>
            <h4 style="margin: 10px 0">
             
            </h4>
            <p>
              This is computer generated and hence signature is not
              required
            </p>
          </td>
          <td>
          </td>
        </tr>
      </table>
    </section>
  </body>
</html>
`;
};
