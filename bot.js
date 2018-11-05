const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

 client.user.setActivity("حزني يجعلني اكثر هيبة واناقة !",{type: 'PLAYING'});
    
 console.log(`Logged in as [ Pharaohs]`);

});











client.on("message", function(message) {
    if(message.content.startsWith("ادخل رومي")) {
       client.channels.get("505439693999964182").join()
    }
});




















client.login(process.env.BOT_TOKEN);
