const axios = require('axios');

const Prefixes = [
  'ai',
  'vermeil',
  'merdi ',
  'nexus',
  'ask',
  'gold',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("🎯𝘚𝘢𝘭𝘶𝘵 𝘮𝘰𝘪 𝘤'𝘦𝘴𝘵 𝘙𝘶𝘣𝘺, 𝘶𝘯𝘦 𝘈𝘪 𝘥𝘦 𝘵𝘺𝘱𝘦 𝘨𝘢𝘮𝘦💖. 𝘘𝘶𝘦𝘭 𝘦𝘴𝘵 𝘷𝘰𝘵𝘳𝘦 𝘲𝘶𝘦𝘴𝘵𝘪𝘰𝘯❓");
        return;
      }


      const response = await axios.get(https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)});
      const answer = response.data.answer;

 
    await message.reply({ body: `💖𝙍𝙐𝘽𝙔  \n______________________
${a____________________________ \n🔵𝙈𝙀𝙍𝘿𝙄🔴`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
}
