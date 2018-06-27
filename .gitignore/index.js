const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("MatchiBos, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDYxNjUxNDg1MzM2NDAzOTg4.DhWfbA.sH5kXUTQ-JnDs1sRFF2xvFeFfkE");
