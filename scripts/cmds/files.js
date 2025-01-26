const fs = require('fs');

module.exports = {
	config: {
		name: "file",
		aliases: ["files"],
		version: "1.0",
		author: "Mahir Tahsan",
		countDown: 5,
		role: 0,
		shortDescription: "Send bot script",
		longDescription: "Send bot specified file ",
		category: "𝗢𝗪𝗡𝗘𝗥",
		guide: "{pn} file name. Ex: .{pn} filename"
	},

	onStart: async function ({ message, args, api, event }) {
		const permission = ["100065927401614", "100053549552408",];
		if (!permission.includes(event.senderID)) {
			return api.sendMessage(" ❌𝘋𝘦𝘴𝘰𝘭𝘦́ 𝘮𝘰𝘯 𝘤𝘩𝘰𝘶𝘦, 𝘮𝘢𝘶𝘴 𝘤𝘦𝘵𝘵𝘦 𝘤𝘮𝘥 𝘯'𝘦𝘴𝘵 𝘲𝘶𝘦 𝘱𝘰𝘶𝘳 𝘮𝘦𝘴 𝘴𝘦𝘯𝘱𝘢𝘪̈🫶💗", event.threadID, event.messageID);
		}

		const fileName = args[0];
		if (!fileName) {
			return api.sendMessage("Please provide a file name.", event.threadID, event.messageID);
		}

		const filePath = __dirname + `/${fileName}.js`;
		if (!fs.existsSync(filePath)) {
			return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
		}

		const fileContent = fs.readFileSync(filePath, 'utf8');
		api.sendMessage({ body: fileContent }, event.threadID);
	}
};
