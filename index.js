const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njc3OTYwMDMzNDE3Mjk3OTIw.XkhKKg.gsg0yfoiS8aY9MRY78oeGe0toPA';

bot.on('ready', () =>{
    console.log('This bot is online.')
})

bot.on('message', message=>{
    if(message.content === "Hello there"){
        message.reply('General Kenobi...');
    }
})

bot.login(process.env.token);
