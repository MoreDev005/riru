const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs')

const cariitem = async (q) => {
var arr = []
await axios.get(`https://toram-id.com/search?q=${q}&type=name_only`).then((response) => {
    if(response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html)
        //arr = []
        $('.col-md-8 > .card > .card-body').each(function (){
   const judul = $(this).find('.h6').find('.text-primary').text().trim()
   const kategori = $(this).find('div > img').attr('alt')
   const link = $(this).find('.h6').find('a').attr('href')
   const status = $(this).find('.row').find('dl').text().trim() ? `\n${$(this).find('.row').find('dl').text().trim()}` : '';
  const drop = $(this).find('details').find('.my-2').text().trim() ? `\n${$(this).find('details').find('.my-2').text().trim()}` : '';
 const monsterinfo = $(this).find('.col-md-9').text().trim() ? `\n${$(this).find('.col-md-9').text().trim()}` : '';
dat = {
     Judul : judul,
     Link : `https://toram-id.com${link}`,
     Kategori : kategori,
     Status : status,
     Dropfrom : drop.replace(/\n+/g, '\n'),
     monsterinfo:monsterinfo.replace(/\n+/g, '\n')
}
if(judul !== ''){
arr.push(dat) 
}
})
}
}).catch(err => {})
let item = '*PENCARIAN ITEM & MONSTER*\n\n'
for(fill of arr){
  let txi =`Nama Item: ${fill.Judul}\nKategori: ${fill.Kategori}\nLink: ${fill.Link}\nStatus:${fill.Status}\nDrop Dari:${fill.Dropfrom}\nInfo Status Monster:${fill.monsterinfo}`
  item += txi + '\n\n'
}
return arr.length > 0 ? item.slice(0,-2) : '*Tidak ada item yang ditemukan*'
}

module.exports = {cariitem}