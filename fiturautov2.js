const fs = require('fs');
const format = require('util').format;
const path = require('path');
const deleterfolder = function (pathsesi) {
if(fs.existsSync(pathsesi)){
fs.readdirSync(pathsesi).forEach(function (file,index){
const curPath = pathsesi + '/' + file;
if(fs.lstatSync(curPath).isDirectory()){
//Hapus Folder jika bukan file
deleterfolder(curPath);
} else {
//hapus file
fs.unlinkSync(curPath);
}
});
fs.rmdirSync(pathsesi);
}
}
//const {removebg} = require('./lib/removebg.js')
const {carinime} = require('./lib/carinime.js')
const axios = require('axios');
const sharp = require('sharp');
const webpexif= require("node-webpmux");
const { exec } = require('child_process');
require("./lib/database.js")
const { youtubedl, savefrom, tiktokdl } = require('@bochilteam/scraper-sosmed');
const {ytmp4} = require('./lib/ytmp4.js');
const {ytmp3} = require('./lib/ytmp3.js');
const {getBuffer,fetchJson} = require('./lib/myfunc.js')
const {yta} = require('./lib/yta.js')
const ytsr = require('./alternative-ytsr');
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const {GOOGLE_IMG_SCRAP} = require('google-img-scrap');
const {addkeyDBarr,addkeyDB,delkeyDB,getvalueDB} = require('./lib/functionDB.js');
let banneduser = JSON.parse(fs.readFileSync('./database/banneduser.json'))
const {
   default: makeWASocket,
   useMultiFileAuthState,
   DisconnectReason,
   makeInMemoryStore, 
   msgRetryCounterMap,
   proto,
   downloadMediaMessage,
   downloadContentFromMessage,
   makeCacheableSignalKeyStore,
   MessageType,
   Mimetype,
   getContentType,
   generateWAMessage,
   generateWAMessageFromContent,
   generateForwardMessageContent,
   generateThumbnail,
   extractImageThumb,
   prepareWAMessageMedia,
   WAMessageProto,
   delay,
   jidDecode,
  getAggregateVotesInPollMessage
} = require("@whiskeysockets/baileys");
const {cekToxic} = require('./lib/antitoxic.js');

//-----------
const fiturauto = async(jadibot,m) => {
const {messages,type} = m
//console.log(messages[0]?.message)
var botno = jadibot?.user?.id.split(':')[0]
let botName = db.botconfig.botName
const pesan = messages[0].message?.conversation||messages[0].message?.extendedTextMessage?.text||messages[0]?.message?.imageMessage?.caption||messages[0]?.message?.videoMessage?.caption||messages[0]?.message?.viewOnceMessageV2?.message?.imageMessage?.caption||messages[0]?.message?.viewOnceMessageV2?.message?.videoMessage?.caption||messages[0]?.message?.templateButtonReplyMessage?.selectedId;
const id = messages[0]?.key?.remoteJid;
const fromMe = messages[0]?.key?.fromMe;
const isGroup = id?.endsWith('@g.us')||false
const isPrivatChat = id?.endsWith('@s.whatsapp.net')||false
const sender = isGroup ? messages[0]?.key?.participant : isPrivatChat ? id :''
const pushName = messages[0]?.pushName||"Tanpa Nama"
const isImage = messages[0]?.message?.imageMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage||messages[0]?.message?.viewOnceMessageV2?.message?.imageMessage||messages[0]?.message?.viewOnceMessageV2?.message?.videoMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.imageMessage||false
const isVideo = messages[0]?.message?.videoMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage||messages[0]?.message?.viewOnceMessageV2?.message?.videoMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.videoMessage||false
const isAudio = messages[0]?.message?.audioMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.audioMessage||messages[0]?.message?.viewOnceMessageV2?.message?.audioMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage||false
const isStiker = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage||false
const isImageQuoted = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage||false
const isVideoQuoted = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage||false
const viewoncequoted = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.imageMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.videoMessage
const oncetype = viewoncequoted?.mimetype?.split('/')[0]
const quotedSender = messages[0]?.message?.extendedTextMessage?.contextInfo?.participant
const mentionedJid = messages[0]?.message?.extendedTextMessage?.contextInfo?.mentionedJid
const cmd = pesan?.split(' ')[0]
const argsdat = q = pesan?.slice(cmd.length+1)||false
//----------Area Const V2----------
const groupMetadata = isGroup ? await jadibot.groupMetadata(id).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata?.subject : ''
const participants = isGroup ? await groupMetadata?.participants : ''
const groupAdmins = isGroup ? await participants?.filter(v => v.admin !== null).map(v => v.id) : ''
const isBotAdmins = isGroup ? groupAdmins?.includes(botno+'@s.whatsapp.net') : false
const isAdmins = isGroup ? groupAdmins?.includes(sender) : false
const isOwnerBot = isGroup ? db.botconfig.owner.includes(sender) : isPrivatChat ? db.botconfig.owner.includes(id) : false
const groupOwner = isGroup ? groupMetadata?.owner : ''

//Area Fungsi
//Fungsi List Member
const member = async (idgrup) => {
const groupMetadata = await jadibot.groupMetadata(id).catch(e => {})
  const participants = await groupMetadata.participants||[]
  return participants
}

//Fungsi List Admin
const admin = async (idgrup) => {
const groupMetadata = await jadibot.groupMetadata(id).catch(e => {})
  const participants = await groupMetadata.participants||[]
  const groupAdmins = await participants.filter(v => v.admin !== null).map(v => v.id)||[]
  return groupAdmins
}
  
//---------------------

const officialreply = async (teks,judul,target) => {
await jadibot.sendMessage(target||id,
{ text: teks,
contextInfo:{
//mentionedJid:[messages[0].key.participant],
//forwardingScore: 9999999,
//isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": judul||"RIRU MENU", 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync(`./media/logojadibot.jpg`),
"mediaUrl": `${db.botconfig.officialgc}`,
"sourceUrl": `${db.botconfig.officialgc}`
}}},
{ quoted: messages[0]})
}

