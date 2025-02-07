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
const axios = require('axios');
const sharp = require('sharp');
const webpexif= require("node-webpmux");
const { exec } = require('child_process');
const {getBuffer,fetchJson} = require('./lib/myfunc.js')
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
//DATA BOT FITUR
global.animecache = {}
global.episodecache = {}
global.findanimecache = {}
global.sfxcache = {}
global.sholatcache = {}


//GAME DATABASE
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};
global.gamewaktu = 60
const pickRandom = function(arr){
return arr[Math.floor(Math.random() * arr.length)]
}
function monospace(string) {
return '```' + string + '```'
}
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
//END OF GAME DATABASE
//-----------
const fiturauto = async(xixy,m,getFullMessage) => {
const {messages,type} = m
console.log(JSON.stringify(messages[0],null,1),"\n#######################")
let botno = xixy?.user?.id.split(':')[0]
let botName = db.botconfig.botName
let listRespon = messages[0]?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson ? JSON.parse(messages[0]?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson).id : ''
const pesan = messages[0].message?.conversation||messages[0].message?.extendedTextMessage?.text||messages[0]?.message?.imageMessage?.caption||messages[0]?.message?.videoMessage?.caption||messages[0]?.message?.viewOnceMessageV2?.message?.imageMessage?.caption||messages[0]?.message?.viewOnceMessageV2?.message?.videoMessage?.caption||messages[0]?.message?.templateButtonReplyMessage?.selectedId||listRespon
const id = messages[0]?.key?.remoteJid;
const fromMe = messages[0]?.key?.fromMe;
const isGroup = id?.endsWith('@g.us')||false
const isPrivatChat = id?.endsWith('@s.whatsapp.net')||false
const sender = isGroup ? messages[0]?.key?.participant : isPrivatChat ? id :''
const pushName = messages[0]?.pushName||"Tanpa Nama"
const isImage = messages[0]?.message?.imageMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage||messages[0]?.message?.viewOnceMessageV2?.message?.imageMessage||messages[0]?.message?.viewOnceMessageV2?.message?.videoMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.imageMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.interactiveMessage?.header?.imageMessage||false
const isVideo = messages[0]?.message?.videoMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage||messages[0]?.message?.viewOnceMessageV2?.message?.videoMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.videoMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.interactiveMessage?.header?.videoMessage||false
const isAudio = messages[0]?.message?.audioMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.audioMessage||messages[0]?.message?.viewOnceMessageV2?.message?.audioMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage||false
const isStiker = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage||false
const isImageQuoted = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage||false
const isVideoQuoted = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage||false
const viewoncequoted = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.imageMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.videoMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage
const isViewOnce = isImage ? isImage.viewOnce : isVideo ? isVideo.viewOnce : isAudio ? isAudio.viewOnce: false
const quotedSender = messages[0]?.message?.extendedTextMessage?.contextInfo?.participant
const mentionedJid = messages[0]?.message?.extendedTextMessage?.contextInfo?.mentionedJid
const quotedText = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.conversation||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.extendedTextMessage?.text||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage?.caption||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage?.caption
const quotedMessage = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage||false
let contextInfo = messages[0]?.message?.extendedTextMessage?.contextInfo||''
const oncetype = isImage ? quotedMessage.imageMessage?.mimetype?.split('/')[0] : isVideo ? quotedMessage.videoMessage?.mimetype?.split('/')[0] : isAudio ? quotedMessage.audioMessage?.mimetype?.split('/')[0] : ''
const isQuotedImage = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage
const isQuotedVideo = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage
const isDocument = messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.documentMessage||messages[0]?.message?.extendedTextMessage?.contextInfo?.quotedMessage?.documentWithCaptionMessage?.message?.documentMessage
const textReaksi = messages[0]?.message?.reactionMessage?.text
const isBotReaksi = messages[0]?.key?.fromMe
const pelakuReaksi = sender
const targetReaksi = messages[0]?.message?.reactionMessage?.key?.participant
const isReaksiToBot = messages[0]?.message?.reactionMessage?.key?.fromMe
const cmd = pesan?.split(' ')[0]
const argsdat = q = pesan?.slice(cmd.length+1)||false
//----------Area Const V2----------
const groupMetadata = isGroup ? await xixy.groupMetadata(id).catch(e => {}) : ''
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
const groupMetadata = await xixy.groupMetadata(id).catch(e => {})
  const participants = await groupMetadata.participants||[]
  return participants
}

//Fungsi List Admin
const admin = async (idgrup) => {
const groupMetadata = await xixy.groupMetadata(id).catch(e => {})
  const participants = await groupMetadata.participants||[]
  const groupAdmins = await participants.filter(v => v.admin !== null).map(v => v.id)||[]
  return groupAdmins
}

//---------------------

const officialreply = async (teks,judul,target) => {
await xixy.sendMessage(target||id,
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
"thumbnail": fs.readFileSync(`./media/logo.jpg`),
"mediaUrl": `${db.botconfig.officialgc}`,
"sourceUrl": `${db.botconfig.officialgc}`
}}},
{ quoted: messages[0]})
}

const officialreply2 = async (teks,judul,target) => {
await xixy.sendMessage(id,
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
"thumbnail": fs.readFileSync(`./media/logo.jpg`),
"sourceUrl": `${db.botconfig.officialgc}`}}},
{ quoted: messages[0]})
}

const notichat = async (text) =>{
  await xixy.relayMessage(id, { scheduledCallCreationMessage: { callType: "2", scheduledTimestampMs: 1500, title: `\n${text}\n\n`}},{ messageId: messages[0].key.id  })
}
const reply = async (teks) =>{
await xixy.sendMessage(id, {text: teks}, {quoted: messages[0]})
}
xixy.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return xixy.sendMessage(jid, { poll: { name, values, selectableCount }}) }

//---------------------
const totalpengguna = async () => {
let membersize = 0
let allfetch = await xixy.groupFetchAllParticipating();
//let fullgckeys = Object.keys(allfetch)
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
for(let gckey of entrygc){
const size = gckey.size
membersize = membersize + size
}
return membersize
}

if(!isGroup){
  await xixy.readMessages([messages[0].key])
}
  
const loading = async () => {
    let hawemod = [
      "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
      "《 ████▒▒▒▒▒▒▒▒》30%",
      "《 ███████▒▒▒▒▒》50%",
      "《 ██████████▒▒》80%",
      "《 ████████████》100%",
      "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
    ]
    let { key } = await xixy.sendMessage(id, {text:"《 ▒▒▒▒▒▒▒▒▒▒▒▒》0%"})//Pengalih isu

    for (let i = 0; i < hawemod.length; i++) {
    await delay(1000)
    await xixy.sendMessage(id, {text: hawemod[i], edit: key });//PESAN LEPAS
    }
    }
//Area Reaksi Bot
//Fitur Banned User
if(textReaksi=="😢"){
if(!isBotReaksi)return;
if(isReaksiToBot)return;
const ojid = targetReaksi
let cekbanned = banneduser.includes(ojid)
if(cekbanned) return
banneduser.push(ojid)
fs.writeFileSync('./database/banneduser.json', JSON.stringify(banneduser))
await xixy.sendMessage(id,{text:`Sukses Membanned User ${ojid.split('@')[0]}`})
}
//Fitur Unban User
if(textReaksi=="😂"){
if(!isBotReaksi) return;
const ojid = targetReaksi
let cekbanned = banneduser.includes(ojid)
if(!cekbanned) return;
let ubc = banneduser.indexOf(ojid)
banneduser.splice(ubc,1)
await fs.writeFileSync('./database/banneduser.json', JSON.stringify(banneduser))
await xixy.sendMessage(id,{text:`Sukses Membuka Blokir User ${ojid.split('@')[0]}`})
}
//Fitur Bot Keluar Grup
if(textReaksi=="🙏"){
if(!isBotReaksi) return;
await xixy.groupLeave(id)
}

//-///START FILTER ID UNTUK VIP DAN BAMCHAT///-//
let command = cmd?.toLowerCase();
let isCommand = fs.readFileSync("./fiturauto.js").toString().includes(`case '${command}'`)
let banchat = JSON.parse(fs.readFileSync('./database/banchat.json'));
if(command == 'sleep'){
if(isPrivatChat)return reply("Fitur ini Khusus Grup")
if(!isAdmins) return reply("Fitur Ini Khusus OwnerBot");
let cekbanned = banchat.includes(id)
if(cekbanned) return reply('Riru sudah tertidur😴')
banchat.push(id)
fs.writeFileSync('./database/banchat.json', JSON.stringify(banchat))
await reply('Sukses...Riru memasuki mode tidur😴')
}
if(command == 'unsleep') {
if(isPrivatChat)return reply("Fitur ini Khusus Grup")
if(!isAdmins) return reply("Lu Siapa? Admin?");
let cekbanned = banchat.includes(id)
if(!cekbanned) return reply('Riru sudah bangun😇')
let ubc = banchat.indexOf(id)
banchat.splice(ubc,1)
await fs.writeFileSync('./database/banchat.json', JSON.stringify(banchat))
await reply('Sukses...Riru sudah bangun😇')
}
const isBanchat = banchat.includes(id)
if(isBanchat && isCommand){
await xixy.sendMessage(id,{react: {text: "😴",key: messages[0].key}});
}
if(isBanchat)return;
const {sisaHari,cekWaktu,cekTanggal,statusVip,haritimestamp,isVIP} = require('./lib/functionVIPTime.js');
const {addkeyDB,delkeyDB,getvalueDB} = require('./lib/functionDB.js');
const VIP = await isVIP(id)
const VIP2 = await isVIP(sender)
if(VIP||VIP2||isOwnerBot){
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
  await xixy.sendMessage(id,reaksi)
if(isBotAdmins){
setTimeout(async function(){
await xixy.sendMessage(id, { delete: messages[0].key })
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
await xixy.sendMessage(id,{text:`Admin Bebas ya kirim Link😁`})
} else
if(isBotAdmins && !isAdmins){
const templateMessage = {
    text: `Hai @${sender.replace('@s.whatsapp.net',"")}\nSerpertinya  Anda berupaya mengirim Link Tautan, Mohon maaf ~tytyd~ Anda akan ${botName} tendang dari grup`,
    mentions: [sender.toString()]
}
  await xixy.sendMessage(id,templateMessage,{quoted: messages[0]})
setTimeout(async function(){
  await xixy.groupParticipantsUpdate(id,[sender.toString()],"remove")
  await xixy.sendMessage(id, { delete: messages[0].key })
}, 3000);

}
}else
if(hapuslink){
if(!isBotAdmins){
db.grupconfig.hapuslink=db.grupconfig.hapuslink.filter(item => item !== id);
} else
if(isAdmins){
await xixy.sendMessage(id,{text:`Admin Bebas ya kirim Link😁`})
} else
if(isBotAdmins && !isAdmins){
const templateMessage = {
    text: `*Hapus Link Aktif*\n\nHai @${sender.replace('@s.whatsapp.net',"")}\nLink Tautan Terdeteksi,Mohon maaf pesan kaka akan ${botName} Hapus`,
    mentions: [sender.toString()]
}
  await xixy.sendMessage(id,templateMessage,{quoted: messages[0]})
  const reaksi = {
    react: {
        text: "❌",
        key: messages[0].key
    }}
  await xixy.sendMessage(id,reaksi)
setTimeout(async function(){
  await xixy.sendMessage(id, { delete: messages[0].key })
}, 2000);

}
}
}
}
const isBan = banneduser.includes(sender)
if(isBan && isCommand){
await xixy.sendMessage(id,{react: {text: "⛔",key: messages[0].key}});
}
if(isBan)return;
// FUNCTION PETAK BOMB BY DARWIN
let pilih = "🌀", bomb = "💣";
if (sender in petakbom) {
if (!/^[1-9]|10$/i.test(pesan) && !isCommand) return !0;
if (petakbom[sender].petak[parseInt(pesan) - 1] === 1) return !0;
if (petakbom[sender].petak[parseInt(pesan) - 1] === 2) {
petakbom[sender].board[parseInt(pesan) - 1] = bomb;
petakbom[sender].pick++;
await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
petakbom[sender].bomb--;
petakbom[sender].nyawa.pop();

let brd = petakbom[sender].board;
if (petakbom[sender].nyawa.length < 1) {
await reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Pengurangan Saldo :* Rp. 100`);
await xixy.sendMessage(id, {react: {text: '😂', key: messages[0].key}})
delete petakbom[sender];
} else await reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${petakbom[sender].pick}\nSisa nyawa: ${petakbom[sender].nyawa}`);
return !0;
}
if (petakbom[sender].petak[parseInt(pesan) - 1] === 0) {
petakbom[sender].petak[parseInt(pesan) - 1] = 1;
petakbom[sender].board[parseInt(pesan) - 1] = pilih;
petakbom[sender].pick++;
petakbom[sender].lolos--;
let brd = petakbom[sender].board;
if (petakbom[sender].lolos < 1) {
await reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Sisa nyawa :* ${petakbom[sender].nyawa}\n*Bomb :* ${petakbom[sender].bomb}\n*Hadiah Saldo :* Rp. 250`);
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})
delete petakbom[sender];
} else reply(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${petakbom[sender].pick}\nSisa nyawa : ${petakbom[sender].nyawa}\nBomb : ${petakbom[sender].bomb}`)
}
}

