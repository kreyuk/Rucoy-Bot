let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return


/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


    
    let azm = /(Azmal)/i
    let isSayanKamu = azm.exec(m.text)
    let samu = [
'❤️',
'🥰',
'😍'
]
let sayagkamuh = samu[Math.floor(Math.random() * samu.length)]
    if (isSayanKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${sayagkamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Kang milf ${sayagkamuh}`, m)
    }, 1000)
    }
    
/*    
    
    let menux= /(.menu)/i
    let isMenu1 = menux.exec(m.text)
    let memu = [
'❤️',
'🥰',
'😍'
]
   let menuw = memu[Math.floor(Math.random() * memu.length)]
    if (isMenu1 && !m.fromMe) {
    conn.sendMessage(m.chat, {
  })
   setTimeout(() => {
        conn.reply(m.chat,`
       ━━━ *Rucoy-Bot* ━━━

 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 
 .nick
 .news
 .manusiaterpilih
 .kalkulasi
 .listitem
 .item
 .map`, m)
    }, 1000)
    }


    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - In - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

   
    
    let ass = /(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)/i
    let isAss = ass.exec(m.text)
    let assal = [
'🥰',
'😇',
'😅'
]
let assl = assal[Math.floor(Math.random() * assal.length)]
    if (isAss && !m.fromMe) {
    let assalamualaikum = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-02-at-20.46.15.opus')
    conn.sendMessage(m.chat, {
        react: {
          text: `${assl}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, assalamualaikum, '', '', m, true)
    }, 1000)
    }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    
   /* let hiai = /(hi|hii|hiii|hi aine|hii aine|hiii aine|hy|halo|hallo|helo|hello|hy aine|halo aine|hallo aine|helo aine|hello aine)/i
    let isAih = hiai.exec(m.text)
    let hiain = [
'🥰',
'😇',
'😅'
]
let hiaine = hiain[Math.floor(Math.random() * hiain.length)]
    if (isAih && !m.fromMe) {
    let helloaine = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-07-14-at-18.12.33.opus') 
    conn.sendMessage(m.chat, {
        react: {
          text: `${hiaine}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, helloaine, '', '', m, true)
    }, 1000)
    }*/

}

handler.limit = true
module.exports = handler
