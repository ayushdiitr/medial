const puppeteer = require('puppeteer');
const htmlContent  = require('./htmlContent');

const GenerateImage = async (req, res) => {
    const { title, body, image } = req.body;
    try {

        // const browser = await puppeteer.launch({headless: false}); // default is true

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        console.log(image)
        await page.setViewport({ width: 1200, height: 630 });
        await page.setContent(htmlContent.Template(title, body, image));

        const buffer = await page.screenshot({omitBackground: true, type: 'png'});
        await page.close();
        await browser.close();
        const base64Image = buffer.toString('base64');
        // res.setHeader("Content-Type", "image/png");
        res.send({ image: base64Image });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { GenerateImage };