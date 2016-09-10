/*jshint esversion: 6 */

const Discord = require('discord.js');
const client = new Discord.Client();
const Key = require('./token.json');
const Sesame = Key.token;

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

  var timePhrase = d.toString() + " days, " + h.toString() + " hours, " + m.toString() + " minutes, " + s.toString() + " seconds remaining until hobobaby is born.";
}


client.on('message', message => {
  let prefix = '!';
  if(!msg.content.startsWith(prefix)) return;
  if(msg.author.bot) return;
    if (message.content.startsWith(prefix + 'foo'))
    {
    message.channel.sendMessage('bar');
    }
    else if (message.content.startsWith(prefix + 'hobobaby')) {
      hobobaby();
      message.channel.sendMessage(timePhrase);
    }
});

client.login(Sesame);
