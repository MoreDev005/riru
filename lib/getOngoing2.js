const axios = require("axios");
const cheerio = require("cheerio");

const getOngoing = async () => {
try{
let fetchDesu = await axios.get(`https://anichin.live/ongoing/`);

if(fetchDesu.status === 200) {
let html = fetchDesu.data;
let $ = cheerio.load(html);
let logo = $('.logos > a > img').attr('src')
let ongoing = [];
$('.listupd > .bs').each(function (){
let judul = $(this).find('.bsx > a > .tt > h2').text()
let link = $(this).find('.bsx > a').attr('href')
let thumbnail = $(this).find('.bsx > a > .limit > img').attr('src')
let episode = $(this).find('.bsx > a > .limit > .bt > .epx').text()
let getDesu = {
    title : judul,
    link : link,
    thumbnail : thumbnail,
    episode : episode
}
ongoing.push(getDesu);
})
return {status : "success", author : "iwan", result : {logo : logo, anime : ongoing}}
}else{
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 1)"}
}
}catch(e){
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 2)"}
}
}

module.exports = getOngoing