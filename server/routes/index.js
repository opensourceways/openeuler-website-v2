/**
 * @file index router
 */
const express = require('express');
const router = express.Router();
const fs = require('fs');
const os = require('os');
const url = require('url');
const path = require('path');
const HTTP = require('../util/httpUtil');
const ES = require('../config/searchConfig');
const REPO_ES_INDEX = 'openeuler';
const OPENEULER_URL = 'https://repo.openeuler.org';



router.get('/repo/search', function (req, res, next) {
    let obj = url.parse(encodeURI(req.url), true);
    let json = {
        size: 1000,
        query: {
            wildcard: {
                'file.filename': {
                    'value': '*' + obj.query.keyword + '*'
                }
            }
        }
    };
    let token = new Buffer.from(ES.ES_USER_PASS).toString('base64');
    HTTP.postES(ES.ES_URL + REPO_ES_INDEX + '/_doc/_search', token, json).then(data => {
        let responseData = getSearchResJson(data);
        res.send(responseData);
    }).catch(ex => {
        console.log(ex.stack + os.EOL);
    });
});

function getSearchResJson(data) {
    let arr = [];
    let num = data.hits.total.value;
    data.hits.hits.forEach(element => {
        let url = element._source.path.virtual;
        let json = {
            filename: element._source.file.filename,
            path: OPENEULER_URL + url.substring(0,
                url.lastIndexOf('/')),
            version: url.substring(1, url.indexOf('/', 1))
        };
        arr.push(json);
    });

    let json = {
        'status': 200,
        'msg': '',
        'data': {
            'totalNum': num,
            'records': arr
        }
    };
    return json;
}

module.exports = router;