const officialreply2 = async (teks,judul,target) => {
await jadibot.sendMessage(id,
{ text: teks,
contextInfo:{
//mentionedJid:[sender],
//forwardingScore: 9999999,
//isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": judul||"RIRU",
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./media/logojadibot.jpg`),
"sourceUrl": `${db.botconfig.officialgc}`}}},
{ quoted: messages[0]})
}

const notichat = async (text) =>{
  await jadibot.relayMessage(id, { scheduledCallCreationMessage: { callType: "2", scheduledTimestampMs: 1500, title: `\n${text}\n\n`}},{ messageId: messages[0].key.id  })
}
const reply = async (teks) =>{
await jadibot.sendMessage(id, {text: teks}, {quoted: messages[0]})
}
jadibot.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return jadibot.sendMessage(jid, { poll: { name, values, selectableCount }}) }

//---------------------
const totalpengguna = async () => {
let membersize = 0
let allfetch = await jadibot.groupFetchAllParticipating();
//let fullgckeys = Object.keys(allfetch)
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
for(let gckey of entrygc){
const size = gckey.size
membersize = membersize + size
}
return membersize
}

if(!isGroup){
  await jadibot.readMessages([messages[0].key])
}
  
const loading = async () => {
    var hawemod = [
      "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
      "《 ████▒▒▒▒▒▒▒▒》30%",
      "《 ███████▒▒▒▒▒》50%",
      "《 ██████████▒▒》80%",
      "《 ████████████》100%",
      "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
    ]
    let { key } = await jadibot.sendMessage(id, {text:"《 ▒▒▒▒▒▒▒▒▒▒▒▒》0%"})//Pengalih isu

    for (let i = 0; i < hawemod.length; i++) {
    await delay(1000)
    await jadibot.sendMessage(id, {text: hawemod[i], edit: key });//PESAN LEPAS
    }
    }
//-///START FILTER ID UNTUK VIP///-//
const {sisaHari,cekWaktu,cekTanggal,statusVip,haritimestamp,isVIP} = require('./lib/functionVIPTime.js');
const {addkeyDB,delkeyDB,getvalueDB} = require('./lib/functionDB.js');
const VIP = true //await isVIP(id)
let command = cmd?.toLowerCase();
if(VIP||isOwnerBot){
//-///AREA FITUR///-//
let antitoxic = db.grupconfig.antitoxic.includes(id)
let antilink = db.grupconfig.antilink.includes(id)
let hapuslink = db.grupconfig.hapuslink.includes(id)
let onsimi = db.grupconfig.simi.includes(sender)

//Antitoxic Run
if(pesan && !fromMe){
if(antitoxic){
if(cekToxic(pesan)){
const reaksi = {
    react: {
        text: "❌",
        key: messages[0].key
    }}
  await jadibot.sendMessage(id,reaksi)
if(isBotAdmins){
setTimeout(async function(){
await jadibot.sendMessage(id, { delete: messages[0].key })
}, 1000);
}
}
}
}
//Antilink
if(pesan?.includes("https://chat.whatsapp.com")){
if(isGroup && !fromMe){
if(antilink){
if(!isBotAdmins){
db.grupconfig.antilink = db.grupconfig.antilink.filter(item => item !== id);
} else
if(isAdmins){
await jadibot.sendMessage(id,{text:`Admin Bebas ya kirim Link😁`})
} else
if(isBotAdmins && !isAdmins){
const templateMessage = {
    text: `Hai @${sender.replace('@s.whatsapp.net',"")}\nSerpertinya  Anda berupaya mengirim Link Tautan, Mohon maaf ~tytyd~ Anda akan ${botName} tendang dari grup`,
    mentions: [sender.toString()]
}
  await jadibot.sendMessage(id,templateMessage,{quoted: messages[0]})
setTimeout(async function(){
  await jadibot.groupParticipantsUpdate(id,[sender.toString()],"remove")
  await jadibot.sendMessage(id, { delete: messages[0].key })
}, 3000);

}
}else
if(hapuslink){
if(!isBotAdmins){
db.grupconfig.hapuslink=db.grupconfig.hapuslink.filter(item => item !== id);
} else
if(isAdmins){
await jadibot.sendMessage(id,{text:`Admin Bebas ya kirim Link😁`})
} else
if(isBotAdmins && !isAdmins){
const templateMessage = {
    text: `*Hapus Link Aktif*\n\nHai @${sender.replace('@s.whatsapp.net',"")}\nLink Tautan Terdeteksi,Mohon maaf pesan kaka akan ${botName} Hapus`,
    mentions: [sender.toString()]
}
  await jadibot.sendMessage(id,templateMessage,{quoted: messages[0]})
  const reaksi = {
    react: {
        text: "❌",
        key: messages[0].key
    }}
  await jadibot.sendMessage(id,reaksi)
setTimeout(async function(){
  await jadibot.sendMessage(id, { delete: messages[0].key })
}, 2000);

}
}
}
}
const isBan = banneduser.includes(sender)
if(cmd && isBan)return //jadibot.sendMessage(id,{react: {text: "⛔",key: messages[0].key}});
switch(command){
case 'listjadibot':{
let userjadibot = JSON.parse(fs.readFileSync('./jadibot.json'))
let lsbot = '*LIST JADIBOT*\n\n'
for(let bots of userjadibot){
  lsbot += `📌${bots}\n`
}
lsbot +=`\n*${botName} 20224*`
await reply(lsbot)
}
break;

case 'ban': {
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
let ojid = quotedSender||mentionedJid ? mentionedJid[0]:false
if(!ojid)return reply("Format salah,silahkan tag target/reply pesan target")
let cekbanned = banneduser.includes(ojid)
if(cekbanned) return reply('User ini sudah di Terbanned')
banneduser.push(ojid)
fs.writeFileSync('./database/banneduser.json', JSON.stringify(banneduser))
await reply('Sukses Membanned User...User dilarang menggunakan Bot')
}
break;
case 'delban': {
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
let ojid = quotedSender||mentionedJid ? mentionedJid[0]:false
if(!ojid)return reply("Format salah,silahkan tag target/reply pesan target")
let cekbanned = banneduser.includes(ojid)
if(!cekbanned) return reply('User ini tidak Terbanned')
let ubc = banneduser.indexOf(ojid)
banneduser.splice(ubc,1)
await fs.writeFileSync('./database/banneduser.json', JSON.stringify(banneduser))
await reply('Sukses...User dapat kembali menggunakan Bot')
}
break;
case 'addowner': {
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
let ojid = quotedSender||mentionedJid ? mentionedJid[0]:false 
if(!ojid)return reply("Format salah,silahkan tag target/reply pesan target")
let cekowner = db.botconfig.owner.includes(ojid)
if(cekowner) return reply('User ini sudah bagian dari Owner')
db.botconfig.owner.push(quotedSender)
await reply('Sukses...User telah menjadi OwnerBot')
}
break;
case 'delowner':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
let ojid = quotedSender||mentionedJid ? mentionedJid[0]:false
if(!ojid)return reply("Format salah,silahkan tag target/reply pesan target")
let cekowner = db.botconfig.owner.includes(ojid)
if(!cekowner) return reply('User ini bukan bagian dari Owner')
let ubc = db.botconfig.owner.indexOf(ojid)
db.botconfig.owner.splice(ubc,1)
await reply('Sukses...Menghapus User dari OwnerBot')
}
break;
case 'addvip':{
  if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
var idnya = q.split("|")[0]
var timer = q.split("|")[1]
const pathDB = './database/langganan.json'
const timeStamp = await haritimestamp(timer)
await addkeyDB(pathDB,idnya,timeStamp);

const ngc = async (dat) =>{
    try{
    const data = await jadibot.groupMetadata(dat)
    return data.subject
    }catch(err){return "Grup Tidak Terdaftar"}
  }
if(idnya.includes('@g.us')){
  const namagrup = await ngc(idnya)
  var time = await getvalueDB(pathDB,idnya)
  var data = `*Status Langganan VIP*\n\nNama Grup : ${namagrup}\nID : ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await jadibot.sendMessage(id,{text:data})
}
if(idnya.includes('@s.whatsapp.net')){
  var time = await getvalueDB(pathDB,idnya)
  var data = `*Status Langganan VIP*\n\nID : ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await jadibot.sendMessage(id,{text:data})
}
}
  break;
case 'delvip':{
  if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
  var idnya = q||id
  const pathDB = './database/langganan.json'
  await delkeyDB(pathDB,idnya).catch(err => {})
  const ngc = async (dat) =>{
    try{
    const data = await jadibot.groupMetadata(dat)
    return data.subject
    }catch(err){return dat.split('@')[0]}
  }
  if(idnya.includes('@g.us')){
  const namagrup = await ngc(idnya)
  await jadibot.sendMessage(id,{text:`Data ID Langganan *${namagrup}* berhasil dihapus`},{quoted:messages[0]})
  }
  if(idnya.includes('@s.whatsapp.net')){
  await jadibot.sendMessage(id,{text:`Data ID Langganan *${idnya.split('@')[0]}* berhasil dihapus`},{quoted:messages[0]})
  }
}
  break;
case 'cekvip':
case '.cekvip':{
  var idnya = q||id
  const pathDB = './database/langganan.json'
  const ngc = async (dat) =>{
    try{
    const data = await jadibot.groupMetadata(dat)
    return data.subject
    }catch(err){return "Grup Tidak Terdaftar"}
  }
if(idnya.includes('@g.us')){
  const namagrup = await ngc(idnya)
  var time = await getvalueDB(pathDB,idnya)
  var data = `*Status Langganan VIP*\n\nNama Grup : ${namagrup}\nID : ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await jadibot.sendMessage(id,{text:data})
}
if(idnya.includes('@s.whatsapp.net')){
  var time = await getvalueDB(pathDB,idnya)
  var data = `*Status Langganan VIP*\n\nID : ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await jadibot.sendMessage(id,{text:data})
}
}
  break;
  case 'cekid':
  case '.cekid':{
  let admvip = db.botconfig.owner.map(anu =>`-> ${anu.split("@")[0]}`).join('\n')
  if(isGroup){
    await reply(`ID Grup Pendaftaran VIP adalah ${id}\nSilahkan kirim ID ini ke Admin Bot\n*No WA Admin Bot*\n${admvip}`)
  }
  if(isPrivatChat){
    await reply(`ID Personal Pendaftaran VIP adalah ${id}\nSilahkan kirim ID ini ke Admin Bot\n*No WA Admin Bot*\n${admvip}`)
  }
  }
  break;
case'hapussesi':
case 'clearsesi': {
 if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
fs.readdir(`./jadibot/${jadibot?.user?.id.split(':')[0]}`, async function(err, files) {
if (err) {
console.log('Scan directory gagal: ' + err);
return reply('Scan directory gagal: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") || item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
//console.log(filteredArray.length);
let teks = `Ditemukan ${filteredArray.length} Berkas sampah sesi`
if (filteredArray.length == 0) return reply("Tidak ada File Sampah")
/*filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})*/
reply(teks)
await delay(2000)
reply("Sedang Menghapus sampah...")
await filteredArray.forEach(function(file) {
  fs.unlinkSync(`./sesijadibot/${file}`)
});
await delay(2000)
reply("Sukses Menghapus Sampah Sesi")
});
}
break;
case 'cekvipall':
case 'cekallvip':
case 'ceksemuagrup':{
const pathDB = './database/langganan.json'
const cekv = async (v) => {
    const vtm = await getvalueDB(pathDB,v)
 const vpc = await statusVip(vtm)
    return vpc
    }
    const getallgc = await jadibot.groupFetchAllParticipating();
let entrypass = Object.entries(getallgc).slice(0).map(entry=>entry[1])
let comfltr = await entrypass.filter(entrypass=>entrypass.isCommunity==false)
let comnounfltr = await comfltr.filter(comfltr=>comfltr.isCommunityAnnounce==false)
//console.log()
let resend = []
for(let datg of comnounfltr){
   const vp = await cekv(datg.id)
   let objstr = `${datg.subject}\nID : ${datg.id}\nMember : ${datg.size} VIP : ${vp}`
   resend.push(objstr)
}
 const rkp = await resend.map((v,i)=>`${i+1}.${v}`).join("\n")
 
    var txg = `*DATA SEMUA GRUP CEK VIP*\n${rkp}`
    await jadibot.sendMessage(id,{text:txg},{quoted:messages[0]})
  }
break;
case '=>':
case 'run': {
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
    let query = argsdat
    if (fromMe) return;
    let evaluate = false
    try {
      evaluate = await eval(query);
      try {
        evaluate = format(evaluate)
      } catch { }
    } catch (e) {
      evaluate = e.stack.toString();
    };
    await jadibot.sendMessage(id, { text: format(evaluate) });
  }
break;
case 'restart': {
if(!isOwnerBot) return await reply("Fitur Ini Khusus OwnerBot");
    await reply("Sedang Memulai Ulang Sistem...Memerlukan 30 deitk untuk Bot aktif kembali")
process.exit()
}
  break;
//Edit File
case 'editfile':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
  try{
  const pathedit = argsdat.split(" ")[0]
  const isistr = argsdat.slice(pathedit.length+1).toString()
await fs.writeFileSync(pathedit,isistr);
await jadibot.sendMessage(id,{text:"File Berhasil di edit"},{quoted:messages[0]})
}catch(err){
await jadibot.sendMessage(id,{text:`${err.toString()}`},{quoted:messages[0]})
} 
  }
  break ;
//----------------------------
//Baca File
  case 'bacafile' : {
try{
  const pathread = argsdat
  const isistr = await fs.readFileSync(pathread,'utf-8')
await jadibot.sendMessage(id,{text:`${isistr}`},{quoted:messages[0]})
}catch(err){
await jadibot.sendMessage(id,{text:`${err.toString()}`},{quoted:messages[0]})
} 
}
  break;
//Bash command
case 'bash':
case 'bash':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
  exec(`${argsdat}`,async (error, stdout, stderr) => {
if(error){
  await reply(`Terjadi kesalahan:\n${error}`);
return
}
if(stdout){
await reply(`Output:\n${stdout}`);
}
if(stderr){
  await reply(`Error:\n${stderr}`);
}
});
}
break;
case 'addmenu':
case '.addmenu':{
    if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
    const keynya = argsdat?.split(' ')[0]
    const val = pesan?.slice(cmd.length+keynya.length+2)
    const dsc = val?.split("|")[0]||"kosong"
    const value = val?.split("|")[1]||"kosong"
    const valuenya = encodeURIComponent(value)
    const arrd ={
        desc:dsc,
        content:valuenya
    }
    await addkeyDBarr('./database/automenu.json',keynya,arrd)

    const reaksi = {
      react: {
          text: "✅",
          key: messages[0].key
      }}
    await jadibot.sendMessage(id,reaksi)
}
  break;
case 'delmenu':
case '.delmenu':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
  const keynya = argsdat
  await delkeyDB('./database/automenu.json',keynya)
  const reaksi = {
    react: {
        text: "✅",
        key: messages[0].key
    }}
  await jadibot.sendMessage(id,reaksi)
}
break;
case '.broadcast':
case 'broadcast':
case 'share':
case '.share':{
if(!argsdat) return reply("Mana Teks nya");
if(fromMe||isOwnerBot){
const bc = {text:`*[ Broadcast Pesan ]*\n\n${argsdat}` }
let allfetch = await jadibot.groupFetchAllParticipating();
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let filcom = entrygc.filter(entrygc=>entrygc.isCommunity==false)
let filcom2 = filcom.filter(filcom=>filcom.isCommunityAnnounce==false)
let finalres = filcom2.filter(filcom2=>filcom2.announce==false)
//let fullgckeys = Object.keys(allfetch)

for(let gckey of finalres){
try{
  await jadibot.sendMessage(gckey.id, bc)
}catch (e){}
 await delay(5000)
}
 await jadibot.sendMessage(id,{text:'Pesan Broadcast Terkirim'})
  }
}
break;

  case'instanmenu':{
    let instan =[".hidetag",".gruptag",".randomtag",".level",".levelpet",".buff"]
   jadibot.sendPoll(id,"Menu Instan",instan)
 }
  break;
//------------------------------
  case '.allmenu':
  case '.menu':{
  const {menulist} = require('./lib/cekallkey.js')
  const textnya = fs.readFileSync('./database/menu.json').toString()
  const menu2 = fs.readFileSync('./database/menujadibot2.json').toString()
  await loading()
  const menutx = `*Hai Aku ${botName} Bot, Selamat menikmati fitur Kami*\n*Mohon di pergunakan dengan bijak.*\n\n*Total Pengguna : ${await totalpengguna()} User*\n\n${textnya}\n${await menulist()}\n\n${menu2}\n\n*${botName} @2024*`
let ctamsg = generateWAMessageFromContent(id, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: menutx
}),
header: proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await fs.readFileSync('./media/logo.jpg')}, { upload: jadibot.waUploadToServer})),
title: 'RIRU MENU',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"Chat Owner","url":"https://wa.me/6285705815697","merchant_url":"https://www.google.co.id"}`
},
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Kontak Owner","id":"owner"}`
}
],
})
})
}
}
}, {});
await jadibot.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})
}
break;
//------------------------------
  case '.tutorial':{
    const textnya = fs.readFileSync('./database/tutorial.json').toString()
    await reply(textnya)
  }
  break;
