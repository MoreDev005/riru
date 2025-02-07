const fs = require('fs');
let dbchatpath = './database/dbchat.json'
try {
    fs.accessSync(dbspath);
} catch (err) {
    if (String(err).includes("no such file or directory")) {
        fs.writeFileSync(dbchatpath, JSON.stringify({}, null, 2));
    }
}
try{
global.dbchat = JSON.parse(fs.readFileSync(dbchatpath))
}catch(err){ global.dbchat = {}}
setInterval(() => {
    fs.writeFileSync(dbchatpath, JSON.stringify(dbchat, null, 2));
}, 60000);