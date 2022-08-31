"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slash_data = exports.data = void 0;
const discord_js_1 = require("discord.js");
exports.data = {
    name: 'ping',
    description: 'Hello World!',
    developer: true,
    run(interaction) {
        let color = discord_js_1.Colors.Blue;
        const ping = Math.abs(interaction.createdTimestamp - Date.now());
        if (ping <= 50)
            color = discord_js_1.Colors.White;
        else if (ping <= 100)
            color = discord_js_1.Colors.Blue;
        else if (ping <= 200)
            color = discord_js_1.Colors.Green;
        else if (ping <= 400)
            color = discord_js_1.Colors.Orange;
        else if (ping > 400)
            color = discord_js_1.Colors.Red;
        const infoEmbed = new discord_js_1.EmbedBuilder().setColor(color).setDescription(`**Pong!** \`${ping} ms\``);
        interaction.reply({ embeds: [infoEmbed] });
    },
};
exports.slash_data = {
    name: exports.data.name.toLowerCase(),
    description: exports.data.description,
};
