"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slash_data = exports.data = void 0;
const discord_js_1 = require("discord.js");
exports.data = {
    name: 'member-counter',
    description: 'Member Counter System',
    cooldown: 10,
    run(interaction) {
        // const mc_channel = (interaction.options as CommandInteractionOptionResolver).getChannel('channel', true),
        //     text = (interaction.options as CommandInteractionOptionResolver).getString('text', true),
        //     enable = (interaction.options as CommandInteractionOptionResolver).getBoolean('enable', true);
        //     interaction.options.
        return interaction.reply('Günlük doz alındığından yapılamadı!');
    },
};
exports.slash_data = {
    name: exports.data.name,
    description: exports.data.description,
    defaultMemberPermissions: ['ManageChannels'],
    dmPermission: false,
    options: [
        {
            type: discord_js_1.ApplicationCommandOptionType.Channel,
            name: 'channel',
            description: 'Channel for Member Count System',
            channelTypes: [discord_js_1.ChannelType.GuildVoice, discord_js_1.ChannelType.GuildCategory],
            required: true,
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.String,
            name: 'text',
            description: 'Channel name for Member Count System',
            required: true,
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Boolean,
            name: 'enable',
            description: 'Activate Member Count System',
            required: true,
        },
    ],
};
