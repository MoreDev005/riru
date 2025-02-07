const axios = require('axios');
const cheerio = require('cheerio');
//const fs = require('fs').promises; // Use promises for async file reading
const FormData = require('form-data'); // Import FormData

const uploadImage = async (buffer) => {
    const formData = new FormData();
   // const buffer = await fs.readFile(file); // Asynchronously read the file
    formData.append('files', buffer, { filename: 'temp.png'}); // Optionally provide filename

    const config = {
        headers: {
            ...formData.getHeaders(), // Automatically set headers for FormData
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
        }
    };

 const response = await axios.post('https://tempfile.me/upload', formData, config);
    
 let link = response.data.links||[]
 if(link.length == '0') return "./src/logo.jpg"
 let getdownload = await axios.get(link)
 $ = cheerio.load(getdownload.data)
 let linkdown = $('.button-container > a').attr('href')
 return linkdown
};

module.exports = {uploadImage};