import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix: _p }) => {
    try {
        // Nombre del usuario que ejecuta el comando
        let name = await conn.getName(m.sender)

        // URL de la imagen del menú
        const pp = 'https://qu.ax/ZfbVn.jpg'

        // Mensaje del menú simple y limpio
        const text = `
◈ ━━━━━ *kenn* ━━━━━ ◈

👋🏻 Hola, *${name}*!

📌 *Comandos disponibles:*

• 🎧 /play nombre de canción  
Descarga música fácilmente desde YouTube.

• 🔐 /code  
Obtén el código para crear tu propio bot.

───────────────
◈ ━━━━━━━━━━━━━━━━━━━━━━ ◈
        `.trim()

        // Envía el archivo con imagen y texto
        await conn.sendFile(m.chat, pp, 'menu.jpg', text, m)

        // Reacciona al terminar
        m.react('😏')

    } catch (e) {
        // En caso de error
        m.reply('❌ No se pudo mostrar el menú.')
        console.error(e)
    }
}

handler.command = ['menu', 'help', 'menú']
handler.register = false

export default handler
