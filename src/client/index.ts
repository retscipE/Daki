import { Client, GatewayIntentBits, Partials } from 'discord.js'
import { CommandClient } from 'tscmdhandler'
import { registerEvents } from '../utils'
import events from '../events'
import categories from '../commands'
import keys from '../keys'

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
    await client.registerCategories(categories, "false")
    await client.run()
        .catch((error) => {
            console.log('[Login Error] ', error);
            process.exit(1);
        })
})()