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

function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

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
        memArr = memArr.filter(function(membertest){return !membertest.user.bot && (membertest.user.status === "online") && (membertest.roles.size > 1 );});
        let i = 0; while (i < 3) {
        let currIndex = Math.floor(Math.random()*memArr.length);
        if (newArr.indexOf(memArr[currIndex]) == (-1)){
          if (memArr[currIndex].nickname === undefined || memArr[currIndex].nickname === null){newArr.push(memArr[currIndex].user.username);} else {newArr.push(memArr[currIndex].nickname);}i++;}
        }

            message.channel.sendMessage("F,M,K: " + newArr[0] + ", " + newArr[1]+ ", " + newArr[2] );
      }
      else {message.channel.sendMessage("Too few members :\( ");}
      }

    else if (message.content.toLowerCase().startsWith(prefix + "roll")) {
      let params = message.content.split(" ").slice(1);
    let dieCount = 1;
    let dieSides = 6;
    let resultsArr = [];
    if((typeof params[0] !== 'undefined') && (typeof params[1] === 'undefined')) { dieCount = parseInt(params[0]);}
    if((typeof params[0] !== 'undefined') && (typeof params[1] !== 'undefined')) {dieCount = parseInt(params[0]); dieSides = parseInt(params[1]);}
    let roller = "";
    if((message.member.nickname === undefined)  || (message.member.nickname === null)){roller = message.author.username;} else {roller = message.member.nickname;}
    if (dieCount > 100){message.channel.sendMessage(roller + ", you don't need that many dice!");}
    else if (dieSides > 100){message.channel.sendMessage(roller + ", that's not a real die. I'm watching you");}
    else{
        for (let i=0;i<dieCount;i++){
          resultsArr.push(Math.floor(Math.random()*(dieSides))+1);
        }
        let dieTotal = resultsArr.reduce(function(a,b){return a+b;});
        let dieAverage = (dieTotal/dieCount);
        message.channel.sendMessage(roller + " rolled a " + dieSides + " sided dice " + dieCount + " times for a total of **" + dieTotal +"** (average: " + dieAverage + "):\n" + resultsArr );}

  }

  else if (message.content.toLowerCase().startsWith(prefix + "flip")) {
    let params = message.content.split(" ").slice(1);
  let coinCount = 1;
  let coinSides = 2;
  let resultsArr = [];
  if(typeof params[0] !== 'undefined'){ coinCount = parseInt(params[0]);}
  let roller = "";
  if((message.member.nickname === undefined)  || (message.member.nickname === null)){roller = message.author.username;} else {roller = message.member.nickname;}
  if (coinCount > 100){message.channel.sendMessage(roller + ", you don't need that many coins!");}
  else{
    let hCount = 0;
      for (let i=0;i<coinCount;i++){
        let side = "";
        if((Math.floor(Math.random()*2))===1){side = "Heads";hCount++;}else{side = "Tails";}
        resultsArr.push(side);
      }
      let heads = hCount;
      let tails = (coinCount - heads);
      message.channel.sendMessage(roller + " flipped a coin " + coinCount + " times for a total of **" + heads +" heads** and **" + tails +" tails**. \n Results: " + resultsArr );}

}
else if (message.content.toLowerCase().startsWith(prefix + "teams")) {
 let menArr = message.mentions.array();
 shuffle(menArr);
 message.channel.sendMessage(menArr);
}
    // else if (message.content.toLowerCase().startsWith('hi')) && (message.mentions.users[0] == ClientUser.id) {
    //   message.channel.sendMessage('hi'+ message.author.username);
    // }

});

client.on('ready', () =>{
  client.user.setAvatar(fs.readFileSync('./hobo.jpg'));
});

client.login(Sesame);
