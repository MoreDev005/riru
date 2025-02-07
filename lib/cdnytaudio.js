const axios = require('axios');
const ytmp3 = async (url) => {
let head = {
  'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin':'https://ytshorts.savetube.me',
  'Referer':'https://ytshorts.savetube.me/',
  'User-Agent':'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
}
try{
let fetchResult = await axios.get(`https://cdn38.savetube.me/info?url=${url}`,{headers:head});
let key = fetchResult.data.data.key
let fetchMp3 = await axios.get(`https://cdn37.savetube.me/download/audio/128/${key}`,{headers:head});
let mp3res = {
  mess:'',
  vid:fetchResult.data.data.id,
  title:fetchResult.data.data.title,
  duration:fetchResult.data.data.duration,
  durationLabel:fetchResult.data.data.durationLabel,
  dlink:fetchMp3.data.data.downloadUrl
}
return mp3res;
}catch(e){return {mess:'Zone Limit'}}
}
module.exports = ytmp3;