//------------------------------
case 'img':
case '.img':{
if(!argsdat)return reply("Mana Teks nya kak?😓")
let cariimg = await GOOGLE_IMG_SCRAP({search: argsdat,limit: 31,domains: ["pinterest.com"]})
await addkeyDBarr('./database/pinlink.json',id,cariimg.result)
let imgres = cariimg.result.length
if(imgres==0)return reply("Maaf tidak ada hasil yg cocok")
let imgs = cariimg.result[0].url
let ctamsg = generateWAMessageFromContent(id, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: `${imgres-1} hasil ditemukan balas .nimg 1 untuk hasil berikutnya`
}),
header: proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await getBuffer(imgs)}, { upload: jadibot.waUploadToServer})),
title: 'Pencarian Gambar',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Berikutnya","id":"nimg 1"}`
}
],
})
})
}
}
}, {});
jadibot.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})
}
    break;
//------------------------------
case 'nimg':
case '.nimg':{
let pinno = parseInt(argsdat)
let src = JSON.parse(fs.readFileSync("./database/pinlink.json").toString())
let pin = src[`${id}`]
let pinl = pin.length-1
if(argsdat<pinl){
let imgs = pin[`${argsdat}`].url
let ctamsg = generateWAMessageFromContent(id, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: `${pinl} hasil ditemukan balas .nimg ${argsdat} untuk hasil berikutnya`
}),
header: proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await getBuffer(imgs)}, { upload: jadibot.waUploadToServer})),
title: 'Pencarian Gambar',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Berikutnya","id":"nimg ${pinno+1}"}`
}
],
})
})
}
}
}, {});
jadibot.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})
}else{
let imgs = pin[`${argsdat}`].url
let ctamsg = generateWAMessageFromContent(id, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: `Selesai ini hasil terakhir`
}),
header: proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await getBuffer(imgs)}, { upload: jadibot.waUploadToServer})),
title: 'Pencarian Gambar',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),

nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Berhenti","id":"akhir"}`
}
],
})
})
}
}
}, {});
jadibot.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})
  }
}
break;
//------------------------------
case 'remini':
case '.remini':{
  if(isImage){
    const mulai = {
        react: {
            text: "🕒",
            key: messages[0].key
        }}
    await jadibot.sendMessage(id,mulai)
  // download stream
  const stream = await downloadContentFromMessage(isImage,'image',);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
         //to remini
const {remini} = require('./lib/remini.js')
await remini(buffer, "enhance").then(async (resbuff) =>{
      await jadibot.sendMessage(id, { image: resbuff, caption:'*Ini Hasilnya*\n*Jgn lupa makasi ,spam = Banned*'}, { quoted: messages[0]})
  const ender = {
      react: {
          text: "✅",
          key: messages[0].key
      }}
  await jadibot.sendMessage(id,ender)
}).catch(async (err) =>{
  var errinfo = err.toSting()
  await jadibot.sendMessage(id,{text: errinfo},{quoted:messages[0]})
  const enderx = {
      react: {
          text: "⚠️",
          key: messages[0].key
      }}
  await jadibot.sendMessage(id,enderx)
})
}else{
  await jadibot.sendMessage(id,{text:"Mana fotonya?"},{quoted:messages[0]})
}
}
break;
case 'fbdl':
case '.fbdl':
case 'facebook':
case 'fb':
case '.fb':
case '.facebook':{
  if(!argsdat){
    await jadibot.sendMessage(id,{text:"Link nya mana?"},{quotedd:messages[0]})
  }else{
  const mulai = {
        react: {
            text: "🕒",
            key: messages[0].key
        }}
  await jadibot.sendMessage(id,mulai)
  const {fbdl} = require('./lib/sosmedDL.js')
  const dat = await fbdl(argsdat)
  const error = dat.error
  if(error==''){
  const hasil = {
    video: {url: dat.respon},
    caption:"*FACEBOOK DOWNLOADER*\nJangan Lupa Makasihnya😎"
  }
  await jadibot.sendMessage(id,hasil,{quoted:messages[0]})
  const ender = {
        react: {
            text: "✅",
            key: messages[0].key
        }}
  await jadibot.sendMessage(id,ender)

  }else{
    await jadibot.sendMessage(id,{text:error},{quoted:messages[0]})
  const enderx = {
        react: {
            text: "⚠️",
            key: messages[0].key
        }}
    await jadibot.sendMessage(id,enderx)
  }
    }
}
break;
//Tiktok
case 'tkdl':
case '.tiktok':
case '.tkdl':
case '.tt':
case 'tt':
case 'tiktok':{
  if(!argsdat){
    await jadibot.sendMessage(id,{text:"Link nya mana?"},{quotedd:messages[0]})
  }else{
  const mulai = {
        react: {
            text: "🕒",
            key: messages[0].key
        }}
  await jadibot.sendMessage(id,mulai)
  const {tkdl} = require('./lib/sosmedDL.js')
  const dat = await tkdl(argsdat)
  const error = dat.error
  if(error==''){
  const hasil = {
    video: {url: dat.linkvideo},
    caption:"*TIKTOK DOWNLOADER*\njangan lupa makasih"
  }
  await jadibot.sendMessage(id,hasil,{quoted:messages[0]})
  const ender = {
        react: {
            text: "✅",
            key: messages[0].key
        }}
  await jadibot.sendMessage(id,ender)

  }else{
    await jadibot.sendMessage(id,{text:error},{quoted:messages[0]})
  const enderx = {
        react: {
            text: "⚠️",
            key: messages[0].key
        }}
    await jadibot.sendMessage(id,enderx)
  }
    }
}
break;
//Instagram
case '.ig':
case '.igdl':
case 'ig':
case 'igdl':{
  if(!argsdat){
    await jadibot.sendMessage(id,{text:"Link nya mana?"},{quotedd:messages[0]})
  }else{
  const mulai = {
        react: {
            text: "🕒",
            key: messages[0].key
        }}
    await jadibot.sendMessage(id,mulai)
  const {igdl} = require('./lib/sosmedDL.js')
  const dat = await igdl(argsdat)
  const error = dat.error
  if(error==''){
  const hasil = {
    video: {url: dat.link},
    caption: '*INSTAGRAM DOWNLOADER*\nJangan lupa makasih'
  }
  await jadibot.sendMessage(id,hasil,{quoted:messages[0]})
  const ender = {
        react: {
            text: "✅",
            key: messages[0].key
        }}
    await jadibot.sendMessage(id,ender)
  }else{
    await jadibot.sendMessage(id,{text:error},{quoted:messages[0]})
    const enderx = {
        react: {
            text: "⚠️",
            key: messages[0].key
        }}
    await jadibot.sendMessage(id,enderx)
  }
    }
}
break;
//---------------------------
  case 'qc':
  case '.qc':{
if(!argsdat){
    await jadibot.sendMessage(id,{text:"Mana Teks nya kak?😓"},{quoted:messages[0]})
}else if(argsdat){
const nama = pushName
let tg = messages[0].key.participant||id
const {quote} = require("./lib/quote.js")
let ppuser = await await jadibot.profilePictureUrl(tg,'image').catch(_=>"https://telegra.ph/file/40f2cf0afcc172dbca93c.jpg")
await quote(argsdat,nama,ppuser).then(async(res) =>{
  const sticker = new Sticker(res.result, {
    pack: `${botName}`, // The pack name
    author: '@2024', // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 50, // The quality of the output file
    background: {
        "r": 255,
        "g": 255,
        "b": 255,
        "alpha": 0} // The sticker background color (only for full stickers)
})

const buffer = await sticker.toBuffer()
await jadibot.sendMessage(id,{sticker:buffer})
}).catch(async (err) => {
  await jadibot.sendMessage(id,{tetx:"Kegagalan Koneksi atau Profil kaka di privat"})
})

}
}
  break;
