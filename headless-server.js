const express = require("express");
const puppeteer = require("puppeteer");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/render/:url(*)", async (req, res) => {
  const targetUrl = decodeURIComponent(req.params.url);
  if (!targetUrl.startsWith("http")) return res.status(400).send("Invalid URL");
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(targetUrl, { waitUntil: "networkidle2" });
    const html = await page.content();
    res.type("text/html").send(html);
  } catch (e) {
    res.status(500).send("Render error");
  } finally {
    if (browser) await browser.close();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Headless renderer running on port ${PORT}`));
