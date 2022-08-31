import { ActivityType, Client, Collection } from 'discord.js';

import { config } from 'dotenv';
import { greenBright } from 'colorette';
import { join } from 'path';
import mongoose from 'mongoose';
import { readdirSync } from 'fs';

const client = new Client({
    intents: ['Guilds'],
    allowedMentions: { repliedUser: false, parse: ['users', 'roles'] },
    presence: { status: 'idle', activities: [{ name: 'TypeScript 💖', type: ActivityType.Playing }] },
});

config({ path: join(process.cwd(), '.env') });
client.login(process.env.Token);

mongoose
    .connect(process.env.MongoURI)
    .then(() => console.log(greenBright('Successfully connected to MongoDB.')))
    .catch(err => console.error(err));

client.commands = new Collection();
client.getEmoji = name => client.guilds.cache.get(process.env.GuildId)?.emojis.cache.find(e => e.name === name) || '⚜️';

const __commands = `${join(__dirname, 'commands')}`,
    __events = `${join(__dirname, 'events')}`;

readdirSync(__commands).forEach(async category => {
    for (const file of readdirSync(__commands + `/${category}`)) {
        const command = await import(__commands + `/${category}/${file}`);
        client.commands.set(command.data.name, command);
    }
});

readdirSync(__events).forEach(async file => {
    const { data: event } = await import(__events + `/${file}`);
    if (!event?.name) throw new Error(`Event has no name: ${file}`);

    if (event.once) client.once(event.name, (...args: any[]) => event.execute(...args));
    else client.on(event.name, (...args: any[]) => event.execute(...args));
});
