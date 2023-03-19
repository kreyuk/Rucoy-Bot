const fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, text, command }) => {
if (!text) return m.reply(`Nick rucoynya mana?
Example: .nick Asep`)
let nk = [`https://saipulanuar.ga/api/download/ssweb2?url=https://www.rucoyonline.com/characters/${text}`]
conn.sendMessage(m.chat,{image:{url: nk}, caption:'GG!'}, {quoted:m })
}
handler.command = /nick/i

handler.limit = true

module.exports = handler
