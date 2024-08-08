//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "efkidgamer@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "https://facebook/efkidtrapgamer";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "265993702468";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0hhaVlJL2hmcHNKaFBlcHhVeVdsTmt4RldIZzViZmRmV1BwREs2b0RYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXJYZXdjcmJSSGRDVVBDdmNhUGNzTkVhZ28xSFpSN3k1d3pjNjA3QjVScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRXZwREthREZ2dmR6NzZUV3lTY1Y1ZWt0UlVuMVNiWU5lWDRMS0ErblVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQdHZnb1ZXenQrZEpFTXNjRHhkZmp0Z1Q4bURBL2l3aUtjQW81elV2ZUhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFCalREbklkTnFFR2srN0xrQzNla2J5Qy9LeC9IVVByYk9DcUpaRExtMVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc3NG9tM2ZYTlRRcktJN1hZc2g3R3BlNlJDeFdxRnBOb2I4MmZXWUV3QWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWURUaUppaFRpSk1LUXN3MitCREgwK244UHdhaTJVeUdUQ1JRQ09EMmtYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3d2M1hGMGsxZnhYNWtsbW1SRFM5WlNXNUVHdFRSUFVqbGdnQi9tRU5YWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBqSTBueDJucWQ5QjVvQ1ZiTDVCS1RBU29hVWJGVlZNZi9xbmZad2FvUm9qUTk4TE5tNFAyYjcrcFhabEg1RVltZXJtYnowMUZ2cHFkT1l5ckYwTkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6Im5vZ2xnTmNIY09Xb1QzQ3VZVkc3OGxIWUQwekRLNWp5cXNpMlZjM2FlbUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjY1OTkzNzAyNDY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI2QjFBNEYyQzBGOTJFMjYyRDBFMzcyNTcwMzA1REYzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMxMDcyOTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2NTk5MzcwMjQ2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2N0IwOTZFQUE5OTU5QzhCNzhGMUY1QTIwQjVFNUM3NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMTA3MjkwfV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2dm9KcU01U1FiLTRCeVYyVTVHUzR3IiwicGhvbmVJZCI6IjA0MDg5Y2IzLTY3ZWItNDc3MS05ZTE1LWFjYTNiZTAwMGIxYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNHc4L25jcTlMY3ljL2hmVDJEVWoyL2NWTFk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp0M1BNMUNKTGxFNndrbUdMYjRmWUpZdkRRbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ovYStiVUVFTWlQMHJVR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldHeGRwTmtmbE1tNW5kNzF4WGZuREVXSE5MbW9UWG9UZGFqSE9odDVIeE09IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFkK20wSTQwcFM2cDBRRXdCZzRPOFRRYmVxbk1jZDEyTmlJaHRyUzZaS2hXWEFhVlFhZEJKSGZ1NlFyMTIwdXdhWlkwRVJ5VU9xUktZZjBpVmVTckFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyczRCaElFRFF5SFE4ZjZrd2hjbzY1RmhEdmpDQzQ1ZVZLZWZTZGR1V2JyMHdpVjNyYXFkRmNnTEYvWlpPZkdvNnUrY2MwYzJROCtmRnVibXFKWlJDQT09In0sIm1lIjp7ImlkIjoiMjY1OTkzNzAyNDY4OjExQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQ1OTE3NzM5MDI0NDA0OjExQGxpZCIsIm5hbWUiOiJUaGUgWCBEIFMifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjY1OTkzNzAyNDY4OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZoc1hhVFpINVRKdVozZTljVjM1d3hGaHpTNXFFMTZFM1dveHpvYmVSOFQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzEwNzI4NiwibGFzdFByb3BIYXNoIjoiMWxPU0VJIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBL1YifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`EFKID BOT™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "EFKID-BOT",
  ownername: process.env.OWNER_NAME || "Frank Kaumba",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
