const { removeEmojis, bytesToSize, getBuffer, fetchJson, getRandom, getGroupAdmins, runtime, sleep, makeid, isUrl, generateProfilePicture } = require("../lib/func_Server");
let handler = async (m, { args, usedPrefix, text, command }) => {

if (!text) return m.reply(`Example: .item Lizard_Slayer`)
let news = await fetchJson(`https://api.zahwazein.xyz/convert/ssweb?url=https://rucoykingdom.com/items/${text}&query=desktop&apikey=787520e1bc`)
let res = news.result.url
conn.sendMessage(m.chat, {image : {url: res}, caption: 'Item yang menarik!'}, {quoted: m})
}
handler.command = /^item$/i
handler.limit = true
handler.group = true

handler.fail = null

module.exports = handler

