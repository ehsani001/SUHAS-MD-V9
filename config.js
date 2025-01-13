//
// ░██████╗██╗░░░██╗██╗░░██╗░█████╗░░██████╗░░░░░░███╗░░░███╗██████╗░░░░░░░██╗░░░██╗░█████╗░
// ██╔════╝██║░░░██║██║░░██║██╔══██╗██╔════╝░░░░░░████╗░████║██╔══██╗░░░░░░██║░░░██║██╔══██╗
// ╚█████╗░██║░░░██║███████║███████║╚█████╗░█████╗██╔████╔██║██║░░██║█████╗╚██╗░██╔╝╚██████║
// ░╚═══██╗██║░░░██║██╔══██║██╔══██║░╚═══██╗╚════╝██║╚██╔╝██║██║░░██║╚════╝░╚████╔╝░░╚═══██║
// ██████╔╝╚██████╔╝██║░░██║██║░░██║██████╔╝░░░░░░██║░╚═╝░██║██████╔╝░░░░░░░░╚██╔╝░░░█████╔╝
// ╚═════╝░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░░░░░░░╚═╝░░░░░╚═╝╚═════╝░░░░░░░░░░╚═╝░░░░╚════╝░


// * Project name - SUHAS-MD-V9 
// * Author - Suhas Pathsindu.
// * Team - 🇦🇴★ ͟͞  ͟͞ ̶❮ᓩＣ͔́ʏʙ͕֝́́ᴇʀ〴Ｄ֝֩ʀᴀ֞ͨͬͥɢᴏɴךＯ͕ͩꜰ͑́ꜰɪᴄ͚ͫɪᴀֹ֣֝ʟ❯ ͟͞ ̶ ͟͞★🇦🇴 
// * Version - 9.0.0

// World Best & Powerfull WhatsApp User Bot in Sri Lanka.
// Don't Copy My Codes. :(


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FRZHhGUkRHL29NTjJzZXRSK1padjdnTGdtd3hQSlVkQlFvdGk3WU9Vdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnpCTXE2YjBEVXJwTmxicVljdnQvOG5JNzNFSjk4OS9aWWQ0MVpyT2RTND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT2tFbzRTbTRtRnVpMjlwNkk5c3Z2ODg3Q0JVWGljMGJhYWFkRjM0alVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMMU12VzhZK3J4dG44ZXk3SndhMU1mQkl6dWtONi9GbTE2SmFrYjgvdnc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOZHR2RmRCOGF3NkhkWTBZc2lwRnBuZjVrdHBpZGVHVktIYzF5ZWNrMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt6VUJPbUdwTEhkRTMzOENBRElwSTVOVU4rZk1zZUZibjNXb3pLalFKQk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9odEZLREE4RnhOM0lpeUVhaEx5Y1FBVjlFZVlIUjhaaTRldEtQWjQzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0t1UVJJRUtIQ3BmN3F6c001NGp5SGt6Z1RVZ0llZS9kdUZsZTVVdVBFZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQveXlVYWF0MW1ycXArSGUyTXhrSkxZVVRJbCtSSFJXeFNIamVWa3ZxNnQxR1dsNEZHenRXVll3TkFRNFFPWlVGN2xLNGhxSXVaRjNaOURGT0d6MmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJLaXUvMWt0d2RmZnZrbnRVL09sR1dUVCsvWW8xcTJTVmZHdkt6RFZhem5JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiZmpkaHUybFMzU0VmdFVDQlhZUEhRIiwicGhvbmVJZCI6IjljZjg2ZDAzLTQxM2ItNDM2Zi05MmNkLTU4MmYzOTAwNjhjZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZGtZNUJRV3FIUU40MFN4ZWFjdnVqaHhzMmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkl3VFJpMStxblhsSVVRYlo4Y0xoSjFmZmhzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkEzRDYzV0w4IiwibWUiOnsiaWQiOiI5ODkzNzA3ODQzMjI6MjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BhRnNOZ0hFUG1TNXJzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZMNmpjcERyWmhkWDBXM24yWDRvNytyQnUwK1FROWd0M2FzUjB4bWh3aUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imh0MGpXZGJ2TGE4a2JtUlh6ZjFHVjIwcEg2MDNWOEk1eVdBeUhLdkhibDdrV0hpSW9DeHVaRDRYdTE4djVnWFZ1Mk9UV2srRXN0dDVaWkpjSUlOOEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzZ0J6RENaZnN2MW5vM0Nxd3NKOVNzWmppbU56aExsaUgxd3AxbXBiSzlieFFDei9FekNVNXc4c1VEMXIyb3lVdmRIMUJEYVlPNFRmUG1sRldTZXBqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk4OTM3MDc4NDMyMjoyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJieStvM0tRNjJZWFY5RnQ1OWwrS08vcXdidFBrRVBZTGQyckVkTVpvY0lnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MDE4MzExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdxZSJ9", // 📌 𝗚𝗲𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗶𝗱 𝗶𝗻 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗣𝗮𝗶𝗿 𝗦𝗶𝘁𝗲 📌
SUDO_NB: process.env.SUDO_NB || "94773962796", // 𝗔𝗱𝗱 𝗬𝗼𝘂𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 𝗛𝗲𝗿𝗲 𝗪𝗶𝘁𝗵 𝗖𝗼𝘂𝗻𝘁𝗿𝘆 𝗖𝗼𝗱𝗲
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // 📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
OWNER_NUMBER: "94750177369",
MODE: process.env.MODE || "publi", // 📌 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗼𝗿 𝗽𝘂𝗯𝗹𝗶𝗰 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
};
