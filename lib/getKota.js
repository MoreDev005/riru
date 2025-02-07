const getKota = async (q) =>{
  let query = q.toLowerCase()
  let data = require('../database/kodearea.json');
  let hasil = data.filter(a => a.kota.toLowerCase().includes(query))
if(hasil.length == 0){
  return hasil
}else if(hasil.length > 15){
  hasil.length = 15
  return hasil
}else{
  return hasil
}
}
module.exports = getKota;