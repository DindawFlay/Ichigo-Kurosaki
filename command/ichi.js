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
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `SesillaCanzBot`, 'jpegThumbnail': fs.readFileSync('./media/images.jpeg')}}}
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
╞═══ 《 *ONWER MENU* 》 ═══
├────────────────────
├≽ *${prefix}bc*
├≽ *${prefix}bcgc*
├≽ *${prefix}join*
├≽ *${prefix}leave*
├≽ *${prefix}block*
├≽ *${prefix}unblock*
├≽ *${prefix}setppbot*
├≽ *${prefix}self*
├≽ *${prefix}public*
├≽ *${prefix}eval*
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
├≽ *${prefix}yts*
├≽ *${prefix}ytmp3*
├≽ *${prefix}ytmp4*
├────────────────────
╞═══ 《 *RANDOM MENU* 》 ═══
├────────────────────
├≽ *${prefix}pinterest*
├≽ *${prefix}wallpaper*
├≽ *${prefix}wikimedia*
├≽ *${prefix}quotesanime*
├────────────────────
╞═══ 《 *MAKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}sticker*
├≽ *${prefix}toimg*
├≽ *${prefix}tovideo*
├≽ *${prefix}toaudio*
├≽ *${prefix}tomp3*
├≽ *${prefix}tovn*
├≽ *${prefix}togif*
├≽ *${prefix}tourl*
├≽ *${prefix}removebg*
├≽ *${prefix}estetik*
├≽ *${prefix}ktpmaker*
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
  {"quickReplyButton": {"displayText": "Github 🌚","id": `sc`},},
  {"quickReplyButton": {"displayText": "Owner 👦","id": "owner"},},
  {"quickReplyButton": {"displayText": "Status Bot ⌚","id": `ping`}}
  ]
  ichi.sendButtonImg(m.chat, menu, global.ownerName, global.thumb,but,fgif)
  }
  break
case 'sc': case 'sourcecode': case 'script': {
  m.reply('*Ecse Ini Tidak Ada!*')
  }
  break
case 'owner': {
  ichi.sendContact(m.chat, global.ownerNumber,fgif)
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
  m.reply(respon)
  }
  break
case 'domain':
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone1 = "8651441339f0684fa4165961eea16261";
            let apiToken1 = "oTEnIxsY4LvqY0q3-OReyxdCe2tHSGfFae5CUVIj";
            let tld1 = "mediafireviral.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone1}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld1, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken1,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return m.reply("_Erorr IP OR Host Vaild!_");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return m.reply("*Erorr Coba Lagi ❌*");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "_Erorr IP Invaild!_" : "_iP Tidak Ada!_");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) m.reply(`*Sucesss Domain ${e['name']} Terdaftar ✅*`);
          else m.reply(`*Erorr Coba Lagi!*\n_Erorr_Msg_ : ${e['error']}`)
        });
        break
//Downloader
case 'ytmp4': case 'ytvideo': case 'ytv': {
  let { ytv } = require('../lib/y2mate')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
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
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `*------ Youtube Downloader -----*

📄 Title : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP3
📮 Resolusi : ${args[1] || '128kbps'}`
  ichi.sendImage(m.chat, media.thumb, caption, m)
  ichi.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: fvid })
  }
  break
case 'yts': case 'ytsearch': {
  m.reply(mess.wait)
  if (!text) throw `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '*---- Data Ditemukan ----*\n\n Keywords : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `🔢 No : ${no++}
🎞️ Type : ${i.type}
📀 Video ID : ${i.videoId}
📄 Title : ${i.title}
👁️ Views : ${i.views}
👁️ Duration : ${i.timestamp}
📤 Upload : ${i.ago}
👨‍🎤 Author : ${i.author.name}
🔗 Url : ${i.url}\n\n─────────────────\n\n`
  }
  ichi.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: fvid })
  }
  break
case 'play':
  if (!text) throw `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}, {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video 🎦'}, type: 1}]
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption: `*----- DATA DITEMUKAN -----*
  
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
  ichi.sendMessage(m.chat, buttonMessage, { quoted: fvid })
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