// GAME TEBAK GAMBAR BY DARWIN
if ((id in tebakgambar)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = tebakgambar[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar[id].jawaban}*`);
delete tebakgambar[id]
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`,mentions:[`${sender}`]});
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})
//addSaldo(m.sender, 150, db_saldo)
clearTimeout(waktu);
delete tebakgambar[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME TEBAK ANIME BY DARWIN
if ((id in tebakanime)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = tebakanime[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakanime[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})

clearTimeout(waktu);
delete tebakanime[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME TEBAK LAGU BY DARWIN
if ((id in tebaklagu)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = tebaklagu[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklagu[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})

clearTimeout(waktu);
delete tebaklagu[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME KUIS BY DARWIN
if ((id in kuis)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = kuis[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete kuis[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})

clearTimeout(waktu);
delete kuis[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME SIAPAKAH AKU BY DARWIN
if ((id in siapakahaku)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = siapakahaku[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete siapakahaku[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})

clearTimeout(waktu);
delete siapakahaku[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME TEBAK KALIMAT BY DARWIN
if ((id in tebakkalimat)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = tebakkalimat[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkalimat[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})
clearTimeout(waktu);
delete tebakkalimat[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME TEBAK KATA BY DARWIN
if ((id in tebakkata)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = tebakkata[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkata[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n\n*Game :* Tebak Kata\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})
clearTimeout(waktu);
delete tebakkata[id];
} else await await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME TEBAK LIRIK BY DARWIN
if ((id in tebaklirik)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = tebaklirik[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklirik[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})

clearTimeout(waktu);
delete tebaklirik[id];
} else await await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME TEBAK KIMIA BY DARWIN
if ((id in tebakkimia)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = tebakkimia[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkimia[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})
clearTimeout(waktu);
delete tebakkimia[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME TEBAK BENDERA BY DARWIN
if ((id in tebakbendera)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = tebakbendera[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakbendera[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})

clearTimeout(waktu);
delete tebakbendera[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME ASAH OTAK BY DARWIN
if ((id in asahotak)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = asahotak[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete asahotak[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})

clearTimeout(waktu);
delete asahotak[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME SUSUN KATA BY DARWIN
if ((id in susunkata)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = susunkata[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete susunkata[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})

clearTimeout(waktu);
delete susunkata[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME CAK LONTONG BY DARWIN
if ((id in caklontong)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = caklontong[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete caklontong[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})

clearTimeout(waktu);
delete caklontong[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME KUIS MATH BY DARWIN
if ((id in kuismath)) {
if(fromMe)return;
let { soal, jawaban, hadiah, waktu } = kuismath[id]
if (pesan.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete kuismath[id];
clearTimeout(waktu);
} else if (pesan.toLowerCase().includes(jawaban)) {
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})

clearTimeout(waktu);
delete kuismath[id];
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
}

// GAME FAMILY 100 BY DARWIN
if ((id in family100)) {
if(fromMe)return
let { soal, jawaban, hadiah, waktu } = family100[id]
if (pesan.toLowerCase() == "nyerah") {
await xixy.sendMessage(id,{text:`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 0`,mentions:[`${sender}`]});
delete family100[id]
clearTimeout(waktu);
} else if (jawaban.includes(pesan.toLowerCase())) {
let anu = jawaban.indexOf(pesan.toLowerCase())
jawaban.splice(anu, 1)
await xixy.sendMessage(id,{text:`*JAWABAN BENAR*\n\n*Penebak :* @${sender.split('@')[0]}\n*Jawaban :* ${argsdat}\n*Hadiah Saldo :* Rp. 200`,mentions:[`${sender}`]});
//addSaldo(m.sender, 200, db_saldo)
await xixy.sendMessage(id, {react: {text: '🟢', key: messages[0].key}})
} else await xixy.sendMessage(id, {react: {text: '❌', key: messages[0].key}})
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[id];
}
}
    
/***CASE AREA***/
switch(command){
//Case Game Area
case '.petakbom':{
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (sender in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (sender in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (sender in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (sender in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (sender in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (sender in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (sender in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (sender in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (sender in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (sender in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (sender in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
bomb: 3,
lolos: 7,
pick: 0,
hadiah: 5000,
nyawa: ["❤️", "❤️", "❤️"]
};
await reply(`*PETAK BOM*

${petakbom[sender].board.join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[sender].bomb}
Nyawa : ${petakbom[sender].nyawa.join("")}`);
}
break;

case '.delpetakbom':{
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (!(sender in petakbom)) return reply(`kamu sedang tidak bermain petakbom!`)
delete petakbom[sender];
await xixy.sendMessage(m.chat, {react: {text: '🟢', key: messages[0].key}})
await reply(`Petakbom di akhiri, hadiah Rp. 0`)
}
break;

case '.tebakgambar':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await xixy.sendMessage(id, {image: {url: img}, caption: teks1}, {quoted: messages[0]})
tebakgambar[id] = {
soal: img,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakgambar[id]) reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar[id].jawaban}`);
delete tebakgambar[id];
}, gamewaktu * 1000)
}
break
case '.tebakanime':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await xixy.sendMessage(id, {image: {url: image}, caption: teks1}, {quoted: messages[0]})
tebakanime[id] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[id]) reply(`Waktu habis!\nJawabannya adalah: ${tebakanime[id].jawaban}`);
delete tebakanime[id];
}, gamewaktu * 1000)
}
break
case '.tebaklagu':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return reply('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await xixy.sendMessage(id, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: messages[0]}).then(async (res) => {await xixy.sendMessage(id,{text:teks1},{quoted:res})})
tebaklagu[id] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[id]) reply(`Waktu habis\nJawabannya adalah: ${tebaklagu[id].jawaban}`);
delete tebaklagu[id];
}, gamewaktu * 1000)
}
break
case '.kuis':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[id] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[id]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[id];
}, gamewaktu * 1000)
}
break
case '.tebakkalimat':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[id] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[id]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(id)}`);
delete tebakkalimat[sender];
}, gamewaktu * 1000)
}
break
case '.tebakkata':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[id] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[id]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[id];
}, gamewaktu * 1000)
}
break
case '.tebaklirik':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[id] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[id]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[id];
}, gamewaktu * 1000)
}
break
case '.tebakkimia':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[id] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[id]) reply(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[id];
}, gamewaktu * 1000)
}
break
case '.tebakbendera':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[id] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[id]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[id];
}, gamewaktu * 1000)
}
break
case '.susunkata':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[id] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[id]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[id];
}, gamewaktu * 1000)
}
break
case '.asahotak':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[id] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[id]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[id];
}, gamewaktu * 1000)
}
break
case '.siapakahaku': case '.sa':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[id] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[id]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[id];
}, gamewaktu * 1000)
}
break
case '.caklontong':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./src/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[id] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[id]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[id];
}, gamewaktu * 1000)
}
break
case '.math': case '.kuismath':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

let { genMath, modes } = require('./src/game/math')
if (!q) return reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\ncontoh:\n.math hard`)
if (!(Object.keys(modes)).includes(argsdat)) return reply('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => reply('```Tolong pilih modenya yang benar contoh .math easy```'))
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[id] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[id]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[id];
}, waktu)
}
break
case '.family100': case '.f100':
if(!isGroup) return await reply("Fitur ini hanya untuk Grup")
if (id in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (id in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (id in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (id in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (id in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (id in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (id in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (id in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (id in kuismath) return reply('Beresin dulu game KuisMath kamu ಠ⁠︵⁠ಠ');
if (id in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (id in siapakahaku) return reply('Beresin dulu game Siapakah Aku kamu ಠ⁠︵⁠ಠ');
if (id in caklontong) return reply('Beresin dulu game Cak Lontong kamu ಠ⁠︵⁠ಠ');
if (id in family100) return reply('Beresin dulu game Family100 kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[id] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (id in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[id].jawaban
for (let i of jwb){teks += `\n${i}`}
reply(teks)
delete family100[id];
};
}, gamewaktu * 1000)
}
break

//End Of Game Area

case 'donasi':
case 'donat':
case '.donasi':
case '.donat': {
await xixy.sendMessage(id,{image:{url:'./media/logo.jpg'},caption:`Hai kak, Yuk bantu mimin agar lebih semangat ngembangin bot Riru.\nKakak bisa bantu donasi ke sini ya😁\n=> https://saweria.co/onedonasi`})
}
break;

case '.getip':
case 'getip': {
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
let http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', async function(ip) {
await reply("🔎 Alamat IP Publik Anda adalah : " + ip);
})
})
}
break;

case 'join':
case '.join':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
let lgc = quotedText ? quotedText : argsdat ? argsdat : false
if(lgc.includes('chat.whatsapp.com/')){
let codelink = lgc.split('chat.whatsapp.com/')[1].slice(0,22)
let resjoin = await xixy.groupAcceptInvite(codelink)
await reply('Bergabung ke '+resjoin)
}else{
await reply("Tidak ada link terdeteksi")
}
}
break;

