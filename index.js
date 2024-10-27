const Discord = require('discord.js-selfbot');
require('dotenv').config();

const config = require('./config.json');

const client = new Discord.Client();

let gdmOne;
let gdmTwo;

client.once('ready', async () => {
    console.log('[E-GDM] Loaded');

    gdmOne = await client.channels.fetch(config.groupIDs[0]);
    gdmTwo = await client.channels.fetch(config.groupIDs[1]);
});

client.on('message', (message) => {
    if (message.content.startsWith('[E-GDM]')) {
        return;
    }

    if (message.channel.id == config.groupIDs[0]) {
        if (gdmTwo && gdmTwo.send) {
            gdmTwo.send(`[E-GDM] ${message.author.username}: ${message.content}`);
        }
    }

    if (message.channel.id == config.groupIDs[1]) {
        if (gdmOne && gdmOne.send) {
            gdmOne.send(`[E-GDM] ${message.author.username}: ${message.content}`);
        }
    }
});

client.login(process.env.token);
