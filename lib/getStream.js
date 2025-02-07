// downloadFileStreamAsBuffer.js
const axios = require('axios');
const { PassThrough } = require('stream');

/**
 * Mengunduh file dari URL dan mengembalikannya sebagai buffer.
 * 
 * @param {string} url - URL file yang ingin diunduh.
 * @returns {Promise<Buffer>} - Promise yang menyelesaikan dengan buffer data file.
 */
async function downloadFileStreamAsBuffer(url) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream', // Mengatur tipe respons ke stream
    });

    const buffer = [];
    const passThroughStream = new PassThrough();

    response.data.pipe(passThroughStream);

    return new Promise((resolve, reject) => {
      passThroughStream.on('data', chunk => buffer.push(chunk));
      passThroughStream.on('end', () => resolve(Buffer.concat(buffer)));
      passThroughStream.on('error', err => reject(err));
    });
  } catch (error) {
    console.error('Terjadi kesalahan saat mengunduh file:', error);
    throw error; // Melemparkan error jika terjadi masalah
  }
}

module.exports = downloadFileStreamAsBuffer;