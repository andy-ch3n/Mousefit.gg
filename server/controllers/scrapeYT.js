const puppeteer = require("puppeteer");

exports.getYTScrapeData = async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(
      `https://www.youtube.com/results?search_query=${req.body.mouse}`,
      { waitUntil: "load", timeout: 0 }
    );

    const titles = await page.evaluate(function () {
      return Array.from(
        document.querySelectorAll("ytd-video-renderer a#video-title")
      ).map((el) => ({
        title: el.getAttribute("title"),
        link: "https://www.youtube.com" + el.getAttribute("href"),
      }));
    });

    await browser.close();
    res.send(titles);
  } catch (err) {
    console.error(err);
  }
};
