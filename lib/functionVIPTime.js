const {getvalueDB} = require('./functionDB.js')
//Sisa Hari Masa VIP
const sisaHari = async (timeStamp) =>{
var timedata = parseInt(timeStamp)
var sekarang = new Date().getTime()
var selisih = timedata - sekarang
const shari = Math.floor( selisih / (1000 * 60 * 60 * 24));
const sjam = Math.floor( selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const smenit = Math.floor( selisih % (1000 * 60 * 60) / (1000 * 60))
const sdetik = Math.floor( selisih % (1000 * 60) / 1000)
var result = `${shari} hari ${sjam} jam ${smenit} menit ${sdetik} detik`
if(sdetik<0){
var habis = "0 hari 0 jam 0 menit 0 detik"
return habis
}else{
return result
}
}

//Tanggal Berlakunya VIP
const cekTanggal = async (timeStamp) => {
if(!timeStamp=="0"){
const day = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var time = parseInt(timeStamp)
var kalibrasi = time + 25200000
const waktu = new Date(kalibrasi)
let hari = day[waktu.getDay()]
let tanggal = waktu.getDate()
let bulan = month[waktu.getMonth()]
let tahun = waktu.getFullYear()
const kalender = `${hari}, ${tanggal} ${bulan} ${tahun}`
return kalender
}
if(timeStamp=="0"){
  return "-";
}
}

//Jam Berlakunya VIP
const cekWaktu = async (timeStamp) =>{
if(!timeStamp=="0"){
const time = parseInt(timeStamp)
const hour = new Date(time).getHours()
const minutes = new Date(time).getMinutes()

const wibConvert = (numdata) => {
const modifjam = numdata + 7
if(modifjam>23){
  return modifjam - 24}
if(modifjam<24){
  return modifjam}
}

var datajam = wibConvert(hour)
var menitjam = (datamenit) =>{
  if(datamenit>9){return datamenit}
  if(datamenit<10){return '0'+datamenit}
}
if(datajam<10){
  const res = '0'+datajam;
  return `${res}:${menitjam(minutes)}`}
if(datajam>9){
  return `${datajam}:${menitjam(minutes)}`}
}
if(timeStamp=="0"){
  return "-";
}
}
//StatusVip
const statusVip = async (timeStamp) => {
var sekarang = new Date().getTime()
const sisa = timeStamp - sekarang
return sisa>0
}

//Conver Hari ke timeStamp
const haritimestamp = async (angka) =>{
var toStampWaktu = `${angka}`*1000*60*60*24
const sekarang = new Date().getTime()
var timeStamp = sekarang + toStampWaktu
return timeStamp
}

//cekvipbyid
const isVIP = async (id) => {
  const pathDB = './database/langganan.json'
  var time = await getvalueDB(pathDB,id)
  if(time=='0'){return false}else{
    return await statusVip(time)
  }
}

module.exports = {sisaHari,cekWaktu,cekTanggal,statusVip,haritimestamp,isVIP}