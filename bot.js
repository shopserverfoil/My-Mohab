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

    msg.reply('**【 ضحكني للنكت التحشيشية 】 \n\n\n ✦  النكته آلاولي يجب كتآبه رقم [ 1 ]  ✦  \n\n ✦  النكته الثآني يجب كتآبه رقم [ 2 ]  ✦ \n\n ✦  النكته آلثالثه يجب كتآبه رقم [ 3 ] ✦  \n\n ✦  النكته آلرابعه يجب كتآبه رقم [ 4 ]  ✦ \n\n ✦  النكته آلخامسه يجب كتآبه رقم [ 5 ] ✦  \n\n جميع الحقوق محفوظه لدي  @ᎷᏫᎻᎯᏰ 🕊 …#1010**');

  }

});















client.on('message',async message => {

if(message.content === '1') {

  
 var embed = new Discord.RichEmbed() 

    .setColor('')

    .setDescription('')

    .setImage('https://cdn.discordapp.com/attachments/508335381951807488/508371743556108308/PicsArt_11-03-10.06.16.jpg')

  

message.channel.sendEmbed(embed).then(message => {message.delete(10000)})

}

 });



















client.on('message',async message => {

if(message.content === '2') {

  
 var embed = new Discord.RichEmbed() 

    .setColor('')

    .setDescription('')

    .setImage('https://cdn.discordapp.com/attachments/508335381951807488/508374224805560335/PicsArt_11-03-10.17.14.jpg')
  

message.channel.sendEmbed(embed).then(message => {message.delete(10000)})

}

 });














client.on('message',async message => {

if(message.content === '3') {

  
 var embed = new Discord.RichEmbed() 

    .setColor('')

    .setDescription('')

    .setImage('https://cdn.discordapp.com/attachments/508335381951807488/508377108742144020/PicsArt_11-03-10.28.38.jpg')
  

message.channel.sendEmbed(embed).then(message => {message.delete(10000)})

}

 });







client.login(process.env.BOT_TOKEN);
