const axios = require("axios");
const cheerio = require("cheerio");

const getToramUpdate = async () => {
try{
let baseUrl = 'https://id.toram.jp';
let fetchToram = await axios.get(baseUrl);

if(fetchToram.status === 200) {
let html = fetchToram.data;
let $ = cheerio.load(html);
let toraminfo = [];
$('.common_list > .news_border').each(function (){
let judul = $(this).find('.news_title').text()
let link = $(this).find('a').attr('href')
let tanggal = $(this).find('.time').text()
    
let getItem = {
    title : judul,
    link : baseUrl+link,
    date : tanggal
}
toraminfo.push(getItem);
})
return {status : "success", author : "iwan", result : {logo : 'https://toram-jp.akamaized.net/id/img/common/ogp_toramonline.jpg', data : toraminfo}}
}else{
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 1)"}
}
}catch(e){
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 2)"}
}
}
module.exports = getToramUpdate;