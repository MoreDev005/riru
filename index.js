const online = require('./online.js')
require('./lib/database.js');
require('./lib/dbsbio.js');
require('./lib/dbchat.js');
const cron = require('node-cron')
const fs = require('fs')
const makeWASocket = require("@whiskeysockets/baileys").default
const moment = require('moment-timezone')
const color = require('cli-color')
const qrcode = require("qrcode-terminal")
const pino = require('pino')
const PHONENUMBER_MCC = require('./lib/phonenumber-mcc.json')
const { delay, useMultiFileAuthState, BufferJSON, fetchLatestBaileysVersion, DisconnectReason, makeInMemoryStore, jidNormalizedUser, makeCacheableSignalKeyStore, downloadContentFromMessage,generateWAMessageFromContent,proto,getAggregateVotesInPollMessage,prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const Pino = require("pino")
const NodeCache = require("node-cache")
const chalk = require("chalk")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")

const pairingCode = true||process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

const store = makeInMemoryStore({
   logger: Pino().child({
      level: 'silent',
      stream: 'store'
   })
});
store.readFromFile('./sesistore.json')
// save every 10s
setInterval(() => {
store.writeToFile('./sesistore.json')
}, 10_000)

async function startBot() {
//--------------------------------------
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./sesixixy`)
const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
const groupCache = new NodeCache({stdTTL: 5 * 60, useClones: false})

const xixy = makeWASocket({
      logger: pino({ level: 'silent' }),
      printQRInTerminal: !pairingCode, 
      auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      version : version,
      browser: ['Ubuntu', 'Chrome', '20.0.04'],
      markOnlineOnConnect: true,
      generateHighQualityLinkPreview: true,
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, 
   })

store?.bind(xixy.ev)
//Login dengan Kode Pairing
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61

if (pairingCode && !xixy.authState.creds.registered) {
  let phoneNumber
phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Masukan Nomor WhatsApp Anda\nContoh: 6281234567890 : `)))

phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

//Tanya kembali jika salah memasukan Nomer
if(!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {

phoneNumber = await question(chalk.bgBlack(chalk.red("\nMasukan Nomor WhatsApp Anda dimulai dengan kode Negara Anda\nContoh: 6281234567890 : ")))

  if(!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
    console.log(chalk.black(chalk.bgRed("\nKesalahan Terulang Sistem di matikan")))
    process.exit(0)
  }
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
rl.close()
}

// Tanyakan kode Pairing

setTimeout(async () => {
let code = await xixy.requestPairingCode(phoneNumber)

code = code?.match(/.{1,4}/g)?.join("-") || code

console.log(chalk.black(chalk.bgGreen(`\nKode Pairing Whatsapp Anda : `)), chalk.black(chalk.bgGreen(code)),"\n")
}, 5000)

}
//------------------------------------
async function getMessage(key){
		if(store) {
			const msg = await store.loadMessage(key.remoteJid, key.id)
			return msg?.message || undefined
		}

		// only if store is present
		return proto.Message.fromObject({})
	}
async function getFullMessage(key){
 if(store) {
  const msg = await store.loadMessage(key.remoteJid, key.id)
  return msg || undefined
}
}
//Manajemen Koneksi
  xixy.ev.on("connection.update",async  (koneksi) => {
  const {connection, lastDisconnect} = koneksi

  if(connection == "open"){
  console.log(chalk.black(chalk.bgGreen(`Berhasil Tersambung ke Whatsapp`)))
}

  if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401){
  startBot()
  }
  })

//AUTO DELETE CHAT
cron.schedule('0 * * * *',async()=>{
if(db.botconfig.autoclear){
console.log("Pembersihan Chat di Mulai");
let historychat = dbchat
let arrchat = Object.keys(historychat)
for(let chatkey of arrchat){
await xixy.chatModify({
  delete: true,
  lastMessages: [{ key: historychat[chatkey].key, messageTimestamp:historychat[chatkey].timestamp }]
},chatkey)
await delay(3000)
}
console.log("Pembersihan Chat Selesai");
dbchat = {}
}
}
);

