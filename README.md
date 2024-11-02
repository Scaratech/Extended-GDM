# Extended-GDM

Extended-GDM is a Discord Selfbot for bridging one Group DM to another (Since Discord has a dumb limit of 10 people per Group DM)

## How to setup

```sh
git clone https://github.com/scaratek/extended-gdm
cd extended-gdm
npm i
```

Inside of the `node_modules` directory, find the file `PartialGroupDMChannel.js` inside of `discord.js-selfbot/src/structures` and modify line 3 to be `const Channel = require('./DMChannel');`\
Then create a file called config.json and paste in:

```json
{
    "token": "Your Discord Token",
    "groupIDs": ["Group DM ID #1", "Group DM ID #2"]
}
```

Then run `node index.js`

## DISCLAIMER

- Weird duplication bug with attatchments
- I need to add a no bridge request functionallity
- Replies don't work
- Forwarding messages doesn't work
- Things like updating title, adding people, etc. Won't forward, they'll just send a blank messages
- Reactions don't work
