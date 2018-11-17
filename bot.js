const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

 client.user.setGame(`Vida 1000K Soon `,'https://www.twitch.tv/MeeRcY')
 
 console.log(`Logged in as [ Pharaohs]`);

});
































client.login(process.env.BOT_TOKEN);
