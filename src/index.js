const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

request("https://www.nikkei.com/markets/worldidx/chart/nk225/", (err, res, body) => {
    if (err) {
        console.error(err);
        return;
    }
    try {
        const dom = new JSDOM(body);
        const nikkei = dom.window.document.getElementsByClassName("economic_value_now")[0].textContent;
        console.log(nikkei);
    } catch (e) {
        console.error(e);
    }
});