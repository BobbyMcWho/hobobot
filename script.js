var Discord = require('discord.js');
var client = new Discord.Client();
var Key = require('./token.json');
var    Sesame = Key.token;

client.on('message', message => {
    if(message.content === 'Fuck you')
    {
    message.reply('No fuck you');
    }
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.login(Sesame);