//------------------------------
  case '.stiker':
  case '.sticker':
  case 'sticker':
  case 's':
  case '.s':{
  if(isImage){
    // download stream
    const stream = await downloadContentFromMessage(isImage,'image',);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
        const sticker = new Sticker(buffer, {
      pack: `${botName}`, // The pack name
      author: "@2024", // The author name
      type: StickerTypes.FULL, // The sticker type
      categories: ['🤩', '🎉'], // The sticker category
      id: '12345', // The sticker id
      quality: 50, // The quality of the output file
      background: {
          "r": 255,
          "g": 255,
          "b": 255,
          "alpha": 0} // The sticker background color (only for full stickers)
  })
  const buffer2 = await sticker.toBuffer()
  await jadibot.sendMessage(messages[0].key.remoteJid,{sticker:buffer2},{quoted:messages[0]})
  }else if(isVideo){
  if(isVideo.seconds==0){
    await reply("Kirim ulang Video dari bot Gabisa!!")
  }else if(isVideo.seconds<11){
    const mulai = {
      react: {
          text: "🕒",
          key: messages[0].key
      }}
    await jadibot.sendMessage(id,mulai)
    // download stream
    const stream = await downloadContentFromMessage(isVideo,'video',);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
        const sticker = new Sticker(buffer, {
      pack: `${botName}`, // The pack name
      author: `@2024`, // The author name
      type: StickerTypes.FULL, // The sticker type
      categories: ['🤩', '🎉'], // The sticker category
      id: '12345', // The sticker id
      quality: 5, // The quality of the output file
      background:'transparent' // The sticker background color (only for full stickers)
  })
  const buffer2 = await sticker.toBuffer()
  await jadibot.sendMessage(id,{sticker:buffer2},{quoted:messages[0]}).then(async (kirimsukses) =>{
        const reaksi = {
      react: {
          text: "✅",
          key: messages[0].key
      }}
    await jadibot.sendMessage(id,reaksi)})
  }else{
    await reply("Durasi max 10 detik")
  }
  }else{
    await reply("Apanya mau di bikin stiker..kasi foto/video lah🙃")
  }
  }
  break;
//------------------------------
  case 'smeme':
  case '.smeme':{
if(!argsdat){
    await jadibot.sendMessage(id,{text:"Mana Teks Smeme nya?😓"},{quoted:messages[0]})
}else if(argsdat){
if(isImage){
     const stream = await downloadContentFromMessage(isImage,'image',);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  const {smeme} = require('./lib/smeme.js');
  await smeme(buffer,argsdat).then(async (resm)=>{
   await getBuffer(resm).then(async (stkr)=>{
    const sticker = new Sticker(stkr, {
      pack: `${botName}`, // The pack name
      author: `@2024`, // The author name
      type: StickerTypes.FULL, // The sticker type
      categories: ['🤩', '🎉'], // The sticker category
      id: '12345', // The sticker id
      quality: 50, // The quality of the output file
      background: {
          "r": 255,
          "g": 255,
          "b": 255,
          "alpha": 0} // The sticker background color (only for full stickers)
  })
  const buffer2 = await sticker.toBuffer()
  await jadibot.sendMessage(messages[0].key.remoteJid,{sticker:buffer2},{quoted:messages[0]}) 
})
  }).catch(async (err)=>{
    const inf = err.toString()
    await jadibot.sendMessage(id,{text:inf},{quoted:messages[0]})
  })
 }else if(isStiker){
     const stream = await downloadContentFromMessage(isStiker,'image',);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  await sharp(buffer).jpeg().toBuffer().then(async(bufcv)=>{
  const {smeme} = require('./lib/smeme.js');
  await smeme(bufcv,argsdat).then(async (resm)=>{
   await getBuffer(resm).then(async (stkr)=>{
    const sticker = new Sticker(stkr, {
      pack: `${botName}`, // The pack name
      author: `@2024`, // The author name
      type: StickerTypes.FULL, // The sticker type
      categories: ['🤩', '🎉'], // The sticker category
      id: '12345', // The sticker id
      quality: 50, // The quality of the output file
      background: {
          "r": 255,
          "g": 255,
          "b": 255,
          "alpha": 0} // The sticker background color (only for full stickers)
  })
  const buffer2 = await sticker.toBuffer()
  await jadibot.sendMessage(messages[0].key.remoteJid,{sticker:buffer2},{quoted:messages[0]}) 
})
  })
  }).catch(async (err)=>{
    const inf = err.toString()
    await jadibot.sendMessage(id,{text:inf},{quoted:messages[0]})
  })
 }else{
    await jadibot.sendMessage(id,{text:"Mana Foto/Stiker nya?😓"},{quoted:messages[0]})
}
}
}
   break;
//------------------------------
//WM Stiker
   case 'wm':
   case 'swm':
   case '.swm':
   case '.wm':{
if(!argsdat){
    await jadibot.sendMessage(id,{text:"Mana Teks WM nya?😓"},{quoted:messages[0]})
}else if(argsdat){
if(isStiker){
  // download stream
  const stream = await downloadContentFromMessage(isStiker,'image',);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  // send to file
  const img = new webpexif.Image()
    const json = {
        "sticker-pack-id": "jadibot",
        "sticker-pack-name": argsdat,
        "sticker-pack-publisher": "",
        "emojis": ""}
    const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
    const exif= Buffer.concat([exifAttr, jsonBuff])
    exif.writeUIntLE(jsonBuff.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    await img.save("./cachebot/stiker.webp")
await jadibot.sendMessage(messages[0].key.remoteJid,{sticker:{url:'./cachebot/stiker.webp'}},{quoted:messages[0]})
}else{
    await jadibot.sendMessage(id,{text:"Mana Stiker nya kak?😓"},{quoted:messages[0]})
}
}
}
   break;
//------------------------------
  case 'toimg':
  case '.toimg':{
  if(isStiker){
       const stream = await downloadContentFromMessage(isStiker,'image',);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
      await sharp(buffer).jpeg().toBuffer().then(async (buf)=>{
   await jadibot.sendMessage(id,{image:buf})
      }).catch(async (err)=>{
         const rr = err.toString()
         await reply(rr)
      })
   }else{
     await reply("mana stikernya?")}
   }
   break;
//------------------------------
  case 'tts':
  case '.tts':
  case 'say':
  case '.say':{
if(!argsdat){
    await jadibot.sendMessage(id,{text:"Mana Teks nya?😓"},{quoted:messages[0]})
}else if(argsdat){
const { getAudioBuffer } = require('simple-tts-mp3');
const say = argsdat
await getAudioBuffer(say,'id').then(async (buffer) => {
    await jadibot.sendMessage(id,{audio:buffer,mimetype: 'audio/mp4'},{quoted:messages[0]})
  });
}
}
  break;
//------------------------------
//Emojimix
    case 'emojimix':
    case '.emojimix':{
try{
  var emoji1 = pesan.slice(10).split("+")[0]
  var emoji2 = pesan.slice(10).split("+")[1]

let mix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)

var mixmo = mix.results[0].url
await getBuffer(mixmo).then(async (stkr)=>{
    const sticker = new Sticker(stkr, {
      pack: `${botName}`, // The pack name
      author: "@2024", // The author name
      type: StickerTypes.FULL, // The sticker type
      categories: ['🤩', '🎉'], // The sticker category
      id: '12345', // The sticker id
      quality: 50, // The quality of the output file
      background: {
          "r": 255,
          "g": 255,
          "b": 255,
          "alpha": 0} // The sticker background color (only for full stickers)
  })
  const buffer2 = await sticker.toBuffer()
  await jadibot.sendMessage(messages[0].key.remoteJid,{sticker:buffer2},{quoted:messages[0]}) 
})
}catch(err){
  await jadibot.sendMessage(id,{text:"Format salah atau input emoji kurang"},{quoted:messages[0]})
}
}
  break;
