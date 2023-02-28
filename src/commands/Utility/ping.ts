import { createCommand } from 'tshandler'
import { SlashCommandBuilder } from 'discord.js'

const meta = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with the latency of the bot.')

export default createCommand(meta, ({ interaction, client }) => {
    interaction.reply({ content: `Pong! ${client.ws.ping}ms.` })
})