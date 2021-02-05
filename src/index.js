const https = require("https");

https.get("https://www.nikkei.com/markets/worldidx/chart/nk225/", (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
  
    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
                        `Status Code: ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expected text/html but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      res.resume();
      return;
    }
  
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
    try {
        let elementIndex = rawData.indexOf("economic_value_now");
        let start = rawData.indexOf(">", elementIndex) + 1;
        let end = rawData.indexOf("<", elementIndex);
        let nikkei = rawData.substring(start, end);
        console.log(nikkei);
    } catch (e) {
        console.error(e.message);
    }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });