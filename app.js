const ScrollWithClick = require('./src/ScrollWithClick');
const ScrollWithoutClick = require('./src/ScrollWithoutClick');

const App = async() => {
    try {
        console.log("Puppeteer is preparing to work !!");
        const response = await ScrollWithClick();
        if (response !== undefined) {
            console.log(response);
        } else {
            console.log("Puppeteer works success !!");
        }
    } catch (err) {
        console.log(err);
        console.log("\n Puppeteer works fail !!");
    }
}


App();