module.exports = {
  config: {
    name: "top",
    version: "1.3",
    author: "XxGhostxX", // Ce script a été créé par XxGhostxX, ne pas modifier sans autorisation.
    role: 0,
    shortDescription: {
      en: "🎉 Top 10 Rich Users 💵"
    },
    longDescription: {
      en: "🎉 Affiche le classement des 10 utilisateurs les plus riches du groupe 💵"
    },
    category: "group",
    guide: {
      en: "{pn} [page]",
    }
  },

  onStart: async function ({ api, args, message, event, usersData }) {
    const allUsers = await usersData.getAll();

    // Tri des utilisateurs par argent
    const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 10); // Limité au Top 10

    // Si aucune donnée n'est trouvée
    if (topUsers.length === 0) {
      return api.sendMessage("❌ Aucune donnée trouvée pour les utilisateurs. 🌚", event.threadID, event.messageID);
    }

    // Gestion de la pagination (2 pages, 5 utilisateurs par page)
    let page = args[0] ? parseInt(args[0]) : 1;
    const usersPerPage = 5;
    const totalPages = Math.ceil(topUsers.length / usersPerPage);
    const startIndex = (page - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersOnPage = topUsers.slice(startIndex, endIndex);

    // Si la page demandée est invalide
    if (page < 1 || page > totalPages) {
      return api.sendMessage(❌ Page invalide. Il y a ${totalPages} pages disponibles. 📜, event.threadID, event.messageID);
    }

    // Création de la liste des utilisateurs les plus riches
    const topUsersList = usersOnPage.map((user, index) => {
      const userMoney = user.money || 0;
      return🎖️ ${startIndex + index + 1}. ${user.name} : ${userMoney} ${getRandomEmoji()}`;
    });

    // Ajout d'un message spécial pour le premier utilisateur
    const firstUser = topUsers[0];
    const congratulations =🏆 Celui avec le plus d'argent est ${firstUser.name} avec ${firstUser.money || 0}$ 🪙`;

    // Message avec pagination
    const paginationMessage =📜 Page ${page} sur ${totalPages}\n`;
    const messageTex🔖𝗧𝗢𝗣 10 𝗥𝗜𝗖𝗛𝗘𝗦𝗧🔖\n\n${topUsersList.join('\n')}\n\n${paginationMessage}${congratulations}ns}`;
    return api.sendMessage(messageText, event.threadID, event.messageID);
  }
};

// Fonction pour obtenir un emoji aléatoire
const emojis = [
  "$", 
];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
