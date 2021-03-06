//****MODULES****//
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const appRoot = require('app-root-path')
const axios = require('axios')
const AsyncFunction = Object.getPrototypeOf(async function() {}).constructor
const base64Img = require('base64-img')
const cron = require('node-cron')
const cheerio = require('cheerio')
const canvas = require('canvacord')
const {
    default: Axios
} = require('axios')
const ffmpeg = require('fluent-ffmpeg')
const fetch = require('node-fetch')
const fs = require('fs-extra')
const get = require('got')
const imgbb = require('imgbb-uploader')
const kagApi = require('@kagchi/kag-api')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const mathjs = require('mathjs')
const moment = require('moment-timezone')
const sharp = require('sharp')
const {
    spawn,
    exec,
    execSync
} = require('child_process')
const {
    removeBackgroundFromImageFile
} = require('remove.bg')
const { Readable, Writable } = require('stream')
const sastrawi = require('sastrawijs')
const tiktok = require('tiktok-scraper')
const translate = require('@vitalets/google-translate-api')
const toMs = require('ms')
const webp = require('webp-converter')
//****LIB FUNCTION****//
const BrainlySearch = require('./brainly')
const {
    color
} = require('./color')
const filterBadword = require('./badword')
const {
    fetchJson
} = require('./fetcher')
const {
    getUser,
    getPost,
    searchUser,
    yta,
    ytv,
    yts
} = require('./media')
const {
    msgFilter
} = require('./msgFilter')
const {
    recognize
} = require('./ocr')
const {
    help
} = require('./help')
const {
    wait,
    getBuffer,
    h2k,
    generateMessageID,
    getGroupAdmins,
    getRandom,
    banner,
    start,
    info,
    success,
    close,
    custom
} = require('./functions')
const {
	userData,
	expiredCheck,
	isAfk,
	addHit,
	addPremiumUser,
	getLevelingLevel,
	getLevelingXp,
	addLevelingLevel,
	addLevelingXp,
	getUserRank,
	isGained,
    addCooldown
	} = require('./data')
//****DATABASE****//
let afk = JSON.parse(fs.readFileSync('./database/afk.json'))
let user = JSON.parse(fs.readFileSync('./database/user.json'))
let filter = JSON.parse(fs.readFileSync('./database/filter.json'))
let antiSticker = JSON.parse(fs.readFileSync('./database/antiSticker.json'))
let stickerData = JSON.parse(fs.readFileSync('./database/stickerData.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antiLink.json'))
let antiBadword = JSON.parse(fs.readFileSync('./database/antiBadword.json'))
let welcomeText = JSON.parse(fs.readFileSync('./database/welcomeText.json'))
let leaveText = JSON.parse(fs.readFileSync('./database/leaveText.json'))
let samih = JSON.parse(fs.readFileSync('./database/simi.json'))
let dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
let ferived = JSON.parse(fs.readFileSync('./database/groupData.json'))
let mute = JSON.parse(fs.readFileSync('./database/mute.json'))
let characounter = JSON.parse(fs.readFileSync('./database/characounter.json'))
let charasession = JSON.parse(fs.readFileSync('./database/charasession.json'))
let charlist = JSON.parse(fs.readFileSync('./database/charlist.json'))
let chargame = JSON.parse(fs.readFileSync('./database/chargame.json'))
let leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const apakah = ['Ya', 'Tidak', 'Gk🗿', 'Y']
const bisakah = ['Bisa', 'Tidak Bisa', 'Mana Bisa Begitu Ferguso🗿', 'GkBisa🗿', 'Bisa Banget', 'imposible', 'mana bisa gitu anjic']
const doge = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg", "https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg", "https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg", "https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg", "https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg", "https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg", "https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg", "https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg", "https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg", "https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg", "https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg", "https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg", "https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg", "https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg", "https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg", "https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg", "https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg", "https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg", "https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg", "https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg", "https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg", "https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg", "https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg", "https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg", "https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg", "https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg", "https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg", "https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg", "https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg", "https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg", "https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg", "https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg", "https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg", "https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg", "https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg", "https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg", "https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg", "https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg", "https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg", "https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg", "https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg", "https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg", "https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg", "https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg", "https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg", "https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg", "https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg", "https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg", "https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg", "https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg", "https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg", "https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg", "https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg", "https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg", "https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg", "https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg", "https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg", "https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg", "https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg", "https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg", "https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg", "https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg", "https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg", "https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg", "https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg", "https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg", "https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg", "https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg", "https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg", "https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg", "https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg", "https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg", "https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg", "https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg", "https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg", "https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg", "https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg", "https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg", "https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg", "https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg", "https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg", "https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg", "https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg", "https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg", "https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg", "https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg", "https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg", "https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg", "https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg", "https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg", "https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg", "https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg", "https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg", "https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg", "https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg", "https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg", "https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg", "https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg", "https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg", "https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
const db_group = new FileSync(appRoot + '/database/group.json')
const db = low(db_group)
db.defaults({ group: []}).write()
prefix = '/'
keyrmbg = 'vHxdgjFXAEuHxC5DYpn6xLKc'
const vcard = 'BEGIN:VCARD\n' +
    'VERSION:3.0\n' +
    'FN:+62 812-1199-4810\n' +
    'ORG:F;\n' +
    'TEL;type=CELL;type=VOICE;waid=6281211994810:+62 812-1199-4810\n' // WhatsApp ID + phone number
    +
    'END:VCARD'
function formatin(duit) {
    let reverse = duit.toString().split('').reverse().join('')
    let ribuan = reverse.match(/\d{1,3}/g)
    ribuan = ribuan.join('.').split('').reverse().join('')
    return ribuan
}
const inArray = (needle, haystack) => {
    let length = haystack.length
    for(let i = 0; i < length; i++) {
        if (haystack[i] == needle) return true
    }
    return false
}

function kyun(seconds) {
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60 * 60));
    var minutes = Math.floor(seconds % (60 * 60) / 60);
    var seconds = Math.floor(seconds % 60);

    return `${pad(hours)} H ${pad(minutes)} M ${pad(seconds)} S`
}

