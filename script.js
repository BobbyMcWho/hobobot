/*jshint esversion: 6 */

const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const Key = require('./token.json');
const phrases = require('./phrases.json');
const Sesame = Key.token;
var babybaby;
var line;
function joke(){line = phrases.pickups[Math.floor(Math.random()*phrases.pickups.length)].pline;}

function hobobaby(){
  var now = new Date();
  var babyDue = new Date(2016, 10, 10);
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

  babybaby = d.toString() + " days, " + h.toString() + " hours, " + m.toString() + " minutes, " + s.toString() + " seconds remaining until a hoblet is born.";
}


client.on('message', message => {
  let prefix = '$';
  if(message.author.bot) return;
    if (message.content.toLowerCase().startsWith(prefix + 'whoishobo'))
    {
    message.channel.sendMessage('I am Hobo! *zzt*');
    }
    else if (message.content.toLowerCase().startsWith(prefix + 'hoblet')) {
      hobobaby();
      message.channel.sendMessage(babybaby);
    }
    else if (message.content.toLowerCase().startsWith(prefix + 'int')) {
      message.channel.sendMessage('Ryujin no ken wo kurae!');
    }
    else if (message.content.toLowerCase().includes('i am hobo')) {
      message.channel.sendMessage('No, I am Hobo! *zzt*');
    }
    else if (message.content.toLowerCase().startsWith(prefix + "zzz")) {
      joke();
      message.channel.sendMessage(line);
    }
    else if (message.content.toLowerCase().startsWith(prefix + "clefable")) {
      message.channel.sendFile('./clefable.gif');
    }
    else if (message.content.toLowerCase().startsWith(prefix + "commands")) {
      message.channel.sendMessage('```'+prefix+'whoishobo \n'+prefix+'hoblet \n' +prefix+'int \n'+prefix+'zzz \n'+prefix+'clefable \n'+prefix+'ayy \n'+prefix+'abyss \n```');
    }
    else if (message.content.toLowerCase().startsWith(prefix + "ayy")) {
      message.channel.sendFile('./elemayo.png');
    }
    else if (message.content.toLowerCase().startsWith(prefix + "abyss")) {
      message.channel.sendMessage("I don't know what I'm doing, I'm confused."); 
    }
    // else if (message.content.toLowerCase().includes('hi')) && (message.mentions.first().id === ClientUser.id) {
    //   message.channel.sendMessage('hi'+ message.author.username);
    // }

});

client.on('ready', () =>{
  client.user.setAvatar(fs.readFileSync('./hobo.jpg'));
});

client.login(Sesame);
