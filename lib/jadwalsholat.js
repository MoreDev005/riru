const axios = require("axios");
const cheerio = require("cheerio");

async function getJadwalSholat(kode){
try{
let res = await axios.get(`https://jadwalsholat.org/adzan/ajax/next/ajax.daily.php?id=${kode}`)
return {status:'success', author: 'iwan', result: res.data.schedules}
}catch(e){
return {status: 'error', author : 'iwan', message: e.toString()}
}
}

module.exports = getJadwalSholat;