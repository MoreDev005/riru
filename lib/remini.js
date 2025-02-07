const FormData = require("form-data");
async function remini(filebuffer, efek) {
  return new Promise(async (resolve, reject) => {
    let fitur = ['enhance', "recolor", "dehaze"];
    if (fitur.includes(efek)) {
      efek = efek;
    } else {
      efek = fitur[0];
    }
    let dataform = new FormData();
    let link = "https://inferenceengine.vyro.ai/" + efek;
    dataform.append("model_version", 1, {
      'Content-Transfer-Encoding': "binary",
      'contentType': "multipart/form-data; charset=uttf-8"
    });
    dataform.append('image', Buffer.from(filebuffer), {
      'filename': "enhance_image_body.jpg",
      'contentType': "image/jpeg"
    });
    dataform.submit({
      'url': link,
      'host': "inferenceengine.vyro.ai",
      'path': '/' + efek,
      'protocol': "https:",
      'headers': {
        'User-Agent': 'okhttp/4.9.3',
        'Connection': "Keep-Alive",
        'Accept-Encoding': "gzip"
      }
    }, function (err, res) {
      if (err) {
        reject();
      }
      let buff = [];
      res.on('data', function (dat, errdat) {
        buff.push(dat);
      }).on("end", () => {
        resolve(Buffer.concat(buff));
      });
      res.on("error", error => {
        reject();
      });
    });
  });
}
module.exports.remini = remini;