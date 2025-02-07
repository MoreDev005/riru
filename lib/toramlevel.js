const getLevel = async (params) => {
let level = await require("../database/toramlevel.json");
try{
let findlevel = level.filter(a=> params>a.min-1 && params<a.max)
return findlevel[0].desc
}catch(e){
let findlevel = level.filter(a=> params>a.min-1 && params==a.max)
let cek = findlevel[0] ? findlevel[0].desc : "Data Leveling Tidak ditemukan"
return cek
}
}

module.exports = getLevel;