case 'addbio':{
if(isImageQuoted){
const stream = await downloadContentFromMessage(isImage,'image',);
let buffer = Buffer.from([]);
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
await fs.writeFileSync(`./databio/image/${sender}.jpg`,buffer)
  
let databio = {[`${sender}`]:{
  desc : quotedText||'',
  image : `./databio/image/${sender}.jpg`
}
}

let dbsnew = Object.assign(dbsbio,databio)
dbsbio = dbsnew
reply("Save Bio Berhasil")
}else{
await reply('Silahkan kirim foto dengan caption berisi deskripsi bio anda dan balas pesan tersebut dengan *addbio*')
}
}
break;

case 'mybio':{
let blink = dbsbio[sender] ? dbsbio[sender].image : ''
let desc = dbsbio[sender] ? dbsbio[sender].desc : ''
if(!blink && !desc)return reply('Anda belum Mendaftarkan Bio')
if(fs.existsSync(blink)){
 await xixy.sendMessage(id,{image:{url:blink},caption:desc})
}else{
await reply('File bio anda kadaluarsa silahkan buat ulang')
}
}
break;

case 'cekbio':{
let ojid = quotedSender ? quotedSender:mentionedJid ? mentionedJid[0]:false
if(!ojid) return reply('Salah, untuk cek Bio Orang lain silahkan balas pesan atau tag nomernya')
 let blink = dbsbio[ojid] ? dbsbio[ojid].image : ''
 let desc = dbsbio[ojid] ? dbsbio[ojid].desc : ''
 if(!blink && !desc)return reply('User ini belum Mendaftarkan Bionya')
if(fs.existsSync(blink)){
 await xixy.sendMessage(id,{image:{url:blink},caption:desc})
}else{
await reply('Bio user ini perlu diupdate')
}
}
break;

case'addjadibot': {
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
let userjadibot = JSON.parse(fs.readFileSync('./jadibot.json'))
if(!argsdat)return reply(`Format salah, contoh: ${command} 6281234567890`)
let jidbot = argsdat
if(!jidbot.startsWith('62'))return reply("Format salah,input nomor target harus dimulai dengan *62*")
let cekisbot = userjadibot.includes(jidbot)
if(cekisbot) return reply('User ini sudah Jadibot')
userjadibot.push(jidbot)
await fs.writeFileSync('./jadibot.json', JSON.stringify(userjadibot))
await reply('Sukses Menambahkan User Jadibot dan Bot akan restart')
await delay(10000)
process.exit()
}
break;

case'deljadibot': {
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
let userjadibot = JSON.parse(fs.readFileSync('./jadibot.json'))
if(!argsdat)return reply(`Format salah, contoh: ${command} 6281234567890`)
let jidbot = argsdat
if(!jidbot.startsWith('62'))return reply("Format salah,input nomor target harus dimulai dengan *62*")
let cekisbot = userjadibot.includes(jidbot)
if(!cekisbot) return reply('User ini bukan User Jadibot')
let usrbot = userjadibot.indexOf(jidbot)
userjadibot.splice(usrbot,1)
await fs.writeFileSync('./jadibot.json', JSON.stringify(userjadibot))
await deleterfolder(`./jadibot/${jidbot}`)
await reply('Sukses Menghapus User Jadibot dan Bot akan restart');
await delay(10000)
process.exit()
}
break;

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
const ojid = quotedSender ? quotedSender:mentionedJid ? mentionedJid[0]:false
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
const ojid = quotedSender ? quotedSender:mentionedJid ? mentionedJid[0]:false
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
const ojid = quotedSender ? quotedSender:mentionedJid ? mentionedJid[0]:false
if(!ojid)return reply("Format salah,silahkan tag target/reply pesan target")
let cekowner = db.botconfig.owner.includes(ojid)
if(cekowner) return reply('User ini sudah bagian dari Owner')
db.botconfig.owner.push(ojid)
await reply('Sukses...User telah menjadi OwnerBot')
}
break;
        
case 'delowner':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
const ojid = quotedSender ? quotedSender:mentionedJid ? mentionedJid[0]:false
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
let idnya = q.split("|")[0]
let timer = q.split("|")[1]
const pathDB = './database/langganan.json'
const timeStamp = await haritimestamp(timer)
await addkeyDB(pathDB,idnya,timeStamp);

const ngc = async (dat) =>{
try{
const data = await xixy.groupMetadata(dat)
return data.subject
}catch(err){return "Grup Tidak Terdaftar"}
}
if(idnya.includes('@g.us')){
const namagrup = await ngc(idnya)
let time = await getvalueDB(pathDB,idnya)
let data = `*Status Langganan VIP*\n\nNama Grup : ${namagrup}\nID : ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await xixy.sendMessage(id,{text:data})
}
if(idnya.includes('@s.whatsapp.net')){
let time = await getvalueDB(pathDB,idnya)
let data = `*Status Langganan VIP*\n\nID ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await xixy.sendMessage(id,{text:data})
}
}
break;
        
case 'delvip':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
let idnya = q||id
const pathDB = './database/langganan.json'
await delkeyDB(pathDB,idnya).catch(err => {})
const ngc = async (dat) =>{
try{
const data = await xixy.groupMetadata(dat)
return data.subject
}catch(err){return dat.split('@')[0]}
}
if(idnya.includes('@g.us')){
const namagrup = await ngc(idnya)
await xixy.sendMessage(id,{text:`Data ID Langganan *${namagrup}* berhasil dihapus`},{quoted:messages[0]})
}
if(idnya.includes('@s.whatsapp.net')){
await xixy.sendMessage(id,{text:`Data ID Langganan *${idnya.split('@')[0]}* berhasil dihapus`},{quoted:messages[0]})
}
}
break;

