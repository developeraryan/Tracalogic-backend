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