module.exports = {
  config: {
    name: "vermeil bet",
    aliases: ["ver"],
    version: "1.0",
    author: "Merdi Madimba",
    countDown: 10,
    role: 0,
    shortDescription: "Play vermeil bet , the oldest gambling game",
    longDescription: "Play vermeil bet, the oldest gambling game, and earn money",
    category: "game",
    guide: "{pn} <Gold/Bet> <amount of money>"
  },

  onStart: async function ({ args, message, usersData, event }) {
    const betType = args[0];
    const betAmount = parseInt(args[1]);
    const user = event.senderID;
    const userData = await usersData.get(event.senderID);

    if (!["gold", "bet"].includes(betType)) {
      return message.reply("💰🪙𝖵𝗈𝗍𝗋𝖾 𝗉𝖺𝗋𝗂 𝗏𝗈𝗎𝗌 𝗅𝖾 𝖿𝖺𝗂𝗍𝖾 𝖾𝗇 '𝗀𝗈𝗅𝖽' 𝗈𝗎 '𝖻𝖾𝗍'?");
    }

    if (!Number.isInteger(betAmount) || betAmount < 1000) {
      return message.reply("Le montant miser doit être 1000 ou plus🙇‍♀️💔.");
    }

    if (betAmount > userData.money) {
      return message.reply("⛔ |𝖯𝖾𝗍𝗂𝗍 𝗍𝗎 𝖾𝗌𝗌𝖺𝗂𝖾 𝗊𝗎𝗈𝗂 𝗅𝖺̀, 𝗍'𝖺𝗌 𝗉𝖺𝗌 𝖼𝖾𝗍𝗍𝖾 𝗌𝗈𝗆𝗆𝖾 𝗏𝖺𝗌 𝗃𝗈𝗎𝖾𝗋 𝖺𝗎𝗑 𝖻𝗂𝗅𝗅𝖾🤭😌.");
    }

    const dice = [1, 2, 3, 4, 5, 6];
    const results = [];

    for (let i = 0; i < 3; i++) {
      const result = dice[Math.floor(Math.random() * dice.length)];
      results.push(result);
    }

    const winConditions = {
      small: results.filter((num, index, arr) => num >= 1 && num <= 3 && arr.indexOf(num) !== index).length > 0,
      big: results.filter((num, index, arr) => num >= 4 && num <= 6 && arr.indexOf(num) !== index).length > 0,
    };

    const resultString = results.join(" | ");

    if ((winConditions[betType] && Math.random() <= 0.4) || (!winConditions[betType] && Math.random() > 0.4)) {
      const winAmount = 4 * betAmount;
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`𝖵𝖤𝖱𝖬𝖤𝖨𝖫 𝖡𝖤𝖳🪙\n\n 𝖢𝗈𝖽𝖾 𝖡𝖺𝗋𝗋𝖾 : [ ${resultString} ]\n\n🎉 ✅| 𝖯𝖺𝗋𝗂 𝖵𝖺𝗅𝗂𝖽𝖾́\n\n 💳𝖦𝖺𝗂𝗇 𝖬𝖺𝗑𝗂𝗆𝗎𝗆
 ${winAmount}!`);
    } else {
    userData.money -= betAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`𝖵𝖤𝖱𝖬𝖤𝖨𝖫 𝖡𝖤𝖳🪙\n\n 𝖢𝗈𝖽𝖾 𝖡𝖺𝗋𝗋𝖾 : [ ${resultString} ]\n\n ⛔💰 | 𝗉𝖺𝗋𝗂𝖾 𝖾́𝖼𝗁𝗈𝗎𝖾́\n\n 💳𝖯𝖾𝗋𝗍𝖾 𝗆𝖺𝗑𝗂𝗆𝗎𝗆 ${betAmount}.`);
    }
  }
};