case 'cekvip':
case '.cekvip':{
let idnya = q||id
const pathDB = './database/langganan.json'
const ngc = async (dat) =>{
try{
const data = await xixy.groupMetadata(dat)
return data.subject
}catch(err){return "Grup Tidak Terdaftar"}
}
if(idnya.includes('@g.us')){
const namagrup = await ngc(idnya)
let time = await getvalueDB(pathDB,idnya)
let data = `*Status Langganan VIP*\n\nNama Grup : ${namagrup}\nID : ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await xixy.sendMessage(id,{text:data})
}
if(idnya.includes('@s.whatsapp.net')){
let time = await getvalueDB(pathDB,idnya)
let data = `*Status Langganan VIP*\n\nID : ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await xixy.sendMessage(id,{text:data})
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

//Hapus Pesan WA Otomatis
case 'autoclear':{
if(fromMe)return;
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
if(!argsdat) return await reply('Silahkan Ketik *autoclear off* atau *autoclear on*');
if(argsdat=='on'){
 if(db.botconfig.autoclear == true)return await reply("Autoclear sudah di Aktifkan sebelumnya")
db.botconfig.autoclear = true
await reply("Autoclear di Aktifkan");
}else if(argsdat=='off'){
 if(db.botconfig.autoclear == false)return await reply("Autoclear sudah di Matikan sebelumnya");
db.botconfig.autoclear = false
await reply("Autoclear di Matikan");
}else{
await reply('Silahkan Ketik *autoclear off* atau *autoclear on*');
}
}
break;

case'hapussesi':
case 'clearsesi': {
 if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
fs.readdir("./sesixixy", async function(err, files) {
if (err) {
console.log('Scan directory gagal: ' + err);
return reply('Scan directory gagal: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") || item.startsWith("sender-key") || item.startsWith("session-") //|| item.startsWith("app-state")
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
  fs.unlinkSync(`./sesixixy/${file}`)
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
let vtm = await getvalueDB(pathDB,v)
let vpc = await statusVip(vtm)
return vpc
}
const getallgc = await xixy.groupFetchAllParticipating();
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
 
let txg = `*DATA SEMUA GRUP CEK VIP*\n${rkp}`
await xixy.sendMessage(id,{text:txg},{quoted:messages[0]})
}
break;
 
case '=>':
case 'run': {
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
let query = argsdat
if (fromMe) return;
let evaluate = false
try {
evaluate = await eval(`const evalspace = async()=>{${query};};evalspace()`);
try {
evaluate = format(evaluate)
} catch { }
} catch (e) {
evaluate = e.stack.toString();
};
await xixy.sendMessage(id, { text: format(evaluate) });
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
await xixy.sendMessage(id,{text:"File Berhasil di edit"},{quoted:messages[0]})
}catch(err){
await xixy.sendMessage(id,{text:`${err.toString()}`},{quoted:messages[0]})
} 
  }
break ;

//Baca File
case 'bacafile' : {
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
try{
let pathread = argsdat
let isistr = await fs.readFileSync(pathread,'utf-8')
await xixy.sendMessage(id,{text:`${isistr}`},{quoted:messages[0]})
}catch(err){
await xixy.sendMessage(id,{text:`${err.toString()}`},{quoted:messages[0]})
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
if(!argsdat)return reply('Format salah silahkan masukan kata kunci,deskripsi,dan isi menu')
const keynya = argsdat?.split(' ')[0]
if(keynya=="")return reply('Format salah silahkan masukan kata kunci,deskripsi,dan isi menu')
const cekdatdoc = await getvalueDB('./database/automenu.json',keynya)
if(!(cekdatdoc == "0"))return reply('Kata kunci Menu sudah digunakan silahkan hapus terlebih dahulu atau gunakan kata kunci yang lain')
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
 await xixy.sendMessage(id,reaksi)
}
break;
    
case 'delmenu':
case '.delmenu':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
if(!argsdat)return reply('Format salah silahkan masukan kata kunci menu')
let keynya = argsdat
await delkeyDB('./database/automenu.json',keynya)
let reaksi = {
react: {
        text: "✅",
        key: messages[0].key
}}
await xixy.sendMessage(id,reaksi)
}
break;

case 'adddoc':
case '.adddoc':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot"); 
if(!isDocument){reply("Format salah,seharusnya tandai 1 pesan berisi dokumen")}else{
if(!argsdat)return reply('Format salah silahkan masukan kata kunci untuk Document baru')
    const keynya = argsdat?.split(' ')[0]
if(!keynya)return reply("Format salah silahkan masukan kata kunci untuk Document baru")
const cekdatdoc = await getvalueDB('./database/dbdoc.json',keynya)
if(!(cekdatdoc == "0"))return reply('Kata kunci Dokumen sudah digunakan silahkan hapus terlebih dahulu atau gunakan kata kunci yang lain')
let named = isDocument?.fileName
//const valuenya = encodeURIComponent(val)
const arrd ={
    fileName: isDocument.fileName,
    mimetype: isDocument.mimetype
}
await addkeyDBarr('./database/dbdoc.json',keynya,arrd)
let dokusave = './database/dokumen'
let docpath = path.join(dokusave,named)
const stream = await downloadContentFromMessage(
  {
    mediaKey: isDocument.mediaKey,
    directPath: isDocument.directPath,
    url: isDocument.url,
  },
  'document',
  {},
);
let bufferdoc = Buffer.from([]);
 for await (const chunk of stream) {
   bufferdoc = Buffer.concat([bufferdoc, chunk]);
 }
 await fs.writeFileSync(docpath,bufferdoc)

 const reaksi = {
   react: {
       text: "✅",
       key: messages[0].key
}}
await xixy.sendMessage(id,reaksi)
}
}
break;

case 'deldoc':
case '.deldoc':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
if(!argsdat)return reply('Format salah silahkan masukan kata kunci file doc')
const keynya = argsdat
const cekdatdoc = await getvalueDB('./database/dbdoc.json',keynya)
if(cekdatdoc == "0"){
const reaksi = {
react: {
      text: "✅",
      key: messages[0].key
}}
await xixy.sendMessage(id,reaksi)
}else{
let urldoc = path.join('./database/dokumen',cekdatdoc.fileName)
if(fs.existsSync(urldoc)){
await fs.unlinkSync(urldoc)
}
await delkeyDB('./database/dbdoc.json',keynya)
const reaksi = {
react: {
   text: "✅",
   key: messages[0].key
}}
await xixy.sendMessage(id,reaksi)
}
}
break;

case 'listmenu':
case '.listmenu':
case 'menulist':
case '.menulist':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
const {msglist} = require('./lib/msglist.js')
let msgres = await msglist()
await reply(msgres)
}
break;

case 'doclist':
case 'listdoc':
case '.doclist':
case '.listdoc':{
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
const {doclist} = require('./lib/doclist.js')
let docres = await doclist()
await reply(docres)
}
break;

case '.broadcast':
case 'broadcast':
case 'share':
case '.share':{
if(fromMe||isOwnerBot){
let allfetch = await xixy.groupFetchAllParticipating();
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let filcom = entrygc.filter(entrygc=>entrygc.isCommunity==false)
let filcom2 = filcom.filter(filcom=>filcom.isCommunityAnnounce==false)
let finalres = filcom2.filter(filcom2=>filcom2.announce==false)
//let fullgckeys = Object.keys(allfetch)
if(quotedMessage){
await xixy.sendMessage(id,{text:'Riru sedang mengirim Broadcast'})
let keyquote = { remoteJid: id, id: contextInfo.stanzaId } // buat key quoted dari stanzaID kontex
const msg = await getFullMessage(keyquote) // cari konten pesan di store
let isTextOnly = Object.keys(msg.message).includes('conversation')
for(let gckey of finalres){
try{
if(isTextOnly){await xixy.sendMessage(gckey.id,{text:msg.message.conversation}) }else{ await xixy.sendMessage(gckey.id, { forward: msg }) }// kirim pake forward dengan tambahan tag mentions
}catch (e){}
await delay(5000)
}
}else{
if(!argsdat) return reply("Tidak ada teks atau pesan yang di tandai");
await xixy.sendMessage(id,{text:'Riru sedang mengirim Broadcast'})
for(let gckey of finalres){
try{
await xixy.sendMessage(gckey.id,{text:argsdat})
}catch (e){}
await delay(5000)
}
}
await xixy.sendMessage(id,{text:'Pesan Broadcast Terkirim'})
}
}
break;

case'instanmenu':{
let instan =[".hidetag",".gruptag",".randomtag",".level",".levelpet",".buff"]
await xixy.sendPoll(id,"Menu Instan",instan)
 }
break;
//------------------------------
case 'allmenu':
case 'menu':
case '.allmenu':
case '.menu':{
const {menulist} = require('./lib/cekallkey.js')
let textnya = fs.readFileSync('./database/menu.json').toString()
let menu2 = fs.readFileSync('./database/menu2.json').toString()
await loading()
let menutx = `*Hai Aku ${botName} Bot, Selamat menikmati fitur Kami*\n*Mohon di pergunakan dengan bijak.*\n\n*Total Pengguna : ${await totalpengguna()} User*\n\n${textnya}\n${await menulist()}\n\n*${botName} @2024*`
//await xixy.sendMessage(id,{image:{url:'./media/logo.jpg'},caption:menutx})
await officialreply(menutx,'RIRU MENU',id)
}
break;

case 'menuowner':
case '.menuowner':{
let menu2 = fs.readFileSync('./database/menu2.json').toString()
let menutx = `*Hai Aku ${botName} Bot, Selamat menikmati fitur Kami*\n*Mohon di pergunakan dengan bijak.*\n\n*Total Pengguna : ${await totalpengguna()} User*\n\n${menu2}\n\n*${botName} @2024*`
//await xixy.sendMessage(id,{image:{url:'./media/logo.jpg'},caption:menutx})
await officialreply(menutx,'RIRU MENU',id)
}
break;

case '.owner':
case 'owner':{
let list = []
for (let i = 0; i < db.botconfig.owner.length; i++) {
list.push({
displayName: `Iwan Admin Xixy ${i+1}`,
vcard:`BEGIN:VCARD\nVERSION:3.0\nN:Iwan;Admin;Xixy;${i+1};\nFN:Iwan Admin Xixy ${i+1}\nitem1.TEL;waid=${db.botconfig.owner[i].split('@')[0]}:${db.botconfig.owner[i].split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
await xixy.sendMessage(id,{contacts:{displayName: `${list.length} kontak`,contacts:list}})
}
break;

case '.view':
case '.buka':
case '.lihat':{
if(isViewOnce){
if(oncetype == 'image'){
let msgfake = {
  message :{
    imageMessage:{...(quotedMessage.imageMessage),viewOnce:false,caption:"Ups...Kebuka Dong🤣"}
}
}
await xixy.relayMessage(id, msgfake.message, {
messageId: messages[0].key.id
})
}else if(oncetype == 'video'){
let msgfake = {
  message :{
    videoMessage:{...(quotedMessage.videoMessage),viewOnce:false,caption:"Ups...Kebuka Dong🤣"}
}
}
await xixy.relayMessage(id, msgfake.message, {
messageId: messages[0].key.id
})
} else if(oncetype == 'audio'){
let msgfake = {
  message :{
    audioMessage:{...(quotedMessage.audioMessage),viewOnce:false}
}
}
await xixy.relayMessage(id, msgfake.message, {
messageId: messages[0].key.id
})
}
}else{
  xixy.sendMessage(id,{text:"Mana pesan sekali lihat nya?"},{quoted:messages[0]})
}
}
break;

case '.tutorial':{
let textnya = await fs.readFileSync('./database/tutorial.json').toString()
await reply(textnya)
}
break;

case 'level':
case '.level':
case 'leveling':
case '.leveling':
case 'lv':
case '.lv':
case 'lvl':
case '.lvl':{
if(!argsdat)return reply(`Masukan Levelnya misal *${cmd} 50*`);
let getLevel = require('./lib/toramlevel.js');
let result = await getLevel(argsdat);
await reply(result);
}
break;

case 'img':
case '.img': {
if (!argsdat) return reply("Mana Judulnya");
let cariimg = await GOOGLE_IMG_SCRAP({ search: argsdat, limit: 31, domains: ["pinterest.com"] });
await addkeyDBarr('./database/pinlink.json', id, cariimg.result);
let imgres = cariimg.result.length;
if (imgres == 0) return reply(`Tidak ditemukan hasil untuk ${argsdat}`);
let imgs = cariimg.result[0].url;
let buffimgs = await getBuffer(imgs)
let pincaption = `*PENCARIAN GAMBAR*\n${imgres - 1} hasil ditemukan.nBalas NEXTIMG 1 untuk hasil berikutnya`
await xixy.sendMessage(id,{image:buffimgs,caption:pincaption})
await xixy.sendPoll(id,"Navigasi",["NEXTIMG 1","NEXTIMG 2"])
}
break;

case 'nextimg':
case '.nextimg': {
if(pushName == 'VoteMode'){
await xixy.sendMessage(id, { delete: {
    remoteJid : messages[0].key.remoteJid,
    id : messages[0].key.id,
    participant : messages[0].key.participant,
    fromMe : true
} })
}
let pinno = parseInt(argsdat);
let src = JSON.parse(fs.readFileSync("./database/pinlink.json").toString());
let pin = src[`${id}`];
let pinl = pin.length - 1;
if (argsdat < pinl) {
let imgs = pin[`${argsdat}`].url;
let buffimgs = await getBuffer(imgs)
let pincaption = `*PENCARIAN GAMBAR*\n${pinl} hasil ditemukan\nBalas NEXTIMG ${pinno+1} untuk hasil berikutnya`
await xixy.sendMessage(id,{image:buffimgs,caption:pincaption})
if(argsdat==(pinl-1))return await xixy.sendPoll(id,"Navigasi",[`NEXTIMG ${pinno + 1}`,`END-IMG`])
await xixy.sendPoll(id,"Navigasi",[`NEXTIMG ${pinno + 1}`,`NEXTIMG ${pinno + 2}`])
} else {
let imgs = pin[`${argsdat}`].url;
let buffimgs = await getBuffer(imgs)
let pincaption = `Selesai, Ini hasil terakhir`
await xixy.sendMessage(id,{image:buffimgs,caption:pincaption})
}
}
break;

case 'remini':
case '.remini':{
if(isImage){
const mulai = {
react: {text: "🕒",key: messages[0].key}}
await xixy.sendMessage(id,mulai)
  // download stream
const stream = await downloadContentFromMessage(isImage,'image',);
let buffer = Buffer.from([]);
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
//to remini
const {remini} = require('./lib/remini.js')
await remini(buffer, "enhance").then(async (resbuff) =>{
await xixy.sendMessage(id, { image: resbuff, caption:'*Ini Hasilnya*\n*Jgn lupa makasi ,spam = Banned*'}, { quoted: messages[0]})
  const ender = {
      react: {
          text: "✅",
          key: messages[0].key
      }}
  await xixy.sendMessage(id,ender)
}).catch(async (err) =>{
let errinfo = err.toSting()
await xixy.sendMessage(id,{text: errinfo},{quoted:messages[0]})
const enderx = {
      react: {
          text: "⚠️",
          key: messages[0].key
      }}
await xixy.sendMessage(id,enderx)
})
}else{
await xixy.sendMessage(id,{text:"Mana fotonya?"},{quoted:messages[0]})
}
}
break;

//TREAD
case 'tread':
case '.tread':
case 'trd':
case '.trd':{
if(!argsdat)return reply('linknya mana kak')
try{
await xixy.sendMessage(id,{react: {text: "🕒",key: messages[0].key}});
let datanya = await axios.get(`https://api.threadsphotodownloader.com/v2/media?url=${encodeURIComponent(argsdat)}`)
let linknya = datanya.data.video_urls[0].download_url
await xixy.sendMessage(id,{
    video : {url:linknya},
    mimetype: 'video/mp4',
    caption:"nih videonya, minimal makasih"
})
await xixy.sendMessage(id,{react: {text: "✅",key: messages[0].key}});
}catch(e){
await reply("Akun terprivat gagal download")
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
}
}
break;
   
//FACEBOOK
case 'fbdl':
case '.fbdl':
case 'fb':
case '.fb':
case 'facebook':
case '.facebook':{
if(!argsdat)return await reply("Link nya mana?");
if(!argsdat.includes("http"))return await reply("Link tidak Valid")
try{
await xixy.sendMessage(id,{react: {text: "🕒",key: messages[0].key}});
let {data} = await axios.get(`${db.botconfig.api}/fbdl/id?data=${encodeURIComponent(argsdat)}`);
if(data.status=='sukses'){
await xixy.sendMessage(id,{
video: {url :data.result.videohd},
mimetype:"video/mp4",
caption:"*FACEBOOK DOWNLOADER*\nJangan Lupa Makasihnya😎"},{quoted:messages[0]})
await xixy.sendMessage(id,{react: {text: "✅",key: messages[0].key}});
}else{
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await reply(`${data.message}`)
}
}catch(e){
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await reply(`Error : ${e.toString()}`)
}
}
break;

//TIKTOK
case 'tkdl':
case '.tkdl':
case 'tt':
case '.tt':
case 'ttdl':
case '.ttdl':
case 'tiktok':
case '.tiktok':{
if(!argsdat)return await reply("Link nya mana?");
if(!argsdat.includes("http"))return await reply("Link tidak Valid")
try{
await xixy.sendMessage(id,{react: {text: "🕒",key: messages[0].key}});
let {data} = await axios.get(`${db.botconfig.api}/tkdl/id?data=${encodeURIComponent(argsdat)}`);
if(data.status=='sukses'){
await xixy.sendMessage(id,{
video: {url :data.result.link},
mimetype:"video/mp4",
caption:"*TIKTOK DOWNLOADER*\nJangan Lupa Makasihnya😎"},{quoted:messages[0]})
await xixy.sendMessage(id,{react: {text: "✅",key: messages[0].key}});
}else{
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await reply(`${data.message}`)
}
}catch(e){
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await reply(`Error : ${e.toString()}`)
}
}
break;

//INSTAGRAM
case 'igdl':
case '.igdl':
case 'ig':
case '.ig':
case 'insta':
case '.insta':
case 'instagram':
case '.instagram':{
if(!argsdat)return await reply("Link nya mana?");
if(!argsdat.includes("http"))return await reply("Link tidak Valid")
try{
await xixy.sendMessage(id,{react: {text: "🕒",key: messages[0].key}});
let {data} = await axios.get(`${db.botconfig.api}/igdl/id?data=${encodeURIComponent(argsdat)}`);
if(data.status=='sukses'){
await xixy.sendMessage(id,{
video: {url :data.result.link},
mimetype:"video/mp4",
caption:"*INSTAGRAM DOWNLOADER*\nJangan Lupa Makasihnya😎"},{quoted:messages[0]})
await xixy.sendMessage(id,{react: {text: "✅",key: messages[0].key}});
}else{
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await reply(`${data.message}`)
}
}catch(e){
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await reply(`Error : ${e.toString()}`)
}
}
break;

//TWITTER X
case 'xdl':
case '.xdl':
case 'tw':
case '.tw':
case 'twdl':
case '.twdl':
case 'twitter':
case '.twitter':{
if(!argsdat)return await reply("Link nya mana?");
if(!argsdat.includes("http"))return await reply("Link tidak Valid")
try{
await xixy.sendMessage(id,{react: {text: "🕒",key: messages[0].key}});
let {data} = await axios.get(`${db.botconfig.api}/twdl/id?data=${encodeURIComponent(argsdat)}`);
if(data.status=='sukses'){
await xixy.sendMessage(id,{
video: {url :data.result.link},
mimetype:"video/mp4",
caption:"*TWITTER DOWNLOADER*\nJangan Lupa Makasihnya😎"},{quoted:messages[0]})
await xixy.sendMessage(id,{react: {text: "✅",key: messages[0].key}});
}else{
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await reply(`${data.message}`)
}
}catch(e){
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await reply(`Error : ${e.toString()}`)
}
}
break;

//---------------------------
case 'qc':
case '.qc':{
if(!argsdat){
await xixy.sendMessage(id,{text:"Mana Teks nya kak?😓"},{quoted:messages[0]})
}else if(argsdat){
const nama = pushName
let tg = messages[0].key.participant||id
const {quote} = require("./lib/quote.js")
let ppuser = await await xixy.profilePictureUrl(tg,'image').catch(_=>"https://telegra.ph/file/40f2cf0afcc172dbca93c.jpg")
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
await xixy.sendMessage(id,{sticker:buffer})
}).catch(async (err) => {
  await xixy.sendMessage(id,{tetx:"Kegagalan Koneksi atau Profil kaka di privat"})
})

}
}
break;

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
await xixy.sendMessage(messages[0].key.remoteJid,{sticker:buffer2},{quoted:messages[0]})
}else if(isVideo){
if(isVideo.seconds==0){
await reply("Kirim ulang Video dari bot Gabisa!!")
  }else if(isVideo.seconds<11){
    const mulai = {
      react: {
          text: "🕒",
          key: messages[0].key
      }}
    await xixy.sendMessage(id,mulai)
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
  await xixy.sendMessage(id,{sticker:buffer2},{quoted:messages[0]}).then(async (kirimsukses) =>{
        const reaksi = {
      react: {
          text: "✅",
          key: messages[0].key
      }}
    await xixy.sendMessage(id,reaksi)})
  }else{
    await reply("Durasi max 10 detik")
  }
  }else{
    await reply("Apanya mau di bikin stiker..kasi foto/video lah🙃")
  }
  }
