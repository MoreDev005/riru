const axios = require('axios');
const cheerio = require('cheerio');

const level = async (q) =>{
let query = q.trim()
let data = await axios.get(`https://indo.coryn.club/leveling.php?lv=${query}&gap=9&bonusEXP=0&hard=1&night=1&ulti=1`)

let $ = cheerio.load(data.data)
let hasil = []
$('#content > .table-grid > div').each(async (i,el)=>{
let item = {
  batas: $(el).find('h3').text().trim(),
  level : $(el).find('.level-row > .level-col-1').text().trim().replace(/\n+/g,'\n\n').replace(/\s+/g,' '),
  momon : $(el).find('.level-row > .level-col-2').text().trim().replace(/\n+/g,'\n\n').replace(/\s+/g,' '),
  exp: $(el).find('.level-row > .level-col-3').text().trim().replace(/EXP/g,' EXP').replace(/\n+/g,'\n\n').replace(/\s+/g,' ').split('% ').join('%\n')
}
  hasil.push(item)
})

let kocak = `*LEVELING CHAR LV ${query}*\n\n`
for(let i of hasil){
if(i.batas == ''){
    kocak += i.level + '\n' + i.momon + '\n' + i.exp+'\n\n'
}else{
    kocak += `*${i.batas.toUpperCase()}*\n\n`
}
}
return kocak.trim()
}
module.exports = level;