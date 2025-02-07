const axios = require('axios');
const cheerio = require('cheerio');

async function searchHaram(query){
let baseUrl = 'https://www.xnxx.com'
try{
let q = query.replace(/ /g, '+')
let getX = await axios.get(`https://www.xnxx.com/search/${q}`);
if(getX.status == 200){
let $ = cheerio.load(getX.data);
let haram = [];
$('.mozaique > .thumb-block').each(function(i, elm){
  judul = $(this).find('.thumb-under > p > a').attr('title');
  link = $(this).find('.thumb-under > p > a').attr('href');
  thumb = $(this).find('.thumb-inside > .thumb > a > img').attr('data-src');
  let konten = {
    judul: judul,
    link: baseUrl+link,
    thumb: thumb
  }
  haram.push(konten);
})
if(haram.length > 0){
return {status: 'sukses', author: 'anak setan', result: haram }
}else{
return {status: 'error', author: 'anak setan', message: 'Video tidak ditemukan'}
}
}else{
return {status: 'error', author: 'anak setan', message: 'Axios Error (2)'}
}
}catch(e){
return {status: 'error', author: 'anak setan', message: 'Axios Error (1)'}
}
}

module.exports = searchHaram;