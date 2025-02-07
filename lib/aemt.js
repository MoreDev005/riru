const dlytmp3 = (link) => {
return `https://aemt.me/downloadAudio?URL=${link}&videoName=video`
}

const dlytmp4 = (link) => {
return `https://aemt.me/downloadVideo?URL=${link}&videoName=video`
}

module.exports = {dlytmp3,dlytmp4}