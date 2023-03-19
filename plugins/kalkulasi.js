const { removeEmojis, bytesToSize, getBuffer, fetchJson, getRandom, getGroupAdmins, runtime, sleep, makeid, isUrl, generateProfilePicture } = require("../lib/func_Server")
let handler = async (m, { args, usedPrefix, text, command }) => {
if (!text) return m.reply(`Example: .${command} level`)
let news = await fetchJson(`https://api.zahwazein.xyz/convert/ssweb?url=https://rucoykingdom.com/calculator/${text}&query=desktop&apikey=787520e1bc`)
let res = news.result.url
conn.sendMessage(m.chat, {image : {url: res}, caption: 'infonya bwang!'}, {quoted: m})

}
handler.command = /^(kalkulasi)$/i
handler.limit = true

module.exports = handler