const ytdl = require('ytdl-core');
const regexYT = /(?<=[=\/&\%3D&])[a-zA-Z0-9_\-]{11}(?=[=\/&?#%\n\r]|$)/

const mp3 = async (url) => {
let videoID = regexYT.exec(url)[0]
let urlyt = `https://www.youtube.com/watch?v=${videoID}`
const info = await ytdl.getInfo(urlyt);
const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
//console.log(audioFormats)
const filterbitrate = audioFormats.filter(item=>item.audioBitrate=="128")
//console.log(filterbitrate)
let alink = filterbitrate[0].url
return alink
}

const mp3v1 = async (link) => {
return `https://aemt.me/downloadAudio?URL=${link}&videoName=video`
}

const mp3v2 = async (url) => {
let vid = regexYT.exec(url)[0]
let fres = `https://aemt.me/${vid}.mpeg?filter=audioonly&quality=&contenttype=audio/mpeg`
return fres
}

const mp3v3 = async (url) => {
  try {
    const info = await ytdl.getInfo(url);
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
      //console.log(audioFormats)
    const filterbitrate = audioFormats.filter(item=>item.audioBitrate=="128")
    console.log(filterbitrate)
    const audioStream = ytdl.downloadFromInfo(info, { format: filterbitrate[0].itag//audioFormats[0].itag 
});

    return new Promise((resolve, reject) => {
      const chunks = [];
      audioStream.on('data', (chunk) => {
        chunks.push(chunk);
      });
      audioStream.on('end', () => {
        const audioBuffer = Buffer.concat(chunks);
        resolve(audioBuffer);
      });
      audioStream.on('error', (error) => {
        reject(error);
      });
    });
  } catch (error) {
    throw new Error(`Failed to download audio: ${error}`);
  }
}


const mp3v4 = async (url) => {
let vid = regexYT.exec(url)[0]
let url2 = `https://youtube.com/watch?v=${vid}`
let audioStream = ytdl(url, { filter: 'audioonly', //quality: 251 
});
return new Promise((resolve, reject) => {
      const chunks = [];
      audioStream.on('data', (chunk) => {
        chunks.push(chunk);
      });
      audioStream.on('end', () => {
        const audioBuffer = Buffer.concat(chunks);
        resolve(audioBuffer);
      });
      audioStream.on('error', (error) => {
        reject(error);
      }); 
    });
}


const mp4 = async (url) => {
let videoID = regexYT.exec(url)[0]
let urlyt = `https://www.youtube.com/watch?v=${videoID}`
const info = await ytdl.getInfo(urlyt);
const videoFormats = ytdl.filterFormats(info.formats, 'videoandaudio');
//console.log(videoFormats)
const filterresolusi = videoFormats.filter(item=>item.qualityLabel=='360p')
let vlink = filterresolusi[0].url
return vlink
}

const mp4v1 = async (link) => {
return `https://aemt.me/downloadVideo?URL=${link}&videoName=video`
}

module.exports = {mp3,mp3v1,mp3v2,mp3v3,mp3v4,mp4,mp4v1}