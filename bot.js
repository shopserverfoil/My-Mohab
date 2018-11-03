const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

 client.user.setActivity("طيز للبيع تعآل خاص",{type: 'PLAYING'});
    
 console.log(`Logged in as [ Pharaohs]`);

});









client.on('message', msg => {

  if (msg.content === 'السلام عليكم') {

    msg.reply('**وعليكم السلام ولكم يلبي 🌚.**').then(msg => msg.delete(5000));

  }

});








client.on('message', msg => {

  if (msg.content === 'برب') {

    msg.reply('**طيط يلبي آتمني متيجي تآني نقط وتعرف السبب. 💃**').then(msg => msg.delete(5000));

  }

});












client.on('message', msg => {

  if (msg.content === '.') {

    msg.reply('**لانك حمآر ليش تنقط. 😂**').then(msg => msg.delete(5000));

  }

});










client.on('message', msg => {

  if (msg.content === 'مهاب') {

    msg.reply('**وش تبي مني كلزق ومشي انقلع. 🗿**').then(msg => msg.delete(5000));

  }

});









client.login(process.env.BOT_TOKEN);
