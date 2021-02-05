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

// const https = require("https");

// https.get("https://www.nikkei.com/markets/worldidx/chart/nk225/", (res) => {
//     const { statusCode } = res;
//     const contentType = res.headers['content-type'];
  
//     let error;
//     if (statusCode !== 200) {
//       error = new Error('Request Failed.\n' +
//                         `Status Code: ${statusCode}`);
//     } else if (!/^text\/html/.test(contentType)) {
//       error = new Error('Invalid content-type.\n' +
//                         `Expected text/html but received ${contentType}`);
//     }
//     if (error) {
//       console.error(error.message);
//       res.resume();
//       return;
//     }
  
//     res.setEncoding('utf8');
//     let rawData = '';
//     res.on('data', (chunk) => { rawData += chunk; });
//     res.on('end', () => {
//       try {
//         // const parsedData = JSON.parse(rawData);
//         let domparser = new DOMParser()​​;
//         let doc = domparser.parseFromString(rawData);
//         console.log(doc);
//       } catch (e) {
//         console.error(e.message);
//       }
//     });
//   }).on('error', (e) => {
//     console.error(`Got error: ${e.message}`);
//   });