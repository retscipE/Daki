import { Client, GatewayIntentBits, Partials } from 'discord.js'
import { CommandClient } from 'tshandler'
import { registerEvents } from '../utils'
import events from '../events'
import keys from '../keys'

import Utility from '../commands/Utility'

const djsClient = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ],
    partials: [
        Partials.Channel
    ]
})

registerEvents(djsClient, events)

const client = new CommandClient({
    discordClient: djsClient,
    clientToken: keys.clientToken,
    localGuildId: keys.testGuild,
    ownerUserIds: ["544646066579046401"]  
});

(async () => {
    await client.registerCategories([
        Utility,
    ], "false")
    await client.run()
        .catch((error) => {
            console.log('[Login Error] ', error);
            process.exit(1);
        })
})()