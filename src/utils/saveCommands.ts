import type { Client } from 'discord.js';

export default (client: Client) => {
    const cmds = client.commands,
        developerCmds = cmds.filter(cmd => cmd.data.developer).map(cmd => cmd.slash_data),
        applicationCmds = cmds.filter(cmd => !cmd.data.developer).map(cmd => cmd.slash_data);

    client.application?.commands.set(applicationCmds);
    client.guilds.cache.get(process.env.GuildId)?.commands.set(developerCmds);
};