break;

case 'smeme':
case '.smeme':{
if(!argsdat)return await reply('Mana Teks Smeme nya kak?😓');
if(isImage){
let stream = await downloadContentFromMessage(isImage,'image',);
let buffer = Buffer.from([]);
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
const {smeme} = require('./lib/smeme.js');
let resm = await smeme(buffer,argsdat);
let stkr = await getBuffer(resm);
const sticker = new Sticker(stkr, {
    pack: `${db.botconfig.botName}`, // The pack name
    author: `${db.botconfig.authorName}`, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 50, // The quality of the output file
    background: {
      "r": 255,
      "g": 255,
      "b": 255,
      "alpha": 0
  } // The sticker background color (only for full stickers)
})
let buffer2 = await sticker.toBuffer()
await xixy.sendMessage(messages[0].key.remoteJid,{sticker:buffer2},{quoted:messages[0]}) 
}else if(isStiker){
let stream = await downloadContentFromMessage(isStiker,'image',);
let buffer = Buffer.from([]);
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
let bufcv = await sharp(buffer).jpeg().toBuffer()
const {smeme} = require('./lib/smeme.js');
let resm = await smeme(bufcv,argsdat)
let stkr = await getBuffer(resm)
const sticker = new Sticker(stkr, {
    pack: `${db.botconfig.botName}`, // The pack name
    author: `${db.botconfig.authorName}`, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 50, // The quality of the output file
    background: {
      "r": 255,
      "g": 255,
      "b": 255,
      "alpha": 0
  } // The sticker background color (only for full stickers)
})
let buffer2 = await sticker.toBuffer()
await xixy.sendMessage(messages[0].key.remoteJid,{sticker:buffer2},{quoted:messages[0]})
}else{
await xixy.sendMessage(id,{text:"Mana Foto/Stiker nya kak?😓"},{quoted:messages[0]})
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
    await xixy.sendMessage(id,{text:"Mana Teks WM nya?😓"},{quoted:messages[0]})
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
        "sticker-pack-id": "xixy",
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
await xixy.sendMessage(messages[0].key.remoteJid,{sticker:{url:'./cachebot/stiker.webp'}},{quoted:messages[0]})
}else{
    await xixy.sendMessage(id,{text:"Mana Stiker nya kak?😓"},{quoted:messages[0]})
}
}
}
break;

case 'toimg':
case '.toimg':{
if(isStiker){
const stream = await downloadContentFromMessage(isStiker,'image',);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
      await sharp(buffer).jpeg().toBuffer().then(async (buf)=>{
   await xixy.sendMessage(id,{image:buf})
      }).catch(async (err)=>{
         const rr = err.toString()
         await reply(rr)
      })
   }else{
     await reply("mana stikernya?")}
   }
break;

case 'tts':
case '.tts':
case 'say':
case '.say':{
if(!argsdat){
await xixy.sendMessage(id,{text:"Mana Teks nya?😓"},{quoted:messages[0]})
}else if(argsdat){
const { getAudioBuffer } = require('simple-tts-mp3');
const say = argsdat
await getAudioBuffer(say,'id').then(async (buffer) => {
await xixy.sendMessage(id,{audio:buffer,mimetype: 'audio/mp4'},{quoted:messages[0]})
  });
}
}
break;

//Emojimix
case 'emojimix':
case '.emojimix':{
try{
let emoji1 = pesan.slice(10).split("+")[0]
let emoji2 = pesan.slice(10).split("+")[1]

let mix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)

let mixmo = mix.results[0].url
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
let buffer2 = await sticker.toBuffer()
  await xixy.sendMessage(messages[0].key.remoteJid,{sticker:buffer2},{quoted:messages[0]}) 
})
}catch(err){
  await xixy.sendMessage(id,{text:"Format salah atau input emoji kurang"},{quoted:messages[0]})
}
}
break;

case'.playlist':
case 'playlist':{
if (!argsdat) return reply('Mana judul lagunya?');
let yts = require("youtube-yts")
const arrsearch = await yts(argsdat)
let res = arrsearch?.videos?.filter(a=>a.duration.seconds<1201)||[]
//await addkeyDBarr('./database/cacheyt.json',id,res)
if(res.length==0)return reply('Musik tidak ditemukan');
let pilih = arrsearch.videos
let pushplay = [];
let pushplay2 = [];

for(let eplay of pilih){
  let objplay = {
     "title": eplay.title,
     "description": `Kreator : ${eplay.author.name}\nDurasi : ${eplay.timestamp}`,
     "id": `MP3-AUDIO ${eplay.url.split('=')[1]}`
    }
  let objplay2 = {
     "title": eplay.title,
     "description": `Kreator : ${eplay.author.name}\nDurasi : ${eplay.timestamp}`,
     "id": `MP4-VIDEO ${eplay.url.split('=')[1]}`
    }
    pushplay.push(objplay)
    pushplay2.push(objplay2)
}

let listed = {
 "title": "Playlist Musik",
 "sections": [
  {
   "title": "Download Audio MP3",
   "highlight_label": "Pilih Audio",
   "rows": pushplay
  }
 ]
}
     
 let listed2 = {
 "title": "Playlist Video",
 "sections": [
  {
   "title": "Download Video MP4",
   "highlight_label": "Pilih Video",
   "rows": pushplay2
  }
 ]
}

let msg = generateWAMessageFromContent(id, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "_Selamat mendengarkan🎧_"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: 'Berikut Daftar Putar Anda',
            subtitle: '',
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            
            buttons: [
    {
       "name": "single_select",
       "buttonParamsJson": JSON.stringify(listed,null,1)
      },
    {
       "name": "single_select",
       "buttonParamsJson": JSON.stringify(listed2,null,1)
      }
    ],
    })
    })
    }
  }
}, {})
await xixy.relayMessage(id, msg.message, {
  messageId: msg.key.id
})

}
break;

