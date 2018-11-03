const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

 client.user.setActivity("طيز للبيع تعآل خاص",{type: 'PLAYING'});
    
 console.log(`Logged in as [ Pharaohs]`);

});










client.on('message', msg => {

  if (msg.content === 'ضحكني') {

    msg.reply('**【 ضحكني للنكت التحشيشية 】 \n\n\n ✦ النكته آلاولي يجب كتآبه رقم [ 1 ] ✦  \n\n ✦  النكته الثآني يجب كتآبه رقم [ 2 ]  ✦ \n\n ✦  النكته آلثالثه يجب كتآبه رقم [ 3 ] ✦  \n\n ✦  النكته آلرابعه يجب كتآبه رقم [ 4 ]  ✦ \n\n ✦  النكته آلخامسه يجب كتآبه رقم [ 5 ] ✦  \n\n جميع الحقوق محفوظه لدي  @ᎷᏫᎻᎯᏰ 🕊 …#1010**');

  }

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
