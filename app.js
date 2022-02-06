const ScrollWithClick = require('./src/ScrollWithClick');
const ScrollWithoutClick = require('./src/ScrollWithoutClick');

const App = async() => {
    try {
        const response = await ScrollWithClick();
        if (response !== undefined) {
            console.log(response);
        } else {
            console.log("Puppeteer is working !!");
        }
    } catch (err) {
        console.log(err);
    }
}