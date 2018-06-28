const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("/")

bot.on("ready", function() {
    bot.user.setGame("MatchiBos, /help");
    console.log("Le bot a bien ete connecté");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - /staff \n - /serveur \n - /membres \n - /bot \n *Ce bot contient des commandes cachées C:");
        console.log("Help effectué !");
    }
    if (message.content === prefix + "staff"){
        message.channel.sendMessage(" - Lotfi(Lxtfi) \n - Aymen(Whitiy) \n - Fadi(Kazukoo)");
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
    if (message.content ===  "kazukooo"){
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
    if (message.content === prefix + "membres"){
        message.reply("\n Fonda :\n - Lotfi(Lxtfi) \n - Aymen(Whitiy) \n - Fadi(Kazukoo) \n Admin : \n Membres :");
        console.log("membres effectué !");
    }
     if (message.content === "chek chek"){
        message.reply("Banda 16 C:");
        console.log("racim effectué !");
    }
  
  
    bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + " Bienvenue sur le discord De la MatchiBos ! :white_check_mark:");
    member.addRole(member.guild.roles.find("name", "●  ⚙️ VISITEUR ⚙️  ●"));
});

bot.on("guildMemberRemove", function(member) {
     member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + " Bye bye!" + member.toString() + " :x:");
});






});
