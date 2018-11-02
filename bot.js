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

 






client.on('message', msg => {

  if (msg.content === 'ضحكني') {

    msg.reply('ضحكني للنكت التحشيشة/n/n نكت متزوجين الضغط عل رقم 1 /n نكت حرامية الضغط عل رقم 2 /n نكات صعيدين الضغط عل رقم 3 /n نكت ');

  }

});





client.login(process.env.BOT_TOKEN);

