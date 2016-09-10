var Discord = require('discord.js');
var client = new Discord.Client();
var Key = require('./token.json');
var    Sesame = Key.token;

client.on('message', message => {
    if(message.content === 'Who is he?')
    {
    message.reply('I am He!');
    }
});

client.login(Sesame);
