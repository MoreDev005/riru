const axios = require('axios');
const cheerio = require('cheerio');

const quoteAnime = async () => {
try{
let fetch = await axios.get('https://otakotaku.com/quote/feed')
if(fetch.status == 200){
let $ = cheerio.load(fetch.data)
let hasil = [];
$('.kotodama-list').each(async (i,elm) => {
 let karakter = $(elm).find('.kuroi > .kotodama-char > .char-info > .char-name').text().trim()
 let image = $(elm).find('.kuroi > .kotodama-char > .char-img > img').attr('data-src').replace(/\/thumb\/\d+[\u00D7x]\d+\//
, '/')
 let anime = $(elm).find('.kuroi > .kotodama-char > .char-info > .anime-title').text().trim()
 let episode = $(elm).find('.kuroi > .kotodama-char > .char-info > .meta').text().trim()
 let quote = $(elm).find('.kuroi > .kotodama-content > .quote').text().trim()
 let konten = {
   karakter : karakter,
   image : image,
   anime : anime,
   episode : episode,
   quote : quote
 }
 hasil.push(konten)
});
return {status:'success',author:'iwan',result:hasil}
}else{
return {status:'error',author:'iwan',message:'Kesalahan pada Library Api'}
}
}catch(e){
return {status:'error',author:'iwan',message:e.toString()}
}
}

module.exports = quoteAnime;