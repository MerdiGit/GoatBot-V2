const axios = require('axios');

let PriyaPrefix = [
  'ai', 'merdi', 'nexus', 'vermeil', // Add Your Prefix Here
];

const axiosInstance = axios.create();

module.exports = {
  config: {
    name: 'ask',
    version: '2.2.0',
    role: 0,
    category: 'system',
    author: 'ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡', // this cmd will expire If you change this credits
    shortDescription: 'Artificial Intelligence',
    longDescription: 'Ask Anything To Ai For Your Answers',
  },

  onStart: async function () {},

  onChat: async function ({ message, event, args, api, threadID, messageID }) {
    const command = args[0].toLowerCase();

    // Help Command
    if (command === 'help') {
      const helpMessage = `
      🌟 *AI Commands* 🌟
      - Prefixes: ${PriyaPrefix.join(', ')}
      - Add Prefix: addprefix <prefix>
      - AI Query: ${PriyaPrefix[0]} <your query>
      - Say Hi: hi
      `;
      await message.reply(helpMessage);
      return;
    }

    // Add New Prefix Command
    if (command === 'addprefix') {
      const newPrefix = args[1];
      if (newPrefix && !PriyaPrefix.includes(newPrefix)) {
        PriyaPrefix.push(newPrefix);
        await message.reply(`New prefix "${newPrefix}" added successfully!`);
      } else {
        await message.reply('Please provide a valid and unique prefix.');
      }
      return;
    }

    // Check for prefixes in the message
    const ahprefix = PriyaPrefix.find((p) => event.body && event.body.toLowerCase().startsWith(p));
    if (!ahprefix) {
      return;
    }

    const priya = event.body.substring(ahprefix.length).trim();
    if (!priya) {
      await message.reply('\n╔╦══• •✠•❀•✠ • •══╦╗\n 😘𝙷𝚎𝚢, 𝚟𝚎𝚛𝚖𝚎𝚒𝚕 𝚊̀ 𝚟𝚘𝚝𝚛𝚎 𝚜𝚎𝚛𝚟𝚒𝚌𝚎 𝚎𝚗 𝚚𝚞𝚘𝚒 𝚙𝚞𝚒𝚜 𝚓𝚎 𝚟𝚘𝚞𝚜 𝚊𝚒𝚍𝚎𝚣🌹\n╚╩══• •✠•❀•✠ • •══╩╝');
      return;
    }

    const apply = [
      '𝚎𝚗𝚝𝚎𝚛 (𝚚)*',
      '𝙷𝚘𝚠 𝙲𝚊𝚗 𝙸 𝙷𝚎𝚕𝚙 𝚈𝚘𝚞?',
      '𝚀𝚞𝚊𝚛𝚢 𝙿𝚕𝚎𝚊𝚜𝚎....',
      '𝙷𝚘𝚠 𝙲𝚊𝚗 𝙸 𝙰𝚜𝚜𝚒𝚜𝚝 𝚈𝚘𝚞?',
      '𝙶𝚛𝚎𝚎𝚝𝚒𝚗𝚐𝚜!',
      '𝙸𝚜 𝚃𝚑𝚎𝚛𝚎 𝚊𝚗𝚢𝚝𝚑𝚒𝚗𝚐 𝙴𝚕𝚜𝚎 𝙸 𝙲𝚊𝚗 𝙳𝚘?'
    ];
    const randomapply = apply[Math.floor(Math.random() * apply.length)];

    if (command === 'hi') {
      await message.reply(randomapply);
      return;
    }

    const encodedPrompt = encodeURIComponent(args.join(' '));

    await message.reply('⏰| 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁...');

    try {
      const response = await axiosInstance.get(`https://priyansh-ai.onrender.com/gemini/ai?query=${encodedPrompt}`);
      const Priya = response.data;
      const priyares = `\n━━━━━━━━━━━━━━━━\n🌹| ${Priya}😘💘\n━━━━━━━━━━━━━━━━`;
      await message.reply(priyares);
    } catch (error) {
      await message.reply('𝙴𝚛𝚛𝚘𝚛...');
    }
  }
};
