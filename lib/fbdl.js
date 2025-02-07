const axios = require('axios');
const cheerio = require('cheerio')
async function fbdl(url) {
try {
let respon = await axios.post('https://getmyfb.com/process', new URLSearchParams({
      'id': decodeURIComponent(url),
      'locale': 'en'
    }), {
      'headers': {
        'accept': "*/*",
        'accept-language': "en-GB,en-US;q=0.9,en;q=0.8",
        'cache-control': "no-cache",
        'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
        'Cookie':'__cflb=04dToeZfC9vebXjRcJCMjjSQh5PprejpsZficybopF; PHPSESSID=o1jpvs50ma2t0dh5q1u116dvmn; _token=jK625Xe4A63gemE4XHAj',
        'hx-current-url': "https://getmyfb.com/",
        'hx-request': "true",
        'hx-target': "target",
        'hx-trigger': 'form',
        'pragma': "no-cache",
        'Referer': "https://getmyfb.com/",
        'Referrer-Policy': "strict-origin-when-cross-origin"
      }
})
let arrlink = [];
let $ = cheerio.load(respon.data)
 $('.results-list-item').each(async(i,elm)=>{
   let link = $(elm).find('a').attr('href');
   arrlink.push(link)
 })
 return{status:"sukses",result:arrlink}
}catch(e){
  return {status:'error',result:[]}
}
}

module.exports = fbdl;