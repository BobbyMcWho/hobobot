/*jshint esversion: 6 */

const Discord = require('discord.js');
const client = new Discord.Client();
const Key = require('./token.json');
const Sesame = Key.token;
var babybaby;

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

  babybaby = d.toString() + " days, " + h.toString() + " hours, " + m.toString() + " minutes, " + s.toString() + " seconds remaining until hobobaby is born.";
}


client.on('message', message => {
  let prefix = '!';
  // if(!msg.content.startsWith(prefix)) return;
  // if(msg.author.bot) return;
    if (message.content.toLowerCase().startsWith(prefix + 'whoishobo'))
    {
    message.channel.sendMessage('I am Hobo! *zzt*');
    }
    else if (message.content.toLowerCase().startsWith(prefix + 'hobobaby')) {
      hobobaby();
      message.channel.sendMessage(babybaby);
    }
    else if (message.content.toLowerCase().startsWith(prefix + 'int')) {
      message.channel.sendMessage('Ryuuji no kaioken!');
    }
    else if (message.content.toLowerCase().includes('i am hobo')) {
      message.channel.sendMessage('No, I am Hobo! *zzt*');
    }

});

client.login(Sesame);
