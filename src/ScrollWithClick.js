const puppeteer = require('puppeteer');

const ScrollWithClick = async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const baseLink = "";
    const queryParam = "";
    const link = `${baseLink}/${queryParam}`;

    await page.goto(link);
}

module.exports = ScrollWithClick;