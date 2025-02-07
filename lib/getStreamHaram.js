const axios = require('axios');
const cheerio = require('cheerio');

async function getHaram(url){
if(url.includes('https://www.xnxx.com/video-')){
try{
let fetchX = await axios.get(url);
if(fetchX.status == 200){
let $ = cheerio.load(fetchX.data);
let haram = [];
$('script').each(function(i, elm){
  let stringhtml = $(this).html()
  if(stringhtml.includes(`"@context": "https://schema.org",
"@type": "VideoObject",`)){
  haram.push(JSON.parse(stringhtml));}
})
return {status: 'sukses', author: 'anak setan', result: haram[0]}
}else{
return {status: 'error', author: 'anak setan', message: 'Axios Error (2)'}
}
}catch(e){
return {status: 'error', author: 'anak setan', message: 'Axios Error (1)'}
}
}else{
return {status: 'error', author: 'anak setan', message: 'Link tidak Valid'}
}
}

module.exports = getHaram