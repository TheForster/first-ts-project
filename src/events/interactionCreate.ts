import { Colors, Events, Interaction, User } from 'discord.js';

import { IEventData } from '../interfaces/EventData.i';
import cooldown_control from '../utils/cooldown';

export const data: IEventData = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction: Interaction) {
        if (!interaction.client.application?.owner) await interaction.client.application?.fetch();
        const owner = interaction.client.application?.owner as User;

        if (interaction.isChatInputCommand()) {
            if (!interaction.isRepliable()) return;

            const command = interaction.client.commands.get(interaction.commandName);
            if (!command) return;

            const cooldown = cooldown_control(command, interaction.user.id, owner.id);
            if (cooldown)
                return interaction.reply({
                    embeds: [
                        {
                            description: `\`⏱️\` Çok hızlısın... Merak etme, **\`${cooldown}\` saniye** sonra tekrar komutu kullanabileceksin!`,
                            color: Colors.Blue,
                        },
                    ],
                    ephemeral: true,
                });

            try {
                command.data.run(interaction);
            } catch (error) {
                console.error(error);
            }
        }
    },
};
