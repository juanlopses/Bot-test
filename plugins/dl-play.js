import fetch from 'node-fetch';

// Límite máximo de tamaño en MB para enviar como documento
let limit = 320;

/**
 * Manejador principal del comando /play o /playvid
 */
let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `✳️ ${mssg.example} *${usedPrefix + command}* Paco Amor de mis amores`;

    // === BÚSQUEDA EN LA NUEVA API ===
    const searchUrl = `http://c1-ch1.altare.pro:17429/play?query=${encodeURIComponent(text)}`;
    let res = await fetch(searchUrl);
    let data = await res.json();

    if (!data.status || !data.metadata) throw `✳️ Vídeo/Audio no encontrado`;

    // Extraemos los datos del audio desde la nueva API
    let {
        title,
        thumbnail,
        duration,
        views,
        ago,
        url
    } = data.metadata;

    // Información de descarga
    const { url: dl_url, filename } = data.download;
    const chat = global.db.data.chats[m.chat];

    m.react('🎧');

    // Mensaje base con información del audio
    const caption = `▢ *📌 Título:* ${title}
▢ ⌚ *Duración:* ${duration.timestamp}
▢ 👀 *Vistas:* ${views.toLocaleString()}
▢ 🔗 Origen: ${url}`;

    // 1. Enviar como AUDIO NORMAL (reproducible en WhatsApp)
    await conn.sendFile(
        m.chat,
        dl_url,
        filename,
        null, // Sin mensaje adicional, solo como audio reproducible
        m,
        false,
        {
            mimetype: 'audio/mpeg'
        }
    );

    // 2. Enviar como ARCHIVO MP3 (documento, para descargar directamente)
    await conn.sendFile(
        m.chat,
        dl_url,
        filename,
        caption,
        m,
        false,
        {
            mimetype: 'audio/mpeg',
            asDocument: true // Fuerza a enviar como archivo
        }
    );

    m.react('✅');
};

handler.help = ['play'];
handler.tags = ['dl'];
handler.command = ['play', 'playvid'];
handler.disabled = false;

export default handler;
