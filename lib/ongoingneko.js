const axios = require("axios");
const cheerio = require("cheerio");

const instance = axios.create({
  proxy: {
    host: '101.255.163.130', // Ganti dengan alamat host proxy Anda
    port: 8080,        // Ganti dengan port proxy Anda
  }
});
const getOngoing = async () => {
try{
const config = {
  headers: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cache-Control': 'max-age=0',
    'Cookie': '8kxaij6b=ogwil9745yqx; kbx68pf5=0gnl6q32801c; 6h8n2jlm=uv24kaaemb3n; cf_clearance=4kCkoNjHeMT2Sli9GrlNVTH_30qBpCpCoxttOpifEZc-1728104078-1.2.1.1-SKRjIurZNJIUuxS0NAwe95z7v4haB0HnE7U6bndXM8dp2u7KRwyF5HVhLRecl1ObcN1uGdfZLoSfHjVI1jQRwMYv7SkFEUo5L.A25pphDQy9ExP2cd.7JKcGslvrczXGsHElE2pnvFzdFq3RYMNFaNawn2wxTnkA1ekpuWqi7IctRKV4xX.Wlq_RQnsuBfOcQ1jT6JVjVoWXxBzCB_25rgXdE0XM2BGwyx0nOPYhwC2eZLwpTLrWewN2HpSQbMaU1F7w.X16EeQp7zBgr496sMSZmoScR_EqF4qIhdM1oESwm3rPX0Y8E0.BF._u0sw.ZS9eIRYZZoe3DbM8gLSxr69fJORDX3Y8bLloTb7qCHopAAFJgu3xx6ExvAnvqzTKHTrIQnflkGOElA9gfDxu5A',
    'If-Modified-Since': 'Sat, 05 Oct 2024 04:14:44 GMT',
    'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
    'Sec-Ch-Ua-Mobile': '?1',
    'Sec-Ch-Ua-Platform': '"Android"',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
  }
};
let fetchNeko = await instance.get(`http://nekopoi.care/`);

if(fetchNeko.status === 200) {
let html = fetchNeko.data;
let $ = cheerio.load(html);
let logo = 'https://nekopoi.care/wp-content/uploads/2020/11/678cde682664.png'
let ongoing = [];
$('.eropost').each(function (){
let judul = $(this).find('.eroinfo > h2 > a').text()
let link = $(this).find('.eroinfo > h2 > a').attr('href')
let thumbnail = $(this).find('.eroimg > .limitero > img').attr('src')
let date = $(this).find('.eroinfi > span').text()
let getDesu = {
    title : judul,
    link : link,
    thumbnail : thumbnail,
    date : date
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