/*jshint esversion: 6 */

const Discord = require('discord.js');
const fs = require('fs');
const request = require('request');
const client = new Discord.Client();
const Key = require('./token.json');
const phrases = require('./phrases.json');
const eightball = require('./8ball.json');
const Sesame = Key.token;
const weatherKey = Key.weatherapi;
const ytKey = Key.ytKey;
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

function timeUntil(phrase,year,month,day){
  var now = new Date();
  var goalDate = new Date(year,month,day);
  var currentTime = now.getTime();
  var goalTime = goalDate.getTime();
  var timeRemain = goalTime - currentTime;
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

  babybaby = d.toString() + " days, " + h.toString() + " hours, " + m.toString() + " minutes, " + s.toString() + " seconds remaining until " + phrase + ".";}

client.on('message', message => {
  let isBobby = (message.author.id === '186693404288090114') ? true : false;
  let prefix = '$';
  let params = message.content.split(/\ +/).slice(1);
  if(message.author.bot) return;
    if (message.content.toLowerCase().startsWith(prefix + 'whoishobo'))
    {
    message.channel.sendMessage('I am Hobo! *zzt*');
    }
    else if (message.content.toLowerCase().startsWith(prefix + 'hoblet')) {

      message.channel.sendMessage(`It's a boy! Lucas Michael Taffe was born 11/10 at 10:29pm weighing 5lbs 12.5oz`);
    }
  else if (message.content.toLowerCase().startsWith(prefix + 'lily')) {
      timeUntil("a lily blooms",2017,3,9);
      message.channel.sendMessage(babybaby);
    }
    else if (message.content.toLowerCase().startsWith(prefix + 'yetiwedding')) {
      timeUntil("the Yeti Wedding",2017,6,29);
      message.channel.sendMessage(babybaby);
    }
    else if (message.content.toLowerCase().startsWith(prefix + 'hobo')) {
      if (message.author.id === '161210376812363776'){message.channel.sendMessage("Yes, Master?");}
      else{
      if (message.guild.members.find('id','161210376812363776').user.status === "online"){
      message.channel.sendMessage("Hobo is here!");}
      else if (message.guild.members.find('id','161210376812363776').user.status === "idle"){message.channel.sendMessage("Hobo must be working...");}
      else if (message.guild.members.find('id','161210376812363776').user.status === "offline"){message.channel.sendMessage("Check your nearest Staples, Hobo is missing!");}
    }
    }
    else if (message.content.toLowerCase().startsWith(prefix + 'int') && (message.channel.id === "174984493138968576")) {
      message.channel.sendMessage('Ryujin no ken wo kurae!');
    }
    else if (message.content.toLowerCase().startsWith("/r/") || message.content.toLowerCase().startsWith("r/")) {
      let lio = message.content.lastIndexOf('/')+1;
      let subreddit = message.content.substring(lio);
      message.channel.sendMessage('http://www.reddit.com/r/'+subreddit);
    }
    else if (message.content.toLowerCase().includes('i am hobo')) {
      message.channel.sendMessage('No, I am Hobo! *zzt*');
    }
    else if (message.content.toLowerCase().startsWith(prefix + "midas") && (message.channel.id === "174984493138968576")) {
      let meal = "lunch";
      let roller = "";
      if((message.member.nickname === undefined)  || (message.member.nickname === null)){roller = message.author.username;} else {roller = message.member.nickname;}
      if (typeof params[0] !== 'undefined'){meal = params.join(" ");}
      message.channel.sendMessage("What'd you have for " + meal + " today " + roller +"?");
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
        if ((newArr.indexOf(memArr[currIndex]) == (-1)) ){
          if (memArr[currIndex].nickname === undefined || memArr[currIndex].nickname === null){newArr.push(memArr[currIndex].user.username);memArr.splice(currIndex,1);} else {newArr.push(memArr[currIndex].nickname);memArr.splice(currIndex,1);}i++;}
        }

            message.channel.sendMessage("F,M,K: " + newArr[0] + ", " + newArr[1]+ ", " + newArr[2] );
      }
      else {message.channel.sendMessage("Too few members :\( ");}
      }

    else if (message.content.toLowerCase().startsWith(prefix + "roll")) {
    params = params.join(" ");
    params = params.split(/[a-z]|\s+/).filter(e => e.length !== 0);
    let dieCount = 1;
    let dieSides = 6;
    let keep = dieCount;
    let resultsArr = [];
    if((typeof params[0] !== 'undefined') && (typeof params[1] !== 'undefined') && (typeof params[2] !== 'undefined')) {dieCount = parseInt(params[0]); dieSides = parseInt(params[1].replace(/[^0-9]+/g, "")); keep = parseInt(params[2].replace(/[^0-9]+/g, ""));}
    else if((typeof params[0] !== 'undefined') && (typeof params[1] !== 'undefined')) {dieCount = parseInt(params[0]); dieSides = parseInt(params[1].replace(/[^0-9]+/g, ""));keep = dieCount;}
    else if((typeof params[0] !== 'undefined') && (typeof params[1] === 'undefined')) { dieCount = parseInt(params[0]);keep=dieCount;}
    let keepPhrase = "";
    let roller = message.author;
    if (keep <= dieCount){
      if (keep < dieCount){keepPhrase = "keeping the top " + keep +", ";}
      if (dieCount > 100){message.channel.sendMessage(roller + ", you don't need that many dice!");}
      else if (dieSides > 10000){message.channel.sendMessage(roller + ", that's not a real die. I'm watching you.");}
      else{
        for (let i=0;i<dieCount;i++){
          resultsArr.push(Math.floor(Math.random()*(dieSides))+1);
        }
        let keptArr = resultsArr;
        keptArr = keptArr.sort(function(a,b){return b-a;});
        keptArr = keptArr.slice(0,(keep));
        let dieTotal = keptArr.reduce(function(a,b){return a+b;});
        let dieAverage = Math.round((dieTotal/keep)*100)/100;
        message.channel.sendMessage(roller + " rolled a " + dieSides + " sided dice " + dieCount + " times " + keepPhrase + "for a total of **" + dieTotal +"** (average: " + dieAverage + "):\n" + resultsArr );}}
    else {message.channel.sendMessage("You cannot keep more than you roll " + roller +"!");}
  }

  else if (message.content.toLowerCase().startsWith(prefix + "flip")) {

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
else if (message.content.toLowerCase().startsWith(prefix + "urban")) {

  let searchTerm = params.join('%20');
  let url ='http://api.urbandictionary.com/v0/define?term=';

  request(url+searchTerm, (error,response,body) => {
    if (!error && response.statusCode === 200){
      const urbanResponse = JSON.parse(body);
      let tags = urbanResponse.tags;
      let thumbsup = urbanResponse.list[0].thumbs_up;
      let thumbsdown = urbanResponse.list[0].thumbs_down;
      let definition = urbanResponse.list[0].definition;
      let example = urbanResponse.list[0].example;
      let word = urbanResponse.list[0].word;
      message.channel.sendMessage(`**${word}:**\n${definition} \n\uD83D\uDC4D ${thumbsup} \uD83D\uDC4E ${thumbsdown} \n \nExample: ${example}`);
    }
  });
}
else if (message.content.toLowerCase().startsWith(prefix + "weather")) {
  params = params.join("");
  let country = 'us';
  if (params.indexOf(',') > -1) {params = params.split(","); country = params.pop(); params = params.join("");}
  if((typeof params !== 'undefined')){
    let zipcode = params;
    let units;
    if(country == 'us'){units = 'imperial';}else{units = 'metric';}
    let niceUnits;
    switch(units){
      case 'imperial': niceUnits = 'Fahrenheit'; break;
      case 'metric': niceUnits = 'Celsius'; break;
    }
    let url =`http://api.openweathermap.org/data/2.5/weather?q=${zipcode},${country}&appid=${weatherKey}&units=${units}`;
  request(url, (error,response,body) => {
    if (!error && response.statusCode === 200){
      const weatherResponse = JSON.parse(body);
      let temp = weatherResponse.main.temp;
      let city = weatherResponse.name;
      let country = weatherResponse.sys.country;
      let lastConditionIndex = weatherResponse.weather.length - 1;
      let condition = weatherResponse.weather[lastConditionIndex].main;
      let icon;
      switch(condition){
        case 'Clear' : icon = '\u2600'; break;
        case 'Thunderstorm' : icon = '\uD83C\uDF29'; break;
        case 'Drizzle' :
        case 'Rain': icon = '\uD83C\uDF27'; break;
        case 'Snow' : icon = '\uD83C\uDF28'; break;
        case 'Atmosphere' : icon = '\uD83C\uDF2B'; break;
        case 'Clouds' : icon = '\u2601'; break;
        case 'Extreme' : icon = '\uD83C\uDF2A'; break;
        case 'Additional' : icon = '\uD83C\uDF43'; break;
      }

      message.channel.sendMessage(`${icon} It is currently ${temp}\u00B0 ${niceUnits} in ${city}, ${country}.`);
    }
    else if (error){message.channel.sendMessage("Error finding your location, please try again using $weather city 2-letter-country-abbr. Example: $weather Los Angeles us");}
  });}
  else{message.channel.sendMessage("Please try again using $weather city 2-letter-country-abbr. Example: $weather Los Angeles us");}
  }
  else if ((message.content.toLowerCase().startsWith("?eval")) && (message.author.id === '186693404288090114')) {
params = params.join(" ");
 let args = eval(params); //jshint ignore:line
 message.channel.sendMessage(`\`\`\`${args}\`\`\``);
}
else if ((message.content.startsWith(prefix + "purge")) && ((message.author.id === '186693404288090114'))) {
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages =>{
             let filteredMessages = messages.filter(m => m.content.startsWith(prefix));
              let filteredMessages2 = messages.filter(m => {return m.author.id === client.user.id;});
              message.channel.bulkDelete(filteredMessages);
      message.channel.bulkDelete(filteredMessages2);
});}
else if ((message.content.startsWith(prefix + "log")) && ((message.author.id === '186693404288090114'))) {
    client.guilds.find('id','187346688497680385').channels.find('id','229058004866039808').sendMessage("logged");
}

