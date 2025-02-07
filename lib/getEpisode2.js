const axios = require('axios');
const cheerio = require('cheerio');
const getEpisode = async (url) => {
if(url.includes('https://anichin.live/seri/')){
try{
let fetchDesu = await axios.get(url);

if(fetchDesu.status === 200) {
let html = fetchDesu.data;
let $ = cheerio.load(html);
let thumbnail = $('.thumbook > .thumb > img').attr('src')
let judul = $('.infox > .entry-title').text()
let listEpisode = [];
$('.eplister > ul > li').each(function(i, elm){
  let link = $(elm).find('a').attr('href');
  let title = $(elm).find('a > .epl-title').text();
  let date = $(elm).find('a > .epl-date').text();
  let urut = $(elm).find('a > .epl-num').text();
  let getLink = {
    title: title,
    link: link,
    date: date,
    urut: urut
  }
  listEpisode.push(getLink);
})
return {status: "success", author: "iwan", result : {title : judul, thumbnail : thumbnail, episode : listEpisode}}
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