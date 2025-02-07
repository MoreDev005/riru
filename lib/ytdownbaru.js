const axios = require('axios')
let head = {'Accept':'application/json, text/plain, */*',
'Accept-Encoding':'gzip, deflate, br',
'Accept-Language':'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
'Content-Type':'application/json',
'Origin':'https://submagic-free-tools.fly.dev',
'Referer':'https://submagic-free-tools.fly.dev/youtube-to-mp3',
'Sec-Ch-Ua':'"Not-A.Brand";v="99", "Chromium";v="124"',
'Sec-Ch-Ua-Mobile':'?1',
'Sec-Ch-Ua-Platform':'"Android"',
'Sec-Fetch-Mode':'cors',
'Sec-Fetch-Site':'same-origin',
'User-Agent':'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36'}

const ytdown = async(urlnya) =>{
let payload = {url: urlnya}
let datarespon = await axios.post('https://submagic-free-tools.fly.dev/api/youtube-to-audio',payload,{headers:head})
if(datarespon.status==200){
  return datarespon.data
}else{
 return datarespon.respon
}
}

module.exports = ytdown