const fs = require('fs');

let dbspath = './databio/dbsbio.json'
try {
    fs.accessSync(dbspath);
} catch (err) {
    if (String(err).includes("no such file or directory")) {
        fs.writeFileSync(dbspath, JSON.stringify({}, null, 2));
    }
}
try{
global.dbsbio = JSON.parse(fs.readFileSync(dbspath))
}catch(err){ global.dbsbio = {}}
setInterval(() => {
    fs.writeFileSync(dbspath, JSON.stringify(dbsbio, null, 2));
}, 900);