//------------------------------ //YT Play
case '.play':
case 'play':
case '.musikplay':
case 'musikplay':{
if (!argsdat) return reply('Mana judul lagunya?');
let yts = require("youtube-yts")
const arrsearch = await yts(argsdat)
let res = arrsearch?.videos?.filter(a=>a.duration.seconds<1201)||[]
await addkeyDBarr('./database/cacheyt.json',id,res)
if(res.length==0)return reply('Musik tidak ditemukan');
let pilih = arrsearch.videos[0]

let ctamsg = generateWAMessageFromContent(id, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: `Judul : ${pilih.title}\nKreator : ${pilih.author.name}\nDurasi : ${pilih.timestamp}\nLink : ${pilih.url}`
}),
header: proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await getBuffer(pilih.thumbnail)}, { upload: jadibot.waUploadToServer})),
title: 'Play YT Musik',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Musik MP3","id":"MP3-AUDIO ${pilih.url.split('=')[1]}"}`
},
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Video MP4","id":"MP4-VIDEO ${pilih.url.split('=')[1]}"}`
},
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Berikutnya","id":"nplay 1"}`
}
],
})
})
}
}
}, {});
jadibot.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})
}
break;
        
case 'nplay':{
let ytcache = JSON.parse(fs.readFileSync('./database/cacheyt.json').toString())
let noUrut = parseInt(argsdat)
let resyt = ytcache[`${id}`]
let lmt = resyt.length-1
if(argsdat<lmt){
let pilih = resyt[`${argsdat}`]
let ctamsg = generateWAMessageFromContent(id, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: `Judul : ${pilih.title}\nKreator : ${pilih.author.name}\nDurasi : ${pilih.timestamp}\nLink : ${pilih.url}`
}),
header: proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await getBuffer(pilih.thumbnail)}, { upload: jadibot.waUploadToServer})),
title: 'Play YT Musik',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Musik MP3","id":"MP3-AUDIO ${pilih.url.split('=')[1]}"}`
},
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Video MP4","id":"MP4-VIDEO ${pilih.url.split('=')[1]}"}`
},
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Berikutnya","id":"nplay ${noUrut+1}"}`
}
],
})
})
}
}
}, {});
jadibot.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})
}else{
let pilih = resyt[`${argsdat}`]
let ctamsg = generateWAMessageFromContent(id, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: `Judul : ${pilih.title}\nKreator : ${pilih.author.name}\nDurasi : ${pilih.timestamp}\nLink : ${pilih.url}`
}),
header: proto.Message.InteractiveMessage.Header.create({...(await prepareWAMessageMedia({ image : await getBuffer(pilih.thumbnail)}, { upload: jadibot.waUploadToServer})),
title: 'Play YT Musik',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Musik MP3","id":"MP3-AUDIO ${pilih.url.split('=')[1]}"}`
},
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Video MP4","id":"MP4-VIDEO ${pilih.url.split('=')[1]}"}`
}
],
})
})
}
}
}, {});
jadibot.relayMessage(ctamsg.key.remoteJid, ctamsg.message, {
messageId: ctamsg.key.id
})
}
}
break;

//Ok Play
case 'mp3-audio':{
let ytlink = `https://www.youtube.com/watch?v=${pesan?.slice(10)}`
const {mp3v4} = require('./lib/ytdl3.js');
await jadibot.sendMessage(id,{text:"Musik sedang dikirim,Sabar ya"},{quoted:messages[0]})
await mp3v4(ytlink).then(async (res)=>{
await jadibot.sendMessage(id,{
audio:res,
mimetype: "audio/mp4"
},{quoted:messages[0]})
//await fs.unlinkSync(res)
}).catch(async (err)=>{
await jadibot.sendMessage(id,{text: err.toString()},{quoted:messages[0]})
});
}
break;

//Ok Video
case 'mp4-video':{
let ytlink = `https://www.youtube.com/watch?v=${pesan?.slice(10)}`
const {mp4} = require('./lib/ytdl3.js');
await jadibot.sendMessage(id,{text:"Video sedang dikirim,Sabar ya"},{quoted:messages[0]})
await mp4(ytlink).then(async (res)=>{
await jadibot.sendMessage(id,{
video:{url: res},
mimetype: "video/mp4"
},{quoted:messages[0]})
}).catch(async (err)=>{
await jadibot.sendMessage(id,{text: err.toString()},{quoted:messages[0]})
});
}
break;
//------------------------------
  case '.refix':{
  if(isImage){
  const {sharpenImage} = require('./lib/imgfix.js')
    // download stream
    const stream = await downloadContentFromMessage(isImage,'image',);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
await sharpenImage(buffer).then(async (sharpen) =>{
  await jadibot.sendMessage(messages[0].key.remoteJid,{image:sharpen,caption:"Ini hasilnya"},{quoted:messages[0]})
}).catch(async (err) =>{
  console.log(err)
  await jadibot.sendMessage(messages[0].key.remoteJid,{text:"Gagal wir"},{quoted:messages[0]})
  
})
}else{
    await reply("Fotonya mana?")
  }
  }
  break;
//------------------------------
  case '.ai':{
  if(!argsdat){
    await reply("Mana Pertanyaanya")
  }else if(argsdat){
    const {aichat} = require('./lib/ai.js')
    let ltes = await jadibot.sendMessage(id,{text:"AI sedang Berfikir..."},{quoted:messages[0]}).then(a=>a.key)
      const aires = await aichat(argsdat)
    await delay(1000)
      if(aires.error==''){
      await jadibot.sendMessage(id,{text:`${aires.respon}`,edit:ltes})
    }else{
      await reply(`${aires.error}`) 
    }

    }
  }
  break;
//------------------------------
  case 'tovn':
  case '.tovn':{
   if(isAudio){
    const stream = await downloadContentFromMessage(isAudio,'audio',);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    await jadibot.sendMessage(id,{audio:buffer,mimetype: 'audio/mp4',ptt:true},{quoted:messages[0]})
   }else{
  await reply("Mana audio nya?")
   }
    }
  break;
