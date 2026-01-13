const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // 🔑 Essential Session & Owner Settings
    SESSION_ID: process.env.SESSION_ID || "KnightBot!H4sIAAAAAAAAA5VU266iSBT9l3rVtIIoYnKSAVQQBfGKOpmHAgoouRRWFSp2/PcJnj59OpNMz5m3umXttddau76DgmCG5qgGo++gpPgKOWqWvC4RGAGtiiJEQRuEkEMwAobO0tU96Ps1u+/wTswced1K1WWWhVtViI3pRTpSqb50JuQNPNugrPwMB78B7JothTyKVSzbQbQ4i3G/co3r5WE7nX3x2GxbS3vLjMFwtR6+gWeDCDHFRTwpE5QjCrM5ql2I6dfo43kVK15xrtUolkXHrMlG0+h53OuvJvnC9WDd8RlN7/Iu/Rp9djCcYiEI8alsTavaR4JG8ojV03pX+A+yUAbiLia9TOx13+kzHBconIWo4JjXX9adOFK/ZRbbyZKYWxfJ1JD70v6Sir2Uq2NJSdchboUI3brsa8TPPNBjn2dm0gos88C3Kb8fVWUNFVYYN92THDMpp8e475Ffibv0Iyvp/9EduSxOIseZ3TonzyTOcOv48nS3q0hNsE2xfbnd7a3uHfb21+hLar1KsWOm56kYekf7kKKl5lRIEbC3X5QY3fxHa6wuEoF90oe8or9juWgJVu4JxTHuRMOsEFILmpPWtZPnVTQVkzw4wAjODwz3mDjrQf8qD83EOcJDrersqPUSYk6ig8WpOR0YJ3PWEc2+Gr+9OkpRPQvBSHi2AUUxZpxCjknxOpPaAIbXDQoo4i91AVv4Q3L1d4Zxbx2ji4uC0L8depYjnxJ6mj74MITyY35cntU30AYlJQFiDIUmZpzQ2kaMwRgxMPrzrzYo0J2/+9ZU6wltEGHK+K6oyozA8MPUj0sYBKQq+KYuAr1ZIApG3c9jxDkuYtbIWBWQBgm+Ij2BnIFRBDOGfjaIKArBiNMK/RxanYSN7oLiadZqcQRtkL/8wCEYAUWSxcGw21UGykgR/2Dfbg0qLMtvBeKgDbLXK1GUBv2eICpDSZQFqXnZXDx/EmzwQsQhzhgYAd2N6msw0ydL5Oc2Mwx1Fat6rILPhj6C8a48zLu2qTzqUz4RaZUatn25EbJJfLV7d8oxq8h+IEfGLhVeyv8TBIxAa3m/Zft4JbiLfrKTutfOOZSiji4d7gTfhHWWW1bnlgqlbG1cG1831k6zZ5MsOZxju7quzWIy9k2xpxEyMyw1hUt1rt3emmohuuIA/VpM9g4zdJFuyjSlfSWA6yq/eEquy9oEE/8gRVMrgj6b26e47967piVZBdSNlrve8Ug0Vy7fK/MZz8N10uum4yh1yFn7EdnXyGQ/vir8SlNjVbONMHpNfgEbA//TunfeTcC6z/YvED++kn8ZR80r+VjrBMP8lDgXudTO4zmbzyfEuzn2Fq7kxWWKqt49s5wVeD7/aoMygzwiNG98LEJKcAjagJKqSeysiMhviulqd6ar8bRpPIOMq59TsMU5YhzmJRgJ8mAoKn1F6L+/cikpTcgSMAKul/Y18PwbQ73Y0FEHAAA=",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "94726800969",

    // 🤖 Default Fallback Settings
    DEFAULT_BOT_NAME: process.env.DEFAULT_BOT_NAME || "Nima-MD",
    DEFAULT_OWNER_NAME: process.env.DEFAULT_OWNER_NAME || "Akash nimsara",
    DEFAULT_PREFIX: process.env.DEFAULT_PREFIX || ".",

    // 🖼️ Media Settings (Alive image & Menu)
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Akashkavindu/ZANTA_MD/blob/main/images/alive-new.jpg?raw=true",
    MENU_IMG: process.env.MENU_IMG || "https://github.com/Akashkavindu/ZANTA_MD/blob/main/images/menu-new.jpg?raw=true",

    // ⚙️ Dashboard / Database Defaults.
    // මෙම අගයන් පළමු වතාවට Database එක සෑදීමේදී භාවිත වේ (Database & Dashboard Sync)
    AUTO_READ: process.env.AUTO_READ || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    READ_CMD: process.env.READ_CMD || "false",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    ANTI_BADWORD: process.env.ANTI_BADWORD || "false",
};
