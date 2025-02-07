const fs = require('fs')
const {delArrSave} = require('./lib/arrfunction.js')
const makeWASocket = require("@whiskeysockets/baileys").default
const moment = require('moment-timezone')
const color = require('cli-color')
const qrcode = require("qrcode-terminal")
const pino = require('pino')
const { delay, useMultiFileAuthState, BufferJSON, fetchLatestBaileysVersion, PHONENUMBER_MCC, DisconnectReason, makeInMemoryStore, jidNormalizedUser, makeCacheableSignalKeyStore, downloadContentFromMessage,generateWAMessageFromContent,proto,getAggregateVotesInPollMessage } = require("@whiskeysockets/baileys")
const Pino = require("pino")
const NodeCache = require("node-cache")
const chalk = require("chalk")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const deleteFolderRecursive = function (pathsesi) {
  if (fs.existsSync(pathsesi)) {
    fs.readdirSync(pathsesi).forEach(function (file, index) {
      const curPath = pathsesi + '/' + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(pathsesi);
  }
}
const pairingCode = true
//const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
//const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const store = makeInMemoryStore({
   logger: Pino().child({
      level: 'silent',
      stream: 'store'
   })
});

const startjadiBot = async(xixy,client) => {
let clientbot = client
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./jadibot/${clientbot}`)
const msgRetryCounterCache = new NodeCache()

const jadibot = makeWASocket({
      logger: pino({ level: 'silent' }),
      printQRInTerminal: !pairingCode, 
      auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      version : [2, 2450,21],
      browser: [ "Ubuntu", "Chrome", "20.0.04" ],
      markOnlineOnConnect: true,
      generateHighQualityLinkPreview: true,
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)
         return msg?.message || ""
      },
      msgRetryCounterCache,
      defaultQueryTimeoutMs: undefined, 
   })
store?.bind(jadibot.ev);
//Login dengan Kode Pairing
if (pairingCode && !jadibot.authState.creds.registered) {
  let phoneNumber
phoneNumber = clientbot
// Tanyakan kode Pairing
setTimeout(async () => {
let code = await jadibot.requestPairingCode(phoneNumber)
code = code?.match(/.{1,4}/g)?.join("") || code
let ctamsg = generateWAMessageFromContent(`${clientbot}@s.whatsapp.net`, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: `Kode Pairing Whatsapp Anda :\n*${code}*\nTarget : ${clientbot}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: 'Pendaftaran Jadibot',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name":"cta_copy",
"buttonParamsJson":`{"display_text":"Salin Kode","copy_code": ${code}}`
}
],
})
})
}
}
}, {});
await xixy.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})
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
//Manajemen Koneksi
jadibot.ev.on("connection.update",async  (koneksi) => {
  const {connection, lastDisconnect} = koneksi
 console.log(`${clientbot} =>`,JSON.stringify(koneksi,null,1))
 const status = lastDisconnect?.error?.output?.statusCode
if(connection=="close"){
    const reason = Object.entries(DisconnectReason).find(i => i[1] === status)?.[0] || 'Tidak diketahui'
//console.log(color.red(`${clientbot} Koneksi Terputus, status: ${status} - ${reason}`))
}

if(status==408 && lastDisconnect?.error?.output?.payload?.message=="QR refs attempts ended"){
deleteFolderRecursive(`./jadibot/${clientbot}`)
 delArrSave('./jadibot.json',client)
  await delay(5000)
  process.exit()
 }else
if(status==405 && lastDisconnect?.error?.data?.reason == '405' && lastDisconnect?.error?.output?.payload?.error=="Method Not Allowed" && lastDisconnect?.error?.output?.payload?.message=="Connection Failure" && lastDisconnect?.error.isServer==false){
deleteFolderRecursive(`./jadibot/${clientbot}`)
 delArrSave('./jadibot.json',client)
  await delay(5000)
  process.exit()
 }else if(status==403 && lastDisconnect?.error?.output?.payload?.error=="Forbidden"){
deleteFolderRecursive(`./jadibot/${clientbot}`)
 delArrSave('./jadibot.json',client)
  await delay(5000)
  process.exit()
 }else if(status==401/*||status==405*/){
deleteFolderRecursive(`./jadibot/${clientbot}`)
 delArrSave('./jadibot.json',client)
   await delay(5000)
  process.exit()
 }else if(status=="440"){
     await delay(5000)
    process.exit()
}else if(connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401){
    await delay(5000)
  startjadiBot(xixy,clientbot)
  }
 if(connection == "open"){ console.log(chalk.black(chalk.bgGreen(`${clientbot} Tersambung ke Whatsapp`)))
}
  })

jadibot.ev.on('creds.update', saveCreds)
jadibot.ev.on("messages.upsert",  async (m) => {
  const {fiturauto} = require('./fiturautov2.js');
  await fiturauto(jadibot, m)
  
})

jadibot.ev.on("messages.update",async (mes)=>{
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
  const respoll = resdata?.filter(items=>items.voters.length!==0)[0]?.name||""
const {playmusik} = require("./playmusikv1.js")
await playmusik(jadibot,respoll,id,key)
}
  
});
  
jadibot.ev.on('group-participants.update', async (gcm) => {
if(gcm.action=="add"){
const metadata = await jadibot.groupMetadata(gcm.id)
const ngrup = metadata.subject
const idtarget = gcm?.participants
const idtext = idtarget.map(user => "@"+user.replace("@s.whatsapp.net","")).join(" ")
const tagvit = idtarget
await jadibot.sendMessage(gcm.id,{text:`Welcome ${idtext}\nSelamat datang di grup\n*${ngrup}*\nSemoga Betah`,mentions: tagvit})
}else if(gcm?.action=="remove"){
const idtarget = gcm?.participants
const idtext = idtarget.map(user => "@"+user.replace("@s.whatsapp.net","")).join(" ")
const tagvit = idtarget
await jadibot.sendMessage(gcm.id,{text:`Selamat Jalan ${idtext}\nSemoga tenang disana`,mentions: tagvit})
}
})
}
module.exports = {startjadiBot}

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("Socket connection timeout")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})