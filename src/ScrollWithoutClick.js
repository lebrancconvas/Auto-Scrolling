const puppeteer = require('puppeteer');

const ScrollWithoutClick = async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const baseLink = "";
    const queryParam = "";
    const link = `${baseLink}/${queryParam}`;

    await page.goto(link);
}


const autoScrolling = async(page) => {
    await page.evaluate(async() => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

module.exports = ScrollWithoutClick;