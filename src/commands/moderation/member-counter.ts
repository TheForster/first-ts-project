import {
    ApplicationCommandData,
    ApplicationCommandOptionType,
    ChannelType,
} from 'discord.js';

import { ICmdData } from '../../interfaces/CommandData.i';

export const data: ICmdData = {
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

export const slash_data: ApplicationCommandData = {
    name: data.name,
    description: data.description,
    defaultMemberPermissions: ['ManageChannels'],
    dmPermission: false,
    options: [
        {
            type: ApplicationCommandOptionType.Channel,
            name: 'channel',
            description: 'Channel for Member Count System',
            channelTypes: [ChannelType.GuildVoice, ChannelType.GuildCategory],
            required: true,
        },
        {
            type: ApplicationCommandOptionType.String,
            name: 'text',
            description: 'Channel name for Member Count System',
            required: true,
        },
        {
            type: ApplicationCommandOptionType.Boolean,
            name: 'enable',
            description: 'Activate Member Count System',
            required: true,
        },
    ],
};
