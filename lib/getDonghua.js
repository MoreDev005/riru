const axios = require('axios');
const cheerio = require('cheerio');

const getDonghua = async(text) => {
try{
let enctext = encodeURIComponent(text)
let desuFind = await axios.get(`https://anichin.live/?s=${enctext}`)

if(desuFind.status == 200){
const html = desuFind.data;
let hasil = [];
const $ = cheerio.load(html);
let logo = $('.logos > a > img').attr('src')
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
  hasil.push(getDesu);
  })
if(hasil.length == 0) return {status: "error", author: "iwan", message: "Anime tidak ditemukan"}
return {status: "success", author: "iwan", result : {logo : logo, anime : hasil}}
}else{
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 1)"}
}
}catch(e){
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 2)"}
}
}
module.exports = getDonghua;