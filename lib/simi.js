const axios = require('axios');
let BodyForm = require('form-data')
const unicodeToChar = (text) => {
// Gunakan ekspresi reguler untuk mencari dan mengganti Unicode escape sequence
return text.replace(/\\u[\dA-Fa-f]{4}/g, function(match) {
// Ubah Unicode escape sequence menjadi karakter
return String.fromCharCode(parseInt(match.substr(2), 16));
});
}
const simi = async(input) => {
const sekarang = new Date().getTime()
var hasil = [];
//let parts = JSON.stringify([{"role":"user","content":"apa itu klorofil"}],null,2)
  let chat = encodeURI(input)
    var form = new BodyForm()
    form.append("text",`${chat}`)
    form.append("lc","id")

  await axios.post("https://simsimi.vn/web/simtalk",form,{ headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8", 'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36',"Cookie":"","Origin":"https://simsimi.vn","Referer":"https://simsimi.vn/"}, }).then((res) => {
    if(res.status === 200) { /*
      const resaxios = res?.data?.split('\\\"reply\\\":\\\"')[1].split('\\\",\\\"images\\\"')[0].replace(/\\\\n/g,"\n").replace('/\\\\\\/g','').replace(/\\\\/g,"\\")
      const airespon = unicodeToChar(resaxios).replace(/\\\\/g,'').replace(/\\\n/g,"\\n") */
      const airespon = res.data.success

  datx = {
       error:'',
       respon : airespon
  }
  hasil.push(datx)
  }

  }).catch(async (err1)=>{
    var info = err1.toString()
      var dat ={
        error: info
      }
      hasil.push(dat)

  });
return hasil[0]
}
module.exports = {simi}