xixy.ev.on('creds.update', saveCreds);
xixy.ev.on("messages.upsert",  async (m) => {
const idgrup = m?.messages[0]?.key?.remoteJid
const participant = m?.messages[0]?.key?.participant
if (m?.messages[0]?.key && m?.messages[0]?.key?.remoteJid === 'status@broadcast') return;
if (m?.messages[0]?.message?.pollUpdateMessage)return;
const {fiturauto} = require('./fiturauto.js');
  await fiturauto(xixy, m, getFullMessage);
//DBCHAT LOG
if(m?.messages[0]?.message){
dbchat[idgrup] = {
key:m.messages[0].key,
timestamp:m.messages[0].messageTimestamp
}
}
//END of DBCHAT
});

xixy.ev.on("messages.update",async (mes)=>{
//console.log(JSON.stringify(mes,null,1))
const key = mes[0]?.key
const updata = mes[0]?.update
//console.log("Respon",key)
const pollup = mes[0]?.update?.pollUpdates
const id = mes[0]?.key?.remoteJid
const getMsg = await getMessage(key)
//console.log("Store",getMsg)
if(pollup){
const resdata = await getAggregateVotesInPollMessage({
 message:getMsg,
 pollUpdates:pollup
  })
//console.log(JSON.stringify(resdata,null,1))
  const respoll = resdata?.filter(items=>items.voters.length!==0)[0]?.name||""
  const userpoll = resdata?.filter(items=>items.voters.length!==0)[0]?.voters[0]||""
  //console.log(respoll)
let mvote = {
 "messages": [
  {
   "key" : mes[0].key,
   "messageTimestamp": mes[0].update.pollUpdates[0].senderTimestampMs,
   "pushName": "VoteMode",
   "broadcast": false,
   "message": {
    "conversation": respoll
   }
  }
 ],
 "type": "notify"
}
xixy.ev.emit('messages.upsert', mvote);
}
  
});

xixy.ev.on('groups.update', async ([event]) => {
const metadata = await xixy.groupMetadata(event.id)
groupCache.set(event.id, metadata)
})

xixy.ev.on('group-participants.update', async (gcm) => {
const metadata = await xixy.groupMetadata(gcm.id)
groupCache.set(gcm.id, metadata)
if(gcm.action=="add"){
let banchat = JSON.parse(fs.readFileSync('./database/banchat.json'));
let isBanchat = banchat.includes(gcm.id)
if(isBanchat)return;
const ngrup = metadata.subject
const idtarget = gcm?.participants
const idtext = idtarget.map(user => "@"+user.replace("@s.whatsapp.net","")).join(" ")
const tagvit = idtarget
const welcomecard = require('./canva/canvas.js')
let getpp = async (user) => {
let link = await xixy.profilePictureUrl(user,'image').catch(err => "https://telegra.ph/file/40f2cf0afcc172dbca93c.jpg")
  return link
}
let intropath = `./cachegrup/${gcm.id}_welcome.json`
let ppnya = await getpp(tagvit[0])
if(fs.existsSync(intropath)){
let intronya = await fs.readFileSync(intropath).toString()
let moded = intronya.replace('@user',idtext).replace('@grup',`*${ngrup}*`)
let wlcpp = await welcomecard(`${tagvit[0].split('@')[0]}`,'Selamat Bergabung di',ngrup,ppnya,)
await xixy.sendMessage(gcm.id,{image:wlcpp,caption:moded,mentions: tagvit})
}else{
await xixy.sendMessage(gcm.id,{image:{url:ppnya},caption:`Welcome ${idtext}\nSelamat datang di grup\n*${ngrup}*\nSemoga Betah`,mentions: tagvit})
}
}else if(gcm?.action=="remove"){
let banchat = JSON.parse(fs.readFileSync('./database/banchat.json'));
let isBanchat = banchat.includes(gcm.id)
if(isBanchat)return;
const idtarget = gcm?.participants
const idtext = idtarget.map(user => "@"+user.replace("@s.whatsapp.net","")).join(" ")
const tagvit = idtarget
await xixy.sendMessage(gcm.id,{text:`Member ${idtext}\nTelah keluar Grup`,mentions: tagvit})
}
})

