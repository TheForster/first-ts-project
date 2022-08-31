import { Collection, GuildEmoji } from 'discord.js';

interface getEmojiFunction {
    (name: string): GuildEmoji | string | undefined;
}

declare module 'discord.js' {
    interface Client {
        commands: Collection<string, any>;
        getEmoji: getEmojiFunction;
    }
}
