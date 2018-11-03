const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

 client.user.setActivity("سبام كل يوم 350 آلف كريديت",{type: 'PLAYING'});
    
 console.log(`Logged in as [ Pharaohs]`);

});







client.login(process.env.BOT_TOKEN);
