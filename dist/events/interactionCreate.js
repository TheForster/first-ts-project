"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const discord_js_1 = require("discord.js");
const cooldown_1 = __importDefault(require("../utils/cooldown"));
exports.data = {
    name: discord_js_1.Events.InteractionCreate,
    once: false,
    async execute(interaction) {
        if (!interaction.client.application?.owner)
            await interaction.client.application?.fetch();
        const owner = interaction.client.application?.owner;
        if (interaction.isChatInputCommand()) {
            if (!interaction.isRepliable())
                return;
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command)
                return;
            const cooldown = (0, cooldown_1.default)(command, interaction.user.id, owner.id);
            if (cooldown)
                return interaction.reply({
                    embeds: [
                        {
                            description: `\`⏱️\` Çok hızlısın... Merak etme, **\`${cooldown}\` saniye** sonra tekrar komutu kullanabileceksin!`,
                            color: discord_js_1.Colors.Blue,
                        },
                    ],
                    ephemeral: true,
                });
            try {
                command.data.run(interaction);
            }
            catch (error) {
                console.error(error);
            }
        }
    },
};