//------------------------------
  case 'randomtag':
  case '.randomtag':
  case '.gachatag':{
if(!isAdmins)return await reply("Lu siapa? Admin?");
  var alltagmem = participants.map(a => a.id)
  let rdmmem = alltagmem[Math.floor(Math.random() * alltagmem.length)]
  await jadibot.sendMessage(id,{text:`Member Terpilih adalah\n\n👉 @${rdmmem.split("@")[0]}`,mentions:[rdmmem]})
}
  break;
//------------------------------
  case '.h':
  case '.hidetag':{
  var hidetext = argsdat||"Nimbrung Wirr"
  if(!isAdmins){
    await reply("Lu siapa? Admin?")
  }
  if(isAdmins){
    var alltagmem = participants.map(a => a.id)
    await jadibot.sendMessage(id,{text:hidetext,mentions:alltagmem})
  }
  }
  break;
//------------------------------
  case '.tag':
  case '.gruptag':
  case '.tagall':{
if(isAdmins){
var list = participants.map(a => a.id)
var taglist =''
for (let mem of participants) {
taglist += `■@${mem.id.split('@')[0]}\n`
}
const templateMessage = {
    text: "Grup Tag Member\n\n"+taglist,
    mentions: list}
   await jadibot.sendMessage(id, templateMessage,{quoted:messages[0]})
}
if(!isAdmins){
await reply("Lu Siapa? Admin?")
}
}
  break;
//------------------------------
  case '.carigc':{
  if(!argsdat){
    await jadibot.sendMessage(id, {text:"Masukkan Nama GC yang ingin dicari"})
  }else{
const {gcsearch} = require('./lib/gcsearch.js')
const gc = await gcsearch(argsdat)
var res = gc.respon
var allgctxt = ''
for(let i= 0 ; i < res.length; i++){
  var textgc = `Nama GC : ${res[i].judul}\nLink : ${res[i].link}`
allgctxt += textgc+"\n\n"
}
    await reply(allgctxt)
  }
}
  break;
//------------------------------
  case '.antitoxic':{
    if(!isAdmins)return reply("Anda siapa? Admin?");
    if(!isBotAdmins)return reply("Gagal karena Bot bukan Admin Grup");

  if(antitoxic==false){
    db.grupconfig.antitoxic.push(id)
    await reply("Antitoxic di grup ini telah diaktifkan")
  
  }else if(antitoxic == true){
    db.grupconfig.antitoxic = db.grupconfig.antitoxic.filter(item => item !== id);
    await reply("Antitoxic di grup ini telah di nonaktifkan")
  }
  }
  break;
//------------------------------
  case '.antilink':{
    if(!isAdmins)return reply("Anda siapa? Admin?");
    if(!isBotAdmins)return reply("Gagal karena Bot bukan Admin Grup");
   
  if(antilink==false){
    db.grupconfig.antilink.push(id)
    await reply("Antilink di grup ini telah diaktifkan")
  
  }else if(antilink == true){
    db.grupconfig.antilink = db.grupconfig.antilink.filter(item => item !== id);
    await reply("Antilink di grup ini telah di nonaktifkan")
  }
  }
  break;
//------------------------------
  case '.hapuslink':{
   if(!isAdmins)return reply("Anda siapa? Admin?");
   if(!isBotAdmins)return reply("Gagal karena Bot bukan Admin Grup");

  if(hapuslink==false){
    db.grupconfig.hapuslink.push(id)
    await reply("Hapuslink di grup ini telah diaktifkan")
  
  }else if(hapuslink == true){
    db.grupconfig.hapuslink = db.grupconfig.hapuslink.filter(item => item !== id);
    await reply("Hapuslink di grup ini telah di nonaktifkan")
  }
  }
  break;
  case '.simi':{
  if(onsimi==false){
    db.grupconfig.simi.push(sender)
    await reply(`Mode Simi di telah diaktifkan untuk ${sender.replace("@s.whatsapp.net","")}`)
  
  }else if(onsimi == true){
    db.grupconfig.simi = db.grupconfig.simi.filter(item => item !== sender);
    await reply(`Mode Simi di telah dinonaktifkan untuk ${sender.replace("@s.whatsapp.net","")}`)
  }
  }
  break;
/////AREA ADMIN GRUP SAJA (FITUR GRUP)/////
//------------------------------
//Tutup GC
  case '.tutupgc':
  case '.tutupgrup':
  case '.closegc':
  case '.closegroup':{
if(!isBotAdmins){
await reply(`Gagal Menutup karena ${db.botconfig.botName} bukan Admin Grup`)
} else
if(isAdmins){
await jadibot.groupSettingUpdate(id,'announcement')
await jadibot.sendMessage(id,{text:`Grup telah ditutup oleh @${sender.split("@")[0]}`,mentions: [sender.toString()]})
} else
if(!isAdmins){
await reply("Lu Siapa? Admin?")
}
}
  break;
//------------------------------
//Buka GC
  case '.bukagc':
  case '.bukagrup':
  case '.opengc':
  case 'opengroup':{
if(!isBotAdmins){
await reply(`Gagal Menutup karena ${db.botconfig.botName} bukan Admin Grup`)
} else
if(isAdmins){
await jadibot.groupSettingUpdate(id,'not_announcement')
await jadibot.sendMessage(id,{text:`Grup telah dibuka oleh @${sender.split("@")[0]}`,mentions: [sender.toString()]})
} else
if(!isAdmins){
await reply("Lu Siapa? Admin?")
}
}
  break;
//------------------------------
//Promote
  case '.promote':{
if(!isBotAdmins){
await reply(`Gagal karena ${db.botconfig.botName} bukan Admin`)
}else
if(!isAdmins){
await reply("Lu Siapa? Admin?")
}else
if(isBotAdmins && isAdmins){
const ojid = quotedSender ? quotedSender:mentionedJid ? mentionedJid[0]:false
if(!ojid)return reply("Format salah,silahkan tag target/reply pesan target")
if(quotedSender){
var target = `@${quotedSender.split("@")[0]}`
await jadibot.groupParticipantsUpdate(id,[quotedSender],"promote")
await jadibot.sendMessage(id,{text: `Member ${target} naik jabatan sebagai Admin Grup`,mentions:[quotedSender]})
}else if(!(mentionedJid.length==0)){
const target = `@${mentionedJid.join(" @")}`
const txtarget = target.replace(/\@s\.whatsapp\.net/g,'')
await jadibot.groupParticipantsUpdate(id,mentionedJid,"promote")
await jadibot.sendMessage(id,{text: `Member ${txtarget} naik jabatan sebagai Admin Grup`,mentions:mentionedJid})
}
}
};
  break;
//------------------------------
//Demote
  case '.demote':{
if(!isBotAdmins){
await reply(`Gagal karena ${db.botconfig.botName} bukan Admin`)
}else
if(!isAdmins){
await reply("Lu Siapa? Admin?")
}else
if(isBotAdmins && isAdmins){
const ojid = quotedSender ? quotedSender:mentionedJid ? mentionedJid[0]:false
if(!ojid)return reply("Format salah,silahkan tag target/reply pesan target")
if(quotedSender){
var target = `@${quotedSender.split("@")[0]}`
await jadibot.groupParticipantsUpdate(id,[quotedSender],"demote")
await jadibot.sendMessage(id,{text: `Member ${target} turun jabatan sebagai Member Biasa`,mentions:[quotedSender]})
}else if(!(mentionedJid.length==0)){
const target = `@${mentionedJid.join(" @")}`
const txtarget = target.replace(/\@s\.whatsapp\.net/g,'')
await jadibot.groupParticipantsUpdate(id,mentionedJid,"demote")
await jadibot.sendMessage(id,{text: `Member ${txtarget} turun jabatan sebagai Member Biasa`,mentions:mentionedJid})
}
}
};
  break;
