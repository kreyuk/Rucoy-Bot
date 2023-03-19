let handler = async (m, { args, usedPrefix, text, command }) => {
let manuter = `
*ORANG* Trusted
•Akbar / akbaryy
089522420831
•Arif prasetia
08979957473
•Dewa
085786337968
•Ryptyx
08995470681

*MIDMAN* Trusted
•Levi
082148838863
•Yessir / Oldtank Popz
088973942264

*JASA PINDAH BARANG* Trusted
•Komisaris Admin Utama / Muhammadiyah
081349643008
`
conn.sendMessage(m.chat,{text: manuter}, {quoted: m})
}

handler.command = /^(manusiaterpilih)$/i
handler.limit = false

module.exports = handler
