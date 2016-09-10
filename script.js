var Discord = require("discord.js"),
    Key = require('./token.json'),
    Sesame = Key.token,
    bot = new Discord.Client(),
    deadline = '2015-11-10';
bot.on("message", message =>
       {
    if(message.content === "Who is hobo?")
    {
    message.reply("I am Hobo!");
    }
});

function hobobaby(){
  var now = new Date();
  var babyDue = new Date(2016, 11, 10);
  var currentTime = now.getTime();
  var babyBorn = babyDue.getTime();
  var timeRemain = babyBorn - currentTime;
  var s = Math.floor(timeRemain/1000);
  var m = Math.floor(s/60);
  var h = Math.floor(m/60);
  var d = Math.floor(h/24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var timePhrase = d + " days, " + h + " hours, " + m + " minutes, " + s + " seconds remaining until hobobaby is born.";
}
bot.on("message", message =>
       {
    if(message.content === "!hobobaby")
    {
    message.reply(timePhrase);
    }
});

bot.login(Sesame);
