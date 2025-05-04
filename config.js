import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['51902247905', 'kenn', true],
  ['5493794297363'],
  ['59172945992']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50489079501', '573143917092']
global.botNumber = [''] 
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'fg_9XdnzCdQ' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'kenn' 
global.author = 'kenn' 

//--info FG
global.botName = 'kenn'
global.fgig = 'https://qu.ax/ZfbVn.jpg' 
global.fgsc = 'https://qu.ax/ZfbVn.jpg' 
global.fgyt = 'https://qu.ax/ZfbVn.jpg'
global.fgpyp = 'https://qu.ax/ZfbVn.jpg'
global.fglog = 'https://qu.ax/ZfbVn.jpg' 

//--- Grupos WA
global.id_canal = 'https://qu.ax/ZfbVn.jpg' //-ID de canal de WhatsApp
global.fgcanal = 'https://qu.ax/ZfbVn.jpg'
global.bgp = 'https://qu.ax/ZfbVn.jpg'
global.bgp2 = 'https://qu.ax/ZfbVn.jpg'
global.bgp3 = 'https://qu.ax/ZfbVn.jpg' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
