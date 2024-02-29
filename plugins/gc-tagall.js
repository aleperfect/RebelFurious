let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `*⺀🔥Buen@s días, tardes y noches pero no más buenos que ustedes 🔥⺀*\n\n❄️ ${oi}\n\n❄️ *@rebelfury_clan:*\n`
for (let mem of participants) {
teks += `🇨🇳👺 @${mem.id.split('@')[0]}\n`}
teks += `➤ 𝐑𝐞𝐛𝐞𝐥 𝐅𝐮𝐫𝐢𝐨𝐮𝐬`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler