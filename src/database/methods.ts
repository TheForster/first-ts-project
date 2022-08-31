import Guilds from './schemas/Guilds';
import type { IGuild } from '../interfaces/Guilds.schema';

export const fetchGuild = async (guildId: string): Promise<IGuild> => {
    let GuildDB = await Guilds.findOne({ guildId });
    if (GuildDB) return GuildDB;
    else {
        GuildDB = await Guilds.create({ guildId });
        return GuildDB;
    }
};

export const fetchGuilds = async (filter?: object): Promise<any> => {
    const GuildsDatabases = await Guilds.find(filter ?? {});
    return GuildsDatabases;
};

export const updateGuild = async (guildId: string, variable: object): Promise<any> => {
    const GuildDB = await Guilds.findOneAndUpdate({ guildId }, { $set: variable }, { upsert: true });
    return GuildDB;
};

export const deleteGuild = async (guildId: string): Promise<any> => {
    const GuildDB = await Guilds.findOneAndDelete({ guildId });
    return GuildDB;
};
