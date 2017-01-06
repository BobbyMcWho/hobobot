/*jshint esversion: 6 */

const Discord = require('discord.js');
const fs = require('fs');
const request = require('request');
const client = new Discord.Client();
const Key = require('./token.json');
const phrases = require('./phrases.json');
const eightball = require('./8ball.json');
const sesame = Key.token;
const weatherKey = Key.weatherapi;
const ytKey = Key.ytKey;
const timeKey = Key.timeKey;
const cleverKey = Key.cleverKey;
const cleverUser = Key.cleverUser;
const cleverbot = require("cleverbot.io");
const cBot = new cleverbot(cleverUser,cleverKey);
let babybaby;
let line;
let choice = [];
function joke(){line = phrases.pickups[Math.floor(Math.random()*phrases.pickups.length)].pline;}
const monthNames =  [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
];
const dayNames =  [
  "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
];


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
      if (message.guild.members.get('161210376812363776').user.presence.status === "online"){
      message.channel.sendMessage("Hobo is here!");}
      else if (message.guild.members.get('161210376812363776').presence.status === "idle"){message.channel.sendMessage("Hobo must be working...");}
      else if (message.guild.members.get('161210376812363776').presence.status === "offline"){message.channel.sendMessage("Check your nearest Staples, Hobo is missing!");}
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
        memArr = memArr.filter(function(membertest){return !membertest.user.bot && (membertest.user.presence.status === "online") && (membertest.roles.size > 1 );});
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
      let responseType = urbanResponse.result_type;
      if (responseType === "no_results"){
        message.channel.sendMessage(`No results found for "${params.join(" ")}"`);}
        else{
      let tags = urbanResponse.tags;
      let thumbsup = urbanResponse.list[0].thumbs_up;
      let thumbsdown = urbanResponse.list[0].thumbs_down;
      let definition = urbanResponse.list[0].definition;
      let example = urbanResponse.list[0].example;
      let word = urbanResponse.list[0].word;
      let permalink = urbanResponse.list[0].permalink;
      message.channel.sendMessage(`**${word}:**\n${definition} \n\uD83D\uDC4D ${thumbsup} \uD83D\uDC4E ${thumbsdown} \n \nExample: ${example}`);
//       message.channel.sendMessage("", {embed: {
//   color: 905214,
//   author: {
//     name: client.user.username,
//     icon_url: client.user.avatarURL
//   },
//   title: word,
//   url: permalink,
//   description: definition,
//   fields: [
//     {
//       name: `\uD83D\uDC4D ${thumbsup} \uD83D\uDC4E ${thumbsdown}`,
//       value: '\u200b'
//     },
//     {
//       name: 'Example:',
//       value: example
//     }
//   ],
//   timestamp: new Date(),
//   footer: {
//     icon_url: './ud.jpg',
//     text: 'Urban Dictionary'
//   }
// }});
        }
        }
  });
}
else if (message.content.toLowerCase().startsWith(prefix + "weather")) {
  params = params.join("");
  let country = "";
  if (params.indexOf(',') > -1) {params = params.split(","); country = `,${params.pop()}`; params = params.join("");}
  if((typeof params !== 'undefined')){
    let zipcode = params;
    let units;
    let url =`http://api.openweathermap.org/data/2.5/weather?q=${zipcode},${country}&appid=${weatherKey}`;
  request(url, (error,response,body) => {
    if (!error && response.statusCode === 200){
      const weatherResponse = JSON.parse(body);
      let temp = weatherResponse.main.temp;
      let city = weatherResponse.name;
      let country = weatherResponse.sys.country;
      let lastConditionIndex = weatherResponse.weather.length - 1;
      let condition = weatherResponse.weather[lastConditionIndex].main;
      let description = weatherResponse.weather[lastConditionIndex].description;
      let mainType = weatherResponse.weather[lastConditionIndex].main;
      let icon = weatherResponse.weather[lastConditionIndex].icon;
      if(country.toLowerCase() == 'us'){
        units = 'imperial';
        temp = parseFloat(((1.8 * ((parseFloat(temp)*100-273*100)/100))+32).toFixed(2));
      }
      else{units = 'metric';
           temp = parseFloat(((parseFloat(temp)*100-273.15*100)/100).toFixed(2));
          }
    let niceUnits;
    switch(units){
      case 'imperial': niceUnits = 'Fahrenheit'; break;
      case 'metric': niceUnits = 'Celsius'; break;
    }
     // message.channel.sendMessage(`${icon} It is currently ${temp}\u00B0 ${niceUnits} in ${city}, ${country}.`);
      const embed = new Discord.RichEmbed()
  .setTitle('Weather in:')
  .setAuthor(`${city}, ${country}`)

  .setColor(0x444444)
  .setDescription(`It is currently ${temp}\u00B0 ${niceUnits}.`)
  .setFooter(`${mainType}: ${description}.`)
  .setThumbnail(`https://openweathermap.org/img/w/${icon}.png`)
message.channel.sendEmbed(
  embed,
  { disableEveryone: true }
);
    }
    else if (error){message.channel.sendMessage("Error finding your location, please try again using $weather city,2-letter-country-abbr. Example: $weather Los Angeles us");}
  });}
  else{message.channel.sendMessage("Please try again using $weather city 2-letter-country-abbr. Example: $weather Los Angeles,us");}
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
    client.channels.get('229058004866039808').sendMessage("logged");
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
     let guildFind = client.guilds.get(guild);
    if (typeof  guildFind === 'undefined'){ message.author.sendMessage('Incorrect Guild') ;}
    else guildFind.members.get(sender);
     message.author.sendMessage(target);

      }

