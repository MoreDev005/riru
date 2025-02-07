const {uploadImage} = require('../lib/uploadImage.js')
const smeme = async (bg,argsdat) => {
    
    let arr = argsdat.split(`|`)
    let length = arr.length
    if(arr[0]==""){
    let atas = ' '
    let bawah = arr[1]
    let url = await uploadImage(bg)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    return meme
    }else{
    let atas = arr[0]
    let bawah = arr[1]
        let url = await uploadImage(bg)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    return meme
    }

}

module.exports = {smeme}