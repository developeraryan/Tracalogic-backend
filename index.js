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

// post req for getting  data and creating pdf
app.post("/pdf", async (req, res) => {
  console.log("body", req.body);
  (async () => {
    // Create a browser instance
    const browser = await puppeteer.launch();
    const data = req.body;
    // Create a new page
    const page = await browser.newPage();
    let temp = pdfTemp(data);
    //Get HTML content from HTML file
    const html = fs.readFileSync("./routes/pdf.js", { encoding: "utf-8" });
    await page.setContent(temp, { waitUntil: "domcontentloaded" });

    // To reflect CSS used for screens instead of print
    await page.emulateMediaType("screen");

    // Downlaod the PDF
    const pdf = await page.pdf({
      path: `./pdfs/${data.engineername}.pdf`,
      margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
      printBackground: true,
      format: "A4",
    });

    // Close the browser instance
    await browser.close();
  })();
});

