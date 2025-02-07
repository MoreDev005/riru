const axios = require('axios');
const cheerio = require('cheerio');
const options = {proxy:{
   protocol:'http',
   host:'117.54.114.100',
   port:80
}
}
const getDesustream = async (url) => {
try{
let fetchDesu = await axios.get(url);

if(fetchDesu.status === 200) {
let $ = cheerio.load(fetchDesu.data)
let desulink =[];
let logo = $('.mvelement > .item > .tb > img').attr('src')
let judul = $('.title-section > .entry-title').text();
$('#embed_holder > .player-embed').each(async(i,elm)=>{
   let link = $(elm).find('iframe').attr('src')
   desulink.push(link)
 })

if(desulink.length>0){
return {status:'success',author:'iwan',result:{logo : logo, title : judul, linkStream:desulink[0]}}
 }
}else{
return {status:'error',author:'iwan',message:'Kesalahan pada Library Api'}
}
}catch(e){
return {status:'error',author:'iwan',message:e.toString()}
}
}

module.exports = getDesustream;