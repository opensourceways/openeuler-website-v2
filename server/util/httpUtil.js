/**
 * @file httpUtil
 */
const timeOut = 60000;
var request = require('request');

function postES(url, token, reqBody) {
    let options = {
        url: url,
        method: 'POST',
        json: true,
        timeout: timeOut,
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Basic ' + token
        },
        rejectUnauthorized: false,
        body: reqBody
    };
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error == null) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
}



module.exports = {
    postES: postES
};