//------------------------------
  case '.kick':{
if(!isBotAdmins){
await reply(`Gagal karena ${db.botconfig.botName} bukan Admin`)
}else
if(!isAdmins){
await reply("Lu Siapa? Admin?")
}else
if(isBotAdmins && isAdmins){
const ojid = quotedSender ? quotedSender:mentionedJid ? mentionedJid[0]:false
if(!ojid)return reply("Format salah,silahkan tag target/reply pesan target")
if(quotedSender){
var target = `@${quotedSender.split("@")[0]}`
await jadibot.groupParticipantsUpdate(id,[quotedSender],"remove")
await jadibot.sendMessage(id,{text: `Member ${target} berhasil di tendang dari Grup`,mentions:[quotedSender]})
}else if(!(mentionedJid.length==0)){
const target = `@${mentionedJid.join(" @")}`
const txtarget = target.replace(/\@s\.whatsapp\.net/g,'')
await jadibot.groupParticipantsUpdate(id,mentionedJid,"remove")
await jadibot.sendMessage(id,{text: `Member ${txtarget} berhasil di tendang dari Grup`,mentions:mentionedJid})
}
}
};
break;
case '.ytmp3':{
if(!argsdat){
await reply("Mana link youtube nya?")
  }else{
if(argsdat.includes('http')){
const mulai = {
react: {
text: "🕒",
key: messages[0].key
}}
await jadibot.sendMessage(id,mulai)
const {mp3v4} = require('./lib/ytdl3.js');
let res = await mp3v4(argsdat)
try{
await jadibot.sendMessage(id,{
audio:res,
mimetype: "audio/mp4"
},{quoted:messages[0]})
let done = {
 react: {
 text: "✅",
 key: messages[0].key
 }}
await jadibot.sendMessage(id,done)
}catch(err){
await jadibot.sendMessage(id,{text: err.toString()},{quoted:messages[0]})
}
}else{
await jadibot.sendMessage(id,{text: "klo ngasih link itu yg bener oi.."},{quoted:messages[0]})
}
  }
}
break;
//YTMP4
case '.ytmp4':{
if(!argsdat){
await reply("Mana link youtube nya?")
}else{
if(argsdat.includes('http')){
const mulai = {
      react: {
          text: "🕒",
          key: messages[0].key
      }}
await jadibot.sendMessage(id,mulai)
const {mp4} = require('./lib/ytdl3.js');
try{
let res = await mp4(argsdat)
await jadibot.sendMessage(id,{
video:{url:res},
mimetype: "video/mp4"
},{quoted:messages[0]})
const done = {
react: {
text: "✅",
key: messages[0].key
}}
await jadibot.sendMessage(id,done)
}catch(err){
await jadibot.sendMessage(id,{text: err.toString()},{quoted:messages[0]})
}
}else{
await jadibot.sendMessage(id,{text: "klo ngasih link itu yg bener oi.."},{quoted:messages[0]})
}
}
}
break;
//------------------------------
 case 'getcase':
 case '.getcase':{
if(!argsdat) return reply("Mana nama case nya");
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
const getCase = (cases) => {
return "case" + `'${cases}'` + fs.readFileSync("./fiturauto.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
}
 await reply(`${getCase(argsdat)}`)
}
   break;
case 'testampan':
case '.testampan':
case 'tesganteng':
case '.tesganteng':{
let leveltamvan = Math.floor(Math.random() * 100);
  await reply(`Menurut hasil Penilaian ${botName}\nTingkat ketampanan kamu adalah ${leveltamvan} % 😊`)
}
break;

case 'tescantik':
case '.tescantik':{
 let levelcantik = Math.floor(Math.random() * 100);
  await reply(`Menurut hasil Penilaian ${botName} Tingkat kecantikanmu kamu adalah ${levelcantik} % 😊`)
}
break;

case '.tesluck':
case 'tesluck':
case 'luck':
case '.luck':{
 let levelluck = Math.floor(Math.random() * 100);
  await reply(`Menurut hasil Penilaian ${botName} Tingkat keberuntungan kamu ${levelluck} % 😊`)
}
break;
//------------------------------
  default:{
if(cmd?.startsWith(".")){
  const dbdat = await getvalueDB('./database/automenu.json',cmd)
  if(dbdat == "0"){
    const reaksi = {
      react: {
          text: "🚫",
          key: messages[0].key
      }}
    await jadibot.sendMessage(id,reaksi)
  }else{
    const dbdatdecode = decodeURIComponent(dbdat.content)
    await reply(dbdatdecode)
  }
}
}
//------------------------------
}
//SIMI SIMI Autorun
if(pesan && !fromMe){
if(onsimi){
  const {simi} = require('./lib/simi.js')
  await simi(pesan).then(async (simires)=>{await reply(simires.respon)}).catch(err=>{})
}
}
if(pesan?.startsWith(('lagi apa'||'Lagi apa'))){
  if(mentionedJid){
    const {lagiapa} = require('./lib/lagiapa.js')
    const hasil = await lagiapa()
    const tagtext = mentionedJid[0].split('@')[0]
   const result = `si @${tagtext} ${hasil}`
    await jadibot.sendMessage(id, {text: result,mentions:mentionedJid}, {quoted: messages[0]})
  }
}
}else{
switch(command){
   case 'allmenu':
    case 'menu':
    case '.menu':
    case 'bot':{
      reply('ID Personal/ID Grup Tidak terdaftar VIP\nSilahkan Ketik *.cekid* untuk mendapatkan ID Pendaftaran dan Hubungi Admin Bot untuk Pembayayan\n\n*Info Harga*\n1. Paket 10k masa aktif 30 hari\n2. Paket 20K masa aktif 60 hari\n3. Paket Bebas 1k per 3 hari\n4. Paket Jadibot 15k 1 Bulan\n*Pembayaran*\nDana dan Gopay\n\nUntuk melihat contoh semua layanan Bot kami ketik *.tesmmenu*')
    }
    break;
case 'cekvip':
case '.cekvip':{
  var idnya = q||id
  const pathDB = './database/langganan.json'
  const ngc = async (dat) =>{
    try{
    const data = await jadibot.groupMetadata(dat)
    return data.subject
    }catch(err){return "Grup Tidak Terdaftar"}
  }
if(idnya.includes('@g.us')){
  const namagrup = await ngc(idnya)
  var time = await getvalueDB(pathDB,idnya)
  var data = `*Status Langganan VIP*\n\nNama Grup : ${namagrup}\nID : ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await jadibot.sendMessage(id,{text:data})
}
if(idnya.includes('@s.whatsapp.net')){
  var time = await getvalueDB(pathDB,idnya)
  var data = `*Status Langganan VIP*\n\nID : ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await jadibot.sendMessage(id,{text:data})
}
}
  break;
  case 'cekid':
  case '.cekid':{
  let admvip = db.botconfig.owner.map(anu =>`-> ${anu.split("@")[0]}`).join('\n')
  if(isGroup){
    await reply(`ID Grup Pendaftaran VIP adalah ${id}\nSilahkan kirim ID ini ke Admin Bot\n*No WA Admin Bot*\n${admvip}`)
  }
  if(isPrivatChat){
    await reply(`ID Personal Pendaftaran VIP adalah ${id}\nSilahkan kirim ID ini ke Admin Bot\n*No WA Admin Bot*\n${admvip}`)
  }
  }
  break;
    default:{}
  }
}
//--------------------- 
}
module.exports ={fiturauto}