cron.schedule('0 0,1,2,4,6,9,12,13,14,22,23 * * *',async()=>{
if(db.botconfig.iklan==false)return;
let jsonpost = JSON.parse(fs.readFileSync("./mediapost/slidepost.json").toString())
let arrpost = Object.keys(jsonpost)
let arrcard = []
for(let cardpost of arrpost){
if(jsonpost[cardpost].type=='image'){
let eek = {
"header": proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await fs.readFileSync(jsonpost[cardpost].image)}, { upload: xixy.waUploadToServer})),
title: 'Riru Ads',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
"body": {
"text": `${jsonpost[cardpost].text}`
},
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Bukti Testimoni","url":"https://whatsapp.com/channel/0029VaVuNFoJuyAAzRGEf043","merchant_url":"https://www.google.co.id"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Chat Owner","url":"https://wa.me/6285650875878","merchant_url":"https://www.google.co.id"}`
},
]
})
   }
arrcard.push(eek)
}else{
let eek = {
"header": proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ video : await fs.readFileSync(jsonpost[cardpost].video)}, { upload: xixy.waUploadToServer})),
title: 'Riru Ads',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
"body": {
"text": `${jsonpost[cardpost].text}`
},
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Bukti Testimoni","url":"https://whatsapp.com/channel/0029VaVuNFoJuyAAzRGEf043","merchant_url":"https://www.google.co.id"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Chat Owner","url":"https://wa.me/6285650875878","merchant_url":"https://www.google.co.id"}`
},
]
})
   }
arrcard.push(eek)
}
    await delay(2000)
  }
  
console.log('JPM Berjalan',new Date())

let idBot = `${xixy.user.id.split(":")[0]}@s.whatsapp.net`
let allfetch = await xixy.groupFetchAllParticipating();
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let filcom = entrygc.filter(entrygc=>entrygc.isCommunity==false)
let filcom2 = filcom.filter(filcom=>filcom.isCommunityAnnounce==false)
let grupterbuka = filcom2.filter(filcom2=>filcom2.announce==false)
let opened = grupterbuka.map(v=>v.id)
let arrtertutup = filcom2.filter(filcom2=>filcom2.announce==true)
const akuadmin = (anunya) =>{
let paraAdmin = anunya.filter(v => v.admin !== null).map(v => v.id)
let akulahAdmin = paraAdmin.includes(idBot)
return akulahAdmin
}
let gruptertutup = arrtertutup.filter(ar=> (akuadmin(ar.participants))==true)
let closed = gruptertutup.map(v=>v.id)
let finalres2 = opened.concat(closed)
//let fads = finalres2.filter(element=>!db.catatan.adsoff.includes(element))
//let fullgckeys = Object.keys(allfetch)
for(let gckey of finalres2){
try{
let ctamsg = generateWAMessageFromContent(gckey, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body:{text:"*HAI TES CARD IKLAN*"},
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
        "cards": arrcard,
        "messageVersion": 1
       }
    )
})
}
}
}, {});
await xixy.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})
}catch (e){console.log(e)}
 await delay(10000)
}
}
)

//Stater Jadibot
const {startjadiBot} = require("./jadibot.js")
let fbot = fs.readFileSync('./jadibot.json').toString()
let arrbot = JSON.parse(fbot)
for(let bot of arrbot){
 startjadiBot(xixy,bot)
}

}
startBot()

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("Socket connection timeout")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})