case 'play':
case 'musikplay':
case '.play':
case '.musikplay':{
if (!argsdat) return reply("Mana judul lagunya?");
let yts = require("youtube-yts")
const arrsearch = await yts(argsdat)
let res = arrsearch?.videos?.filter(a=>a.duration.seconds<1201)||[]
await addkeyDBarr('./database/cacheyt.json',id,res)
if(res.length==0)return reply("Musik tidak di temukan");
let pilih = arrsearch.videos[0]
let metadata = `*PLAY MUSIK YT*\nJudul : ${pilih.title}\nCreator : ${pilih.author.name}\nDurasi : ${pilih.timestamp}\nLink : ${pilih.url}`
let instan =[`MP3-AUDIO ${pilih.url.split('=')[1]}`,`MP4-VIDEO ${pilih.url.split('=')[1]}`,"NEXTPLAY 1"]
await xixy.sendMessage(id,{image:{url:pilih.thumbnail},caption:metadata})
if(res.length=='1')return await xixy.sendPoll(id,"Pilih Format",[`MP3-AUDIO ${pilih.url.split('=')[1]}`,`MP4-VIDEO ${pilih.url.split('=')[1]}`])
await xixy.sendPoll(id,"Pilih Format",instan)
}
break;

case 'nextplay':{
if(pushName == 'VoteMode'){
await xixy.sendMessage(id, { delete: {
    remoteJid : messages[0].key.remoteJid,
    id : messages[0].key.id,
    participant : messages[0].key.participant,
    fromMe : true
} })
}
let ytcache = JSON.parse(fs.readFileSync('./database/cacheyt.json').toString())
let noUrut = parseInt(argsdat)
let resyt = ytcache[`${id}`]
let lmt = resyt.length-1
if(argsdat<lmt){
let pilih = resyt[`${argsdat}`]
let metadata = `*PLAY MUSIK YT*\nJudul : ${pilih.title}\nKreator : ${pilih.author.name}\nDurasi : ${pilih.timestamp}\nLink : ${pilih.url}`
await xixy.sendMessage(id,{image:{url:pilih.thumbnail},caption:metadata})
let instan =[`MP3-AUDIO ${pilih.url.split('=')[1]}`,`MP4-VIDEO ${pilih.url.split('=')[1]}`,`NEXTPLAY ${noUrut+1}`]
await xixy.sendPoll(id,"Pilih Format",instan)
}else{
let pilih = resyt[`${argsdat}`]
let metadata = `*PLAY MUSIK YT*\nJudul : ${pilih.title}\nKreator : ${pilih.author.name}\nDurasi : ${pilih.timestamp}\nLink : ${pilih.url}`
await xixy.sendMessage(id,{image:{url:pilih.thumbnail},caption:metadata})
let instan =[`MP3-AUDIO ${pilih.url.split('=')[1]}`,`MP4-VIDEO ${pilih.url.split('=')[1]}`]
await xixy.sendPoll(id,"Pilih Format",instan)
}
}
break;

case 'mp3-audio':{
if(pushName == 'VoteMode'){
await xixy.sendMessage(id, { delete: {
    remoteJid : messages[0].key.remoteJid,
    id : messages[0].key.id,
    participant : messages[0].key.participant,
    fromMe : true
} })
}
let ytlink = `https://www.youtube.com/watch?v=${argsdat}`
let vid = ytlink.split("=")[1]
await xixy.sendMessage(id,{text:"Musik sedang dikirim,Sabar ya"})
if(db.botconfig.ytlocal){
try{
const {mp3v4} = require('./lib/ytdl3.js')
let buff = await mp3v4(ytlink);
await xixy.sendMessage(id,{
audio:buff,
mimetype:"audio/mp4"})
}catch(err){
await xixy.sendMessage(id,{text: err.toString()})
}
}else{
try{
let {data} = await axios.get(`${db.botconfig.api}/ytmp3/id?data=${encodeURIComponent(ytlink)}`);
if(data.status=='sukses'){
await xixy.sendMessage(id,{
audio: {url:data.result.link},
mimetype:"audio/mp4"})
}else{
await xixy.sendMessage(id,{text:`${data.message}`})
}
}catch(err){
await xixy.sendMessage(id,{text: err.toString()})
}
}
}
break; 

case 'mp4-video':{
if(pushName == 'VoteMode'){
await xixy.sendMessage(id, { delete: {
    remoteJid : messages[0].key.remoteJid,
    id : messages[0].key.id,
    participant : messages[0].key.participant,
    fromMe : true
} })
}
let ytlink = `https://www.youtube.com/watch?v=${argsdat}`
let vid = ytlink.split("=")[1]
await xixy.sendMessage(id,{text:"Video sedang dikirim,Sabar ya"})
if(db.botconfig.ytlocal){
try{
const {mp4} = require('./lib/ytdl3.js')
let dlink = await mp4(ytlink);
let buff = await getBuffer(dlink)
await xixy.sendMessage(id,{
video:buff,
mimetype:"video/mp4"})
}catch(err){
await xixy.sendMessage(id,{text: err.toString()})
}
}else{
try{
let {data} = await axios.get(`${db.botconfig.api}/ytmp4/id?data=${encodeURIComponent(ytlink)}`);
if(data.status=='sukses'){
await xixy.sendMessage(id,{
video: {url:data.result.link},
mimetype:"video/mp4",
caption:data.title})
}else{
await xixy.sendMessage(id,{text:`${data.message}`})
}
}catch(err){
await xixy.sendMessage(id,{text: err.toString()})
}
}
}
break;

