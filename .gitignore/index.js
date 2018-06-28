const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("/")

bot.on("ready", function() {
    bot.user.setGame("MatchiBos, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - /membres\n - /serveur \n *Ce bot contient des commandes cachées :)");
        console.log("Help effectué !");
    }
    if (message.content === prefix + "membres"){
        message.channel.sendMessage("- Lotfi(Lxtfi) \n - Aymen(Whitiy) \n - Fadi(Kazukoo)");
        console.log("Membres effectué");
    }
    if (message.content === prefix + "bot"){
        message.channel.sendMessage("Ce bot a été crée par Lx.");
        console.log("Bot effectué");
    }

    if (message.content === "oh MatchiBos"){
        message.reply("Chek tez Baby");
        console.log("Oh MatchiBos effectué");
    }

    if (message.content === prefix + "serveur"){
        message.reply("funcraft.net");
        console.log("serveur effectué");
    }
    if (message.content === prefix + "kazukooo"){
        message.reply("Le jaune ! :p");
        console.log("Kazukooo effectué");
    }
    if (message.content === "lotfi"){
        message.reply("Le roux !");
        console.log("Lotfi effectué !");
    }
    if (message.content === "fadi"){
        message.reply("Le jaune ! :p");
        console.log("Fadi effectué");
    }
    if (message.content === "aymen"){
        message.reply("Le nwar ! :p");
        console.log("aymen effectué");
    }
    if (message.content === "whitiy"){
        message.reply("Le nwar ! :p");
        console.log("whitiy effectué");
    }
    if (message.content === "lxtfi"){
        message.reply("Le roux !");
        console.log("lxtfi effectué !");
    }





});
