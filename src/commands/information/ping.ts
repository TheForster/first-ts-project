import { ApplicationCommandData, ColorResolvable, Colors, EmbedBuilder } from 'discord.js';

import type { ICmdData } from '../../interfaces/CommandData.i';

export const data: ICmdData = {
    name: 'ping',
    description: 'Hello World!',
    developer: true,
    run(interaction) {
        let color: ColorResolvable = Colors.Blue;

        const ping = Math.abs(interaction.createdTimestamp - Date.now());

        if (ping <= 50) color = Colors.White;
        else if (ping <= 100) color = Colors.Blue;
        else if (ping <= 200) color = Colors.Green;
        else if (ping <= 400) color = Colors.Orange;
        else if (ping > 400) color = Colors.Red;

        const infoEmbed = new EmbedBuilder().setColor(color).setDescription(`**Pong!** \`${ping} ms\``);
        interaction.reply({ embeds: [infoEmbed] });
    },
};

export const slash_data: ApplicationCommandData = {
    name: data.name.toLowerCase(),
    description: data.description,
};