else if (message.content.toLowerCase().startsWith(prefix + "chorizo")) {
    message.channel.sendMessage(`I like a joke as much as next game but is this basically just a meme group seems like thats 80% of hte discussion?`);
}
  else if (message.content.toLowerCase().startsWith(prefix + "dankie")) {
  message.channel.sendMessage(`\uD83C\uDF32\uD83C\uDF32\uD83C\uDF32`)
    .then(message => {
        setTimeout(function(msg) {
          msg.edit(`\uD83D\uDD25\uD83C\uDF32\uD83C\uDF32`)
            .then(message2 => {
              setTimeout(function(msg2) {
                  msg2.edit(`\uD83D\uDD25\uD83D\uDD25\uD83C\uDF32`)
                    .then(message3 => {
                        setTimeout(function(msg3) {
                          msg3.edit(`\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25`)
                        }, 1000, message3);
                      })
                    }, 1000, message2);

              })
            }, 1000, message)
        });
      }
 else if (message.content.toLowerCase().startsWith(prefix + "8ball")) {
    message.channel.sendMessage(`${eightball.phrases[(Math.floor(Math.random()*eightball.phrases.length))]}`);
}
else if (message.content.toLowerCase().startsWith(prefix + "kick")) {
   let kickee = message.mentions.users.first();
   let kickMessage = params.slice(1).join(" ");
   if (message.member.hasPermission("KICK_MEMBERS")){
      message.guild.channels.get('228335467429363712').sendMessage(`${message.author.username} kicked ${kickee.user.username}. Reason: ${kickMessage}.`)
     kickee.sendMessage(`You have been kicked from ${message.guild}. Reason: ${kickMessage}`);
     message.guild.member(kickee).kick();
   }
message.delete();
}
else if (message.content.toLowerCase().startsWith(prefix + "ban")) {
   let kickee = message.mentions.users.first();
   let days = parseInt(params[1]);
   days = (isNaN(days)) ? 0 : (days > 7) ? 7 : days;
   console.log(days);
   let kickMessage = params.slice(2).join(" ");
   let kickeeId = kickee.id;
   if (message.member.hasPermission("BAN_MEMBERS")){
     message.guild.channels.get('228335467429363712').sendMessage(`${message.author.username} banned ${kickee.user.username}. Reason: ${kickMessage}. You may unban ${kickee.username} by typing "$unban ${kickeeId}" in ${message.guild} chat.`);
     kickee.sendMessage(`You have been banned from ${message.guild}. Reason: ${kickMessage}`);
     message.author.sendMessage(`You may unban ${kickee.username} by typing "$unban ${kickeeId}" in ${message.guild} chat.`);
     message.guild.member(kickee).ban(days);

   }
  message.delete();
}
else if (message.content.toLowerCase().startsWith(prefix + "unban")) {
   let lucky = params[0];
   if (message.member.hasPermission("BAN_MEMBERS")){
     message.guild.unban(lucky);
   }
}
  else if (message.content.toLowerCase().includes("fetch")) {
   message.reply(`stop trying to make fetch happen! It's not going to happen!`);
}
  else if (message.content.toLowerCase().startsWith(prefix + "joindate")) {
    let userMentioned = message.mentions.users.first();
    let jd = message.guild.member(userMentioned).joinedAt;
         message.channel.sendMessage(`${userMentioned} joined ${message.guild} on ${monthNames[jd.getMonth()]} ${jd.getDate()}, ${jd.getFullYear()} `);
    
}

