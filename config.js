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
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9PdFdTZHdWS2dSMmY4NVVBdkg4Zzg4ZEQwNWZSenExUWxWbVQ2RFRHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVoyanhWLzl6UkI0R0FEZTgzOEZ2bERaQkg5ZDNzT1lUNFFVSVc0SGh6TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHT1Vnenh4REVmWk5ISWNmZDBlc2R3UE83eXlNeU1IK1ZCZ0IyYzExZEcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2cnRIM29IMGVQSHNRcms5cVlUVGR5aVBnQVp2R3RWbHVkMUFTZTBMZVZrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjROWk1JQXlmUURqUWZiTXlXb0RIbnZVZ21LMlRBMFRxVU16OERYVUo4bTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpJUkhHTXpHM3NRSHU3bGxMTUlRTUVhRjBSc2lzY1g5YXFFTXJMcWY5Vzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBBUTB4eWQrT1Fzc29KU0JpZ1dFZFk5NHIwbGM3a2NYRmZjK2QxSDNWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFlSOTFUS25UbXlBenUyazhMSW9yU015K2phMmoreFJiV0lVSFF3VnVVWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZNTG1wb2k5THZBYmNVZUFic01HamZEQkdKeDNHVEFkb2JvQVpESG9UMytzSHJSd2s2TW5vQnZzcHJCOWRsQnJ1VzZ5b3ZjU2xoL3JtcFBTcktBWmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJQYzJVTDNoQ1VsaDJ5ODhNbDlaZlI5WDduN1Rad0NKMTVHVG8rcDlMWWZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2NTk5MzcwMjQ2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2RTA5RTk5ODg2N0M4OUQ0RTcyN0VEODcyREY1M0IwNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMDU0Njg4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjU5OTM3MDI0NjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0QyNkMxNDdFMTk5RkM3MEExQkYwRjkzNzYxRERDQjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzA1NDY4OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiR3IwOHByQXRSMU8yV1A5cmFvRVo1USIsInBob25lSWQiOiI2NjE5NjhlNy05NDQwLTQ5ZmEtYjBjZi1kY2M2Mzc0ZjgyMWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmlza0taU3A3WXJ2RWkzUE1hUnpqbTNxU21vPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOcEhEOTFoa0hrR1RVbm4vVTMzT0V4ajIyYWc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKL2ErYlVFRU12MHpyVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXR3hkcE5rZmxNbTVuZDcxeFhmbkRFV0hOTG1vVFhvVGRhakhPaHQ1SHhNPSIsImFjY291bnRTaWduYXR1cmUiOiI5a1hnRjhGOXczenZKSGZkaEh0a1hnNlg2YlArN3BaQmwydUhtSG1YYTFxNGZCc21FRWVHWjBWb3VBWElWZWRiczJWQmY5bHJmdkxybml3RmRMTGxBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiblZDb0dTblpWUlk4R2t2M2x4UERzWlpISk5yMFZsd2VZNHdIQkp5N2MxbmllRDBMQjdYN00xbWtxWFZHNE1oQWZNY0dzVDQ1VGZzTTQ2LzYrN3pyanc9PSJ9LCJtZSI6eyJpZCI6IjI2NTk5MzcwMjQ2ODoxMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0NTkxNzczOTAyNDQwNDoxMEBsaWQiLCJuYW1lIjoiVGhlIFggRCBTIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2NTk5MzcwMjQ2ODoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWaHNYYVRaSDVUSnVaM2U5Y1YzNXd4Rmh6UzVxRTE2RTNXb3h6b2JlUjhUIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwNTQ2ODMsImxhc3RQcm9wSGFzaCI6IjFsT1NFSSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQS9XIn0="
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
