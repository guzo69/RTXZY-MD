/**Penjelasan: Untuk menggunakan script ini, kamu akan perlu mengganti nomor owner dan wm terlebih dahulu. Kamu juga harus memiliki api key dari kedua website ini https://api.botcahx.live dan https://api.betabotz.org. Setelah memiliki api key, kamu bisa menggantinya dengan menyalin key tersebut dari profilmu dan paste di variabel global.btc. Contohnya, global.btc = 'xzRhejka'. Setelah itu, kamu bisa melanjutkan dengan mengubah nomor owner dan wm.
**/


global.owner = ['6281802626072, ', '59894808483']  
global.mods = ['6281802626072'] 
global.prems = ['6281802626072']
global.nameowner = 'Genzai'
global.numberowner = '6281802626072' 
global.mail = 'hhunu31@gmail.com'
global.dana = '6281395861695'
global.pulsa = '6281395861695'
global.gopay = '6281395861695'
global.namebot = 'XGuzo'
global.gc = 'https://chat.whatsapp.com/Ln2vHjRrRayAbzalRMB56r'
global.web = 'https://github.com/'
global.instagram = 'https://instagram.com/genzai66'
global.wm = '© XGuzo'
global.watermark = wm
global.wm2 = '⫹⫺ XGuzo'
global.wm3 = '© XGuzo'
global.wm4 = '© BotWa'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp'


global.btc = '7PENgipq' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'Vny8ilsD' //Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = { 
  tio: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': '7PENgipq' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
