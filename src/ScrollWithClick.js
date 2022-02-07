const puppeteer = require('puppeteer');

const ScrollWithClick = async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const navigationPromise = page.waitForNavigation();

    const baseLink = "";
    const queryParam = "";
    const link = `${baseLink}/${queryParam}`;

    await page.goto(link);

    await page.setViewport({ width: 1440, height: 788 });

    await navigationPromise;

    const buttonSelector = "";

    const clickRound = 1000;

    for (let i = 1; i <= clickRound; i++) {
        await page.waitForSelector(buttonSelector);
        await page.click(buttonSelector);
        await page.waitForTimeout(1000);
    }

}

module.exports = ScrollWithClick;