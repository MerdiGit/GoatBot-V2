const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "bye",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('▣𝐕𝐞𝐫𝐦𝐞𝐢𝐥 𝐠𝐨𝐥𝐝😌:\》\n 𝐉𝐩𝐩👨‍🦯💔, 𝐯𝐨𝐮𝐬 𝐞̂𝐭𝐞𝐬 𝐭𝐨𝐮𝐬 𝐝𝐞𝐬 𝐧𝐮𝐥 𝐚𝐢𝐧𝐬𝐢 𝐪𝐮𝐞 𝐝𝐞𝐬 𝐰𝐨𝐨𝐛𝐢𝐬 𝐣𝐞 𝐧'𝐚𝐢 𝐩𝐥𝐮𝐬 𝐫𝐢𝐞𝐧 𝐚 𝐟𝐚𝐢𝐫𝐞 𝐢𝐜𝐢➤𝐉𝐞 𝐯𝐨𝐮𝐬 𝐞𝐧𝐜𝐮𝐥𝐞🖕'), id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
