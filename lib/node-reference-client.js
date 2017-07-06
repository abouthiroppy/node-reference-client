'use strict';

const fetch = require('node-fetch');
const cheerio = require('cheerio');

const url = 'https://nodejs.org/api/';

function fetchApiList() {
  return fetch(url)
    .then((res) => res.text())
    .then((res) => {
      const $ = cheerio.load(res);

      return $('#column2 > ul').eq(1).find('> li').toArray().map((item) => {
        const a = $(item).find('a');

        return {
          name: a.text(),
          path: a.attr('href')
        }
      });
    });
}

// [TODO]
function fetchApi(path) {
  return fetch(`${url}/${path}`)
    .then((res) => res.text())
    .then((res) => {
      const $ = cheerio.load(res);

        // console.log($(item).html())
var hermit = require('hermit');
        hermit($("#apicontent").html(), function (err, res) {
          console.log(res);
        });

      const contents = $('#toc > ul > li > ul > li').toArray().map((item) => {
        const a = $(item).find('span > a');

        return {
          method: a.text(),
          anchor: a.attr('href')
        };
      });

      return {
        contents
      };
    });
}

module.exports = {
  fetchApi,
  fetchApiList
};
