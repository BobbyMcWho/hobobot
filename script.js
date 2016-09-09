var Discord = require("discord.js");
var Key = require('./token.json');
var Sesame = Key.token;
var bot = new Discord.Client();

bot.on("message", function(message)
       {
    if(message.content === "Who is hobo?")
    {
    bot.reply("message", "Hey there!");
    }
});

bot.login(Sesame);
