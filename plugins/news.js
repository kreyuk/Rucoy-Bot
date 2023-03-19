let handler = async (m, { args, usedPrefix, text, command }) => {
let news = await (`https://image.thum.io/get/maxAge/5/width/1280/wait/12/https://www.rucoyonline.com/news`)
conn.sendMessage(m.chat, {image : {url: news}, caption: 'infonya bwang!'}, {quoted: m})

}

handler.command = /^news?$/i
handler.limit = true

handler.fail = null

module.exports = handler


