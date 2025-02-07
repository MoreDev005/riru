const axios = require("axios");
const cheerio = require("cheerio");

const getOngoing = async () => {
try{
let fetchDesu = await axios.get(`https://otakudesu.cloud/ongoing-anime`);

if(fetchDesu.status === 200) {
let html = fetchDesu.data;
let $ = cheerio.load(html);
let logo = $('.logo > a > img').attr('src')
let ongoing = [];
$('.detpost').each(function (){
let judul = $(this).find('.jdlflm').text()
let link = $(this).find('a').attr('href')
let tanggal = $(this).find('.newnime').text()
let episode = $(this).find('.epz').text().slice(1);
    
let getDesu = {
    title : judul,
    link : link,
    date : tanggal,
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
module.exports = getOngoing;