module.exports = Handle = async (client, message, blocked) => {
			try {
                if (!message.message) return
                if (message.key && message.key.remoteJid == 'status@broadcast') return
                global.prefix
                const content = JSON.stringify(message.message)
                const from = message.key.remoteJid
                const type = Object.keys(message.message)[0]
                const {
                    text,
                    extendedText,
                    contact,
                    location,
                    liveLocation,
                    image,
                    video,
                    sticker,
                    document,
                    audio,
                    product
                } = MessageType
                const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                body = (type === 'conversation' && message.message.conversation.startsWith(prefix)) ? message.message.conversation : (type == 'imageMessage') && message.message.imageMessage.caption.startsWith(prefix) ? message.message.imageMessage.caption : (type == 'videoMessage') && message.message.videoMessage.caption.startsWith(prefix) ? message.message.videoMessage.caption : (type == 'extendedTextMessage') && message.message.extendedTextMessage.text.startsWith(prefix) ? message.message.extendedTextMessage.text : ''
                budy = (type === 'conversation') ? message.message.conversation : (type === 'extendedTextMessage') ? message.message.extendedTextMessage.text : ''
                const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
                const args = body.trim().split(/ +/).slice(1)
                const isCmd = body.startsWith(prefix)

                mess = {
                    wait: '[ WAIT ] In process ⏳ please wait a moment',
                    success: '✔️ Succes ✔️',
                    error: {
                        stick: '❌ Failed, an error occurred while converting the image to a sticker ❌',
                        Iv: '❌ Invalid link ❌',
                        Yt3: '_An error occured_ ⚠️ _Can`t convert to mp3! _ ',
                        Yt4: '_An error occurred_ ⚠️ _maybe the error was caused by the system ._',
                        Ig: '_An error occurred_ ⚠️ _maybe because the account is private_'
                    },
                    only: {
                        group: '❌ commands can only be used within a group! ❌',
                        ownerG: '❌ Only owner group can use this command! ❌',
                        ownerB: '❌ Only owner bot can use this command! ❌',
                        admin: '❌ Only admin can use this command! ❌',
                        Badmin: '❌ commands can only be used when the bot becomes admin! ❌',
                        replyB: '❌ Reply bot message ❌'
                    }
                }

                const botNumber = client.user.jid
                const ownerNumber = "6281211994810@s.whatsapp.net"
                const isGroup = from.endsWith('@g.us')
                const sender = isGroup ? message.participant : message.key.remoteJid
                const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
                const groupName = isGroup ? groupMetadata.subject : ''
                const groupId = isGroup ? from : ''
                const groupMembers = isGroup ? groupMetadata.participants : ''
                const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
                const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
                const isGroupAdmins = groupAdmins.includes(sender) ? true : ownerNumber.includes(sender) ? true : false
                const isSimi = isGroup ? samih.includes(from) : false
                const ferivedGroup = ferived.includes(from)
                const isBlocked = blocked.includes(sender)
                const isOwner = ownerNumber.includes(sender)
                const isRevoke = dataRevoke.includes(from)
                const isLeveling = leveling.includes(from)
                const isAntiBadword = antiBadword.includes(from)
                const isBadword = await filterBadword(budy)
                const isCharsesi = charasession.includes(from) ? true : false
                const pushname = client.chats.get(message.participant) === undefined ? (client.contacts[message.key.remoteJid].notify ? client.contacts[message.key.remoteJid].notify : sender.split('@')[0]) : (client.contacts[message.participant].notify ? client.contacts[message.participant].notify : sender.split('@')[0])
                const arg = body.trim().substring(body.indexOf(' ') + 1)
                const CharaPath = './database/chara/' + from + '.json'
                let dirChar = fs.readdirSync('./database/chara')
                let PathC = []
                for(let i = 0; i < dirChar.length; i++) {
                    PathC.push(dirChar[i].replace('.json', ''))
                }
                let isExistCharPath = PathC.includes(from) ? true : false
                let buffChara = isExistCharPath ? JSON.parse(fs.readFileSync(CharaPath)) : ''
                const {
                xp,
                level,
                isAdminBot,
				isPremium,
                limitM,
                limitG,
                isLimitM,
                isLimitG,
                hit,
                unlisted
                } = await userData(sender)
                const isUrl = (url) => {
                    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
                }
                const reply = (teks) => {
                    client.sendMessage(from, teks, text, {
                        quoted: message
                    })
                }
                const sendMess = (hehe, teks) => {
                    client.sendMessage(hehe, teks, text)
                };
                const mentions = (teks, memberr, id) => {
                    (id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {
                        contextInfo: {
                            "mentionedJid": memberr
                        }
                    }): client.sendMessage(from, teks.trim(), extendedText, {
                        quoted: message,
                        contextInfo: {
                            "mentionedJid": memberr
                        }
                    })
                }
                colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
                const isMedia = (type === 'imageMessage' || type === 'videoMessage')
                const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
                const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
                const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
                //*FUNCTION**//
                
                const sleep = async (ms) => {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                async function charaCheck(query) {
                    return new Promise((resolve, reject) => {
                        const char = query
                        Axios.get('https://myanimelist.net/character.php?cat=character&q=' + char)
                            .then(({
                                data
                            }) => {
                                const $ = cheerio.load(data)
                                const selector = '#content > table > tbody > tr:nth-child(1) > td > a'
                                const small = $('#content > table > tbody > tr:nth-child(1) > td:nth-child(2) > small').text()
                                const name = $(selector).text() + ' ' + small
                                const url = $(selector).attr('href')
                                resolve({
                                    status: 200,
                                    name: name,
                                    message: `Found chara ${name} and added to database!`
                                })

                            }).catch(e => reject({
                                status: 404,
                                message: `Character ${query} was not found!`
                            }))
                    })
                }

                async function chara(query) {
                    return new Promise((resolve, reject) => {
                        const char = query
                        Axios.get('https://myanimelist.net/character.php?cat=character&q=' + char)
                            .then(({
                                data
                            }) => {
                                const $ = cheerio.load(data)
                                const selector = '#content > table > tbody > tr:nth-child(1) > td > a'
                                const small = $('#content > table > tbody > tr:nth-child(1) > td:nth-child(2) > small').text()
                                const name = $(selector).text() + ' ' + small
                                const url = $(selector).attr('href')
                                let manga = []
                                selector_mov = '#content > table > tbody > tr:nth-child(1) > td:nth-child(3) > small > a'
                                let serial = []
                                $(selector_mov).get().map((res) => {
                                    const name = $(res).text()
                                    const url = 'https://myanimelist.net' + $(res).attr('href')
                                    serial.push({
                                        Anime: name,
                                        url: url
                                    })
                                })
                                let grab_frinst = $('#content > table > tbody > tr:nth-child(1) > td > small > div > a')
                                if ($(`${grab_frinst}`).attr('href') === undefined) {} else {
                                    manga.push({
                                        name: $(grab_frinst).text(),
                                        url: 'https://myanimelist.net' + $(`${grab_frinst}`).attr('href')
                                    })
                                }

                                Axios.get(url)
                                    .then(({
                                        data
                                    }) => {
                                        let imgs = []
                                        const $ = cheerio.load(data)
                                        const res_desc = $('#content > table > tbody > tr > td:nth-child(2)').text().split('\n\n\n\n\n\t  ')[1].split('            \n        \n')[0].replace(')', ')\n')
                                        $('#content > table > tbody > tr > td.borderClass > div > a > img').get().map((rest) => {
                                            imgs.push($(rest).attr('data-src'))
                                        })
                                        const elseimg = 'https://github.com/eror401/justImage/raw/main/textprome_160307709e609f.jpg'
                                        const sendImg = imgs.length > 0 ? imgs : elseimg
                                        const result = {
                                            status: 200,
                                            name: name,
                                            image: sendImg,
                                            full_desc: res_desc,
                                            url: url,
                                            anime: serial,
                                            manga: manga
                                        }
                                        resolve(result)
                                    }).catch(reject)
                            }).catch(e => reject({
                                status: 404,
                                message: `Character ${query} was not found!`
                            }))
                    })
                }


                if (isExistCharPath && budy) {
                    if (buffChara.status === 'active') {
                        buffChara.msgID.push(message.key.id)
                        buffChara.messages.push(budy)
                        fs.writeFileSync(CharaPath, JSON.stringify(buffChara, null, 2))
                        let afterLength = 15
                        if (buffChara.messages.length == 14) {
                            const getCharInt = buffChara.chara_name.toLowerCase().indexOf(budy.toLowerCase())
                            reply(getCharInt)
                        }
                        if (buffChara.messages.length == afterLength) {
                            buffChara.chara_name = charlist[Math.floor(Math.random() * charlist.length + 1)].keyword
                            buffChara.msgID = []
                            buffChara.messages = []
                            buffChara.claimed_by_sender = []
                            buffChara.claimed_by_name = []
                            buffChara.claimed_keyword = []
                            fs.writeFileSync(CharaPath, JSON.stringify(buffChara, null, 2))
                            const buffGaleryDir = fs.readdirSync('./database/chara_galery')
                            for(let i = 0; i < buffGaleryDir.length; i++) {
                                const buffGaleryLoop = JSON.parse(fs.readFileSync('./database/chara_galery/' + buffGaleryDir[i]))
                                buffGaleryLoop.status = 'active'
                                fs.writeFileSync('./database/chara_galery/' + buffGaleryDir[i], JSON.stringify(buffGaleryLoop, null, 2))
                            }
                            chara(buffChara.chara_name).then(async (char) => {
                                buffChara.anime_result = char
                                fs.writeFileSync(CharaPath, JSON.stringify(buffChara, null, 2))
                                const contentChar = `*Guess this chara*

*anime* : ${char.anime.length != 0 ? char.anime[0].Anime : '_Cannot display anime_'}
*manga* : ${char.manga.length != 0 ? char.manga[0].name : '_Cannot display manga_'}

Type *${prefix}claim _anime name_* to guessing!

Ex : *${prefix}claim naruto*
`
                                buffer = await getBuffer(char.image[0])
                                client.sendMessage(from, buffer, image, {
                                    quoted: message,
                                    caption: contentChar
                                })
                                console.log(`New Character Appear : ${buffChara.chara_name}`)
                            })
                        }
                    }
                }

                function herolist() {
                    return new Promise((resolve, reject) => {
                        Axios.get('https://mobile-legends.fandom.com/wiki/Mobile_Legends:_Bang_Bang_Wiki')
                            .then(({
                                data
                            }) => {
                                const $ = cheerio.load(data)
                                let data_hero = []
                                let url = []
                                $('div > div > span > span > a').get().map((result) => {
                                    const name = decodeURIComponent($(result).attr('href').replace('/wiki/', ''))
                                    const urln = 'https://mobile-legends.fandom.com' + $(result).attr('href')
                                    data_hero.push(name)
                                    url.push(urln)
                                })
                                resolve({
                                    status: 200,
                                    hero: data_hero
                                })
                            }).catch((e) => reject({
                                status: 404,
                                message: e.message
                            }))
                    })
                }

                function herodetails(name) {
                    return new Promise((resolve, reject) => {
                        var splitStr = name.toLowerCase().split(' ');
                        for(let i = 0; i < splitStr.length; i++) {
                            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
                        }
                        const que = splitStr.join(' ')
                        Axios.get('https://mobile-legends.fandom.com/wiki/' + que)
                            .then(({
                                data
                            }) => {
                                const $ = cheerio.load(data)
                                let mw = []
                                let attrib = []
                                let skill = []
                                const name = $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > table > tbody > tr > td > font > b').text()
                                $('.mw-headline').get().map((res) => {
                                    const mwna = $(res).text()
                                    mw.push(mwna)
                                })
                                $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td').get().map((rest) => {
                                    const haz = $(rest).text().replace(/\n/g, '')
                                    attrib.push(haz)
                                })
                                $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > div.progressbar-small.progressbar > div').get().map((rest) => {
                                    skill.push($(rest).attr('style').replace('width:', ''))
                                })
                                Axios.get('https://mobile-legends.fandom.com/wiki/' + que + '/Story')
                                    .then(({
                                        data
                                    }) => {
                                        const $ = cheerio.load(data)
                                        let pre = []
                                        $('#mw-content-text > div > p').get().map((rest) => {
                                            pre.push($(rest).text())
                                        })
                                        const story = pre.slice(3).join('\n')
                                        const items = []
                                        const character = []
                                        $('#mw-content-text > div > aside > section > div').get().map((rest) => {
                                            character.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g, '').replace(/\n/g, ''))
                                        })
                                        $('#mw-content-text > div > aside > div').get().map((rest) => {
                                            items.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g, '').replace(/\n/g, ''))
                                        })
                                        const img = $('#mw-content-text > div > aside > figure > a').attr('href')
                                        const chara = character.slice(0, 2)
                                        const result = {
                                            status: 200,
                                            hero_name: name + ` ( ${mw[0].replace('CV:',' CV:')} )`,
                                            entrance_quotes: attrib[2].replace('Entrance Quotes', '').replace('\n', ''),
                                            hero_feature: attrib[attrib.length - 1].replace('Hero Feature', ''),
                                            image: img,
                                            items: items,
                                            character: {
                                                chara
                                            },
                                            attributes: {
                                                movement_speed: attrib[12].replace('● Movement Speed', ''),
                                                physical_attack: attrib[13].replace('● Physical Attack', ''),
                                                magic_power: attrib[14].replace('● Magic Power', ''),
                                                attack_speed: attrib[15].replace('● Attack Speed', ''),
                                                physical_defense: attrib[16].replace('● Physical Defense', ''),
                                                magic_defense: attrib[17].replace('● Magic Defense', ''),
                                                basic_atk_crit_rate: attrib[18].replace('● Basic ATK Crit Rate', ''),
                                                hp: attrib[19].replace('● HP', ''),
                                                mana: attrib[20].replace('● Mana', ''),
                                                ability_crit_rate: attrib[21].replace('● Ability Crit Rate', ''),
                                                hp_regen: attrib[22].replace('● HP Regen', ''),
                                                mana_regen: attrib[23].replace('● Mana Regen', '')
                                            },
                                            price: {
                                                battle_point: mw[1].split('|')[0].replace(/ /g, ''),
                                                diamond: mw[1].split('|')[1].replace(/ /g, ''),
                                                hero_fragment: mw[1].split('|')[2] ? mw[1].split('|')[2].replace(/ /g, '') : 'none'
                                            },
                                            role: mw[2],
                                            skill: {
                                                durability: skill[0],
                                                offense: skill[1],
                                                skill_effects: skill[2],
                                                difficulty: skill[3]
                                            },
                                            speciality: mw[3],
                                            laning_recommendation: mw[4],
                                            release_date: mw[5],
                                            background_story: story
                                        }
                                        resolve(result)
                                    }).catch((e) => reject({
                                        status: 404,
                                        message: e.message
                                    }))
                            }).catch((e) => reject({
                                status: 404,
                                message: e.message
                            }))
                    })
                }
			 async function createExif(packname, author) {
					  const json = {
 					   "sticker-pack-id": "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2",
					    "sticker-pack-name": packname,
  					  "sticker-pack-publisher": author,
  					  "android-app-store-link": "https://play.google.com/store/apps/details?id=com.marsconstd.stickermakerforwhatsapp",
					    "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"
					  };

  					let length = JSON.stringify(json).length;
					  const f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
 					 const code = [
   					 0x00,
   					 0x00,
 					   0x16,
   					 0x00,
					    0x00,
  					  0x00
 						 ];
					  if (length > 256) {
 					   length = length - 256;
  					  code.unshift(0x01);
					  } else {
   					 code.unshift(0x00);
 					 }
				  const fff = Buffer.from(code);
				  const ffff = Buffer.from(JSON.stringify(json));

				  if (length < 16) {
 				   length = length.toString(16);
 				   length = "0" + length;
				  } else {
   				 length = length.toString(16);
				  }

 				 const ff = Buffer.from(length, "hex");
  				const buffer = Buffer.concat([f, ff, fff, ffff]);
  				await fs.writeFileSync('./temp/data.exif', buffer, function(err) {
 				   if (err) return console.error(err);
				  });
				}
				function modifExif(buffer, id, callback) {
  				fs.writeFileSync('./temp/' + id + '.webp', buffer)
				  spawn('webpmux', ['-set', 'exif', './temp/data.exif', './temp/' + id + '.webp', '-o', './temp/' + id + '.webp'])
 				   .on('exit', () => {
     				 callback(fs.readFileSync('./temp/' + id + '.webp'))
  				    fs.unlink('./temp/' + id + '.webp').then(() => {})
				    })
				}
				function bufferToStream(buffer) {
				  const readable = new Readable()
  				readable._read = () => {}
				  readable.push(buffer)
				  readable.push(null)
 				 return readable
				}
				const modifWebp = (id, buffers) => new Promise((resolve) => {
 				 const stream = bufferToStream(buffers)
				  ffmpeg(stream)
				  .inputFormat('mp4')
				  .addOutputOptions("-vcodec", "libwebp", "-vf", "scale='min(150,iw)':min'(150,ih)':force_original_aspect_ratio=decrease, format=rgba, fps=15, pad=150:150:-1:-1:color=#00000000", '-lossless', '1', "-loop", "1", "-preset", "default", "-an", "-vsync", "0", "-s", "150:150")
				  .save(`./temp/${id}.webp`)
				  .on('end', () => {
  				  stream.destroy()
   				 spawn('webpmux', ['-set', 'exif', './temp/data.exif', './temp/' + id + '.webp', '-o', './temp/' + id + '.webp'])
   				 .on('exit', () => {
   				   let mediaData = (fs.readFileSync('./temp/' + id + '.webp'))
   				   fs.unlink('./temp/' + id + '.webp').then(() => {})
   				   return resolve(mediaData)
 			   })
		  })
	})
                if (isGroup && antilink.includes(from) && isBotGroupAdmins && !isGroupAdmins) {
                    if (budy.match(/(chat.whatsapp.com)/gi)) {
                    	reply('[ ! ] Link Group Dettected')
                        await client.groupRemove(from, [sender])
                    }
                }
                if (isGroup && type === 'sticker' && isBotGroupAdmins && !isGroupAdmins) {
						position = null
						position2 = null
							Object.keys(antiSticker).forEach((i) => {
 						  	if(antiSticker[i].id === from){
   						 	 position = i
     					   }
						})
					if(position !== null){
						Object.keys(stickerData).forEach((i) => {
   						if(stickerData[i].id === sender){
    							 position2 = i
       					 }
						})
					if(position2 !== null){
						stickerData[position2].sticker += 1
						fs.writeFileSync('./database/stickerData.json', JSON.stringify(stickerData))
							if(stickerData[position2].sticker > antiSticker[position].sticker){
							reply('[ ! ] ANTI SPAM STICKER')
							await client.groupRemove(from, [sender])
							}
						await sleep(antiSticker[position].cooldown)
						stickerData[position2].sticker -= 1
						fs.writeFileSync('./database/stickerData.json', JSON.stringify(stickerData))
					}else{
						addStickerCount = { id : sender, sticker : 1 }
						stickerData.push(addStickerCount)
         		 	  fs.writeFileSync('./database/stickerData.json', JSON.stringify(stickerData))
					}
				}
			}
                if (isBlocked) return
                if (isGroup && mute.includes(from) && budy.toLowerCase().startsWith('/unmutebot') && isGroupAdmins) {
                    mute.splice(from, 1)
                    fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                    reply('Bot Unmuted')
                }
                if (mute.includes(from)) return
                function limitMAdd(uID) {
                    position = null
                    Object.keys(user).forEach((i) => {
   				   if(user[i].id === uID){
    	       		  	position = i
    					        }
							})
                    if (position !== null) {
                        user[position].limitM += 1
                        fs.writeFileSync('./database/user.json', JSON.stringify(user))
                        console.log(`Adding limit to : ${uID}`)
                    }
                }

                function limitGAdd(uID) {
                    position = null
                    Object.keys(user).forEach((i) => {
   				   if(user[i].id === uID){
    	       		  	position = i
    					        }
						})
                    if (position !== null) {
                        user[position].limitG += 1
                        fs.writeFileSync('./database/user.json', JSON.stringify(user))
                        console.log(`Adding limit to : ${uID}`)
                    }
                }                 
        const levelRole = getLevelingLevel(sender)
        var role = 'Copper V'
        if (levelRole > 5) {
            role = 'Copper IV'
        } else if (levelRole > 10) {
            role = 'Copper III'
        } else if (levelRole > 15) {
            role = 'Copper II'
        } else if (levelRole > 20) {
            role = 'Copper I'
        } else if (levelRole > 25) {
            role = 'Silver V'
        } else if (levelRole > 30) {
            role = 'Silver IV'
        } else if (levelRole > 35) {
            role = 'Silver III'
        } else if (levelRole > 40) {
            role = 'Silver II'
        } else if (levelRole > 45) {
            role = 'Silver I'
        } else if (levelRole > 50) {
            role = 'Gold V'
        } else if (levelRole > 55) {
            role = 'Gold IV'
        } else if (levelRole > 60) {
            role = 'Gold III'
        } else if (levelRole > 65) {
            role = 'Gold II'
        } else if (levelRole > 70) {
            role = 'Gold I'
        } else if (levelRole > 75) {
            role = 'Platinum V'
        } else if (levelRole > 80) {
            role = 'Platinum IV'
        } else if (levelRole > 85) {
            role = 'Platinum III'
        } else if (levelRole > 90) {
            role = 'Platinum II'
        } else if (levelRole > 95) {
            role = 'Platinum I'
        } else if (levelRole > 100) {
            role = 'Exterminator'
        }

        if (isGroup && !isGained(sender) && isLeveling) {
            try {
                addCooldown(sender)
                const currentLevel = getLevelingLevel(sender)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
                const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    const userLevel = getLevelingLevel(sender)
                    const fetchXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Name*: ${pushname}\n➸ *XP*: ${getLevelingXp(sender)} / ${fetchXp}\n➸ *Level*: ${currentLevel} -> ${getLevelingLevel(sender)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
        
                // Automate
                expiredCheck
                cron.schedule('0 0 * * *', () => {
                    console.log('Resetting user limit...')
                    for(let i of user) {
                        user[i].limitG = 0
                        fs.writeFileSync('./database/user.json', JSON.stringify(user))
                        user[i].limitM = 0
                        fs.writeFileSync('./database/user.json', JSON.stringify(user))
                        user[i].unlisted = 0
                        fs.writeFileSync('./database/user.json', JSON.stringify(user))
                    }
                    console.log('Success!')
                }, {
                    scheduled: true,
                    timezone: 'Asia/Jakarta'
                })
                if (isGroup && ferivedGroup) {
                    found = false
                    for(let i of filter) {
                        if (i.id === from && i.filter.toLowerCase() === budy.toLowerCase()) {
                            found = i
                        }
                    }
                    if (found !== false) {
                        if (found.type === 'message') {
                            return reply(found.respon)
                        } else {
                            buffer = await getBuffer(found.dir)
                            return client.sendMessage(from, buffer, image, {
                                quoted: message,
                                caption: `${found.respon}`
                            })
                        }
                    }
                }
                if (isGroup){
                	position = null
                	for(let i of afk){
             	   	if (i.id === sender.split('@')[0]){
                			position = i
						}
					}
					if(position !== null){
							afk.splice(position)
        		        	fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
							 return reply(`Welcome back ${pushname}`)
						}
				}
                if (isGroup){
                	found = false
                	for(let i of afk){
                	if(budy.includes(i.id)){
                	found = i
                		}
                	}
                if(found !== false){
                	const aepka = {
                        text: `@${found.id} is _*AFK*_\nReason : ${found.reason}`,
                         contextInfo: {
                         mentionedJid: [`${found.id}@s.whatsapp.net`]
           	           }
                     }
                      return reply(aepka)
                      }
                	}
                    if (isGroup && budy.toLowerCase().startsWith('brb')) {
                        var affk = {
                            id: sender.split('@')[0],
                            reason: budy.slice(4)
                        }
                        afk.push(affk)
                        fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
                        await reply(`${pushname} Is _*AFK*_\nReason : ${budy.slice(4)}`)
                    }
                    function ERRLOG(e) {
                        console.log('Error : %s', color(e, 'red'))
                    }
                    if (isGroup) {
                        if (budy.toLowerCase().includes('iri bilang')) return client.sendMessage(from, fs.readFileSync('./media/sfx/iri.mp3'), audio, {
                            quoted: message,
                            mimetype: 'audio/mp4',
                            ptt: true
                        })
                        if (budy.toLowerCase().match('tapi boong')) return client.sendMessage(from, fs.readFileSync('./media/sfx/boong.mp3'), audio, {
                            quoted: message,
                            mimetype: 'audio/mp4',
                            ptt: true
                        })
                    }
                    
                    if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
                        return console.log(color('[ SPAM ]', 'red'), color(time, 'yellow'), color(`${command}[${args.length}]`, 'blue'), 'from', color(pushname))
                    }
                    if (isCmd && msgFilter.isFiltered(from) && isGroup) {
                        return console.log(color('[ SPAM ]', 'red'), color(time, 'yellow'), color(`${command}[${args.length}]`, 'blue'), 'from', color(pushname), 'in', color(groupName, 'blue'))
                    }
                    if (isCmd && isGroup) console.log(color('[ EXEC ]'), color(time, 'yellow'), color(`${command}[${args.length}]`, 'blue'), 'from', color(pushname), 'in', color(groupName, 'blue'))
                    if (isCmd && !isGroup) console.log(color('[ EXEC ]'), color(time, 'yellow'), color(`${command}[${args.length}]`, 'blue'), 'from', color(pushname))
					msgFilter.addFilter(from)
    	            if (isCmd) {
    	             addHit(sender)
       	         }
                    switch(command) {
                    	case '>':
                    if(!isOwner)return
                    return client.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, {quoted: message})
                    break
                    case '=>':
                    if(!isOwner)return
                    exec(args.join(' '), (err, stdout) => {
					if (err) return client.sendMessage(from, `root@forfun197:~ ${err}`, text, { quoted: message })
					if (stdout) {
						reply(stdout)
					}
				})
                    break
                        case 'help':
                        case 'menu':
                        case 'f-bot':
                            await reply(help(prefix, pushname))
                            break
                        case 'addpremium':
                            if (!isOwner) return reply(mess.only.ownerB)
                            if (message.message.extendedTextMessage === undefined || message.message.extendedTextMessage === null) return reply('Mention Target!')
                            mentioned = message.message.extendedTextMessage.contextInfo.mentionedJid
                            addPremiumUser(memtioned[0])
                            await reply('succes')
                            break
                        case 'register':
         				if (!isOwner) return reply(mess.only.ownerB)
         				ferived.push(from)
						 fs.writeFileSync('./database/groupData.json', JSON.stringify(ferived))
						 reply('registered')
         			break
                        case 'add':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            if (args.length < 1) return reply(`Example :\n/add 6281211994810`)
                            if (args[0].startsWith('08')) return reply('Use region code')
                            num = `${args[0].replace(/ /g, '').replace(/-/g,'')}@s.whatsapp.net`
                            if (blocked.includes(num)) return reply('Failed,Contact is blocked')
                            try {
                                client.groupAdd(from, [num])
                            }catch(e) {
                                ERRLOG(e)
                                reply('Failed')
                            }
                            break
                        case 'kick':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            if (message.message.extendedTextMessage === undefined || message.message.extendedTextMessage === null) return reply('Mention Target!')
                            mentioned = message.message.extendedTextMessage.contextInfo.mentionedJid[0]
                            if (groupAdmins.includes(mentioned)) return reply('Can`t kick admin')
                            mentions(`Sayonara @${mentioned.split('@')[0]}`, mentioned, true)
                            client.groupRemove(from, [mentioned])
                            break
                        case 'mentionall':
                        case 'announcement':
                        case 'everyone':
                        case 'tagall':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            teks = args.join(' ')
                            if (!teks) {
                                var group = await client.groupMetadata(from)
                                var member = group['participants']
                                var mem = []
                                member.map(async adm => {
                                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                })
                                var options = {
                                    text: '@everyone',
                                    contextInfo: {
                                        mentionedJid: mem
                                    },
                                    quoted: message
                                }
                            } else {
                                var group = await client.groupMetadata(from)
                                var member = group['participants']
                                var mem = []
                                member.map(async adm => {
                                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                })
                                var options = {
                                    text: `${teks}\n\n@everyone`,
                                    contextInfo: {
                                        mentionedJid: mem
                                    },
                                    quoted: message
                                }
                            }
                            client.sendMessage(from, options, text)
                            break
                        case 'promote':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            if (message.message.extendedTextMessage === undefined || message.message.extendedTextMessage === null) return
                            mentioned = message.message.extendedTextMessage.contextInfo.mentionedJid
                            mentions(`Promote @${mentioned[0].split('@')[0]}`, mentioned, true)
                            client.groupMakeAdmin(from, mentioned[0])
                            break
                        case 'demote':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            if (message.message.extendedTextMessage === undefined || message.message.extendedTextMessage === null) return
                            mentioned = message.message.extendedTextMessage.contextInfo.mentionedJid
                            mentions(`Demote @${mentioned[0].split('@')[0]}`, mentioned, true)
                            client.groupDemoteAdmin(from, mentioned[0])
                            break
                        case 'setname':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            await client.groupUpdateSubject(from, `${body.slice(8)}`)
                            reply(`*CHANGE TO ${body.slice(8)}*`)
                            break
                        case 'setdesk':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            await client.groupUpdateDescription(from, `${body.slice(8)}`)
                            reply(`*CHANGE TO ${body.slice(8)}*`)
                            break
                        case 'seticon':
                        case 'setprofile':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            if (isMedia && !message.message.videoMessage || isQuotedImage) {
                                const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                media = await client.downloadMediaMessage(encmedia)
                                buffer = await fs.readFileSync(media)
                                await client.updateProfilePicture(from, buffer)
                                reply('*「 SUCCES CHANGE ICON GRUP 」*')
                            } else {
                                reply(`send image with caption ${prefix}seticon`)
                            }
                            break
                        case 'mute':
                        case 'close':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            await client.groupSettingChange(from, GroupSettingChange.messageSend, true)
                            reply('*「 SUCCES CLOSE GRUP 」*')
                            break
                        case 'unmute':
                        case 'open':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            await client.groupSettingChange(from, GroupSettingChange.messageSend, false)
                            reply('*「 SUCCES OPEN GRUP 」*')
                            break
                        case 'delete':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            try {
                                if (message.message.extendedTextMessage === undefined || message.message.extendedTextMessage === null) return reply(mess.only.replyB)
                                if (isGroupAdmins || isOwner && message.message.extendedTextMessage.contextInfo.participant === client.user.jid) {
                                    client.deleteMessage(from, {
                                        id: message.message.extendedTextMessage.contextInfo.stanzaId,
                                        remoteJid: from,
                                        fromMe: true
                                    })
                                } else {
                                    reply(mess.only.replyB)
                                }
                            }catch(e) {
                                reply(mess.only.replyB)
                            }

                            break
                        case 'linkgroup':
                            if (!isGroup) return reply(mess.only.group)
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                            linkgc = await client.groupInviteCode(from)
                            reply('https://chat.whatsapp.com/' + linkgc)
                            break
                        case 'listadmins':
                        case 'adminlist':
                            if (!isGroup) return reply(mess.only.group)
                            teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                            no = 0
                            for(let admon of groupAdmins) {
                                no += 1
                                teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                            }
                            mentions(teks, groupAdmins, true)
                            break
                        case 'leave':
                            if (!isGroup) return reply(mess.only.group)
                            if (isGroupAdmins || isOwner) {
                                client.groupLeave(from)
                            } else {
                                reply(mess.only.admin)
                            }
                            break
                        case 'level':
                	        if(!isLeveling) return reply('Leveling Not Enabled')
                            if (!isGroup) return await reply(mess.only.group)
                            const userLevel = getLevelingLevel(sender)
                			const userXp = getLevelingXp(sender)
                            try {
                                pepe = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                            } catch {
                                pepe = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
                            }
                            const requiredXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                            const rank = new canvas.Rank()
                                .setAvatar(pepe)
                                .setLevel(userLevel)
                                .setLevelColor('#ffa200', '#ffa200')
                                .setRank(Number(getUserRank(sender)))
                                .setCurrentXP(userXp)
                                .setOverlay('#000000', 100, false)
                                .setRequiredXP(requiredXp)
                                .setProgressBar('#ffa200', 'COLOR')
                                .setBackground('COLOR', '#000000')
                                .setUsername(pushname)
                                .setDiscriminator(sender.substring(6, 10))
                            rank.build()
                                .then(async (buffer) => {
                                    canvas.write(buffer, `${sender}_card.png`)
                                    await client.sendMessage(from, fs.readFileSync(`${sender}_card.png`), image, {
                                        quoted: message
                                    })
                                    fs.unlinkSync(`${sender}_card.png`)
                                })
                                .catch(async (err) => {
                                    console.error(err)
                                    await reply('Error!')
                                })
                            break
                        case 'profile':
                        case 'profil':
                            try {
                                pepe = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                            } catch {
                                pepe = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'

                            }
                            const Mlimit = isPremium ? `∞/${limitM}` : `8/${limitM}`
                            const Glimit = isPremium ? `∞/${limitG}` : `25/${limitG}`
                            if (fs.readdirSync('./database/chara_galery').includes(sender + '.json')){
                            const showGaleryOne = JSON.parse(fs.readFileSync('./database/chara_galery/' + sender + '.json'))
                            claimedchar = showGaleryOne.animes.length
                            lastclaim = showGaleryOne.animes[showGaleryOne.animes.length - 1].name
                            }else{
                            claimedchar = "0"
                            lastclaim = "no empety"
                            }
                            const profilecapt = `
» Name « : ${pushname}

⊷ User xp ⊷ : ${xp}

★ User Rank ★ : ${role}

◔ User Type ◔ : ${isPremium}

♪ Media Limit ♪ : ${Mlimit}

⌬ Gacha Limit ⌬ : ${Glimit}

♕ Claimed Characters ♕ : ${claimedchar} character

➬ Last Claimed ➬ : ${lastclaim}

♛ Admin ♛: ${groupAdmins.includes(sender)}

⊝ Blocked ⊝ : false

🎯️ Total Hit 🎯️ : ${hit}

⊘ Unlisted CMD ⊘ : ${unlisted}
`
                            buffer = await getBuffer(pepe)
                            client.sendMessage(from, buffer, image, {
                                quoted: message,
                                caption: profilecapt
                            })
                            break
                        case 'charaguess':
                        if (!isGroupAdmins) return reply(mess.only.admin)
                            if (args[0] == 'start') {
                                if (isCharsesi) {
                                    reply(`This group was enabled the chara game before!`)
                                } else {
                                    charasession.push(from)
                                    fs.writeFileSync('./database/charasession.json', JSON.stringify(charasession, null, 2))
                                    reply('Chara game was enable in this group! will send randomly after 15 message and you should guess that.')
                                }
                            }
                            break
                        case 'addchara':
                            if (args.length < 1) return reply(`Please add chara query!\nex : *${prefix}addchara naruto*`)
                            const qChar = body.slice(10)
                            await charaCheck(qChar)
                                .then((ress) => {
                                    let isCharaAva = ''
                                    for(let i = 0; i < charlist.length; i++) {
                                        if (charlist[i].full_name === ress.name) {
                                            isCharaAva += 'true'
                                        } else {

                                        }
                                    }
                                    if (isCharaAva === 'true') {
                                        reply(`Sorry chara ${qChar} has been added to database!`)
                                    } else {
                                        charlist.push({
                                            full_name: ress.name,
                                            keyword: qChar
                                        })
                                        fs.writeFileSync('./database/charlist.json', JSON.stringify(charlist, null, 2))
                                        reply(ress.message)
                                    }
                                })
                                .catch(e => {
                                    reply(e.message)
                                })
                            break
                        case 'gallery':
                        case 'galery':
                            const fsGaleryOne = fs.readdirSync('./database/chara_galery')
                            const isExistGalery = fsGaleryOne.includes(sender + '.json') ? true : false
                            if (!isExistGalery) {
                                try {
                                    pepe = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                                } catch {
                                    pepe = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
                                }
                                buffer = await getBuffer(pepe)
                                client.sendMessage(from, buffer, image, {
                                    quoted: message,
                                    caption: 'Cannot display empty galery!'
                                })
                            } else {
                                let GaleryCore = `*Show Galery Chara Anime ${showGalery.name}*

*Total Chara Claimed* : ${showGalery.animes.length} character

*Last Claim Chara* :
➣ *Name* : ${showGalery.animes[showGalery.animes.length - 1].name}
➣ *ID* : ${showGalery.animes[showGalery.animes.length - 1].url.replace('https://myanimelist.net/character/','').split('/')[0]}
➣ *Description* : ${showGalery.animes[showGalery.animes.length - 1].full_desc.replace('\n','').split(' ').slice(0, 15).join(' ') + ' ...'}

                    `
                                for(let i = 0; i < showGalery.animes.length; i++) {
                                    GaleryCore += `
________________________________________

➣ *Name* : ${showGalery.animes[i].name}
➣ *Url* : ${showGalery.animes[i].url.replace('https://myanimelist.net/character/','').split('/')[0]}
➣ *Description* : ${showGalery.animes[i].full_desc.replace('\n','').split(' ').slice(0, 15).join(' ') + ' ...'}

`
                                }
                                buffer = await getBuffer(showGalery.animes[showGalery.animes.length - 1].image[0])
                                client.sendMessage(from, buffer, image, {
                                    quoted: message,
                                    caption: GaleryCore
                                })
                            }

                            break
                        case 'claim':
                            if (args.length < 1) return reply(`Please use command:\n*${prefix}claim _chara name_*\nEx: *${prefix}claim naruto*`)
                            const read_carg = fs.readdirSync('./database/chara_galery')
                            const galeryPath = './database/chara_galery/' + sender + '.json'
                            const detectNumChar = read_carg.includes(sender + '.json') ? true : false
                            const buffGalery = detectNumChar ? JSON.parse(fs.readFileSync(galeryPath)) : ''
                            try {
                                let stringCorrect = ``
                                const charbuffSplited = buffChara.chara_name.split(' ')
                                for(let i = 0; i < charbuffSplited.length; i++) {
                                    stringCorrect += `${charbuffSplited[i]}|`
                                }
                                const correctChat = new RegExp(stringCorrect.slice(0, -1), 'gi')
                                // console.log(buffChara.chara_name)
                                const isClaimed = {
                                    text: `This character was claimed by @${buffChara.claimed_by_sender[0].split("@")[0]} ( ${buffChara.claimed_by_name[0]} )\n\nWait for appear random chara again to claiming!`,
                                    contextInfo: {
                                        mentionedJid: [buffChara.claimed_by_sender[0]]
                                    }
                                }
                                if (buffChara.claimed_by_sender.length > 0) return reply(isClaimed)
                                if (buffChara.status !== 'active') return reply(`You can't claiming because charagame not active in this group\ntype *${prefix}charagame enable* to activate this!`)
                                if (!correctChat.test(body.slice(7))) return reply(`Oops sorry wrong character name! also try to guess last name if first name doesn't correct.`)
                                if (!detectNumChar) {
                                    if (buffGalery.status !== 'active' && fs.existsSync('./database/chara_galery/' + sender + '.json')) return reply(`Double claim not allowed!`)
                                    const galery_obj = {
                                        status: 'active',
                                        sender: sender,
                                        name: pushname,
                                        animes: []
                                    }
                                    fs.writeFile(galeryPath, JSON.stringify(galery_obj, null, 2)).then(() => {
                                        const buffChara = JSON.parse(fs.readFileSync('./database/chara/' + from + '.json'))
                                        const buffGalery = JSON.parse(fs.readFileSync('./database/chara_galery/' + sender + '.json'))
                                        buffGalery.animes.push(buffChara.anime_result)
                                        // console.log(buffGalery)
                                        fs.writeFile(galeryPath, JSON.stringify(buffGalery, null, 2)).then(async() => {
                                            const buffGalery = JSON.parse(fs.readFileSync('./database/chara_galery/' + sender + '.json'))
                                            const buffChara = JSON.parse(fs.readFileSync('./database/chara/' + from + '.json'))
                                            buffChara.claimed_by_name.push(pushname)
                                            buffChara.claimed_by_sender.push(sender)
                                            buffChara.claimed_keyword.push(body.slice(7))
                                            fs.writeFileSync('./database/chara/' + from + '.json', JSON.stringify(buffChara, null, 2))
                                            let outGalery = `*Chara found for your first time claiming ${pushname}*\n\n`
                                            // for (var i = 0; i < buffGalery.animes.length; i++) {
                                            outGalery += `________________________________________

➣ *Name* : ${buffChara.anime_result.name}
➣ *Description* : ${buffChara.anime_result.full_desc}
➣ *Link Detail* : ${buffChara.anime_result.url}

`
                                            if ( /*buffGalery.animes.length === 0*/ false) {
                                                reply(`You must claim some chara to display galery!`)
                                            } else {
                                                buffer = await getBuffer(buffChara.anime_result.image[0])
                                                client.sendMessage(from, buffer, image, {
                                                    quoted: message,
                                                    caption: outGalery
                                                })
                                            }
                                            // console.log(buffGalery)
                                            // console.log(buffChara)
                                            buffGalery.status = 'unactive'
                                            buffChara.claimed_by_name.push(pushname)
                                            buffChara.claimed_by_sender.push(sender)
                                            buffChara.claimed_keyword.push(body.slice(7))
                                            buffGalery.status = 'unactive'
                                            fs.writeFileSync(CharaPath, JSON.stringify(buffChara, null, 2))
                                            fs.writeFileSync(galeryPath, JSON.stringify(buffGalery, null, 2))
                                        })
                                    })
                                } else {
                                    // console.log(buffGalery)
                                    if (buffGalery.status !== 'active') return reply(`Double claim not allowed!`)
                                    buffGalery.animes.push(buffChara.anime_result)
                                    fs.writeFile(galeryPath, JSON.stringify(buffGalery, null, 2)).then(async() => {
                                        const buffGalery = JSON.parse(fs.readFileSync('./database/chara_galery/' + sender + '.json'))
                                        const buffChara = JSON.parse(fs.readFileSync('./database/chara/' + from + '.json'))
                                        // console.log(buffChara)
                                        // return

                                        let outGalery = `*Correct Chara ${pushname}!*\n\n`
                                        // for (var i = 0; i < buffGalery.animes.length; i++) {
                                        outGalery += `________________________________________

➣ *Name* : ${buffChara.anime_result.name}
➣ *Description* : ${buffChara.anime_result.full_desc}
➣ *Link Detail* : ${buffChara.anime_result.url}

`
                                        // }
                                        if ( /*buffGalery.animes.length === 0*/ false) {
                                            reply(`You must claim some chara to display galery!`)
                                        } else {
                                            buffer = await getBuffer(buffChara.anime_result.image[0])
                                            client.sendMessage(from, buffer, image, {
                                                quoted: message,
                                                caption: outGalery
                                            })
                                        }
                                        // console.log(buffGalery)
                                        // console.log(buffChara)
                                        // for (var i = 0; i < 15; i++) {
                                        buffChara.claimed_by_name.push(pushname)
                                        buffChara.claimed_by_sender.push(sender)
                                        buffChara.claimed_keyword.push(correctChat)
                                        buffGalery.status = 'unactive'
                                        fs.writeFileSync(CharaPath, JSON.stringify(buffChara, null, 2))
                                        fs.writeFileSync(galeryPath, JSON.stringify(buffGalery, null, 2))
                                        // }
                                    })
                                }
                            }catch(e) {
                                console.log(e)
                                reply(e)
                            }

                            break
                        case 'charagame':
                            if (!isGroupAdmins) return reply(mess.only.admin)
                            if (args.length < 1) return reply(`Please use command:\n*!charagame enable*\nor\n*!charagame disable*`)
                            try {
                                if (args[0] == 'enable') {
                                	 if (buffChara.status === 'active') return reply(`Your group has been enable this chara game before`)
                                    const charDirObj = {
                                        status: 'active',
                                        claimed_keyword: [],
                                        claimed_by_name: [],
                                        claimed_by_sender: [],
                                        anime_result: '',
                                        chara_name: '',
                                        groupId: from,
                                        msgID: [],
                                        messages: []
                                    }
                                    fs.writeFile(CharaPath, JSON.stringify(charDirObj, null, 2)).then(() => {
                                        // console.log(buffChara)
                                        reply(`Chara games now activated in this grup ✅\n\nThis will send anime randomly every 15 chat messages! and you have to guess that with type :\n*${prefix}claim _anime name_*\nEx : *${prefix}claim naruto*`)
                                    })
                                }
                                if (args[0] == 'disable') {
                                    if (!isExistCharPath) return reply(`Please enable first if you want disabling this chara game!`)
                                    if (buffChara.status === 'active') {
                                        buffChara.status = 'unactive'
                                        fs.writeFileSync(CharaPath, JSON.stringify(buffChara, null, 2))
                                        reply(`Chara games now disabled in this group ❌`)
                                    }
                                }
                            }catch(e) {
                                console.log(e)
                                reply(e)
                            }
                            break
                            case 'simi':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                if (args.length < 1) return reply('select enable or disable')
                                if (args[0] === 'enable') {
                                    if (isSimi) return reply('[ ! ]simi mode active')
                                    samih.push(from)
                                    fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
                                    reply('[ ! ] Simi Mode Has Been Activated')
                                } else if (args[0] === 'disable') {
                                    samih.splice(from, 1)
                                    fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
                                    reply('[ ! ] Simi Mode Has Been Disabled')
                                } else {
                                    reply('select enable or disable')
                                }
                                break
                            case 'leveling':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                if (args.length < 1) return reply('select enable or disable')
                                if (args[0] === 'enable') {
                                    if (isLeveling) return reply('[ ! ] Leveling active')
                                    leveling.push(from)
                                    fs.writeFileSync('./database/leveling.json', JSON.stringify(leveling))
                                    reply('[ ! ] Leveling Has Been Activated')
                                } else if (args[0] === 'disable') {
                                    leveling.splice(from, 1)
                                    fs.writeFileSync('./database/leveling.json', JSON.stringify(leveling))
                                    reply('[ ! ] Leveling Has Been Disabled')
                                } else {
                                    reply('select enable or disable')
                                }
                                break
                            case 'mute':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                mute.push(from)
                                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
								reply('Bot Muted')
                                break
                            case 'setwelcome':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                if (args.length < 1) return reply(`example :\n${prefix}setLeave Goodbye!`)
                                if (!ferivedGroup) return reply('Group Not Ferived')
                                var found = false
                                Object.keys(welcomeText).forEach((i) => {
                                    if (welcomeText[i].id.includes(from)) {
                                        found = i
                                    }
                                })
                                if (found === false) {
                                    let wlcm = {
                                        id: `${from}`,
                                        text: `${body.slice(12)}`
                                    }
                                    welcomeText.push(wlcm)
                                    fs.writeFileSync('./database/welcomeText.json', JSON.stringify(welcomeText))
                                    reply(`Text Updated To :  ${body.slice(12)}`)
                                } else {
                                    welcomeText[found].text = `${body.slice(12)}`
                                    fs.writeFileSync('./database/welcomeText.json', JSON.stringify(welcomeText))
                                    reply(`Text Updated To :  ${body.slice(12)}`)
                                }
                                break
                            case 'setleave':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                if (args.length < 1) return reply(`example :\n${prefix}setWelcome Hello New Member`)
                                if (!ferivedGroup) return reply('Group Not Ferived')
                                var found = false
                                Object.keys(leaveText).forEach((i) => {
                                    if (leaveText[i].id.includes(from)) {
                                        found = i
                                    }
                                })
									if (found === false) {
                                    let lve = {
                                        id: `${from}`,
                                        text: `${body.slice(12)}`
                                    }
                                    leaveText.push(lve)
                                    fs.writeFileSync('./database/leaveText.json', JSON.stringify(leaveText))
                                    reply(`Text Updated To :  ${body.slice(12)}`)
                                } else {
                                    leaveText[found].text = `${body.slice(12)}`
                                    fs.writeFileSync('./database/leaveText.json', JSON.stringify(leaveText))
                                    reply(`Text Updated To :  ${body.slice(12)}`)
                                }
                                break
                            case 'addfilter':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                if (args.length < 1) return reply(`[ ! ]WRONG FORMAT\nSend Text ${prefix}addFilter |<word>|<respon>`)
                                if (!ferivedGroup) return reply('Group Not Ferived')
                                addFilter = body.trim().split('|')
									if (addFilter.length >= 3) {
                                    const filtr = addFilter[1]
                                    const resp = addFilter[2]
                                    if (filtr.length < 1) return reply('Filter can`t be empty')
                                    if (resp.length < 1) return reply('Respon can`t be empty')
                                    var found = false
                                    Object.keys(filter).forEach((i) => {
                                        if (filter[i].id.includes(from) && filter[i].filter == filtr) {
                                            found = i
                                        }
                                    })
                                    if (found === false) {
                                        if (isMedia && !message.message.videoMessage || isQuotedImage) {
                                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                            const media = await client.downloadAndSaveMediaMessage(encmedia)
                                            upload = await imgbb("281d21fc34b6768a2fba45acb982a18b", media)
                                            fs.unlinkSync(media)
                                            var addNewF = {
                                                id: `${from}`,
                                                filter: `${filtr}`,
                                                respon: `${resp}`,
                                                type: 'image',
                                                dir: `${upload.display_url}`
                                            }
                                        } else {
                                            var addNewF = {
                                                id: `${from}`,
                                                filter: `${filtr}`,
                                                respon: `${resp}`,
                                                type: 'message',
                                                dir: null
                                            }
                                        }
                                        filter.push(addNewF)
                                        fs.writeFileSync('./database/filter.json', JSON.stringify(filter))
                                        reply('Filter Added')
                                    } else { //EDIT FILTER
                                        if (isMedia && !message.message.videoMessage || isQuotedImage) {
                                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                            const media = await client.downloadAndSaveMediaMessage(encmedia)
                                            upload = await imgbb("281d21fc34b6768a2fba45acb982a18b", media)
                                            filter[found] = {
                                                id: `${from}`,
                                                filter: `${filtr}`,
                                                respon: `${resp}`,
                                                type: 'image',
                                                dir: `${upload.display_url}`
                                            }
                                            fs.writeFileSync('./database/filter.json', JSON.stringify(filter))
                                            fs.unlinkSync(media)
                                            reply('Filter Updated')
                                        } else {
                                            filter[found] = {
                                                id: `${from}`,
                                                filter: `${filtr}`,
                                                respon: `${resp}`,
                                                type: 'message',
                                                dir: null
                                            }
                                            fs.writeFileSync('./database/filter.json', JSON.stringify(filter))
                                            reply('Filter Updated')
                                        }
                                    }
                                } else {
                                    reply(`[ ! ]WRONG FORMAT\nSend Text ${prefix}addFilter |<word>|<respon>`)
                                }

                                break
                             case 'listfilter':
                             if (!isGroup) return reply(mess.only.group)
                             if (!ferivedGroup) return reply('Group Not Ferived')
                             teks = 'List Filter\n'
                             for(let i of filter){
                             	if(i.id === from){
                             		teks += `❏ ${i.filter}\n`
                           	  	}
                             	}
                             reply(teks)
                             break
                            case 'delfilter':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                if (args.length < 1) return reply(`Send Text ${prefix}delFilter <word>`)
                                if (!ferivedGroup) return reply('Group Not Ferived')
                                var found = false
                                Object.keys(filter).forEach((i) => {
                                    if (filter[i].id === from && filter[i].filter == body.slice(11)) {
                                        found = i
                                    }
                                })
								if (found === false) return reply(`Filter ${body.slice(11)} Not Found`)
                                filter.splice(found, 1)
                                fs.writeFileSync('./database/filter.json', JSON.stringify(filter))
                                reply('Filter Deleted')
                                break
                            case 'antisticker':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                if (args.length < 1) return reply('select enable or disable!!!')
                                var found = false
                                Object.keys(antiSticker).forEach((i) => {
                                    if (antiSticker[i].id.includes(from)) {
                                        found = i
                                    }
                                })
                                if (args[0] === 'enable') {
                                    if (found !== false) return reply(`[ ! ] Anti Sticker Has Been Activated`)
                                    var addAntiSticker = {
                                        id: `${from}`,
                                        sticker: 5,
                                        cooldown: 5000
                                    }
                                    antiSticker.push(addAntiSticker)
                                    fs.writeFileSync('./database/antisticker.json', JSON.stringify(antiSticker))
                                    reply(`[ ! ] Anti Sticker Has Been Activated\nSticker Limit : 5\nCooldown : 5 S\nYou Can Setting Limit & Cooldown By Typing ${prefix}setSticker |<limit>|<cooldown>`)
                                } else if (args[0] === 'disable') {
                                    if (found === false) return reply('[ ! ] Anti Sticker Has Been Disabled')
                                    antiSticker.splice(found, 1)
                                    fs.writeFileSync('./database/antisticker.json', JSON.stringify(antiSticker))
                                    reply('[ ! ] Anti Sticker Has Been Disabled')
                                } else {
                                    reply('select enable or disable!!!')
                                }
                                break
                            case 'setsticker':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                if (args.length < 1) return reply(`[ ! ] WRONG FORMAT\nSend Text ${prefix}setSticker |<limit>|<cooldown>`)
                                const stckr = body.trim().split('|')
									if (stckr.length >= 3) {
                                    const sLimit = stckr[1]
                                    const sCooldown = stckr[2] + /000/
                                    if (sLimit.length < 1) return reply('Limit Sticker Can`t Be Empty!!!')
                                    if (sCooldown.length < 1) return reply('Cooldown Sticker Can`t Be Empty!!!')
                                    var found = false
                                    Object.keys(antiSticker).forEach((i) => {
                                        if (antiSticker[i].id.includes(from)) {
                                            found = i
                                        }
                                    })
                                    if (found === false) {
                                        var addAntiSticker = {
                                            id: `${from}`,
                                            sticker: `${sLimit}`,
                                            cooldown: `${sCooldown}`
                                        }
                                        antiSticker.push(addAntiSticker)
                                        fs.writeFileSync('./database/antisticker.json', JSON.stringify(antiSticker))
                                        reply(`Limit & Cooldown Updated\nLimit Sticker : ${sLimit}\nCooldown : ${stckr[2]} S`)
                                    } else {
                                        var addAntiSticker = {
                                            id: `${from}`,
                                            sticker: `${sLimit}`,
                                            cooldown: `${sCooldown}`
                                        }
                                        fs.writeFileSync('./database/antisticker.json', JSON.stringify(antiSticker))
                                        reply(`Limit & Cooldown Updated\nLimit Sticker : ${sLimit}\nCooldown : ${stckr[2]} S`)
                                    }
                                } else {
                                    reply(`[ ! ] WRONG FORMAT\nSend Text ${prefix}setSticker |<limit>|<cooldown>\nEx : ${prefix}setSticker |5|3`)
                                }
                                break
                            case 'antilink':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                if (args.length < 1) return reply('select enable or disable!!!')
                                if (args[0] === 'enable') {
                                    if (antilink.includes(from)) return reply('[ ! ] Anti Link Has Been Activated')
                                    antilink.push(from)
                                    fs.writeFileSync('./database/antiLink.json', JSON.stringify(antilink))
                                    reply('[ ! ] Anti Link Has Been Activated')
                                } else if (args[0] === 'disable') {
                                    if (!antilink.includes(from)) return reply('[ ! ] Anti Link Has Been Disabled')
                                    antilink.splice(from, 1)
                                    fs.writeFileSync('./database/antiLink.json', JSON.stringify(antilink))
                                    reply('[ ! ] Anti Link Has Been Disabled')
                                } else {
                                    reply('select enable or disable!!!')
                                }
                                break
                            case 'antibadword':
                            case 'antikasar':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                if (args.length < 1) return reply('select enable or disable!!!')
                                if (args[0] === 'enable') {
                                    if (isAntiBadword) return reply('[ ! ] Anti Badword Has Been Activated')
                                    antiBadword.push(from)
                                    fs.writeFileSync('./database/antiBadword.json', JSON.stringify(antiBadword))
                                    reply('[ ! ] Anti Badword Has Been Activated')
                                } else if (args[0] === 'disable') {
                                    if (!isAntiBadword) return reply('[ ! ] Anti Badword Has Been Disabled')
                                    antiBadword.splice(from, 1)
                                    fs.writeFileSync('./database/antiBadword.json', JSON.stringify(antiBadword))
                                    reply('[ ! ] Anti Badword Has Been Disabled')
                                } else {
                                    reply('select enable or disable!!!')
                                }
                                break
                            case 'antirevoke':
                            case 'antidelete':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                if (args.length < 1) return reply('select enable or disable!!!')
                                if (args[0] == 'enable') {
                                    if (isRevoke) return reply('[ ! ] Anti Revoke Has Been Activated')
                                    dataRevoke.push(from)
                                    fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                                    reply('[ ! ] Anti Revoke Has Been Activated')
                                } else if (args[0] == 'disable') {
                                    const index = dataRevoke.indexOf(from)
                                    dataRevoke.splice(index, 1)
                                    fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                                    reply('[ ! ] Anti Revoke Has Been Disabled')
                                }
                                break
                            case 'classmen':
                            case 'klasmen':
                                if (!isGroup) return reply(mess.only.group)
                                members_id = []
                                const klasemen = db.get('group').filter({
                                    id: groupId
                                }).map('members').value()[0]
                                let urut = Object.entries(klasemen).map(([key, val]) => ({
                                    id: key,
                                    ...val
                                })).sort((a, b) => b.denda - a.denda);
                                let textKlas = "*Klasemen Denda Sementara*\n"
                                let i = 1;
                                urut.forEach((klsmn) => {
                                    textKlas += i + ". @" + klsmn.id.split('@')[0] + " 💸 Rp" + formatin(klsmn.denda) + "\n"
                                    i++
                                    members_id.push(klsmn.id)
                                });
                                mentions(textKlas, members_id, true)
                                break
                            case 'reset':
                                if (!isGroup) return reply(mess.only.group)
                                if (!isGroupAdmins) return reply(mess.only.admin)
                                const reset = db.get('group').find({
                                    id: groupId
                                }).assign({
                                    members: []
                                }).write()
                                if (reset) {
                                    reply("The standings have been reset.")
                                }
                                break
                            case 'ocr':
                                if (isMedia && !message.message.videoMessage || isQuotedImage) {
                                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                    const media = await client.downloadAndSaveMediaMessage(encmedia)
                                    reply(mess.wait)
                                    await recognize(media, {
                                            lang: 'eng+ind',
                                            oem: 1,
                                            psm: 3
                                        })
                                        .then(teks => {
                                            reply(teks.trim())
                                            fs.unlinkSync(media)
                                        })
                                        .catch(err => {
                                            reply(err.message)
                                            fs.unlinkSync(media)
                                        })
                                } else {
                                    reply(`Send Image With Caption ${prefix}ocr`)
                                }
                                break
                            case 'tts':
                                if (args.length < 1) return reply(`Send Text ${prefix}tts <lang code> <text>\nEx : ${prefix}tts en hello`)
                                const gtts = require('./gtts')(args[0])
                                if (args.length < 2) return reply('text?')
                                dtts = body.slice(8)
                                ranm = getRandom('.mp3')
                                dtt = dtts.length > 600? dtts.substring(0, 600) : dtt
                                gtts.save(ranm, dtt, function() {
                                    client.sendMessage(from, fs.readFileSync(ranm), audio, {
                                        quoted: message,
                                        mimetype: 'audio/mp4',
                                        ptt: true
                                    })
                                    fs.unlinkSync(ranm)
                                })
                                break
                            case 'mp4':
                                if (isLimitM) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                if (args.length < 1) return reply(`Send Text ${prefix}mp4 <url>`)
                                if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
                                reply(mess.wait)
								try {
                                    ytv(args[0])
                                        .then((res) => {
                                            const {
                                                dl_link,
                                                thumb,
                                                title,
                                                filesizeF,
                                                filesize
                                            } = res
                                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                                .then(async (a) => {
                                                    limitMAdd(sender)
                                                    buffer = await getBuffer(thumb)
                                                    if (Number(filesize) >= 40000) return client.sendMessage(from, buffer, image, {
                                                        quoted: message,
                                                        caption: `*「 YOUTUBE DOWNLOADER」*\n*❏ Title :* ${title}\n*❏ Size :* ${filesizeF}\n*❏ Ext :* Mp4\n\n_The file size has reached the limit, please download it yourself_\n*❏ URL DOWNLOAD :* ${a.data}`
                                                    })
                                                    teks = `*「 YOUTUBE DOWNLOADER 」*\n*❏ Title :* ${title}\n*❏ Size :* ${filesizeF}\n*❏ Ext :* Mp4`
                                                    client.sendMessage(from, buffer, image, {
                                                        quoted: message,
                                                        caption: teks
                                                    })
                                                    buffer = await getBuffer(dl_link)
                                                    client.sendMessage(from, buffer, video, {
                                                        quoted: message
                                                    })
                                                })
                                        })
                                }catch(err) {
                                    ERRLOG(err)
                                    await reply(mess.error.Yt4)
                                }
                                break
                            case 'mp3':
                            case 'ytmp3':
                                if (isLimitM) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                if (args.length < 1) return reply(`Send Text ${prefix}mp3 <url>`)
                                if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
                                reply(mess.wait)
                                try {
                                    yta(args[0])
                                        .then((res) => {
                                            const {
                                                dl_link,
                                                thumb,
                                                title,
                                                filesizeF,
                                                filesize
                                            } = res
                                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                                .then(async (a) => {
                                                    limitMAdd(sender)
                                                    buffer = await getBuffer(thumb)
                                                    if (Number(filesize) >= 30000) return client.sendMessage(from, buffer, image, {
                                                        quoted: message,
                                                        caption: `*「 YOUTUBE DOWNLOADER」*\n*❏ Title :* ${title}\n*❏ Size :* ${filesizeF}\n*❏ Ext :* Mp3\n\n_The file size has reached the limit, please download it yourself_\n*❏ URL DOWNLOAD :* ${a.data}`
                                                    })
                                                    teks = `*「 YOUTUBE DOWNLOADER 」*\n*❏ Title :* ${title}\n*❏ Size :* ${filesizeF}\n*❏ Ext :* Mp3`
                                                    client.sendMessage(from, buffer, image, {
                                                        quoted: message,
                                                        caption: teks
                                                    })
                                                    buffer = await getBuffer(dl_link)
                                                    client.sendMessage(from, buffer, audio, {
                                                        mimetype: 'audio/mp4',
                                                        filename: `${title}.mp3`,
                                                        quoted: message
                                                    }).catch(() => reply(mess.error.Yt3))
                                                })
                                        })
                                }catch(err) {
                                    ERRLOG(err)
                                    reply(mess.error.Yt3)
                                }

                                break
                            case 'play':
                                if (isLimitM) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                if (args.length < 1) return reply(`Send Text ${prefix}play <title>`)
                                reply(mess.wait)
                                try {
                                    yts(body.slice(5)).then((res) => {
                                        yta(res[0].url).then((result) => {
                                            const {
                                                dl_link,
                                                thumb,
                                                title,
                                                filesizeF,
                                                filesize
                                            } = result
                                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                                .then(async (a) => {
                                                    limitMAdd(sender)
                                                    buffer = await getBuffer(thumb)
                                                    if (Number(filesize) >= 30000) return client.sendMessage(from, buffer, image, {
                                                        quoted: message,
                                                        caption: `*「 YOUTUBE DOWNLOADER」*\n*❏ Title :* ${title}\n*❏ Size :* ${filesizeF}\n*❏ Ext :* Mp3\n\n_The file size has reached the limit, please download it yourself_\n*❏ URL DOWNLOAD :* ${a.data}`
                                                    })
                                                    teks = `*「 YOUTUBE DOWNLOADER 」*\n*❏ Title :* ${title}\n*❏ Size :* ${filesizeF}\n*❏ Ext :* Mp3`
                                                    client.sendMessage(from, buffer, image, {
                                                        quoted: message,
                                                        caption: teks
                                                    })
                                                    buffer = await getBuffer(dl_link)
                                                    client.sendMessage(from, buffer, audio, {
                                                        mimetype: 'audio/mp4',
                                                        filename: `${title}.mp3`,
                                                        quoted: message
                                                    }).catch(() => reply(mess.error.Yt3))
                                                })
                                        })
                                    })
                                }catch(err) {
                                    ERRLOG(err)
                                    reply(mess.error.Yt3)
                                }

                                break
                            case 'ytsearch':
                                if (args.length < 1) return reply(`Send Text ${prefix}ytSearch <title>`)
                                reply(mess.wait)
                                try {
                                    await yts(body.slice(10)).then(async (res) => {
                                        teks = '*「 YOUTUBE SEARCH 」*\n'
                                        for(let i = 0; i < res.length; i++) {
                                            teks += `*❏ Id* : ${res[i].id}\n*❏ Title* : ${res[i].title}\n*❏ Views* : ${res[i].views}\n*❏ Duration* : ${res[i].duration}\n*❏ Upload Date* : ${res[i].date}\n*❏ Url* : ${res[i].url}\n\n`
                                        }
                                        buffer = await getBuffer(res[0].thumb)
                                        client.sendMessage(from, buffer, image, {
                                            quoted: message,
                                            caption: teks
                                        })
                                    })
                                }catch(err) {
                                    ERRLOG(err)
                                    reply('Failed To Search')
                                }
                                break
                            case 'ig':
                            case 'instagram':
                                if (isLimitM) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                if (args.length < 1) return reply(`Send Text *${prefix}ig* <url>`)
                                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.error.Iv)
                                reply(mess.wait)
                                try {
                                    let arrBln = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Desember"]
                                    const idRegex = /([-_0-9A-Za-z]{11})/
                                    const idIGG = args[0].match(idRegex)
                                    await getPost(idIGG[0]).then(async (post) => {
                                        limitMAdd(sender)
                                        let a = new Date(post.date * 1000)
                                        const jam = a.getHours()
                                        const menit = a.getMinutes()
                                        const bulan = a.getMonth()
                                        const tanggal = a.getDate()
                                        const tahun = a.getFullYear()
                                        teks = `*「 INSTAGRAM DOWNLOADER 」*\n\n*❏ Username* : ${post.owner_user}\n*❏ Upload Date* : ${jam}:${menit} ${tanggal}-${arrBln[bulan - 1]}-${tahun}\n*❏ Caption* : ${post.capt}`
                                        buffer = await getBuffer(post.url)
                                        if (post.type == 'image') {
                                            client.sendMessage(from, buffer, image, {
                                                quoted: message,
                                                caption: teks
                                            })
                                        } else {
                                            client.sendMessage(from, buffer, video, {
                                                quoted: message,
                                                caption: teks
                                            })
                                        }
                                    }).catch(() => {
                					    reply(mess.error.Ig)
             				   })
                             }catch (err) {
                                    reply(`Error : ${err}`)
                                    ERRLOG(err)
                                  }
                                    break
                                    case 'tiktok':
                                    case 'tiktod':
                                    if (isLimitM) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                    if (args.length < 1) return reply(`Send Text ${prefix}tiktok <url>`)
                                    if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
                                    reply(mess.wait)
                                    try {
                                        function tiktod(url) {
                                            return new Promise((resolve, reject) => {
                                                try {
                                                    tiktok.getVideoMeta(url)
                                                        .then(result => {
                                                            const data = result.collector[0]
                                                            let Tag = []
                                                            for(let i = 0; i < data.hashtags.length; i++) {
                                                                const name = data.hashtags[i].name
                                                                Tag.push(name)
                                                            }
                                                            const id = data.id
                                                            const text = data.text
                                                            const date = data.createTime
                                                            const name = data.authorMeta.name
                                                            const nick = data.authorMeta.nickName
                                                            const music = data.musicMeta.musicName
                                                            const thumb = data.imageUrl
                                                            const hastag = Tag

                                                            resolve({
                                                                id: id,
                                                                name: name,
                                                                nickname: nick,
                                                                timestamp: date,
                                                                thumb: thumb,
                                                                text: text,
                                                                music: music,
                                                                hastag: hastag
                                                            })
                                                        }).catch(reject)
                                                }catch(error) {
                                                    console.log(error)
                                                }
                                            })
                                        }
                                        tiktod(args[0]).then(async (resul) => {
                                            limitMAdd(sender)
                                            const meta = resul
                                            const exekute = exec('tiktok-scraper video ' + args[0] + ' -d')
                                            exekute.stdout.on('data', function(data) {
                                                const res = {
                                                    loc: `${data.replace('Video location: ','').replace('\n','')}`
                                                }
                                                const json = {
                                                    meta,
                                                    res,
                                                }
                                                let hastagtik = `[ `
                                                for(let i = 0; i < json.meta.hastag.length; i++) {
                                                    hastagtik += `${json.meta.hastag[i]} `
                                                }
                                                hastagtik += ` ]`
                                                teks = `*「 TIKTOD DOWNLOADER 」*\n\n*❏ Name* : ${json.meta.name}\n*❏ Nickname* : ${json.meta.nickname}\n*❏ Caption* : ${json.meta.text}\n*❏ Music* : ${json.meta.music}\n*❏ Hastag* : ${hastagtik}`
                                                buffer = fs.readFileSync(json.res.loc)
                                                client.sendMessage(from, buffer, video, {
                                                    mimetype: 'audio/mp4',
                                                    filename: `tiktod.${json.res.loc.substr(-3)}`,
                                                    quoted: message
                                                })
                                                fs.unlinkFileSync(json.res.loc)
                                            })
                                        })
                                    }catch(err) {
                                        ERRLOG(err)
                                        reply('Failed, an error occurred while downloading file')
                                    }

                                    break
                                    case 'ocr':
                                    if ((isMedia && !message.message.videoMessage || isQuotedImage) && args.length == 0) {
                                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                        const media = await client.downloadAndSaveMediaMessage(encmedia)
                                        reply(mess.wait)
                                        await recognize(media, {
                                                lang: 'eng+ind',
                                                oem: 1,
                                                psm: 3
                                            })
                                            .then(teks => {
                                                reply(teks.trim())
                                                fs.unlinkSync(media)
                                            })
                                            .catch(err => {
                                                reply(err.message)
                                                fs.unlinkSync(media)
                                            })
                                    } else {
                                        reply(`Send Image With Caption $ {prefix}ocr`)
                                    }
                                    break
                                    case 'toimg':
										if (!isQuotedSticker) return reply('❌ reply sticker ❌')
										reply(mess.wait)
										encmedia = JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await client.downloadAndSaveMediaMessage(encmedia,`./temp/toimg`)
										ran = getRandom('.png')
											exec(`ffmpeg -i ${media} ${ran}`, (err) => {
												fs.unlinkSync(media)
												if (err) return reply('❌ Failed, an error occurred while converting the sticker to a image❌')
													buffer = fs.readFileSync(ran)
													client.sendMessage(from, buffer, image, {quoted: message, caption: '>//<'})
													fs.unlinkSync(ran)
												})
										break
                                    case 'tomp3':
                                    if (!isQuotedVideo) return reply('❌ reply video ❌')
                                    reply(mess.wait)
									encmedia = JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo 
									media = await client.downloadAndSaveMediaMessage(encmedia)
									 ran = getRandom('.mp4')
									 exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                                        fs.unlinkSync(media)
                                        if (err) return reply('❌ Failed, an error occurred while converting the video to a mp3❌')
                                        buffer = fs.readFileSync(ran)
                                        client.sendMessage(from, buffer, audio, {
                                            mimetype: 'audio/mp4',
                                            quoted: message
                                        })
                                        fs.unlinkSync(ran)
                                    })
                                    break
                                    case 'exif':
                                    if(!isOwner) return
                                    dataExif = body.trim().split('|')
									if (dataExif.length >= 3) {
                                    const Pack = dataExif[1]
                                    const Author = dataExif[2]
                                    await createExif(Pack, Author)
                                    reply(mess.success)
                                    	}else{
                                    	reply(`Ex : ${prefix}exif |packname|author`)
                                    	}
                                    break
                                    case 'sticker':
                                    case 'stiker':
                                    case 's':
										if (isMedia && !message.message.videoMessage || isQuotedImage) {
											const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message
											const media = await client.downloadAndSaveMediaMessage(encmedia)
											ran = `${Math.floor(Math.random() * 10000)}`
											   sharp(media).resize({
      									      width: 512,
         									   height: 512,
       									     fit: sharp.fit.contain,
    									        background: {
     									         r: 0,
      									        g: 0,
       									       b: 0,
         									     alpha: 0
        									    }
       									   }).webp().toBuffer().then(buffer => {
        									    modifExif(buffer, ran, (res) => {
       		  						       client.sendMessage(from, res, sticker, {
        								        quoted: message
           								   })
           									fs.unlinkSync(media)
         								   })
          								})
										} else{
                                    		reply(`send/reply image with caption ${prefix}sticker`)
                                    	}
                                    break
                                    case 'stickergif':
                                    case 'stikergif':
                                    case 'sgif':
                      	              if (isMedia && !message.message.imageMessage || isQuotedVideo) {
											const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message
											const media = await client.downloadAndSaveMediaMessage(encmedia)
											ran = `${Math.floor(Math.random() * 10000)}`
												if (Buffer.byteLength(media) >= 6186598.4) return reply('Oversize!!!')
        											modifWebp(ran, media).then(res => {
          											client.sendMessage(from, res, sticker )
          											fs.unlinkSync(media)
     								 	  })
									}else{
                                 	reply(`send/reply gif with caption ${prefix}stickergif\nNote : MAX 10 SEC`)
                                    	}
                                    break
                             case 'stickernobg':
							case 'stikernobg':
							case 'snobg':
								if (isMedia && !message.message.videoMessage || isQuotedImage) {
								const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : message
								const media = await client.downloadAndSaveMediaMessage(encmedia)
								ran = `${Math.floor(Math.random() * 10000)}`
								ranp = getRandom('.png')
								reply(mess.wait)
									await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
									fs.unlinkSync(media)
										let buffer = Buffer.from(res.base64img, 'base64')
											fs.writeFileSync(ranp, buffer, (err) => {
												if (err) return reply(mess.error.stick)
											})
											   sharp(ranp).resize({
      									      width: 512,
         									   height: 512,
       									     fit: sharp.fit.contain,
    									        background: {
     									         r: 0,
      									        g: 0,
       									       b: 0,
         									     alpha: 0
        									    }
       									   }).webp().toBuffer().then(buffer => {
        									    modifExif(buffer, ran, (res) => {
       		  						       client.sendMessage(from, res, sticker, {
        								        quoted: message
           								   })
           									fs.unlinkSync(media)
         								   })
          								})
									})
							}else{
                 	     reply(`send/reply image with caption ${prefix}stickergif\nNote : MAX 10 SEC`)
              		  	}
							break
                     case 'ttp':
						if(args.length < 0) return reply('text?')
							pngttp = './temp/ttp.png'
							ran = `${Math.floor(Math.random() * 10000)}`
							ttp = await axios.get(`https://api.areltiyan.site/sticker_maker?text=${body.slice(5)}`)
							base64Img.img(ttp.base64, 'temp', 'ttp', function(err, filepath) {
								sharp(pngttp).resize({
      									      width: 512,
         									   height: 512,
       									     fit: sharp.fit.contain,
    									        background: {
     									         r: 0,
      									        g: 0,
       									       b: 0,
         									     alpha: 0
        									    }
       									   }).webp().toBuffer().then(buffer => {
        									    modifExif(buffer, ran, (res) => {
       		  						       client.sendMessage(from, res, sticker, {
        								        quoted: message
           								   })
           									fs.unlinkSync(pngttp)
         							   })
          							})
									})
							break
                                        case 'tahta':
                                        if (args.length < 1) return reply('Text?')
                                        if (isLimitM) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                        reply(mess.wait)
                                        await sleep(2500)
                                        const tahta = body.slice(7)
                                        splitText = tahta.replace(/(\S+\s*){1,10}/g, '$&\n')
                                        fixHeight = 'HARTA\nTAHTA\n' + splitText.toUpperCase()
                                        spawn('convert', [
                                                '-gravity',
                                                'Center',
                                                '-size',
                                                '1280x1280',
                                                'xc:black',
                                                '-font',
                                                './media/font/tahta.ttf',
                                                '-pointsize',
                                                '200',
                                                '-tile',
                                                './media/tile_disks.jpg',
                                                '-annotate',
                                                '+20+80',
                                                fixHeight,
                                                '-wave',
                                                '10x175',
                                                '-crop',
                                                '1000x850+0+0',
                                                './media/tahta.jpg'
                                            ])
                                            .on('error', () => reply('*ERROR*'))
                                            .on('exit', () => {
                                                buffer = fs.readFileSync('./media/tahta.jpg')
                                                client.sendMessage(from, buffer, image, {
                                                    quoted: message,
                                                    caption: `HARTA TAHTA ${splitText.toUpperCase()}`
                                                })
                                                limitMAdd(sender)
                                            })
                                        break
                                        case 'nulis':
                                        case 'write':
                                        if (args.length < 1) return reply(`Send Text ${prefix}write <text>`)
                                        reply(mess.wait)
                                        const nulis = body.slice(7)
                                        const panjangKalimat = nulis.replace(/(\S+\s*){1,10}/g, '$&\n')
                                        const panjangBaris = panjangKalimat.split('\n').slice(0, 30).join('\n')
                                        spawn('convert', [
                                                './media/before.jpg',
                                                '-font',
                                                './media/font/nulis.ttf',
                                                '-size',
                                                '1024x784',
                                                '-pointsize',
                                                '20',
                                                '-interline-spacing',
                                                '-7.5',
                                                '-annotate',
                                                '+344+142',
                                                panjangBaris,
                                                './media/after.jpg'
                                            ])
                                            .on('error', () => reply("emror"))
                                            .on('exit', () => {
                                                buffer = fs.readFileSync('./media/after.jpg')
                                                client.sendMessage(from, buffer, image, {
                                                    quoted: message,
                                                    caption: `.......`
                                                })
                                            })
                                        break
                                        case 'meme':
                                        if ((isMedia && !message.message.videoMessage || isQuotedImage) && args.length >= 2) {
                                            const top = arg.split('|')[0]
                                            const bottom = arg.split('|')[1]
                                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                            const media = await client.downloadAndSaveMediaMessage(encmedia)
                                            upload = await imgbb("c69463d75c602cb13487e4d5ee1c95d5", media)
                                            buffer = await getBuffer(`https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${upload.display_url}`)
                                            client.sendMessage(from, buffer, image, {
                                                quoted: message
                                            })
                                            fs.unlinkSync(media)
                                                .catch(() => {
                                                    reply('Error!')
                                                })
                                        } else {
                                            await reply(`[ ! ] WRONG FORMAT,Send/reply image with caption ${prefix}meme <top text> | <bottom text>`)
                                        }
                                        break
                                        case 'ytcomment':
                                        case 'ytcoment':
                                        if ((isMedia && !message.message.videoMessage || isQuotedImage) && args.length >= 2) {
                                            reply(mess.wait)
                                            const cmn = arg.split('|')[0]
                                            const un = arg.split('|')[1]
                                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                            const media = await client.downloadAndSaveMediaMessage(encmedia)
                                            upload = await imgbb("c69463d75c602cb13487e4d5ee1c95d5", media)
                                            buffer = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${upload.display_url}&comment=${cmn}&username=${un}`)
                                            client.sendMessage(from, buffer, image, {
                                                quoted: message
                                            })
                                            fs.unlinkSync(media)
                                                .catch(() => {
                                                    reply('Ada yang error!')
                                                })
                                        } else {
                                            await reply(`Send/reply image with caption ${prefix}ytComment <comment> | <channel name>`)
                                        }
                                        break
                                        case 'quotemaker':
                                        if (args.length >= 2) {
                                            reply(mess.wait)
                                            const qu = arg.split('|')[0]
                                            const au = arg.split('|')[1]
                                            buffer = await getBuffer(`https://terhambar.com/aw/qts/proses.php?kata=${qu}&author=${au}&tipe=random&font=./font/font1.otf&size=55`)
                                            client.sendMessage(from, buffer, image, {
                                                    quoted: message
                                                })
                                                .catch(() => {
                                                    reply('Ada yang error!')
                                                })
                                        } else {
                                            await reply(`Use ${prefix}quotemaker quote | author \n \n Ex: ${prefix}quotemaker Stay alive even if it is useless | ff.forFUN_GANS`)
                                        }
                                        break
                                        case 'gay':
                                        case 'rainbow':
                                        if (isMedia && !message.message.videoMessage || isQuotedImage) {
                                            reply(mess.wait)
                                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                            const media = await client.downloadAndSaveMediaMessage(encmedia)
                                            upload = await imgbb("c69463d75c602cb13487e4d5ee1c95d5", media)
                                            buffer = await getBuffer(`https://some-random-api.ml/canvas/gay?avatar=${upload.display_url}`)
                                            client.sendMessage(from, buffer, image, {
                                                quoted: message
                                            })
                                            fs.unlinkSync(media)
                                        } else {
                                            reply(`Send/reply image with caption ${prefix}rainbow`)
                                        }
                                        break
                                        case 'wasted':
                                        case 'wastedmaker':
                                        if (isMedia && !message.message.videoMessage || isQuotedImage) {
                                            reply(mess.wait)
                                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                            const media = await client.downloadAndSaveMediaMessage(encmedia)
                                            upload = await imgbb("c69463d75c602cb13487e4d5ee1c95d5", media)
                                            buffer = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${upload.display_url}`)
                                            client.sendMessage(from, buffer, image, {
                                                quoted: message
                                            })
                                            fs.unlinkSync(media)
                                        } else {
                                            reply(`Send/reply image with caption ${prefix}wasted`)
                                        }
                                        break
                                        case 'glass':
                                        if (isMedia && !message.message.videoMessage || isQuotedImage) {
                                            reply(mess.wait)
                                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                            const media = await client.downloadAndSaveMediaMessage(encmedia)
                                            upload = await imgbb("c69463d75c602cb13487e4d5ee1c95d5", media)
                                            buffer = await getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${upload.display_url}`)
                                            client.sendMessage(from, buffer, image, {
                                                quoted: message
                                            })
                                            fs.unlinkSync(media)
                                        } else {
                                            reply(`Send/reply image with caption ${prefix}glass`)
                                        }
                                        break
                                        case 'greyscale':
                                        if (isMedia && !message.message.videoMessage || isQuotedImage) {
                                            reply(mess.wait)
                                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                            const media = await client.downloadAndSaveMediaMessage(encmedia)
                                            upload = await imgbb("c69463d75c602cb13487e4d5ee1c95d5", media)
                                            buffer = await getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${upload.display_url}`)
                                            client.sendMessage(from, buffer, image, {
                                                quoted: message
                                            })
                                            fs.unlinkSync(media)
                                        } else {
                                            reply(`Send/reply image with caption ${prefix}greyscale`)
                                        }
                                        break
                                        case 'invert':
                                        if (isMedia && !message.message.videoMessage || isQuotedImage) {
                                            reply(mess.wait)
                                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                            const media = await client.downloadAndSaveMediaMessage(encmedia)
                                            upload = await imgbb("c69463d75c602cb13487e4d5ee1c95d5", media)
                                            buffer = await getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${upload.display_url}`)
                                            client.sendMessage(from, buffer, image, {
                                                quoted: message
                                            })
                                            fs.unlinkSync(media)
                                        } else {
                                            reply(`Send/reply image with caption ${prefix}invert`)
                                        }
                                        break
										case 'trigger':
										case 'triggered':
											if (isMedia && !message.message.videoMessage || isQuotedImage) {
											reply(mess.wait)
 										   const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
  										  const media = await client.downloadAndSaveMediaMessage(encmedia)
  				  						ran = getRandom('.gif')			
        									const random = `${Math.floor(Math.random() * 10000)}`
     										canvas.Canvas.trigger(media)
      										 .then(async(buffer) => {
    										    canvas.write(buffer, ran)
        											modifWebp(random, ran).then(res => {
          											client.sendMessage(from, res, sticker )
          											fs.unlinkSync(ran)
     								 			  })
    										    })
 										  } else {
      										reply(`Send/reply image with caption ${prefix}invert`)
 										   }
										break
                                        case 'listsurah':
                                        try {
                                            axios.get('https://raw.githubusercontent.com/arugaZ/grabbed-results/main/islam/surah.json')
                                                .then((response) => {
                                                    let hehex = '「 List Surah 」\n'
                                                    for(let i = 0; i < response.data.data.length; i++) {
                                                        hehex += '➸  '
                                                        hehex += response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
                                                    }
                                                    hehex += '「 ForFun BOT 」'
                                                    reply(hehex)
                                                })
                                        }catch(err) {
                                            reply(err)
                                        }
                                        break
                                        case 'infosurah':
                                        if (args.length < 1) return reply(`*_${prefix}infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh penggunan: ${prefix}infosurah al-baqarah`)
                                        var responseh = await axios.get('https://raw.githubusercontent.com/arugaZ/grabbed-results/main/islam/surah.json')
                                        var {
                                            data
                                        } = responseh.data
                                        var idx = data.findIndex(function(post, index) {
                                            if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                                                return true;
                                        });
                                        var pesan = ""
                                        pesan = pesan + "Nama : " + data[idx].name.transliteration.id + "\n" + "Asma : " + data[idx].name.short + "\n" + "Arti : " + data[idx].name.translation.id + "\n" + "Jumlah ayat : " + data[idx].numberOfVerses + "\n" + "Nomor surah : " + data[idx].number + "\n" + "Jenis : " + data[idx].revelation.id + "\n" + "Keterangan : " + data[idx].tafsir.id
                                        reply(pesan)
                                        break
                                        case 'surah':
                                        if (args.length < 1) return reply(`*_${prefix}surah <surah name> <ayat>_*\nEx : ${prefix}surah al-baqarah 1 en/id*`)
                                        var responseh = await axios.get('https://raw.githubusercontent.com/arugaZ/grabbed-results/main/islam/surah.json')
                                        var {
                                            data
                                        } = responseh.data
                                        var idx = data.findIndex(function(post, index) {
                                            if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                                                return true;
                                        });
                                        nmr = data[idx].number
                                        if (!isNaN(nmr)) {
                                            var responseh2 = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1])
                                            var {
                                                data
                                            } = responseh2.data
                                            var last = function last(array, n) {
                                                if (array == null) return void 0;
                                                if (n == null) return array[array.length - 1];
                                                return array.slice(Math.max(array.length - n, 0));
                                            };
                                            bhs = last(args)
                                            pesan = ""
                                            pesan = pesan + data.text.arab + "\n\n"
                                            if (bhs == "en") {
                                                pesan = pesan + data.translation.en
                                            } else {
                                                pesan = pesan + data.translation.id
                                            }
                                            pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")"
                                            reply(pesan)
                                        }
                                        break
                                        case 'tafsir':
                                        if (args.length < 1) return reply(`*_${prefix}tafsir <surah name> <ayat>_*\nEx : ${prefix}tafsir al-baqarah 1`)
                                        var responsh = await axios.get('https://raw.githubusercontent.com/arugaZ/grabbed-results/main/islam/surah.json')
                                        var {
                                            data
                                        } = responsh.data
                                        var idx = data.findIndex(function(post, index) {
                                            if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                                                return true;
                                        });
                                        nmr = data[idx].number
                                        if (!isNaN(nmr)) {
                                            var responsih = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1])
                                            var {
                                                data
                                            } = responsih.data
                                            pesan = ""
                                            pesan = pesan + "Tafsir Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + "\n\n"
                                            pesan = pesan + data.text.arab + "\n\n"
                                            pesan = pesan + "_" + data.translation.id + "_" + "\n\n" + data.tafsir.id.long
                                            reply(pesan)
                                        }
                                        break
                                        case 'alaudio':
                                        if (args.length < 1) return reply(`*_${prefix}ALaudio <surah name> _* \nShows the link of a particular audio surah. Example usage: ${prefix}ALaudio al-fatihah \n\n *_${prefix}ALaudio <surah name> <ayat>_*\nSends audio of certain surahs and verses along with their translations in Indonesian. Example usage: ${prefix}ALaudio al-fatihah 1 \n\n *_${prefix}ALaudio <name of surah> <ayat> en_*\nSends audio of certain surah and verse along with their translation in English. Example usage: ${prefix}ALaudio al-fatihah 1 en`)
                                        ayat = "ayat"
                                        bhs = ""
                                        var responseh = await axios.get('https://raw.githubusercontent.com/arugaZ/grabbed-results/main/islam/surah.json')
                                        var surah = responseh.data
                                        var idx = surah.data.findIndex(function(post, index) {
                                            if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                                                return true;
                                        });
                                        nmr = surah.data[idx].number
                                        if (!isNaN(nmr)) {
                                            if (args.length > 2) {
                                                ayat = args[1]
                                            }
                                            if (args.length == 2) {
                                                var last = function last(array, n) {
                                                    if (array == null) return void 0;
                                                    if (n == null) return array[array.length - 1];
                                                    return array.slice(Math.max(array.length - n, 0));
                                                };
                                                ayat = last(args)
                                            }
                                            pesan = ""
                                            if (isNaN(ayat)) {
                                                var responsih2 = await axios.get('https://raw.githubusercontent.com/arugaZ/grabbed-results/main/islam/surah/' + nmr + '.json')
                                                var {
                                                    name,
                                                    name_translations,
                                                    number_of_ayah,
                                                    number_of_surah,
                                                    recitations
                                                } = responsih2.data
                                                pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n"
                                                pesan = pesan + "Dilantunkan oleh " + recitations[0].name + " : " + recitations[0].audio_url + "\n"
                                                pesan = pesan + "Dilantunkan oleh " + recitations[1].name + " : " + recitations[1].audio_url + "\n"
                                                pesan = pesan + "Dilantunkan oleh " + recitations[2].name + " : " + recitations[2].audio_url + "\n"
                                                reply(pesan)
                                            } else {
                                                var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + ayat)
                                                var {
                                                    data
                                                } = responsih2.data
                                                var last = function last(array, n) {
                                                    if (array == null) return void 0;
                                                    if (n == null) return array[array.length - 1];
                                                    return array.slice(Math.max(array.length - n, 0));
                                                };
                                                bhs = last(args)
                                                pesan = ""
                                                pesan = pesan + data.text.arab + "\n\n"
                                                if (bhs == "en") {
                                                    pesan = pesan + data.translation.en
                                                } else {
                                                    pesan = pesan + data.translation.id
                                                }
                                                pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")"
                                                buffer = await getBuffer(data.audio.secondary[0])
                                                await client.sendMessage(from, buffer, audio, {
                                                    mimetype: 'audio/mp4',
                                                    quoted: message
                                                })
                                                await reply(pesan)
                                            }
                                        }
                                        break
                                        case 'jadwalsholat':
                                        case 'prayerschedule':
                                        if (args.length < 1) return reply(`[❗] Send text *${prefix}jadwalsholat [area]*\Ex : *${prefix}jadwalShalat Tangerang*`)
                                        const daerah = args.join(' ')
                                        let arrbulan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Desember"]
                                        tgl = new Date().getDate()
                                        bln = new Date().getMonth()
                                        thn = new Date().getFullYear()
                                        const jadwalShalat = await get.get(`https://api.pray.zone/v2/times/day.json?city=${daerah}&date=${thn}-${bln}-${tgl}`).json()
                                        if (jadwalShalat.error) return reply(jadwalShalat.error)
                                        const {
                                            Imsak,
                                            Sunrise,
                                            Fajr,
                                            Dhuhr,
                                            Asr,
                                            Sunset,
                                            Maghrib,
                                            Isha,
                                            Midnight
                                        } = await jadwalShalat.results.datetime[0].times
                                        teks = `${daerah}, ${tgl}-${arrbulan[bln]}-${thn}\n\nImsyak : ${Imsak}\nSubuh : ${Fajr}\nTerbit : ${Sunrise}\nDzuhur : ${Dhuhr}\nAshar : ${Asr}\nMaghrib : ${Maghrib}\nIsya : ${Isha}`
                                        reply(teks)
                                        break
                                        case 'igsearch':
                                        case 'searchig':
                                        if (args.length < 1) return reply(`Kirim Perintah *${prefix}igsearch* _Username_`)
                                        const userigs = body.slice(10)
                                        reply(mess.wait)
                                        try {
                                            await searchUser(userigs).then(async (us) => {
                                                let teks = `*Result of ${userigs}*\n\n`
                                                for(let i = 0; i < us.length; i++) {
                                                    teks += `
❏ *Username* : ${us[i].username}
❏ *Full Name* : ${us[i].name}
❏ *Id New Story* : ${us[i].latest_reel}
❏ *Ferived* : ${us[i].is_verified ? "✔️" : "❌"}
❏ *Private Account* : ${us[i].is_private ? "✔️" : "❌"}

                        `
                                                }
                                                buffer = await getBuffer(us[0].pic)
                                                client.sendMessage(from, buffer, image, {
                                                    quoted: message,
                                                    caption: teks
                                                })
                                            })
                                        }catch(e) {
                                            ERRLOG(e)
                                            reply(`_❌ Failed, an error occurred while search ${userigs}`)
                                        }
                                        break
                                        case 'igstalk':
                                        if (args.length < 1) return reply(`Kirim Perintah *${prefix}igstalk* _Username_`)
                                        reply(mess.wait)
                                        try {
                                            await getUser(args[0].replace('@', '')).then(async (user) => {
                                                const {
                                                    biography,
                                                    subscribersCount,
                                                    subscribtions,
                                                    postsCount,
                                                    fullName,
                                                    username,
                                                    profilePicHD,
                                                    isPrivate,
                                                    isVerified,
                                                    posts
                                                } = user
                                                const priv_ = isPrivate ? "✔️" : "✖️"
                                                const verif_ = isVerified ? "✔️" : "✖️"
                                                teks = `➣ *Full Name* : ${fullName}\n➣ *Username* : ${username}\n➣ *Ferived* : ${verif_}\n➣ *Private Account* : ${priv_}\n➣ *Followers* : ${subscribersCount}\n➣ *Following* : ${subscribtions}\n➣ *Total Post* : ${postsCount}\n➣ *Biodata* : ${biography}`
                                                buffer = await getBuffer(profilePicHD)
                                                client.sendMessage(from, buffer, image, {
                                                    quoted: message,
                                                    caption: teks
                                                })
                                            })
                                        }catch(e) {
                                            ERRLOG(e)
                                            reply(`_❌ Failed, an error occurred while stalk ${args[0]}_`)
                                        }
                                        break
                                        case 'listhero':
                                        case 'heroml':
                                        await herolist().then((ress) => {
                                            let hm = `*Displays a list of mobile legends heroes*\n\n`
                                            for(let i = 0; i < ress.hero.length; i++) {
                                                hm += '➣  ' + ress.hero[i] + '\n'
                                            }
                                            reply(hm)
                                        })
                                        break
                                        case 'herodetail':
                                        if (args.length < 1) return reply(`Send text *${prefix}herodetail _Hero Names_*\Ex *${prefix}herodetail argus*`)
                                        await herodetails(body.slice(12)).then(async (res) => {
                                            let capt = `*Hero details ${body.slice(12)}*

*Name* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Features* : ${res.hero_feature}
*Special* : ${res.speciality}
*Recommendation Line* : ${res.laning_recommendation}
*Price* : ${res.price.battle_point} (Battle point) | ${res.price.diamond} (Diamond) | ${res.price.hero_fragment} (Hero Fragment)
*Realise* : ${res.release_date}

*Skill* : 
*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 

*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}
`
                                            buffer = await getBuffer(res.image.split('/revision')[0])
                                            client.sendMessage(from, buffer, image, {
                                                quoted: message,
                                                caption: capt
                                            })
                                        })
                                        break
                                        case 'wait':
                                        case 'whatanime':
                                        if (isMedia && !message.message.videoMessage || isQuotedImage) {
                                            reply(mess.wait)
                                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : message
                                            media = await client.downloadMediaMessage(encmedia)
                                            await wait(media).then(res => {
                                                client.sendMessage(from, res.video, video, {
                                                    quoted: message,
                                                    caption: res.teks.trim()
                                                })
                                            }).catch(err => {
                                                reply(err)
                                            })
                                        } else {
                                            reply(`Send/reply image with caption ${prefix}whatanime`)
                                        }
                                        break
                                        case 'pinterest':
                                        if (args.length < 1) return reply(`send text ${prefix}pinterest <qwery`)
                                        data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {
                                            method: 'get'
                                        })
                                        reply(mess.wait)
                                        n = JSON.parse(JSON.stringify(data));
                                        nimessage = n[Math.floor(Math.random() * n.length)];
                                        pok = await getBuffer(nimessage)
                                        client.sendMessage(from, pok, image, {
                                            quoted: message,
                                            caption: `𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓\n\*Result Of* : *${body.slice(11)}*`
                                        })
                                        break
                                        case 'brainly':
                                        	if(args.length < 0) return reply(`Send ${prefix}brainly <text>`)
            								    await BrainlySearch(body.slice(8).split('.')[0],Number(5), function(res){
            										brainly = `*「 BRAINLY SEARCH 」*\n\n`
            								        res.forEach(x=>{
               							         if (x.jawaban.fotoJawaban.length == 0) {
               							             brainly += `❏ *Ask* : ${x.pertanyaan}\n\n❏ *Answer* : ${x.jawaban.judulJawaban}\n\n\n`
                            					    } else {
                         							   brainly += `❏ *Ask* : ${x.pertanyaan}\n\n❏ *Answer* : ${x.jawaban.judulJawaban}\n\n❏ *Url Image* : ${x.jawaban.fotoJawaban.join('\n')}\n\n\n`
                        							  }
          							          })
          										reply(brainly)
           							     })
      					      	break
                                        case 'fact':
                                        case 'fakta':
                                        const faks = fs.readFileSync('./media/random/faktaunix.txt', 'utf-8').split('\n')
                                        await reply(`*FACTS* : ${faks[Math.floor(Math.random() * faks.length + 1)]}`).catch((e) => ERRLOG(e))
                                        break
                                        case 'quotes':
                                        	const quotes = JSON.parse(fs.readFileSync('./media/random/quotes.json'))
   	                                     const quotesindex = Math.floor(Math.random() * quotes.length)
    								        const randomquotes = quotes[quotesindex]
      								      await reply(`*Author :* ${randomquotes.author}\n\n*Quotes :* ${randomquotes.quotes}`)
        								    .catch(() => {
     								           reply('error')
    								        })
                                        break
                                        case 'katabijak':
                                        const bijak = fs.readFileSync('./media/random/katabijax.txt', 'utf-8').split('\n')
                                        await reply(`${bijak[Math.floor(Math.random() * bijak.length + 1)]}`).catch((e) => ERRLOG(e))
                                        break
                                        case 'pantun':
                                        const fakstpu = fs.readFileSync('./media/random/pantun.txt', 'utf-8').split('\n')
                                        const pantunn = fakstpu[Math.floor(Math.random() * fakstpu.length + 1)].split(' aruga-line ')
                                        let panteune = ''
                                        for(let i = 0; i < pantunn.length; i++) {
                                            panteune += `${pantunn[i].replace(' \r\n','')}\n`
                                        }
                                        console.log({
                                            res: panteune
                                        })
                                        await reply(`${panteune}`).catch((e) => ERRLOG(e))
                                        break
                                        case 'pictquote':
                                        case 'pictquotes':
                                        try {
                                            reply(mess.wait)
                                            const pictq = await get.get('https://inspirobot.me/api?generate=true')
                                            console.log(pictq.body)
                                            buffer = await getBuffer(pictq.body)
                                            client.sendMessage(from, buffer, image, {
                                                quoted: message
                                            }).catch((e) => ERRLOG(e))
                                        }catch(e) {
                                            ERRLOG(e)
                                            reply(`Kesalahan saat mengambil data quotes!`)
                                        }
                                        break
                                        case 'ramalanjodoh':
                                        if (args.length < 1) return reply(`Kirim perintah Cek Jodoh kamu dengan cara ketik perintah :\n*${prefix}ramalanjodoh* _Kamu|nama pasanganmu_\nContoh :\n*${prefix}ramalanjodoh* _asep|udin_`)
                                        reply(mess.wait)
                                        const nama1 = body.slice(14).split('|')[0]
                                        const nama2 = body.split('|')[1]
                                        Axios.get('https://www.primbon.com/kecocokan_nama_pasangan.php?nama1=' + nama1 + '&nama2=' + nama2 + '&proses=+Submit%21+', {
                                                method: 'get'
                                            })
                                            .then(async({
                                                data
                                            }) => {
                                                const $ = cheerio.load(data)
                                                const progress = 'https://www.primbon.com/' + $('#body > img').attr('src')
                                                const isi = $('#body').text().split(nama2)[1].replace('< Hitung Kembali', '').split('\n')[0]
                                                const posi = isi.split('Sisi Negatif Anda: ')[0].replace('Sisi Positif Anda: ', '')
                                                const nega = isi.split('Sisi Negatif Anda: ')[1]
                                                const res = {
                                                    result: {
                                                        nama1: nama1,
                                                        nama2: nama2,
                                                        thumb: progress,
                                                        positif: posi,
                                                        negatif: nega
                                                    }
                                                }
                                                // console.log(res)
                                                buffer = await getBuffer(res.result.thumb)
                                                client.sendMessage(from, buffer, image, {
                                                    quoted: message,
                                                    caption: `*Hasil ramalan jodoh dari ${nama1} dan ${nama2}*\n\n*Sisi Positif* : ${res.result.positif}\n*Sisi Negatif* : ${res.result.negatif}`
                                                }).catch((e) => ERRLOG(e))
                                            })
                                        break
                                        case 'qr':
                                        if (args.length < 1) return reply('Text?')
                                        reply(mess.wait)
                                        buffer = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${body.slice(4)}`)
                                        client.sendMessage(from, buffer, image, {
                                            quoted: message
                                        })
                                        break
                                        case 'translate':
                                        if (args.length < 1) return reply(`Send text ${prefix}translate <text> | <lang>\nEx : ${prefix}translate hello how are you | id`)
                                        const texto = args.join(' ').substring(0, args.join(' ').indexOf('|') - 1)
                                        const languaget = args.join(' ').substring(body.lastIndexOf('|') + 2)
                                        translate(texto, {
                                            to: languaget
                                        }).then(res => {
                                            reply(res.text)
                                        })
                                        break
                                        case 'math':
                				   	if (typeof mathjs.evaluate(args.join(' ')) !== 'number') {
              					     await reply(`{args.join(' ')} Not a Number`)
            						    } else {
              					      await reply(`*「 MATH 」*\n\n${args.join(' ')} = ${mathjs.evaluate(args.join(' '))}`)
           						     }
 							           break
                                        case 'memes':
                                        meme = await kagApi.memes()
                                        buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
                                        client.sendMessage(from, buffer, image, {
                                            quoted: message,
                                            caption: '.......'
                                        })
                                        break
                                        case 'loli':
                                        if (isLimitG) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {
                                            method: 'get'
                                        })
                                        loli = await getBuffer(anu.result)
                                        teks = 'Nee...'
                                        limitGAdd(sender)
                                        client.sendMessage(from, loli, image, {
                                            quoted: message,
                                            caption: teks
                                        })
                                        break
                                        case 'shota':
                                        case 'bocil':
                                        case 'bocah':
                                        if (isLimitG) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                        const shota = ["https:\/\/i.pinimg.com\/originals\/2f\/54\/b9\/2f54b94e32050a027d3b53e387a2915a.jpg", "https:\/\/i.pinimg.com\/originals\/fd\/9c\/5e\/fd9c5ed7a5ed07db870c30bee348e018.jpg", "https:\/\/i.pinimg.com\/originals\/aa\/a9\/98\/aaa998dcc7140b628e7f69de04fed410.jpg", "https:\/\/i.pinimg.com\/originals\/bf\/de\/53\/bfde5305de4acb1d1b99bab14758dd85.png", "https:\/\/i.pinimg.com\/originals\/fa\/bf\/4b\/fabf4b232d50e0890a4d26beb493de85.jpg", "https:\/\/i.pinimg.com\/originals\/e0\/19\/3e\/e0193e579c70fce79b1ba30e7781fe92.png", "https:\/\/i.pinimg.com\/originals\/61\/a5\/26\/61a526a25efa01ff24102cb30a8bacc0.jpg", "https:\/\/i.pinimg.com\/originals\/46\/5e\/6c\/465e6c1086f8d13ad84fcddf507d4157.jpg", "https:\/\/i.pinimg.com\/originals\/8e\/d7\/fa\/8ed7fa409687abd5fc293ab0ab4b3957.jpg", "https:\/\/i.pinimg.com\/originals\/b0\/5d\/93\/b05d93d71f216bf464c46f236a42ccec.jpg", "https:\/\/i.pinimg.com\/originals\/6f\/e1\/64\/6fe1645c92a1f19f3cdfb01275c37149.jpg", "https:\/\/i.pinimg.com\/originals\/c3\/33\/06\/c33306c8bc535aed0fa9bab6b5c09084.jpg", "https:\/\/i.pinimg.com\/originals\/e5\/bd\/27\/e5bd274b16bb8ea619aec4f75f89c50b.jpg", "https:\/\/i.pinimg.com\/originals\/94\/04\/c1\/9404c1580939b55a5200e51e60ebbff7.jpg", "https:\/\/i.pinimg.com\/originals\/07\/88\/08\/07880854c8992d014962736b5377475f.jpg", "https:\/\/i.pinimg.com\/originals\/20\/a6\/24\/20a624971e9a042c5390f668929896f4.jpg", "https:\/\/i.pinimg.com\/originals\/9d\/8b\/e0\/9d8be0e35b808e2e674455916204cb93.jpg", "https:\/\/i.pinimg.com\/originals\/ea\/13\/a2\/ea13a2aa7372f5f98c4bb2e8b423d9c2.jpg", "https:\/\/i.pinimg.com\/originals\/d4\/56\/3a\/d4563ad3d68846f61693fe67187f8ff0.jpg", "https:\/\/i.pinimg.com\/originals\/ae\/92\/92\/ae929274abd7b89c549d9c5e17d126fc.jpg", "https:\/\/i.pinimg.com\/originals\/1f\/c8\/a7\/1fc8a753a93115db41a48c07a7812c4a.jpg", "https:\/\/i.pinimg.com\/originals\/b3\/32\/8c\/b3328ca3b2a89f4c298086d679e99bbb.jpg", "https:\/\/i.pinimg.com\/originals\/08\/55\/d3\/0855d33f75504572b920293a0a1b24a8.jpg", "https:\/\/i.pinimg.com\/originals\/a4\/07\/74\/a40774d048549309e32749a2aea51024.jpg", "https:\/\/i.pinimg.com\/originals\/e6\/4f\/ca\/e64fca36f358be3719794c019cf05242.jpg", "https:\/\/i.pinimg.com\/originals\/b7\/35\/b9\/b735b9534626404258796f56e231ef3a.jpg", "https:\/\/i.pinimg.com\/originals\/63\/f3\/7d\/63f37d4be827ce5e9a934203f520f129.jpg", "https:\/\/i.pinimg.com\/originals\/92\/7b\/bf\/927bbf5fe7385ae95f3a9d4a517fce47.jpg", "https:\/\/i.pinimg.com\/originals\/3e\/e7\/8b\/3ee78b84f54a6b304b065ac7e31bbfc5.jpg", "https:\/\/i.pinimg.com\/originals\/04\/57\/28\/045728ee7edf04a67a13f1c1cfbc035a.jpg", "https:\/\/i.pinimg.com\/originals\/07\/61\/e3\/0761e3fdda2a889cfa8a162d3c6064ae.jpg", "https:\/\/i.pinimg.com\/originals\/01\/66\/01\/016601a51379736e1f06ba24ad6b59a3.jpg", "https:\/\/i.pinimg.com\/originals\/d7\/25\/37\/d7253712bed2f6811c5127f9f23ecc9d.jpg", "https:\/\/i.pinimg.com\/originals\/83\/9a\/f2\/839af2e8a136fc8d7c7682b391127104.jpg", "https:\/\/i.pinimg.com\/originals\/bf\/64\/ee\/bf64ee37013667fd2fc11d847531b645.jpg", "https:\/\/i.pinimg.com\/originals\/9f\/bc\/45\/9fbc45e62a3afb041642fc075559c4df.jpg", "https:\/\/i.pinimg.com\/originals\/40\/62\/9c\/40629c2c2c416cf231051bba534346d1.jpg", "https:\/\/i.pinimg.com\/originals\/9b\/59\/a9\/9b59a93536b6eb2066379bf7ce664fc6.jpg", "https:\/\/i.pinimg.com\/originals\/67\/d7\/11\/67d711a6b58017e2edd756c83b74bdbc.jpg", "https:\/\/i.pinimg.com\/originals\/3e\/17\/fe\/3e17fe90740a32720e3133aab36e4105.jpg", "https:\/\/i.pinimg.com\/originals\/52\/4d\/78\/524d781abb62c578f6f0e41fddb9d8bc.jpg", "https:\/\/i.pinimg.com\/originals\/14\/c3\/b6\/14c3b6d9f7e6def716260f570c0c6df2.jpg", "https:\/\/i.pinimg.com\/originals\/45\/9f\/49\/459f493e029cc060e420ba905a93eccb.jpg", "https:\/\/i.pinimg.com\/originals\/f7\/27\/b4\/f727b40ce4098b0f8a230d6f815d39ed.jpg", "https:\/\/i.pinimg.com\/originals\/0a\/62\/33\/0a6233541f38c531615d923b55ec9285.jpg", "https:\/\/i.pinimg.com\/originals\/7f\/22\/0a\/7f220abeeb75804abfb355f91e2ea27d.jpg", "https:\/\/i.pinimg.com\/originals\/6a\/b0\/99\/6ab099ea97ad848d63632142ddfae49d.jpg", "https:\/\/i.pinimg.com\/originals\/a2\/3e\/eb\/a23eebf11a8885d763d8fdf30fb718c5.jpg", "https:\/\/i.pinimg.com\/originals\/2f\/54\/b9\/2f54b94e32050a027d3b53e387a2915a.jpg", "https:\/\/i.pinimg.com\/originals\/ed\/41\/0e\/ed410e130643fa03c5c1463e2e9c7ad5.jpg", "https:\/\/i.pinimg.com\/originals\/d5\/fd\/8d\/d5fd8d10556f3131c8a8aa39360aa145.png", "https:\/\/i.pinimg.com\/originals\/62\/28\/f7\/6228f76a1c38c1e8ed76a6e430c4c131.jpg", "https:\/\/i.pinimg.com\/originals\/54\/e3\/b9\/54e3b94bdaa93b9c17f71516386e95c0.jpg", "https:\/\/i.pinimg.com\/originals\/d2\/ca\/e9\/d2cae9c93cb2c276cccf9c867e6bae19.png", "https:\/\/i.pinimg.com\/originals\/d0\/91\/41\/d09141f22f459cef13ea8f236458d555.jpg", "https:\/\/i.pinimg.com\/originals\/92\/ca\/9c\/92ca9cb1a940d293c2445d0d62cdb59c.png", "https:\/\/i.pinimg.com\/originals\/ad\/9c\/c7\/ad9cc7cd0428d29a025891142b00ebdf.jpg", "https:\/\/i.pinimg.com\/originals\/0d\/1f\/bb\/0d1fbb8225f43f5e858a60c23fb47944.jpg", "https:\/\/i.pinimg.com\/originals\/fa\/bf\/4b\/fabf4b232d50e0890a4d26beb493de85.jpg", "https:\/\/i.pinimg.com\/originals\/21\/13\/83\/2113832a73bc7ffc6078573e8334116f.png", "https:\/\/i.pinimg.com\/originals\/e0\/19\/3e\/e0193e579c70fce79b1ba30e7781fe92.png", "https:\/\/i.pinimg.com\/originals\/a4\/07\/74\/a40774d048549309e32749a2aea51024.jpg", "https:\/\/i.pinimg.com\/originals\/61\/a5\/26\/61a526a25efa01ff24102cb30a8bacc0.jpg", "https:\/\/i.pinimg.com\/originals\/46\/5e\/6c\/465e6c1086f8d13ad84fcddf507d4157.jpg", "https:\/\/i.pinimg.com\/originals\/61\/bd\/63\/61bd6318613af0da7d778254505ae11d.png", "https:\/\/i.pinimg.com\/originals\/8e\/d7\/fa\/8ed7fa409687abd5fc293ab0ab4b3957.jpg", "https:\/\/i.pinimg.com\/originals\/b0\/5d\/93\/b05d93d71f216bf464c46f236a42ccec.jpg", "https:\/\/i.pinimg.com\/originals\/6f\/e1\/64\/6fe1645c92a1f19f3cdfb01275c37149.jpg", "https:\/\/i.pinimg.com\/originals\/c3\/33\/06\/c33306c8bc535aed0fa9bab6b5c09084.jpg", "https:\/\/i.pinimg.com\/originals\/c5\/4e\/be\/c54ebeae84dbf7d6ff173bcaa9b677cc.jpg", "https:\/\/i.pinimg.com\/originals\/e5\/bd\/27\/e5bd274b16bb8ea619aec4f75f89c50b.jpg", "https:\/\/i.pinimg.com\/originals\/94\/04\/c1\/9404c1580939b55a5200e51e60ebbff7.jpg", "https:\/\/i.pinimg.com\/originals\/07\/88\/08\/07880854c8992d014962736b5377475f.jpg", "https:\/\/i.pinimg.com\/originals\/20\/a6\/24\/20a624971e9a042c5390f668929896f4.jpg", "https:\/\/i.pinimg.com\/originals\/1e\/57\/b0\/1e57b0f81ed780962a30dc7cbe98d35d.png", "https:\/\/i.pinimg.com\/originals\/9d\/8b\/e0\/9d8be0e35b808e2e674455916204cb93.jpg", "https:\/\/i.pinimg.com\/originals\/ea\/13\/a2\/ea13a2aa7372f5f98c4bb2e8b423d9c2.jpg", "https:\/\/i.pinimg.com\/originals\/d4\/56\/3a\/d4563ad3d68846f61693fe67187f8ff0.jpg", "https:\/\/i.pinimg.com\/originals\/ae\/92\/92\/ae929274abd7b89c549d9c5e17d126fc.jpg", "https:\/\/i.pinimg.com\/originals\/1f\/c8\/a7\/1fc8a753a93115db41a48c07a7812c4a.jpg", "https:\/\/i.pinimg.com\/originals\/b3\/32\/8c\/b3328ca3b2a89f4c298086d679e99bbb.jpg", "https:\/\/i.pinimg.com\/originals\/08\/55\/d3\/0855d33f75504572b920293a0a1b24a8.jpg", "https:\/\/i.pinimg.com\/originals\/e6\/4f\/ca\/e64fca36f358be3719794c019cf05242.jpg", "https:\/\/i.pinimg.com\/originals\/b7\/35\/b9\/b735b9534626404258796f56e231ef3a.jpg", "https:\/\/i.pinimg.com\/originals\/63\/f3\/7d\/63f37d4be827ce5e9a934203f520f129.jpg", "https:\/\/i.pinimg.com\/originals\/92\/7b\/bf\/927bbf5fe7385ae95f3a9d4a517fce47.jpg", "https:\/\/i.pinimg.com\/originals\/b1\/83\/f2\/b183f2016540922adb3d7ec4ec3f5928.jpg", "https:\/\/i.pinimg.com\/originals\/3e\/e7\/8b\/3ee78b84f54a6b304b065ac7e31bbfc5.jpg", "https:\/\/i.pinimg.com\/originals\/04\/57\/28\/045728ee7edf04a67a13f1c1cfbc035a.jpg", "https:\/\/i.pinimg.com\/originals\/07\/61\/e3\/0761e3fdda2a889cfa8a162d3c6064ae.jpg", "https:\/\/i.pinimg.com\/originals\/01\/66\/01\/016601a51379736e1f06ba24ad6b59a3.jpg", "https:\/\/i.pinimg.com\/originals\/40\/62\/9c\/40629c2c2c416cf231051bba534346d1.jpg", "https:\/\/i.pinimg.com\/originals\/d7\/25\/37\/d7253712bed2f6811c5127f9f23ecc9d.jpg", "https:\/\/i.pinimg.com\/originals\/83\/9a\/f2\/839af2e8a136fc8d7c7682b391127104.jpg", "https:\/\/i.pinimg.com\/originals\/a3\/40\/f0\/a340f05d326a9a7080b0d580123af7f3.jpg", "https:\/\/i.pinimg.com\/originals\/aa\/a9\/98\/aaa998dcc7140b628e7f69de04fed410.jpg"]
                                        buffer = await getBuffer(shota[Math.floor(Math.random() * (shota.length))])
                                        limitGAdd(sender)
                                        client.sendMessage(from, buffer, image, {
                                            quoted: message
                                        })
                                        break
                                        case 'neko':
                                        case 'kocheng':
                                        if (isLimitG) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                        q2 = Math.floor(Math.random() * 900) + 300;
                                        q3 = Math.floor(Math.random() * 900) + 300;
                                        neko = 'http://placekitten.com/' + q3 + '/' + q2
                                        buffer = await getBuffer(neko)
                                        limitGAdd(sender)
                                        client.sendMessage(from, buffer, image, {
                                            quoted: message
                                        })
                                        break
                                        case 'doge':
                                        case 'domge':
                                        if (isLimitG) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                        buffer = await getBuffer(doge[Math.floor(Math.random() * doge.length)])
                                        limitGAdd(sender)
                                        client.sendMessage(from, buffer, image, {
                                            quoted: message
                                        })
                                        break
                                        case 'waifu':
                                        if (isLimitG) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                        fetch('https://raw.githubusercontent.com/arugaZ/grabbed-results/main/random/anime/waifu.txt')
                                            .then(res => res.text())
                                            .then(async (body) => {
                                                let randomnime = body.split('\n')
                                                let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                                                buffer = await getBuffer(randomnimex)
                                                limitGAdd(sender)
                                                client.sendMessage(from, buffer, image, {
                                                    quoted: message
                                                })
                                            })
                                            .catch(() => {
                                                reply('Ada yang Error!')
                                            })
                                        break
                                        case 'quotesnime':
                                        const nimessage = await fetchJson('https://animechanapi.xyz/api/quotes/random', {
                                            method: 'get'
                                        })
                                        hasil = `anime : ${nimessage.data.anime}\nCharacter : ${nimessage.data.character}\n${nimessage.data.quote}`
                                        reply(hasil)
                                        break
                                        case 'alay':
                                        if (args.length < 1) return reply(`ketik ${prefix}alay <kata>`)
                                        data = await fetchJson(`https://api.terhambar.com/bpk?kata=${body.slice(6)}`, {
                                            method: 'get'
                                        })
                                        reply(data.text)
                                        break
                                        case 'darkjokes':
                                        case 'darkjoke':
                                        if (isLimitG) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                        const darkjokes = await fetchJson('https://sv443.net/jokeapi/v2/joke/Miscellaneous?type=', {
                                            method: 'get'
                                        })
                                        if (darkjokes.type === 'twopart') {
                                            reply(darkjokes.setup)
                                            await sleep(2000)
                                            client.sendMessage(from, darkjokes.delivery, text)
                                        } else {
                                            reply(darkjokes.joke)
                                        }
                                        break
                                        case 'nekonime':
                                        if (isLimitG) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                        data = await fetchJson('https://waifu.pics/api/sfw/neko')
                                        hasil = await getBuffer(data.url)
                                        limitGAdd(sender)
                                        client.sendMessage(from, hasil, image, {
                                            quoted: message
                                        })
                                        break
                                        case 'ss':
                                        case 'screenshot':
                                        if (args.length < 1) return reply(`Send text ${prefix}ss <url>\nEx : ${prefix}ss https://google.com`)
                                        const ss = args[0].toLowerCase().startsWith('http://') ? args[0].replace('http://', 'https://') : args[0].toLowerCase().startsWith('https://') ? args[0] : 'https://' + args[0]
                                        buffer = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=5c503229dc9d48c992ed176d2871152b&url=${ss}`)
                                        client.sendMessage(from, buffer, image, {
                                                quoted: message,
                                                caption: 'cekrek'
                                            })
                                            .catch((e) => {
                                                reply(`Error!\n${e}`)
                                            })
                                        break
                                        case 'shortlink':
                                        case 'shortlink':
                                        if (args.length < 1) return reply(`Send text ${prefix}shortlink <url>\nEx : ${prefix}shortlink https://google.com`)
                                        if (!isUrl(args[0])) return reply('Invalid URL')
                                        const shortlink = await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`, {
                                            method: 'get'
                                        })
                                        await reply(shortlink.data)
                                            break
                                        case 'covidindo':
                                        case 'coronaindo':
                                        const covid = await axios.get(`https://api.kawalcorona.com/indonesia`)
                                        teks = `*COVID 19 INDONESIA*\npositive : ${covid.data[0].positif}\nrecover : ${covid.data[0].sembuh}\ndeath : ${covid.data[0].meninggal}\ntreated : ${covid.data[0].dirawat}`
                                        reply(teks)
                                        break
                                        case 'apakah':
                                        if (args.length < 1) return reply('pertanyaan?')
                                        await reply(`${apakah[Math.floor(Math.random() * (apakah.length))]}`)
                                        break
                                        case 'bisakah':
                                        if (args.length < 1) return reply('pertanyaan?')
                                        await reply(`${bisakah[Math.floor(Math.random() * (bisakah.length))]}`)
                                        break
                                        case 'rate':
                                        if (args.length < 1) return reply('pertanyaan?')
                                        rate1 = Math.floor(Math.random() * 9) + 1;
                                        rate2 = Math.floor(Math.random() * 9) + 1;
                                        await reply(`${rate1}0,${rate2}%`)
                                        break
                                        case 'kapankah':
                                        if (args.length < 1) return reply('pertanyaan?')
                                        kapankah = ['hari', 'bulan', 'tahun', 'desawarsa', 'abad']
                                        kRandom = Math.floor(Math.random() * 30) + 5;
                                        await reply(`${kRandom} ${kapankah[Math.floor(Math.random() * (kapankah.length))]} lagi`)
                                        break
                                        case 'dice':
                                        const dice = Math.floor(Math.random() * 6) + 1
                                        ran = getRandom('.webp')
                                        const media = `./media/random/${dice}.gif`
                                        modMedia(media, client, message, from, 15, sticker)
                                        break
                                        case 'hilih':
											if (args.length < 1) return reply('Teksnya mana um?')
											teks = body.slice(7).replace(/a|u|e|o/gi, 'i')
											buffer = fs.readFileSync('./src/media/hilih.jpg')
											client.sendMessage(from, buffer, image, {quoted: message, caption: teks})
										break
                                        case 'husbu':
                                        if (isLimitG) return reply('Your limit has been reached, try again tomorrow or register as a premium user')
                                        const diti = fs.readFileSync('./media/random/husbu.json')
                                        const ditiJsin = JSON.parse(diti)
                                        const rindIndix = Math.floor(Math.random() * ditiJsin.length)
                                        const rindKiy = ditiJsin[rindIndix]
                                        buffer = await getBuffer(rindKiy.image)
                                        limitGAdd(sender)
                                        client.sendMessage(from, buffer, image, {
                                            quoted: message,
                                            caption: rindKiy.teks
                                        })
                                        break
                                        case 'owner':
                                        client.sendMessage(from, {
                                            displayname: "F",
                                            vcard: vcard
                                        }, contact)
                                        break
                                        case 'donate':
                                        reply('❏ Gopay/Dana : 6281211994810')
                                        break
                                        default:
                                        if (isCmd) {
                                            reply('Unlisted Command,BAKA!!!')
                                            if (!isPremium) {
                                                position = null
     											   Object.keys(user).forEach((i) => {
      											      if (user[i].id === sender) {
        										        position = i
         											   }
     											   })
                                                if (position !== null) {
                                                    user[position].unlisted += 1
                                                    fs.writeFileSync('./database/user.json', JSON.stringify(user))
                                                     if (user[position].unlisted > 10) {
                                                        await client.blockUser(`${sender.split('@')[0]}@c.us`, "add")
                                                        blocked.push(sender)
                                                        reply('your account has been banned, reason: unlisted cmd')
                                                    }
                                                }
                                            }
                                        }
                                        if (!isCmd && isGroup && isSimi) {
                                            axios.get(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(budy)}&lang=id`)
                                                .then((res) => {
                                                    reply(res.data.success)
                                                })
                                                .catch((err) => {
                                                    reply(`${err}`)
                                                })
                                        }
                                        if(!isCmd && isGroup && isAntiBadword) {
      								      const find = db.get('group').find({ id: groupId }).value()
       									     if(find && find.id === groupId){
           								     const cekuser = db.get('group').filter({id: groupId}).map('members').value()[0]
        								        const isIn = inArray(sender, cekuser)
         									       if(cekuser && isIn !== false){
           									         if(isBadword){
                									        const denda = db.get('group').filter({id: groupId}).map('members['+isIn+']').find({ id: sender }).update('denda', n => n + 5000).write()
             										           if(denda){
                    										        await reply("BAKA!!! 💸+5.000\nTotal : Rp"+formatin(denda.denda))
                 										       }
               										     }
         								       } else {
            								        const cekMember = db.get('group').filter({id: groupId}).map('members').value()[0]
                									    if(cekMember.length === 0){
               									         if(isBadword){
                   								         db.get('group').find({ id: groupId }).set('members', [{id: sender, denda: 5000}]).write()
               									         } else {
            								                db.get('group').find({ id: groupId }).set('members', [{id: sender, denda: 0}]).write()
                  									      }
           									         } else {
                								       const cekuser = db.get('group').filter({id: groupId}).map('members').value()[0]
               									         if(isBadword){
                									            cekuser.push({id: sender, denda: 5000})
                     									       await reply("BAKA!!! 💸+5.000")
                  									      } else {
                      					 				     cekuser.push({id: sender, denda: 0})
             									           }
             								           db.get('group').find({ id: groupId }).set('members', cekuser).write()
          								          }
          								      }
        								    } else {
       								         if(isBadword){
          								          db.get('group').push({ id: groupId, members: [{id: sender, denda: 5000}] }).write()
                								    await reply("BAKA!!! 💸+5.000\nTotal : Rp 5.000")
                								} else {
                    								db.get('group').push({ id: groupId, members: [{id: sender, denda: 0}] }).write()
              							  }
          							  }
                      	          }
                      			}
                                }
                                catch (e) {
                                    console.log('Error : %s', color(e, 'red'))
                                }
                    } 