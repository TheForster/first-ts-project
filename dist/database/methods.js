"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGuild = exports.updateGuild = exports.fetchGuilds = exports.fetchGuild = void 0;
const Guilds_1 = __importDefault(require("./schemas/Guilds"));
const fetchGuild = async (guildId) => {
    let GuildDB = await Guilds_1.default.findOne({ guildId });
    if (GuildDB)
        return GuildDB;
    else {
        GuildDB = await Guilds_1.default.create({ guildId });
        return GuildDB;
    }
};
exports.fetchGuild = fetchGuild;
const fetchGuilds = async (filter) => {
    const GuildsDatabases = await Guilds_1.default.find(filter ?? {});
    return GuildsDatabases;
};
exports.fetchGuilds = fetchGuilds;
const updateGuild = async (guildId, variable) => {
    const GuildDB = await Guilds_1.default.findOneAndUpdate({ guildId }, { $set: variable }, { upsert: true });
    return GuildDB;
};
exports.updateGuild = updateGuild;
const deleteGuild = async (guildId) => {
    const GuildDB = await Guilds_1.default.findOneAndDelete({ guildId });
    return GuildDB;
};
exports.deleteGuild = deleteGuild;
