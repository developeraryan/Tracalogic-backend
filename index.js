const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.port || 4200;
const puppeteer = require("puppeteer");
const cors = require("cors");
const pdfTemp = require("./routes/pdf");
const fs = require("fs");
const pdfDoc = require("pdfkit");
const { log } = require("console");

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

    function getDateTime() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      if (month.toString().length == 1) {
        month = "0" + month;
      }
      if (day.toString().length == 1) {
        day = "0" + day;
      }
      var dateTime =
        year +
        "-" +
        month +
        "-" +
        day;
      return dateTime;
    }
    const dateNow = getDateTime();
    // Downlaod the PDF
    const pdf = await page.pdf({
      path: `./pdfs/${dateNow}${data.engineername}.pdf`,
      margin: { top: "40px", right: "20px", bottom: "40px", left: "20px" },
      printBackground: true,
      format: "A4",
    });

    // Close the browser instance
    await browser.close();
  })();
});
