const axios = require('axios');
const cheerio = require('cheerio');
const getEpisode = async (url) => {
if(url.includes('https://otakudesu.cloud/anime/')){
try{
let fetchDesu = await axios.get(url);

if(fetchDesu.status === 200) {
let html = fetchDesu.data;
let $ = cheerio.load(html);
let maintitle = $('.jdlrx > h1').text();
let thumbnail = $('.fotoanime > img').attr('src');
let listEpisode = [];
$('.episodelist > ul > li').each(function(i, elm){
  let link = $(elm).find('a').attr('href');
  let title = $(elm).find('a').text();
  let getLink = {
    title: title,
    link: link
  }
  if(getLink.title.includes('[BATCH]')){
  }else{listEpisode.push(getLink)};
})
return {status: "success", author: "iwan", result : {title : maintitle, thumbnail : thumbnail, episode : listEpisode}}
}else{
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 1)"}
}
}catch(e){
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 2)"}
}
}else{
  return {status: "error", author: "iwan", message: "Error, Link tidak Valid (code 3)"}
  }
}

module.exports = getEpisode;