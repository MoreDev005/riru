const axios = require("axios");
const cheerio = require("cheerio");

const getToramInfo = async (url) => {
try{
let fetchToram = await axios.get(url);

if(fetchToram.status === 200) {
let html = fetchToram.data;
let $ = cheerio.load(html);
let judul = $('.commonArea > .useBox > .smallTitleLine > .smallTitle').text();
let toraminfo = $('.commonArea > .useBox').text().split('Tweet')[1].replace(judul,'').replace(/Kembali ke atas/g,'').replace(/Back to Top/g,'').split('function appStart()');
let resInfo = toraminfo.slice(0, toraminfo.length - 1).join('').replace(/\n+/g, '\n\n').trim();
return {status : "success", author : "iwan", result : `*${judul}*\n\n${resInfo}`}
}else{
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 1)"}
}
}catch(e){
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 2)"}
}
}
module.exports = getToramInfo;