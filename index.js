import Discord from 'discord.js-selfbot';
import fs from 'node:fs';

const config = JSON.parse(fs.readFileSync('config.json'));

const client = new Discord.Client();

let gdmOne, gdmTwo;

client.once('ready', async () => {
    console.log('[E-GDM] Loaded');

    gdmOne = await client.channels.fetch(config.groupIDs[0]);
    gdmTwo = await client.channels.fetch(config.groupIDs[1]);

    await gdmOne.send('[E-GDM] Loaded') &&  await gdmTwo.send('[E-GDM] Loaded');
});

client.on('message', async (message) => {
    if (message.content.startsWith('[E-GDM]')) {
        return;
    }

    if (message.channel.id == config.groupIDs[0]) {
        const forwardedMessage = await gdmTwo.send(`[E-GDM] ${message.author.username}: ${message.content}`);

        if (message.attachments.size > 0) {
            message.attachments.forEach(attachment => {
                forwardedMessage.channel.send(attachment.url);
            });
        }
    }

    if (message.channel.id == config.groupIDs[1]) {
        const forwardedMessage = await gdmOne.send(`[E-GDM] ${message.author.username}: ${message.content}`);

        if (message.attachments.size > 0) {
            message.attachments.forEach(attachment => {
                forwardedMessage.channel.send(attachment.url);
            });
        }
    }
});

async function stop() {
    console.log('[E-GDM] Stopped');
    await gdmOne.send('[E-GDM] stopping') && await gdmTwo.send('[E-GDM] stopping');
}

client.login(config.token);

process.on('SIGINT', async () => {
    await stop();
    process.exit();
});

process.on('SIGTERM', async () => {
    await stop();
    process.exit();
});