case '.ytmp3':
case 'ytmp3':{
if(!argsdat){
await reply("Mana link youtube nya?")
}else{
if(argsdat.includes('http')){
await xixy.sendMessage(id,{react: {text: "🕒",key: messages[0].key}});
const regexYT = /(?<=[=\/&\%3D&])[a-zA-Z0-9_\-]{11}(?=[=\/&?#%\n\r]|$)/
let vid= regexYT.exec(argsdat)[0]
let ytlink = `https://www.youtube.com/watch?v=${vid}`
if(db.botconfig.ytlocal){
try{
const {mp3v4} = require('./lib/ytdl3.js')
let buff = await mp3v4(ytlink);
await xixy.sendMessage(id,{
audio:buff,
mimetype:"audio/mp4"},{quoted:messages[0]})
await xixy.sendMessage(id,{react: {text: "✅",key: messages[0].key}});
}catch(err){
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await xixy.sendMessage(id,{text: err.toString()},{quoted:messages[0]})
}
}else{
try{
let {data} = await axios.get(`${db.botconfig.api}/ytmp3/id?data=${encodeURIComponent(ytlink)}`);
if(data.status=='sukses'){
await xixy.sendMessage(id,{
audio: {url:data.result.link},
mimetype:"audio/mp4"},{quoted:messages[0]})
await xixy.sendMessage(id,{react: {text: "✅",key: messages[0].key}});
}else{
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await xixy.sendMessage(id,{text:`${data.message}`},{quoted:messages[0]})
}
}catch(err){
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await xixy.sendMessage(id,{text: err.toString()},{quoted:messages[0]})
}
}
}else{
await xixy.sendMessage(id,{text: "Klo ngasih link itu yg bener oi.."},{quoted:messages[0]})
}
}
}
break;

case '.ytmp4':
case 'ytmp4':{
if(!argsdat){
await reply("Mana link youtube nya?")
}else{
if(argsdat.includes('http')){
await xixy.sendMessage(id,{react: {text: "🕒",key: messages[0].key}});
const regexYT = /(?<=[=\/&\%3D&])[a-zA-Z0-9_\-]{11}(?=[=\/&?#%\n\r]|$)/
let vid= regexYT.exec(argsdat)[0]
let ytlink = `https://www.youtube.com/watch?v=${vid}`
if(db.botconfig.ytlocal){
try{
const {mp4} = require('./lib/ytdl3.js')
let dlink = await mp4(ytlink);
let buff = await getBuffer(dlink)
await xixy.sendMessage(id,{
video:buff,
mimetype:"video/mp4"},{quoted:messages[0]})
await xixy.sendMessage(id,{react: {text: "✅",key: messages[0].key}});
}catch(err){
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await xixy.sendMessage(id,{text: err.toString()},{quoted:messages[0]})
}
}else{
try{
let {data} = await axios.get(`${db.botconfig.api}/ytmp4/id?data=${encodeURIComponent(ytlink)}`);
if(data.status=='sukses'){
await xixy.sendMessage(id,{
video: {url:data.result.link},
mimetype:"video/mp4",
caption:data.title},{quoted:messages[0]})
await xixy.sendMessage(id,{react: {text: "✅",key: messages[0].key}});
}else{
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await xixy.sendMessage(id,{text:`${data.message}`},{quoted:messages[0]})
}
}catch(err){
await xixy.sendMessage(id,{react: {text: "⚠️",key: messages[0].key}});
await xixy.sendMessage(id,{text: err.toString()},{quoted:messages[0]})
}
}
}else{
await xixy.sendMessage(id,{text: "Klo ngasih link itu yg bener oi.."},{quoted:messages[0]})
}
}
}
break;

case '.soundeffect':
case 'efeksuara':
case '.sound':
case 'sfx':
case '.sfx':{
if (!argsdat) return await reply('Kata kunci/Judulnya mana kak??😓');
const se = require("./lib/se.js")
let sfxRes = await se(argsdat)
if(sfxRes.status=='error')return reply(sfxRes.message);
if(sfxRes.result.sound.length == 1){await xixy.sendMessage(id,{audio:{url:sfxRes.result.sound[0].link},mimetype:'audio/mp4'},{quoted:messages[0]})}
if(sfxRes.result.sound.length > 12){sfxRes.result.sound.length = 12}
sfxcache[id] = sfxRes.result.sound
let pollsfx = sfxRes.result.sound.map(a=>"SFXGET "+a.title)
await xixy.sendPoll(id,'*LIST SFX*',pollsfx)
}
break;
        
case 'sfxget':{
  if(pushName == 'VoteMode'){
  await xixy.sendMessage(id, { delete: {
      remoteJid : messages[0].key.remoteJid,
      id : messages[0].key.id,
      participant : messages[0].key.participant,
      fromMe : true
  } })
  }
  if(!sfxcache[id])return;
  let dataselect = sfxcache[id].filter(a => a.title == argsdat)
  if(dataselect.length == '0')return await reply('Konten sudah kadaluarsa')
  let link = dataselect[0].link
 await xixy.sendMessage(id,{audio:{url:link},mimetype:'audio/mp4'})
 delete sfxcache[id]
}
break;

case '.anime':
case '.carianime':
case 'carinime':
case '.carinime':{
if (!argsdat) return await reply('Kata kunci/Judulnya mana kak??😓');
const getAnime = require("./lib/getAnime.js")
let findRes = await getAnime(argsdat)
if(findRes.status=='error')return reply(findRes.message);
let findanime = findRes.result.anime
const epget = (ars) =>{
 if(ars.includes('(Episode')){
let fn = `Episode${ars.split('(Episode')[1].replace(')','')}`
return fn
}else{return ' '}
}

if(findanime.length > 12){
findanime.length = 12
findanimecache[id] = findanime
let listAnime = findanime.map(desu =>"ANMF "+desu.title)
await xixy.sendPoll(id,"*PENCARIAN ANIME*\nSumber: _OtakuDesu_",listAnime)
}else if(findanime.length == 1){
findanimecache[id] = findanime
let listAnime = findanime.map(desu =>"ANMF "+desu.title)
listAnime.push('Tunggu Update')
await xixy.sendPoll(id,"*PENCARIAN ANIME*\nSumber: _OtakuDesu_",listAnime)
}else{
findanimecache[id] = findanime
let listAnime = findanime.map(desu =>"ANMF "+desu.title)
await xixy.sendPoll(id,"*PENCARIAN ANIME*\nSumber: _OtakuDesu_",listAnime)
}
}
break;

case 'anmf':{
if (!argsdat) return;
if(pushName == 'VoteMode'){
await xixy.sendMessage(id, { delete: {
  remoteJid : messages[0].key.remoteJid,
  id : messages[0].key.id,
  participant : messages[0].key.participant,
  fromMe : true
} })
}
if(!findanimecache[id])return
let dataselect = findanimecache[id].filter(a => a.title == argsdat)
if(dataselect.length == '0')return await reply('Konten sudah kadaluarsa')
let link = dataselect[0].link
const getEpisode = require("./lib/getEpisode.js")
let desuEpd = await getEpisode(link)
if(desuEpd.status=='error')return reply(desuEpd.message);
let arrepd = desuEpd.result.episode
if (arrepd.length > 12){
arrepd.length = 12
episodecache[id] = arrepd
let listEpisode = arrepd.map(desu =>"EPD "+desu.title)
await xixy.sendMessage(id,{image:{url:desuEpd.result.thumbnail},caption:`*${dataselect[0].title}*\n\nSumber: _OtakuDesu_`});
await xixy.sendPoll(id,"*EPISODE TERBARU*",listEpisode);
delete findanimecache[id]
}else if (arrepd.length == 1){
episodecache[id] = arrepd
let listEpisode = arrepd.map(desu =>"EPD "+desu.title)
listEpisode.push('Tunggu Update')
await xixy.sendMessage(id,{image:{url:desuEpd.result.thumbnail},caption:`*${dataselect[0].title}*\n\nSumber: _OtakuDesu_`});
await xixy.sendPoll(id,"*EPISODE TERBARU*",listEpisode);
delete findanimecache[id]
}else{
episodecache[id] = arrepd
let listEpisode = arrepd.map(desu =>"EPD "+desu.title)
await xixy.sendMessage(id,{image:{url:desuEpd.result.thumbnail},caption:`*${dataselect[0].title}*\n\nSumber: _OtakuDesu_`});
await xixy.sendPoll(id,"*EPISODE TERBARU*",listEpisode);
delete findanimecache[id]
}
}
break;
        
case 'ongoing':
case '.ongoing':
case 'nimego':
case '.nimego':
case 'gonime':
case '.gonime':{
let getOngoing = require("./lib/getOngoing.js");
let desuRes = await getOngoing()
if(desuRes.status=='error')return reply(desuRes.message);
let arrdesu = desuRes.result.anime
if(arrdesu.length > 12){
arrdesu.length = 12
animecache[id] = arrdesu
let listAnime = arrdesu.map(desu =>"ANM "+desu.title)
await xixy.sendPoll(id,"*ANIME ONGOING TERBARU*\nSumber: _OtakuDesu_",listAnime)
}else if(arrdesu.length == 1){
animecache[id] = arrdesu
let listAnime = arrdesu.map(desu =>"ANM "+desu.title)
listAnime.push('Tunggu Update')
await xixy.sendPoll(id,"*ANIME ONGOING TERBARU*\nSumber: _OtakuDesu_",listAnime)
}else{
animecache[id] = arrdesu
let listAnime = arrdesu.map(desu =>"ANM "+desu.title)
await xixy.sendPoll(id,"*ANIME ONGOING TERBARU*\nSumber: _OtakuDesu_",listAnime)
}
}
break;

case 'anm':{
if (!argsdat) return;
if(pushName == 'VoteMode'){
await xixy.sendMessage(id, { delete: {
    remoteJid : messages[0].key.remoteJid,
    id : messages[0].key.id,
    participant : messages[0].key.participant,
    fromMe : true
} })
}
if(!animecache[id])return
let dataselect = animecache[id].filter(a => a.title == argsdat)
if(dataselect.length == '0')return await reply('Konten sudah kadaluarsa')
let link = dataselect[0].link
const getEpisode = require("./lib/getEpisode.js")
let desuEpd = await getEpisode(link)
if(desuEpd.status=='error')return reply(desuEpd.message);
let arrepd = desuEpd.result.episode
if (arrepd.length > 12){
arrepd.length = 12
episodecache[id] = arrepd
let listEpisode = arrepd.map(desu =>"EPD "+desu.title)
await xixy.sendMessage(id,{image:{url:desuEpd.result.thumbnail},caption:`*${dataselect[0].title}*\n\nSumber: _OtakuDesu_`});
await xixy.sendPoll(id,"*EPISODE TERBARU*",listEpisode);
delete animecache[id]
}else if (arrepd.length == 1){
episodecache[id] = arrepd
let listEpisode = arrepd.map(desu =>"EPD "+desu.title)
listEpisode.push('Tunggu Update')
await xixy.sendMessage(id,{image:{url:desuEpd.result.thumbnail},caption:`*${dataselect[0].title}*\n\nSumber: _OtakuDesu_`});
await xixy.sendPoll(id,"*EPISODE TERBARU*",listEpisode);
delete animecache[id]
}else{
episodecache[id] = arrepd
let listEpisode = arrepd.map(desu =>"EPD "+desu.title)
await xixy.sendMessage(id,{image:{url:desuEpd.result.thumbnail},caption:`*${dataselect[0].title}*\n\nSumber: _OtakuDesu_`});
await xixy.sendPoll(id,"*EPISODE TERBARU*",listEpisode);
delete animecache[id]
}
}
break;

case 'epd': {
if (!argsdat) return;
if(pushName == 'VoteMode'){
await xixy.sendMessage(id, { delete: {
  remoteJid : messages[0].key.remoteJid,
  id : messages[0].key.id,
  participant : messages[0].key.participant,
  fromMe : true
} })
}
if(!episodecache[id])return
let dataselect = episodecache[id].filter(a => a.title == argsdat)
if(dataselect.length == '0')return await reply('Konten sudah kadaluarsa')
let link = dataselect[0].link
const getDesustream = require('./lib/getDesustream.js');
let desuStream = await getDesustream(link);
if(desuStream.status=='error')return await reply(desuStream.message)
await xixy.sendMessage(id,{image:{url:desuStream.result.logo},caption:`_Link Streaming sudah Siap Silahkan klik Link dibawah ini untuk Menonton_\n\n${desuStream.result.linkStream}`});
delete episodecache[id]
}
break;

case '.sholat':
case '.infosholat':
case '.jadwalsholat':{
if(!argsdat)return await reply(`Format salah kak, Silahkan masukan nama kota dengan format berikut *${cmd} nama kota*`);
const getKota = require("./lib/getKota.js")
let arrKota = await getKota(argsdat)
if(arrKota.length == 0)return reply("Nama kota tidak ditemukan");
if(arrKota.length > 12){
arrKota.length = 12
sholatcache[id] = arrKota
let listKota = arrKota.map(info =>"IMS "+`${info.kota} [${info.kode}]`)
await xixy.sendPoll(id,"*PILIH KOTA ANDA*\n_Sumber: JadwalSholat Org_",listKota)
}else if(arrKota.length == 1){
sholatcache[id] = arrKota
let listKota = arrKota.map(info =>"IMS "+`${info.kota} [${info.kode}]`)
listKota.push('Tunggu Update')
await xixy.sendPoll(id,"*PILIH KOTA ANDA*\n_Sumber: JadwalSholat Org_",listKota)
}else{
sholatcache[id] = arrKota
let listKota = arrKota.map(info =>"IMS "+`${info.kota} [${info.kode}]`)
await xixy.sendPoll(id,"*PILIH KOTA ANDA*\n_Sumber: JadwalSholat Org_",listKota)
}
}
break;

case 'ims': {
if (!argsdat) return;
if(pushName == 'VoteMode'){
await xixy.sendMessage(id, { delete: {
      remoteJid : messages[0].key.remoteJid,
      id : messages[0].key.id,
      participant : messages[0].key.participant,
      fromMe : true
} })
}
if(!sholatcache[id])return
let kodewilayah = argsdat.split("[")[1].split("]")[0]
let dataselect = sholatcache[id].filter(a => a.kode == kodewilayah)
if(dataselect.length == '0')return await reply('Konten sudah kadaluarsa')
let kode = dataselect[0].kode
const getJadwalSholat = require('./lib/jadwalsholat.js');
let hasil = await getJadwalSholat(kode);
let datakota = require('./database/kodearea.json');
let  reskota = datakota.filter(a=>a.kode==kode)
let kota = reskota[0].kota
if(hasil.status === 'success'){
let text = `*Jadwal Sholat Area ${kota}*\n\nIsya: ${hasil.result.isya}\nShubuh: ${hasil.result.shubuh}\nDzuhur: ${hasil.result.dzuhur}\nAshar: ${hasil.result.ashr}\nMaghrib: ${hasil.result.maghrib}\n\n_*Zona waktu setempat_`
await xixy.sendMessage(id,{image:{url:"./src/sholat.png"},caption:text})
}else{
await xixy.sendMessage(id,{text:hasil.message})
}
delete sholatecache[id]
}
break;

case '.ai':{
if(!argsdat){
await reply("Mana Pertanyaanya")
}else if(argsdat){
const {aichat} = require('./lib/ai.js')
let ltes = await xixy.sendMessage(id,{text:"AI sedang Berfikir..."},{quoted:messages[0]}).then(a=>a.key)
const aires = await aichat(argsdat)
await delay(1000)
if(aires.error==''){
 await xixy.sendMessage(id,{text:`${aires.respon}`,edit:ltes})
}else{
await reply(`${aires.error}`) 
}
}
}
break

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
await xixy.sendMessage(messages[0].key.remoteJid,{image:sharpen,caption:"Ini hasilnya"},{quoted:messages[0]})
}).catch(async (err) =>{
await xixy.sendMessage(messages[0].key.remoteJid,{text:"Gagal wir"},{quoted:messages[0]})
})
}else{
await reply("Fotonya mana?")
}
}
break;

case 'tovn':
case '.tovn':{
if(isAudio){
const stream = await downloadContentFromMessage(isAudio,'audio',);
let buffer = Buffer.from([]);
for await (const chunk of stream) {
  buffer = Buffer.concat([buffer, chunk]);
}
await xixy.sendMessage(id,{audio:buffer,mimetype: 'audio/mp4',ptt:true},{quoted:messages[0]})
}else{
await reply("Mana audio nya?")
}
}
break;

case '.setwelcome':{
if(!isAdmins)return await reply("Lu siapa? Admin?");
if(!argsdat)return reply(`Format penggunan salah!!/nContoh setup : ${cmd} Selamat Datang @user di grup kami @grup`)
let pathintro = `./cachegrup/${id}_welcome.json`
await fs.writeFileSync(pathintro,argsdat)
await reply('Set welcome sukses')
}
break;

