const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("MatchiBos, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - .Membres\n - .serveur \n *Ce bot contient des commandes cachées :)");
        console.log("Help effectué !");
    }

    if (message.content === prefix + "Membres"){
        message.channel.sendMessage("- Lotfi(Lxtfi), Aymen(Whitiy), Fadi(Kazukoo)");
        console.log("Membres effectué");
    }

    if (message.content === prefix + "Bot"){
        message.channel.sendMessage("Ce bot a été crée par Lx.");
        console.log("Bot effectué");
    }

    if (message.content === prefix + "Oh MatchiBos"){
        message.channel.sendMessage("Chek tez Baby");
        console.log("Oh MatchiBos effectué");
    }

    if (message.content === prefix + "serveur"){
        message.channel.sendMessage("funcraft.net");
        console.log("serveur effectué");
    }
    if (message.content === prefix + "Kazukooo"){
        message.channel.sendMessage("Le jaune ! :p");
        console.log("Kazukooo effectué");
    }
    if (message.content === prefix + "Lotfi"){
        message.reply("Le roux !");
        console.log("Lotfi effectué !");
    }
    if (message.content === prefix + "Fadi"){
        message.channel.sendMessage("Le jaune ! :p");
        console.log("Fadi effectué");
    }
    if (message.content === prefix + "Aymen"){
        message.channel.sendMessage("Le nwar ! :p");
        console.log("aymen effectué");
    }
    if (message.content === prefix + "whitiy"){
        message.channel.sendMessage("Le nwar ! :p");
        console.log("whitiy effectué");
    }
    if (message.content === prefix + "lxtfi"){
        message.reply("Le roux !");
        console.log("lxtfi effectué !");
    }





});
