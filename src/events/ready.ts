import { Client, Events } from 'discord.js';
import { whiteBright, yellowBright } from 'colorette';

import { IEventData } from '../interfaces/EventData.i';
import { fetchGuilds } from '../database/methods';
import saveCommands from '../utils/saveCommands';

export const data: IEventData = {
    name: Events.ClientReady,
    once: true,
    async execute(client: Client) {
        if (!client.application?.owner) await client.application?.fetch();
        console.log(yellowBright(`${whiteBright(client.user?.username as string)} is active!`));
        saveCommands(client);

        console.log(await fetchGuilds());
    },
};
