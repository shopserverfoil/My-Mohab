const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

client.user.setActivity("سبام كل يوم 350 آلف كريديت",{type: 'PLAYING'});

     
});
  console.log(`Logged in as ${client.user.tag}!`);


 


 








 












































client.login(process.env.BOT_TOKEN);

