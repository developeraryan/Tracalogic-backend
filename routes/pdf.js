module.exports = ({engineername,jobname,jobcode,contactnumber,inchargename}) => {
  const date = new Date();
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Date: ${date}</h1>
    <h1>Engineer Name: ${engineername}</h1>
    <h1>Job Name: ${jobname}</h1>
    <h1>Job Code: ${jobcode}</h1>
    <h1>Contact Number: ${contactnumber}</h1>
    <h1>Incharge Name: ${inchargename}</h1>

</body>
</html>
 `;
};
