const axios = require('axios');
const unicodeToChar = (text) => {
// Gunakan ekspresi reguler untuk mencari dan mengganti Unicode escape sequence
return text.replace(/\\u[\dA-Fa-f]{4}/g, function(match) {
// Ubah Unicode escape sequence menjadi karakter
return String.fromCharCode(parseInt(match.substr(2), 16));
});
}
const dpt = async(input) => {
const sekarang = new Date().getTime()
var hasil = [];
    var json = {"query":"\n                {\n                  findNikSidalih (\n                      nik:\"6101040505960006\",\n                      wilayah_id:0,\n                      token:\"jhVjə4h03AFcWeA_mp6imf4CoʍsNglC_QZm-sɴ5JJHqYoJ_o32_y-3Cɢ_538to9BXgTdiGrfk-iYaCLPMGwZeUr8BpTL9c80sUJm665R3_TsCVropLʌ1N0b5TZvvWVqkyHzD1JeGePS0QBbifclF6Evy3PoADvt8ZPV3XV9euNAjcuSIsI386ZUYNkJm0876VSGdVKua_OPLyikakwwkDfN81iWsA2UpkK3anOIyBPqLttb_3CYvautIRQmaBcayUIOjjNQbprltjc8cBq0kQ2HipK8OYDrdRdebKDrREvMW8GL2lo3N5Q120Gf6P2Sm0to8fFokI0HLEGjvu20W1xke626hKEB5c48aPmZdpt20kaz2Itut8B_pildXbMNAq4yZEeYUNbtFiMykZ4nHhK6UE6HUVcma9QnzAxL-jWQ3Cz91IiMNwVbnBRqoZIo9rfcMcX2s4nYqwAEDhE-m0gQM0qluEvr4G6B99sNPzBgf-k5oyAhKswzPhXiM_N0ypE5f6yMl7b7ytxLw_3_rUaqmJYmwbWtVqTeEnwvOkLnJ5sVSQN-4_XW5AiwAi7kCtwFTuRsNQPMxrDNFDoNUqrD_gV8ga8ynsjlSagnOBxGtUtpNdFO559du4uIEa70MivUEIo5xgZw9h6!oZ\",\n                    ){\n                    nama,\n                    nik,\n                    nkk,\n                    provinsi,\n                    kabupaten,\n                    kecamatan,\n                    kelurahan,\n                    tps,\n                    alamat,\n                    lat,\n                    lon,\n                    metode,\n                    lhp {\n                          nama,\n                          nik,\n                          nkk,\n                          kecamatan,\n                          kelurahan,\n                          tps,\n                          id,\n                          flag,\n                          source,\n                          alamat,\n                          lat,\n                          lon,\n                          metode\n                    }\n                  }\n                }\n              "}

  await axios.post("https://cekdptonline.kpu.go.id/v2",json,{ headers: { "Content-type": "application/json; charset=UTF-8", 'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36',"Cookie":"_ga=GA1.3.842064175.1706344168; _gid=GA1.3.1150948619.1706344168; acw_tc=9581d30817063519441796708e5c201f6d784917d6056905703452cb5758c2","Host":"cekdptonline.kpu.go.id","Origin":"https://cekdptonline.kpu.go.id","Referer":"https://cekdptonline.kpu.go.id"}, }).then((res) => {
    if(res.status === 200) { /*
      const resaxios = res?.data?.split('\\\"reply\\\":\\\"')[1].split('\\\",\\\"images\\\"')[0].replace(/\\\\n/g,"\n").replace('/\\\\\\/g','').replace(/\\\\/g,"\\")
      const airespon = unicodeToChar(resaxios).replace(/\\\\/g,'').replace(/\\\n/g,"\\n") */
      const airespon = JSON.Stringify(res.data,null,2)
console.log(airespon);
  datx = {
       error:'',
       respon : "[Respon Data]\n\n"+airespon
  }
  hasil.push(airespon)
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
module.exports = {dpt}