const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Njk0MDk3OTEyMjQ5OTc0Nzg0.XoH8Zw.ztwPuWorm0YIvscDG_vkN2uPu2c';
const PREFIX = '.';
const fs = require("fs")
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('ready', () =>{
    console.log('DARKBLOCK Bot is online!');
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
       case 'ping':
           bot.commands.get('ping').execute(message, args);
           break;
       case 'test':
            bot.commands.get('test').execute(message, args);
           break;
        




    }


})

bot.login(token);