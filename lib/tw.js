const cheerio = require('cheerio');
const axios = require('axios');

const tw = async (link) => {
  try {
    let res = await axios.get(`https://twitsave.com/info?url=${encodeURIComponent(link)}`);
    if (res.status === 200) {
      let result = [];
      const $ = cheerio.load(res.data);
      $('.origin-top-right > ul > li').each(function () {
        let download = $(this).find('a').attr('href');
        result.push(download);
      });
      return result;
    } else {
      throw new Error("Terjadi Kesalahan");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = tw;