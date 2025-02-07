const fs = require ('fs');
const { join, dirname } = require("path");
const { fileURLToPath } = require("url");

const dirr = "./database"
const file = {
    config: join(dirr, "config.json")
}

try {
    fs.accessSync(file.config);
} catch (err) {
    if (String(err).includes("no such file or directory")) {
        fs.writeFileSync(file.config, JSON.stringify({}, null, 2));
    }
}

try{
global.db = JSON.parse(fs.readFileSync(file.config))
} catch (err) {
    global.db = {
        botconfig:{},
        grupconfig:{}
    }
}

if (!db.botconfig) {db.botconfig = {}}
if (!db.grupconfig) {db.grupconfig = {}}
if (!db.botconfig.iklan) {db.botconfig.iklan = false}
if (!db.botconfig.authorName) {db.botconfig.authorName = "Iwan"}
if (!db.botconfig.isPublic) {db.botconfig.isPublic = false}
if (!db.botconfig.botName) {db.botconfig.botName = "Riru"}
if (!db.botconfig.officialgc) {db.botconfig.officialgc = "https://chat.whatsapp.com/C602aQfnWcB1vZGFIi6OAE"}
if (!db.botconfig.owner) {db.botconfig.owner = ["6285650875878@s.whatsapp.net"]}
if (!db.botconfig.api) {db.botconfig.api = "http://eu3.diresnode.com:3157"}
if (!db.botconfig.ytlocal) {db.botconfig.ytlocal = false}
if (!db.botconfig.autoclear) {db.botconfig.autoclear = false}
if(!db.grupconfig.antitoxic){
     db.grupconfig.antitoxic=[]
   }
if(!db.grupconfig.antilink){
     db.grupconfig.antilink=[]
   }
if(!db.grupconfig.hapuslink){
     db.grupconfig.hapuslink=[]
   }
if(!db.grupconfig.simi){
     db.grupconfig.simi=[]
   }


setInterval(() => {
    fs.writeFileSync(file.config, JSON.stringify(db, null, 2));
}, 900);