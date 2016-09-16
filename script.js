/*jshint esversion: 6 */

const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const Key = require('./token.json');
const phrases = require('./phrases.json');
const Sesame = Key.token;
let babybaby;
let line;
let choice = [];
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

  babybaby = d.toString() + " days, " + h.toString() + " hours, " + m.toString() + " minutes, " + s.toString() + " seconds remaining until a hoblet is born.";}

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
    else if (message.content.toLowerCase().startsWith(prefix + 'int') && (message.channel.id === "174984493138968576")) {
      message.channel.sendMessage('Ryujin no ken wo kurae!');
    }
    else if (message.content.toLowerCase().includes('i am hobo')) {
      message.channel.sendMessage('No, I am Hobo! *zzt*');
    }
    else if (message.content.toLowerCase().startsWith(prefix + "zzz") && (message.channel.id === "174984493138968576")) {
      joke();
      message.channel.sendMessage(line);
    }
    else if (message.content.toLowerCase().startsWith(prefix + "clefable") && (message.channel.id === "174984493138968576")) {
      message.channel.sendFile('./clefable.gif');
    }
    else if (message.content.toLowerCase().startsWith(prefix + "commands")) {
      message.channel.sendMessage('```'+prefix+'whoishobo \n'+prefix+'hoblet \n' +prefix+'int \n'+prefix+'zzz \n'+prefix+'clefable \n'+prefix+'ayy \n'+prefix+'abyss \n```');
    }
    else if (message.content.toLowerCase().startsWith(prefix + "ayy") && (message.channel.id === "174984493138968576")) {
      message.channel.sendFile('./elemayo.png');
    }
    else if (message.content.toLowerCase().startsWith(prefix + "abyss") && (message.channel.id === "174984493138968576")) {
      message.channel.sendMessage("I don't know what I'm doing, I'm confused.");
    }
    else if (message.content.toLowerCase().startsWith(prefix + "madi") && (message.channel.id === "174984493138968576")) {
      message.channel.sendMessage("Hi Madi");
    }
    else if (message.content.toLowerCase().startsWith(prefix + "chanid") ) {
      message.channel.sendMessage(message.channel.id.toString());
    }
       else if (message.content.toLowerCase().startsWith(prefix + "userid") ) {
      message.channel.sendMessage(message.author.id);
    }
    else if ((message.content.toLowerCase().startsWith(prefix + "fmk") ) && (message.channel.id === "174984493138968576")) {
      if (message.guild.members.array().length >= 3){
        let newArr = [];
        let memArr = message.guild.members.array();
        memArr = memArr.filter(function(membertest){return !membertest.user.bot && (membertest.user.status === "online") && (membertest.roles.length() === 0 );});
        let i = 0; while (i < 3) {
        let currIndex = Math.floor(Math.random()*memArr.length);
        if (newArr.indexOf(memArr[currIndex]) == (-1)){
          if (memArr[currIndex].nickname === undefined || memArr[currIndex].nickname === null){newArr.push(memArr[currIndex].user.username);} else {newArr.push(memArr[currIndex].nickname);}i++;}
        }

            message.channel.sendMessage("F,M,K: " + newArr[0] + ", " + newArr[1]+ ", " + newArr[2] );
      }
      else {message.channel.sendMessage("Too few members :\( ");}
      }
  //   else if ((message.content.toLowerCase().startsWith(prefix + "clean")) && (message.author.id == "186693404288090114")) {
  //     const params = message.content.split(" ").slice(1);
  //   let messagecount = parseInt(params[0]);
  //   message.channel.fetchMessages({limit: 100})
  //   .then(messages => {
  //     let msg_array = messages.array();
  //     msg_array = msg_array.filter(m => m.author.id === bot.user.id);
  //     msg_array.length = messagecount + 1;
  //     msg_array.map(m => m.delete()
  //     .catch(console.error));
  // });
  // }
    // else if (message.content.toLowerCase().startsWith('hi')) && (message.mentions.users[0] == ClientUser.id) {
    //   message.channel.sendMessage('hi'+ message.author.username);
    // }

});

client.on('ready', () =>{
  client.user.setAvatar(fs.readFileSync('./hobo.jpg'));
});

client.login(Sesame);
