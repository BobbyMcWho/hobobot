const Discord = require('discord.js');
const client = new Discord.Client();
const Key = require('./token.json');
const Sesame = Key.token;

client.on('message', message => {
    if (message.content.startsWith('foo'))
    {
    message.channel.sendMessage('bar');
    }
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.login(Sesame);
