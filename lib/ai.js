const axios = require('axios');
const unicodeToChar = (text) => {
// Gunakan ekspresi reguler untuk mencari dan mengganti Unicode escape sequence
return text.replace(/\\u[\dA-Fa-f]{4}/g, function(match) {
// Ubah Unicode escape sequence menjadi karakter
return String.fromCharCode(parseInt(match.substr(2), 16));
});
}

const aichat = async (input) =>{
  try{
  let url = encodeURIComponent(input)
  let res = await fetch(`${db.botconfig.api}/ai/id?data=${url}`).then(res=>res.text())
  return {error:'',respon:res}
}catch(e){
  return {error:e.toString()}
}
}

module.exports = {aichat}