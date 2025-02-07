const cheerio = require('cheerio');
const axios = require('axios');

const se = async (q) => {
try{
 let sq =q.replace(/\s|\n/g,'+')
 let baseUrl = "https://www.myinstants.com"
 let data = await axios.get(`https://www.myinstants.com/en/search/?name=${sq}`)
 if(data.status == 200){
  $ = cheerio.load(data.data)
  let arrsound = [];
  $('.instants > .instant').each(async(i,el)=>{
    let title = $(el).find('a').text()
    let link = baseUrl+$(el).find('.small-button').attr('onclick').split("play('")[1].split("',")[0]
    let item = {
      title : title,
      link : link
    }
   arrsound.push(item)
  });
if(arrsound.length == 0) return {status: "error", author: "iwan", message: "Sound Effect tidak ditemukan"}
return {status: "success", author: "iwan", result : {logo : 'https://i.ytimg.com/vi/a9P_j1gMXBo/maxresdefault.jpg', sound : arrsound}}
 }else{
 return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 1)"}
}
}catch(e){
return {status: "error", author: "iwan", message: "Sound tidak ditemukan"}
}
}

module.exports = se;