else if (message.content.toLowerCase().startsWith(prefix + "wiki")) {

  let searchTerm = params.join('%20');
  let url =`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&limit=1&namespace=0&format=json`;

  request(url, (error,response,body) => {
    if (!error && response.statusCode === 200){
      const wikiResponse = JSON.parse(body);
      let term = wikiResponse[1];
      let definition = wikiResponse[2];
      let wikiurl = wikiResponse[3];

      message.channel.sendMessage(`**${term}:**\n${definition}\n${wikiurl}`);
    }
  });
}
  else if ((message.content.toLowerCase().startsWith(prefix + "youtube")) || (message.content.toLowerCase().startsWith(prefix + "yt"))) {

  let searchTerm = params.join('%20');
  let url =`https://www.googleapis.com/youtube/v3/search?key=${ytKey}&part=snippet&q=${searchTerm}&maxResults=1&type=video&order=relevance`;

  request(url, (error,response,body) => {
    if (!error && response.statusCode === 200){
      const ytResponse = JSON.parse(body);
      let videoId = ytResponse.items[0].id.videoId;
      let title = ytResponse.items[0].snippet.title;
      let description = ytResponse.items[0].snippet.description;
      let channel = ytResponse.items[0].snippet.channelTitle;
      message.channel.sendMessage(`You may find this video from **${channel}** interesting: \n https://www.youtube.com/watch?v=${videoId}`);
    }
  });
}
  else if (message.content.startsWith(prefix + "face")) {
    message.channel.sendMessage(`\n👁   👁\n      👃 \n      👄`);
}
else if (message.content.startsWith(prefix + "cat")) {
  const url = 'http://random.cat/meow';
  request(url, (error,response,body) => {
    if (!error && response.statusCode === 200){
      const cat = JSON.parse(body);
      message.channel.sendMessage(`${cat.file}`);}});
}
  else if (message.content.startsWith(prefix + "queue")) {
  let winLoss = (Math.floor(Math.random()*2) < 1) ? 'Victory! +'  : 'Loss! -' ;
  let elo = (Math.floor(Math.random()*10)+20);
    //message.channel.sendMessage(`${winLoss}${elo} elo. You are now Wood 5`);
  let msg;
    if (message.author.id === "146493256237056000") { msg = 'Fuck you Kevin';}
   else {msg = 'Currently disabled until feature is fleshed out.';}
    message.channel.sendMessage(`${msg}`);
}
else if (message.content.toLowerCase().startsWith(prefix + 'anon') && (message.channel.id === "176689665401683968" || message.channel.id === "228335467429363712" || message.channel.id === "187346688497680385")) {
  message.delete();
  let oId = message.author.id;
  let content = params.join(' ');
   message.channel.sendMessage(`\`Pseudo-Anonymous post: ${oId} \` \n ${content}`);
}
else if (message.content.toLowerCase().startsWith(prefix + 'delete') && (message.member.permissions.hasPermission("MANAGE_MESSAGES") || isBobby)
) {
  let messageId = params[0].toString();
  message.channel.fetchMessage('237381350397706240')
  .then(msg => msg.delete())
  .catch(console.error);
   }
   else if (message.content.toLowerCase().startsWith(prefix + 'whois') && (message.member.permissions.hasPermission("MANAGE_MESSAGES") || isBobby)
   ) {
     let sender = params[0].toString();
     let guild =  params.slice(1).join(' ');
     console.log(guild);
     let guildFind = client.guilds.find('name',guild);
    if (typeof  guildFind === 'undefined'){ message.author.sendMessage('Incorrect Guild') ;}
    else guildFind.members.find('id',sender);
     message.author.sendMessage(target);

      }

