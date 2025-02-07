const fs = require('fs');
const jsonnya = './database/automenu.json'

const msglist = async () => {
  const pathJson = `${jsonnya}`
  const readJson = fs.readFileSync(pathJson).toString()
  var objJson = JSON.parse(readJson);
  var hasil = Object.keys(objJson)

let result = "*DAFTAR KEY DAN RESPON*\n\n";

for (let i = 0; i < hasil.length; i++) {
  result +=`*📌 ${hasil[i]}* => *${objJson[`${hasil[i]}`].desc}*`;

  // Tambahkan enter/koma jika bukan elemen terakhir
  if (i < hasil.length - 1) {
    result += "\n";
  }
}
  return result
}

module.exports = {msglist}