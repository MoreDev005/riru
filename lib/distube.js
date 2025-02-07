const ytdl = require('ytdl-core');
const ytmp3 = async (url,baseUrl) => {
const regexYT = /(?<=[=\/&\%3D&])[a-zA-Z0-9_\-]{11}(?=[=\/&?#%\n\r]|$)/
try{
let videoID = regexYT.exec(url)[0]
let urlyt = `https://www.youtube.com/watch?v=${videoID}`
let info = await ytdl.getInfo(urlyt)
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
let audioUrl = audioFormats[0].url;
return {status: "sukses", author: "iwan", result: {link:audioUrl}}
}catch(e){
return {status: "error", author: "iwan", message: "Error, Mungkin Api Rusak (code 1)"}
}
}
module.exports = ytmp3;