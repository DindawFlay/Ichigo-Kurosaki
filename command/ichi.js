/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

//Module 
require('../settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const similarity = require('similarity')
const yts = require('yt-search');

//Waktu
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss') 

//Lib
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File} = require('../lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom} = require('../lib/myfunc')

//database
global.db = JSON.parse(fs.readFileSync('./storage/db.json'))
if (global.db) global.db = {
chats: {},
...(global.db || {})
}

//Module Exports
module.exports = ichi = async(ichi, m, chatUpdate, store) => {
try {
  //console.log(m)
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = ichi.user.id ? ichi.user.id.split(":")[0]+"@s.whatsapp.net" : ichi.user.id
const isOwner = [ichi.user.id, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == ichi.user.id ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const { type, quotedMsg, mentioned, now, fromMe } = m
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await ichi.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupOwner.includes(m.sender) || groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isNumber = x => typeof x === 'number' && !isNaN(x)
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `SesillanesiaCanz`, 'jpegThumbnail': fs.readFileSync('./media/images.jpeg')}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "status@broadcast"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`, 'jpegThumbnail': fs.readFileSync('./media/images.jpeg')}}}
const faketxt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": "SesillaRei",
                 "title": "AkuSesillanesia",
                 'jpegThumbnail': fs.readFileSync('./media/images.jpeg')
                        }
	                  } 
                     }
            const fakegroup = (teks) => {
            ichi.sendMessage(m.chat, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": "SesillaAnj",
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/images.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
//----------[ FAKE VIDEO ]--------//
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"SesillaBOTMD",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': 'Sesilla Cantik><',
                 'jpegThumbnail': fs.readFileSync('./media/images.jpeg')
                        }
                       }
	                  }


const reply = (texto) => {
			ichi.sendMessage(m.chat, { text: texto, mentions: [m.sender] }, {	quoted: m })
		}

try {
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
} else global.db.chats[m.chat] = {
antilink: false
}
} catch (err) {
console.error(err)
}

//Update Database
setInterval(() => {
fs.writeFileSync('./storage/db.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

if (!ichi.public) {
if (!m.key.fromMe && !isOwner) return
}

//Push Message To Console
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ICHI \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
}

switch(command) {

case 'menu': case 'help': case '?': {
  let menu = `
╒═══ 《 *SesillaNBLBOTZ* 》 ═══
├────────────────────
├≽ *Creator : SesillaMD*
├≽ *Name : ${pushname}*
├≽ *Prefix : 「 ${prefix} 」*
├≽ *User : @${m.sender.split("@")[0]}*
├≽ *Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
├────────────────────
╞═══ 《 *GROUP MENU* 》 ═══
├────────────────────
├≽ *${prefix}antilink*
├≽ *${prefix}linkgroup*
├≽ *${prefix}revoke*
├≽ *${prefix}kick*
├≽ *${prefix}add*
├≽ *${prefix}promote*
├≽ *${prefix}demote*
├≽ *${prefix}setname*
├≽ *${prefix}setdesk*
├≽ *${prefix}setppgrup*
├≽ *${prefix}tagall*
├≽ *${prefix}hidetag*
├≽ *${prefix}ephemeral*
├────────────────────
╞═══ 《 *DOWNLOAD MENU* 》 ═══
├────────────────────
├≽ *${prefix}play*
├≽ *${prefix}ytmp3*
├≽ *${prefix}ytmp4*
├────────────────────
╞═══ 《 *HOSTING MENU* 》 ═══
├────────────────────
├≽ *${prefix}listdomain*
├≽ *${prefix}addpackage*
├≽ *${prefix}ceksmtp*
├≽ *${prefix}statusserver*
├≽ *${prefix}domain*
├≽ *${prefix}hapusdefault*
├≽ *${prefix}cekdefault*
├≽ *${prefix}crateaccountwhm*
├≽ *${prefix}idff*
├≽ *${prefix}idml*
├────────────────────
╞═══ 《 *THANKS TO* 》 ═══
├────────────────────
├≽ *Sesilla/Owner*
├≽ *Adiwajshing/Baileys-Md*
╘═══ 《 *SesillaNBLBOTZ* 》 ═══
  `
  let but = [
  {urlButton: {displayText: 'Source Code ♨️',url: 'https://gmail.com'}}, 
  {urlButton: {displayText: 'Website 🔗',url: 'https://delvanichi.life'}}, 
  {"quickReplyButton": {"displayText": "Menu 🔙","id": ".menu"},},
  {"quickReplyButton": {"displayText": "Owner 👦","id": "owner"},},
  {"quickReplyButton": {"displayText": "Status Bot ⌚","id": `ping`}}
  ]
  ichi.sendButtonImg(m.chat, menu, global.ownerName, global.thumb,but,fgclink)
  }
  break
case 'sc': case 'sourcecode': case 'script': {
  fakegroup('*Ecse Ini Rusak!*')
  }
  break
case 'owner': {
  ichi.sendContact(m.chat, global.ownerNumber,fgclink)
  }
  break
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
🏎️ Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
  m.fakegroup(respon)
  }
  break
  case 'idff': 
            if (args.length == 0) return m.reply(`Example: ${prefix + command} 570098876`)
            var { data } = await axios.get(`https://api.lolhuman.xyz/api/freefire/${args[0]}?apikey=3f56f3c5799ae89c6d0f9c96`)
            fakegroup(data.result)
            break
            case 'tourl': {
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
  }
  await fs.unlinkSync(media)
  }
  break

//Downloader
case 'ytmp4': case 'ytvideo': case 'ytv': {
  let { ytv } = require('../lib/y2mate')
  if (!q) return m.reply(`_Erorr Link Yt Nya Mana Anj_`)
  if (!isUrl(q)) return m.reply('_Erorr Link Invaild ❌_')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('_Link Erorr ❌_')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `---- Youtube Downloader -----
  
📄 Judul : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP4
📮 Resolusi : ${args[1] || '360p'}`
  ichi.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: caption }, { quoted:fgif})
  }
  break
case 'ytmp3': case 'ytaudio': case 'yta': {
  let { yta } = require('../lib/y2mate')
  if (!q) return m.reply(`_Erorr Link Yt Nya Mana Anj_`)
  if (!isUrl(q)) return m.reply('_Erorr Link Invaild ❌_')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('_Link Erorr ❌_')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `*------YOUTUBE DOWNLOADER ✅------*

📄 Title : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP3
📮 Resolusi : ${args[1] || '128kbps'}`
  ichi.sendImage(m.chat, media.thumb, caption, fgif)
  ichi.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted:fvid})
  }
  break
case 'play':
  if (!text) throw `Example : ${prefix + command} Asadekontol`
  let yts = require("yt-search")
  let search = await yts(text)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'MP3'}, type: 1}, {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'MP4'}, type: 1}]
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption: `*-------DATA DITEMUKAAN ✅--------*
  
*📄 Title :* ${anu.title}
*⌚ Duration :* ${anu.timestamp}
*👁️ Viewers :* ${anu.views}
*📤 Upload :* ${anu.ago}
*👨‍🎤 Channel :* ${anu.author.url}
*🔗 Url :* ${anu.url}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  ichi.sendMessage(m.chat, buttonMessage, { quoted:fgif})
  break

//Eval
default:
if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
  m = String(err)
  await m.reply(m)
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return reply(err)
  if (stdout) return m.reply(stdout)
  })
  }

  }
  } catch (err) {
    console.log("error di bagian ichi.js "+util.format(err))
//  m.reply(util.format(err))
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
