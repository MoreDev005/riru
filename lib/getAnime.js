const axios = require('axios');
const cheerio = require('cheerio');

const getAnime = async(text) => {
try{
let enctext = encodeURIComponent(text)
let desuFind = await axios.get(`https://otakudesu.cloud/?s=${enctext}&post_type=anime`)

if(desuFind.status == 200){
const html = desuFind.data;
let hasil = [];
const $ = cheerio.load(html);
let logo = $('.logo > a > img').attr('src')
$('.chivsrc  > li').each(function (i,el){
const judul = $(el).find('h2').find('a').text()
const link = $(el).find('h2').find('a').attr('href')
const item = {
  title : judul,
  link : link
}
  hasil.push(item)
});
if(hasil.length == 0) return {status: "error", author: "iwan", message: "Anime tidak ditemukan"}
return {status: "success", author: "iwan", result : {logo : logo, anime : hasil}}
}else{
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 1)"}
}
}catch(e){
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 2)"}
}
}
module.exports = getAnime;