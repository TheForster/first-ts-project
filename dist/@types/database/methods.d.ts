import type { IGuild } from '../interfaces/Guilds.schema';
export declare const fetchGuild: (guildId: string) => Promise<IGuild>;
export declare const fetchGuilds: (filter?: object) => Promise<any>;
export declare const updateGuild: (guildId: string, variable: object) => Promise<any>;
export declare const deleteGuild: (guildId: string) => Promise<any>;
