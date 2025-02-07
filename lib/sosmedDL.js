const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio')

const tkdl = async(input) => {
var tklink = encodeURIComponent(input)
var hasil = [];
await axios.post("https://api.tikmate.app/api/lookup",`url=${tklink}`, { headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, }).then((res) => {
  if(res.status === 200) {
  var link = `https://tikmate.app/download/${res.data.token}/${res.data.id}.mp4`
datx = {
     error:'',
     linkvideo : link
}
hasil.push(datx)
}

}).catch(err=>{
  var info = err.toString()
  var dat ={
    error: info
  }
  hasil.push(dat)
});

return hasil[0]

}

const igdl = async(input) => {
var reelid = input.replace("https://www.instagram.com/reel/",'').split('/')[0]
var hasil = [];
await axios.post("https://fastdl.app/c/",`url=https%3A%2F%2Fwww.instagram.com%2Freel%2F${reelid}%2F&lang_code=id&token=`, { headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, }).then((response) => {
    if(response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html)
        //arr = []
        $('.mb-4.flex.flex-col.px-4.text-center.font-semibold.text-white').each(function (){
   
   const link = $(this).find('a').attr('href')
datx = {
     error:'',
     link : link
}
hasil.push(datx) 
})
}
}).catch(err=>{
  var info = err.toString()
  var dat ={
    error: info
  }
  hasil.push(dat)
});

return hasil[0]

}

const fbdl = async(input) => {
const sekarang = new Date().getTime()
var url = encodeURIComponent(input)
var json = `id=${url}&locale=id`
var hasil = [];
await axios.post("https://getmyfb.com/process",json,{ headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8", 'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36'}, }).then((res) => {
  if(res.status === 200) {
    const html = res.data
    $ = cheerio.load(html)
    var hsl = []
    $(html).find('.results-list-item').each(function(i, elem) {
var link = $(this).find('a').attr('href')
      hsl.push(link)
    })

datx = {
     error:'',
     respon : hsl[1]
}
hasil.push(datx)
}

}).catch(err=>{
  var info = err.toString()
  var dat ={
    error: info
  }
  hasil.push(dat)
});

return hasil[0]

}

const tiktok = async (tiktoklink) => {
  const URI = encodeURIComponent(tiktoklink)
  const api = `https://pnggilajacn.my.id/api/download/tiktok?url=${URI}`
  const hasil = [];
  await axios.get(api).then(async (res) =>{
    //console.log(res.data)
  const dat = {
    judul: res.data.result.data.title,
    kreator: res.data.result.data.author.nickname,
    linkvideo: res.data.baseURL+res.data.result.data.play,
    linkaudio: res.data.baseURL+res.data.result.data.music,
    error:''
  }
    hasil.push(dat)
  }).catch(err => {
    const dat = {error: err.toString()}
    hasil.push(dat)
  });
  return hasil[0]
}

const instagram = async (iglink) => {
  const URI = encodeURIComponent(iglink)
  const api = `https://pnggilajacn.my.id/api/download/instagram3?url=${URI}`
  const hasil = [];
  await axios.get(api).then(async (res) =>{
    //console.log(res.data)
  const dat = {
    judul: '',
    kreator: '',
    linkvideo: res.data.result[0].url,
    linkaudio: '',
    thumbnail: res.data.result[0].thumbnail,
    error:''
  }
    hasil.push(dat)
  }).catch(err => {
    const dat = {error: err.toString()}
    hasil.push(dat)
  });
  return hasil[0]
}

const facebook = async (fblink) => {
  const URI = encodeURIComponent(fblink)
  const api = `https://pnggilajacn.my.id/api/download/facebook3?url=${URI}`
  const hasil = [];
  await axios.get(api).then(async (res) =>{
    //console.log(res.data)
  const dat = {
    linkvideo: res.data.result.urls[0].hd,
    error:''
  }
    const dat2 = {
    linkvideo: res.data.result.urls[0].sd,
    error:''
  }
    if(res.data.result.isHdAvailable==true){
      hasil.push(dat)
    }else{
    hasil.push(dat2)
    }
  }).catch(err => {
    const dat = {error: err.toString()}
    hasil.push(dat)
  });
  return hasil[0]
}



module.exports = {tkdl,igdl,fbdl,tiktok,instagram,facebook}