case 'randomtag':
case '.randomtag':
case '.gachatag':{
if(!isAdmins)return await reply("Lu siapa? Admin?");
let alltagmem = participants.map(a => a.id)
let rdmmem = alltagmem[Math.floor(Math.random() * alltagmem.length)]
await xixy.sendMessage(id,{text:`Member Terpilih adalah\n\n👉 @${rdmmem.split("@")[0]}`,mentions:[rdmmem]})
}
break;

case '.h':
case '.hidetag':
case '.tag':{
let hidetext = argsdat||"Nimbrung Wirr"
if(!isAdmins)return await reply("Lu siapa? Admin?")
if(quotedMessage){
let keyquote = { remoteJid: id, id: contextInfo.stanzaId } // buat key quoted dari stanzaID kontex
const msg = await getFullMessage(keyquote) // cari konten pesan di store
let isTextOnly = Object.keys(msg.message).includes('conversation')
    //console.log(JSON.stringify(msg,null,1))
let alltagmem = participants.map(a => a.id)
if(isTextOnly) return await xixy.sendMessage(id,{text:msg.message.conversation,mentions: alltagmem})//modif jika cuma text
await xixy.sendMessage(id, { forward: msg,mentions: alltagmem }) // kirim pake forward dengan tambahan tag mentions
}else{
let alltagmem = participants.map(a => a.id)
await xixy.sendMessage(id,{text:hidetext,mentions:alltagmem})
}
}
break;

case '.tag':
case '.gruptag':
case '.tagall':{
if(isAdmins){
let list = participants.map(a => a.id)
let taglist =''
for (let mem of participants) {
taglist += `■@${mem.id.split('@')[0]}\n`
}
const templateMessage = {
    text: "Grup Tag Member\n\n"+taglist,
    mentions: list}
await xixy.sendMessage(id, templateMessage,{quoted:messages[0]})
}
if(!isAdmins){
await reply("Lu Siapa? Admin?")
}
}
break;

case '.carigc':{
if(!argsdat){
await xixy.sendMessage(id, {text:"Masukkan Nama GC yang ingin dicari"})
}else{
const {gcsearch} = require('./lib/gcsearch.js')
const gc = await gcsearch(argsdat)
let res = gc.respon
let allgctxt = ''
for(let i= 0 ; i < res.length; i++){
  let textgc = `Nama GC : ${res[i].judul}\nLink : ${res[i].link}`
allgctxt += textgc+"\n\n"
}
await reply(allgctxt)
}
}
break;

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
await xixy.groupSettingUpdate(id,'announcement')
await xixy.sendMessage(id,{text:`Grup telah ditutup oleh @${sender.split("@")[0]}`,mentions: [sender.toString()]})
} else
if(!isAdmins){
await reply("Lu Siapa? Admin?")
}
}
break;

//Buka GC
case '.bukagc':
case '.bukagrup':
case '.opengc':
case 'opengroup':{
if(!isBotAdmins){
await reply(`Gagal Menutup karena ${db.botconfig.botName} bukan Admin Grup`)
} else
if(isAdmins){
await xixy.groupSettingUpdate(id,'not_announcement')
await xixy.sendMessage(id,{text:`Grup telah dibuka oleh @${sender.split("@")[0]}`,mentions: [sender.toString()]})
} else
if(!isAdmins){
await reply("Lu Siapa? Admin?")
}
}
break;

//Promote
case 'promote':
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
let target = `@${quotedSender.split("@")[0]}`
await xixy.groupParticipantsUpdate(id,[quotedSender],"promote")
await xixy.sendMessage(id,{text: `Member ${target} naik jabatan sebagai Admin Grup`,mentions:[quotedSender]})
}else if(!(mentionedJid.length==0)){
const target = `@${mentionedJid.join(" @")}`
const txtarget = target.replace(/\@s\.whatsapp\.net/g,'')
await xixy.groupParticipantsUpdate(id,mentionedJid,"promote")
await xixy.sendMessage(id,{text: `Member ${txtarget} naik jabatan sebagai Admin Grup`,mentions:mentionedJid})
}
}
};
break;

//Demote
case 'demote':
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
let target = `@${quotedSender.split("@")[0]}`
await xixy.groupParticipantsUpdate(id,[quotedSender],"demote")
await xixy.sendMessage(id,{text: `Member ${target} turun jabatan sebagai Member Biasa`,mentions:[quotedSender]})
}else if(!(mentionedJid.length==0)){
const target = `@${mentionedJid.join(" @")}`
const txtarget = target.replace(/\@s\.whatsapp\.net/g,'')
await xixy.groupParticipantsUpdate(id,mentionedJid,"demote")
await xixy.sendMessage(id,{text: `Member ${txtarget} turun jabatan sebagai Member Biasa`,mentions:mentionedJid})
}
}
};
break;

case 'kick':
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
let target = `@${quotedSender.split("@")[0]}`
await xixy.groupParticipantsUpdate(id,[quotedSender],"remove")
await xixy.sendMessage(id,{text: `Member ${target} berhasil di tendang dari Grup`,mentions:[quotedSender]})
}else if(!(mentionedJid.length==0)){
const target = `@${mentionedJid.join(" @")}`
const txtarget = target.replace(/\@s\.whatsapp\.net/g,'')
await xixy.groupParticipantsUpdate(id,mentionedJid,"remove")
await xixy.sendMessage(id,{text: `Member ${txtarget} berhasil di tendang dari Grup`,mentions:mentionedJid})
}
}
};
break;

case 'getcase':
case '.getcase':{
if(!argsdat) return reply("Mana nama case nya");
if(!isOwnerBot) return reply("Fitur Ini Khusus OwnerBot");
const getCase = (namaCase) => {
try{
let cariCase = `case '${namaCase}'` + fs.readFileSync("./fiturauto.js").toString().split(`case '${namaCase}'`)[1].split("break")[0] + "break;"
return cariCase
}catch(e){
return `case *${namaCase}* tidak ditemukan`
}
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

case 'trackip':
case '.trackip':{
if (!argsdat) return reply(`Contoh: ${command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${argsdat}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success)return await reply(`IP ${text} tidak ditemukan!`);
await xixy.sendMessage(id, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
await delay(2000);
await reply(formatIPInfo(res)); 
} catch (e) { 
await reply(`Error: Gagal mengambil data IP ${text}`);
}
}
break;
        
case '.net':
case 'ping':
case '.ping':{
const startTime = new Date();
const pingMsg = await xixy.sendMessage(id, { text: 'Membaca Respon Ping...' }, { quoted : messages[0]})
await xixy.relayMessage(id, {
protocolMessage: {
   key: pingMsg.key,
   type: 14,
    editedMessage: {
     conversation: `🌩Kecepatan Ping ${db.botconfig.botName} ${new Date() - startTime} Milidetik`
     }
   }
 }, {});
}
break;

default:{
if(fromMe)return;
if(cmd){
  const dbdat = await getvalueDB('./database/automenu.json',cmd)
if(dbdat == "0"){
  //No Reaksi
}else{
const dbdatdecode = decodeURIComponent(dbdat.content)
await reply(dbdatdecode)
  }
}
if(cmd){
const dbdatdoc = await getvalueDB('./database/dbdoc.json',cmd)
  if(dbdatdoc == "0"){
//reaksi
  }else{
    let urldoc = path.join('./database/dokumen',dbdatdoc.fileName)
    let fileName = dbdatdoc.fileName
    let mimedoc = dbdatdoc.mimetype
    await xixy.sendMessage(id,{
      document:{url: urldoc},
      caption: fileName,
      fileName: fileName,
      mimetype: mimedoc
    },{quoted:messages[0]})
  }
}

}
//------------------------------
}
//SIMI SIMI Autorun
/*if(pesan && !fromMe){
if(onsimi){
  const {simi} = require('./lib/simi.js')
  await simi(pesan).then(async (simires)=>{await reply(simires.respon)}).catch(err=>{})
}
}*/
if(pesan?.startsWith(('lagi apa'||'Lagi apa'))){
  if(mentionedJid){
    const {lagiapa} = require('./lib/lagiapa.js')
    const hasil = await lagiapa()
    const tagtext = mentionedJid[0].split('@')[0]
   const result = `si @${tagtext} ${hasil}`
    await xixy.sendMessage(id, {text: result,mentions:mentionedJid}, {quoted: messages[0]})
  }
}
}else{
switch(command){
case 'allmenu':
case 'menu':
case '.menu':
case 'bot':{
let regis = `ID Personal/ID Grup Tidak terdaftar VIP\n\n*ID Pendaftaran ${id}*\n\nSilahkan Salin ID Pendaftaran dan Hubungi Owner Bot untuk Pembayayan\n\n*Info Harga*\n1. Paket 15k masa aktif 30 hari\n2. Paket 28K masa aktif 60 hari\n3. Paket Bebas 1k per 2 hari\n*Pembayaran*\nDana dan Gopay\n\nUntuk melihat contoh semua layanan Bot kami ketik *.tesmmenu*`

await xixy.sendMessage(id,{image:{url:'./media/logo.jpg'},caption:regis}, {
quoted:messages[0]})
}
break;

case '.tesmenu':{
const {menulist} = require('./lib/cekallkey.js')
let textnya = fs.readFileSync('./database/menu.json').toString()
let menu2 = fs.readFileSync('./database/menu2.json').toString()
await loading()
let menutx = `*Hai Aku ${botName} Bot, Selamat menikmati fitur Kami*\n*Mohon di pergunakan dengan bijak.*\n\n*Total Pengguna : ${await totalpengguna()} User*\n\n${textnya}\n${await menulist()}\n\n*${botName} @2024*`
//await xixy.sendMessage(id,{image:{url:'./media/logo.jpg'},caption:menutx})
await officialreply(menutx,'RIRU MENU',id)
}
break;

case 'owner':
case '.owner':{
  const vcard = "BEGIN:VCARD\n"+"VERSION:3.0\n"+"N:Admin;Riru;Store;;\n"+"FN:Admin Riru Store\n"+"item1.TEL;waid=6285650875878:+62 856-5087-5878\n"+"item1.X-ABLabel:Ponsel\n"+"END:VCARD"
    await xixy.sendMessage(id,{contacts:{displayName: "Admin Riru Store",contacts:[{vcard}],}})
}
break;

case 'cekvip':
case '.cekvip':{
let idnya = q||id
const pathDB = './database/langganan.json'
const ngc = async (dat) =>{
    try{
    const data = await xixy.groupMetadata(dat)
    return data.subject
    }catch(err){return "Grup Tidak Terdaftar"}
  }
if(idnya.includes('@g.us')){
  const namagrup = await ngc(idnya)
  let time = await getvalueDB(pathDB,idnya)
  let data = `*Status Langganan VIP*\n\nNama Grup : ${namagrup}\nID : ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await xixy.sendMessage(id,{text:data})
}
if(idnya.includes('@s.whatsapp.net')){
  let time = await getvalueDB(pathDB,idnya)
  let data = `*Status Langganan VIP*\n\nID : ${idnya}\nSisa Hari : ${await sisaHari(time)}\nMasa Aktif : ${await cekTanggal(time)}\nJam : ${await cekWaktu(time)}\nStatus VIP : ${await statusVip(time)}\n*${botName}*`
await xixy.sendMessage(id,{text:data})
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