else if (message.content.toLowerCase().startsWith(prefix + "stock")) {

  let stockID = params[0];
  let url =`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20%3D%20%22${stockID}%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;

  request(url, (error,response,body) => {
    if (!error && response.statusCode === 200){
      const stockResponse = JSON.parse(body);
      let symbol = stockResponse.query.results.quote.symbol.toUpperCase();
      let name = stockResponse.query.results.quote.Name;
      let change = stockResponse.query.results.quote.Change;
      let lastTrade = stockResponse.query.results.quote.LastTradePriceOnly;
      let marketCap = stockResponse.query.results.quote.MarketCapitalization;
      let openPrice =(parseFloat(lastTrade) - parseFloat(change));
      let percentChange = ((change/openPrice)*100).toFixed(2);
      
      if (name === null){message.channel.sendMessage(`Cannot locate stock symbol **"${stockID.toUpperCase()}"**`);}
      else if (typeof params[1] !== 'undefined' && params[1] === "name"){
      message.channel.sendMessage(`Stock symbol **${symbol}** is for the company **${name}**`);
      }
      else if (typeof params[1] !== 'undefined' && params[1] === "cap"){
      message.channel.sendMessage(`The market cap for all outstanding shares of **${symbol}** at last trade price ${lastTrade}USD is **${marketCap}**`);
      }
      else{
      message.channel.sendMessage(`**${symbol}:** ${lastTrade}USD ${change} (${percentChange}%)`);}
    }
  });
}
else if (message.content.toLowerCase().startsWith(prefix + "time")) {
  
  let fromTime = "GMT";
  let toTime = params[0].toUpperCase();
  let url = `http://api.timezonedb.com/v2/convert-time-zone?key=${timeKey}&format=json&from=${fromTime}&to=${toTime}`;

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const timeResponse = JSON.parse(body);
      if (timeResponse.status === "FAILED") {
        console.log(timeResponse.message);
        message.channel.sendMessage(`There was an error with one of your timezones, please try again.`);
      } else {
        let toLocation = timeResponse.toZoneName;
        let convertedDate = new Date(parseInt(timeResponse.toTimestamp) * 1000);
        let convertedMinutes = (convertedDate.getMinutes().length === 1) ? `0${convertedDate.getMinutes().toString()}` : convertedDate.getMinutes();
        let convertedSeconds = (convertedDate.getSeconds().length === 1) ? `0${convertedDate.getSeconds().toString()}` : convertedDate.getSeconds();
        message.channel.sendMessage(`It is currently ${dayNames[convertedDate.getDay()]} ${monthNames[convertedDate.getMonth()]} ${convertedDate.getDate()} ${convertedDate.getUTCHours()}:${convertedMinutes}:${convertedSeconds} in ${toLocation}.`);
      }
    }
  });
}
else if (message.content.toLowerCase().startsWith(prefix + "clever")) {
  const input = message.content.split(/\ +/).slice(1).join(" ");
  let user = message.author.id;
  let text;
  cBot.create(function(err, user) {
    cBot.ask(`${input}`, function(err, response) {
      if (response.startsWith("Error")) {
        cBot.create(function(err, session) {
          cBot.setNick(message.author.id);
          cBot.ask(`${input}`, function(err, response2) {
            text = response2;
          });
        })
        }
      else {
        text = response;
      }
      const embed = new Discord.RichEmbed()
        .setAuthor("Clever Hobo")
        .setColor(0x444444)
        .setDescription(text)
        .setThumbnail(message.author.avatarURL)
      message.channel.sendEmbed(
        embed, {
          disableEveryone: true
        }
      );
    });
  });
}
//*********************Testing!

  
//****************END TEST
//else if (message.content.toLowerCase().startsWith(prefix + "teams")) {
 //let menArr = message.mentions.users.array();
 //menArr = shuffle(menArr);
 //message.channel.sendMessage(menArr);
//}
    // else if (message.content.toLowerCase().startsWith('hi')) && (message.mentions.users[0] == ClientUser.id) {
    //   message.channel.sendMessage('hi'+ message.author.username);
    // }

});
//client.on('guildMemberRemove', (member) => {
  // setTimeout(() => {member.guild.defaultChannel.sendMessage(`See ya ${member.user.username}, never thought much of you anyways!`)},500);
//});

client.on('ready', () =>{
  client.user.setAvatar('./hobo.jpg');
});
client.on('reconnecting', () => {
  console.log("reconnecting...");
});
client.on('error', (error) => {
  console.log("error");
});
client.on('disconnect', () => 
  process.exit(100)
);

client.login(sesame);