else if (message.content.startsWith(prefix + "chorizo")) {
    message.channel.sendMessage(`I like a joke as much as next game but is this basically just a meme group seems like thats 80% of hte discussion?`);
}
 else if (message.content.startsWith(prefix + "8ball")) {
    message.channel.sendMessage(`${eightball.phrases[(Math.floor(Math.random()*eightball.phrases.length))]}`);
}
else if (message.content.startsWith(prefix + "kick")) {
   let kickee = message.mentions.users.first();
   let kickMessage = params.slice(1).join(" ");
   if (message.member.hasPermission("KICK_MEMBERS")){
     kickee.sendMessage(`You have been kicked from ${message.guild}. Reason: ${kickMessage}`);
     message.guild.member(kickee).kick();
   }

}
else if (message.content.startsWith(prefix + "ban")) {
   let kickee = message.mentions.users.first();
   let days = parseInt(params[1]);
   days = (isNaN(days)) ? 0 : (days > 7) ? 7 : days;
   let kickMessage = params.slice(2).join(" ");
   if (message.member.hasPermission("BAN_MEMBERS")){
     let kickeeId = kickee.id;
     kickee.sendMessage(`You have been banned from ${message.guild}. Reason: ${kickMessage}`);
     message.channel.sendMessage(`${kickee.username} was banned from ${message.guild}. Reason: ${kickMessage}.`);
     message.author.sendMessage(`You may unban ${kickee.username} by typing "$unban ${kickeeId}" in ${message.guild} chat.`);
     message.guild.member(kickee).ban(days);

   }
}
else if (message.content.startsWith(prefix + "unban")) {
   let lucky = params[0];
   if (message.member.hasPermission("BAN_MEMBERS")){
     message.guild.unban(lucky);
   }
}
//else if (message.content.toLowerCase().startsWith(prefix + "teams")) {
 //let menArr = message.mentions.users.array();
 //menArr = shuffle(menArr);
 //message.channel.sendMessage(menArr);
//}
    // else if (message.content.toLowerCase().startsWith('hi')) && (message.mentions.users[0] == ClientUser.id) {
    //   message.channel.sendMessage('hi'+ message.author.username);
    // }

});
//client.on('guildMemberRemove', (guild, member) => {
  // setTimeout(() => {guild.defaultChannel.sendMessage(`See ya ${member.user.username}, never thought much of you anyways!`)},500);
//});

client.on('ready', () =>{
  client.user.setAvatar(fs.readFileSync('./hobo.jpg'));
});
client.on('reconnecting', () => {
  console.log("reconnecting...");
});
client.on('error', (error) => {
  console.log("error");
});

client.login(Sesame);
