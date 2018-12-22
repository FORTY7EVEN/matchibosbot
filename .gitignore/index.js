const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("/")

bot.login(process.env.TOKEN);

bot.on("ready", function() {
    bot.user.setGame("LotfiBot, /help");
    console.log("Le bot a bien ete connecté");
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + " Bienvenue sur Notre discord Yawlide el 9ahba ! :white_check_mark:");
    member.addRole(member.guild.roles.find("name", "● ZIZO LITE ●"));
});

bot.on("guildMemberRemove", function(member) {
     member.guild.channels.find("name", "depart").sendMessage(member.toString() + " a leave le serveur" + " :x:");
});


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - /MEMES \n - /CHWAKER \n - /9heb \n - /bot \n *Ce bot contient des commandes cachées C:");
        console.log("Help effectué !");
    }
    if (message.content === prefix + "CHWAKER"){
        message.channel.sendMessage(" **- Lotfi \n - Aymen \n - Fadi**");
        console.log("Membres effectué");
    }
    if (message.content === prefix + "bot"){
        message.channel.sendMessage("Ce bot a été crée par LOTFI.");
        console.log("Bot effectué");
    }

    if (message.content === "tedi 150"){
        message.reply("ZEBI !");
        console.log("tedi 150 effectué");
    }

    if (message.content === prefix + "MEMES"){
        message.reply(" **- VERDINO \n - AISSA \n - ZIZO \n - El BOUNDO9IA 16 \n - TEDI 150 ? \n - NEGA3REK YA RBK \n - CHAWALA HADA \n - JAMAL \n ....**");
        console.log("serveur effectué");
    }
    if (message.content ===  "fadi"){
        message.reply("**el no9che ! :p**");
        console.log("fadi effectué");
    }
    if (message.content === "lotfi"){
        message.reply("**el chikour** !");
        console.log("Lotfi effectué !");
    }
    if (message.content === "aymen"){
        message.reply("3ando **zeb** kbir :p");
        console.log("aymen effectué");
    }
    if (message.content === "tedi 150 ?"){
        message.reply("**ZEBI**");
        console.log("tedi 150 ? effectué");
    }
    if (message.content === "ZIZO"){
        message.reply("**DELA3 RAW RALI**");
        console.log("ZIZO effectué");
    }
    if (message.content === "VERDINO"){
        message.reply("**Rasse ytir rbk !**");
        console.log("verdino effectué !");
    }
    if (message.content === prefix + "n9ocha"){
        message.reply("**JORDAN**");
        console.log("no9che effectué !");
    }
     if (message.content === "chek chek"){
        message.reply("Bonda 16 C:");
        console.log("racim effectué !");
    }
    if (message.content === "Verdino2"){
        message.reply("ja l7mar ydawi derboh te7t le9lawi");
        console.log("verdino effectué !");
    }
    if (message.content === "jamel"){
        message.reply("ya jamel nikyemakk");
        console.log("racim effectué !");
    }
    if (message.content === "el boundou9ia 16"){
        message.reply("YBEYENLEK BELI VALABEL !");
        console.log("canon16 effectué !");
    }
    if (message.content === "chawala hada?"){
        message.reply("rabak chawala hada ?");
        console.log("chawala effectué !");
    }
    if (message.content === "lbodi"){
        message.reply("**hatli khobzi a nikamok**");
        console.log("lbodi effectué !");
    }
    if (message.content === "3ami 7med"){
        message.reply("yekhroj yniklek 7achoun yemak");
        console.log("7med effectué !");
    }
    if (message.content === "mananuk"){
        message.reply("**AYA BELA33 !**");
        console.log("mananuk effectué !");
    }
    if (message.content === "canon16"){
        message.reply("YBEYENLEK BELI VALABEL !");
        console.log("canon16 effectué !");






});
