const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`I 'Love You mosalah.  💘`,'https://www.twitch.tv/MeeRcY')

});

 

 

 

 

 

client.on('message', msg => {

  if (msg.content === 'السلام عليكم') {

    msg.reply('وعليكم السلام ولكم يلبي 🌚.');

  }

});

 

client.login(process.env.BOT_TOKEN);

