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

    msg.reply('    **ضحكني للنكت التحشيشة \n\n\n نكت سعودية الضغط عل رقم [ 1 ] \n\n نكت مصرية الضغط عل رقم [ 2 ] \n\n نكت محششين الضغط عل رقم [ 3 ] \n\n نكت متزوجين الضغط عل رقم [ 4 ] \n\nنكت تحشيشة الضغط عل رقم [ 5 ] \n\n\n\n جميع الحقوق محفوظة لدي @ᎷᏫᎻᎯᏰ 🕊 …#1010**');

  }

});













 

 

 

 

client.on('message', msg => {

  if (msg.content === '1') {

    msg.reply('** ✦ وحدة غبيه اتصلت بالخطوط قالت كم تستغرق رحله الرياض بانكوك قال لها لحظه ... قالت شكرا ✦ **);
  }

});







client.login(process.env.BOT_TOKEN);

