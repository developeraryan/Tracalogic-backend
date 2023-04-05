const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.port || 4200;
const puppeteer = require("puppeteer");
const cors = require("cors");
const pdfTemp = require("./routes/pdf");
const fs = require("fs");
const pdfDoc = require("pdfkit");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.listen(port, (req, res) => {
  console.log(`server started on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

//post req for getting  data and creating pdf
// app.post("/pdf", async (req, res) => {
//   console.log("body", req.body);
//   // const html = fs.readFileSync("./routes/pdf.js", "utf-8");
//   // await page.setContent(html, { waitUntil: "domcontentloaded" });
//   (async () => {

//   // Create a browser instance
//   const browser = await puppeteer.launch();

//   // Create a new page
//   const page = await browser.newPage();

//   //Get HTML content from HTML file
//   const html = fs.readFileSync('./routes/pdf.js');
//   await page.setContent(html, { waitUntil: 'domcontentloaded' });

//   // To reflect CSS used for screens instead of print
//   await page.emulateMediaType('screen');

//   // Downlaod the PDF
//   const pdf = await page.pdf({
//     path: 'result.pdf',
//     margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
//     printBackground: true,
//     format: 'A4',
//   });

//   // Close the browser instance
//   await browser.close();
// })();
// });

app.post("/pdf", async (req, res) => {
    console.log("body", req.body);
    const data = req.body;
  // Create a new PDF document
  const doc = new pdfDoc();

  // Set the content type to PDF
  res.setHeader('Content-Type', 'application/pdf');

  // Pipe the PDF document to the respons 
   let temp= pdfTemp(data);
  // Add the data to the PDF document
  doc.text(JSON.stringify(temp));
  
  // Write the PDF document to a file
  const filePath = `./pdfs/${data.engineername}.pdf`;
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);
  res.send('PDF file saved');
  doc.end();

  // Send a response to the client
  
  });