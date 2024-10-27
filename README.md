# Extended-GDM
Extended-GDM is a Discord Selfbot for bridging one Group DM to another (Since Discord has a dumb limit of 10 people per Group DM)

## How to setup
```sh
$ git clone https://github.com/scaratek/extended-gdm
$ cd extended-gdm
$ npm i
```

Inside of the `node_modules` directory look for the file `PartialGroupDMChannel.js` inside of `discord.js-selfbot`, `src`, `structures`
1. Replace line 3, `const Channel = require('./Channel')` with `const Channel = require('./DMChannel')`

Then create a file called `.env` and paste in `TOKEN=`, after the equal sign put in your Discord Token

Then create a filed called `config.json` and paste in this:
```json
{
   "groupIDs": ["Group DM ID 1", "Group DM ID 2"]
}
```

Replace them with the actual IDs of the Group DMs you want to bridge. You can find them by enabling "Developer Mode" under "Advanced" in the settings and then right click on the Group ID and click "Copy Channel ID".

Then just run `node index.js`!

## TODO
- [ ] Image/file support
- [ ] Potentially bridging more than just two Group DMs
- [ ] Automatic setup for skids