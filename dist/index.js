"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
const colorette_1 = require("colorette");
const path_1 = require("path");
const mongoose_1 = __importDefault(require("mongoose"));
const fs_1 = require("fs");
const client = new discord_js_1.Client({
    intents: ['Guilds'],
    allowedMentions: { repliedUser: false, parse: ['users', 'roles'] },
    presence: { status: 'idle', activities: [{ name: 'TypeScript 💖', type: discord_js_1.ActivityType.Playing }] },
});
(0, dotenv_1.config)({ path: (0, path_1.join)(process.cwd(), '.env') });
client.login(process.env.Token);
mongoose_1.default
    .connect(process.env.MongoURI)
    .then(() => console.log((0, colorette_1.greenBright)('Successfully connected to MongoDB.')))
    .catch(err => console.error(err));
client.commands = new discord_js_1.Collection();
client.getEmoji = name => client.guilds.cache.get(process.env.GuildId)?.emojis.cache.find(e => e.name === name) || '⚜️';
const __commands = `${(0, path_1.join)(__dirname, 'commands')}`, __events = `${(0, path_1.join)(__dirname, 'events')}`;
(0, fs_1.readdirSync)(__commands).forEach(async (category) => {
    for (const file of (0, fs_1.readdirSync)(__commands + `/${category}`)) {
        const command = await Promise.resolve().then(() => __importStar(require(__commands + `/${category}/${file}`)));
        client.commands.set(command.data.name, command);
    }
});
(0, fs_1.readdirSync)(__events).forEach(async (file) => {
    const { data: event } = await Promise.resolve().then(() => __importStar(require(__events + `/${file}`)));
    if (!event?.name)
        throw new Error(`Event has no name: ${file}`);
    if (event.once)
        client.once(event.name, (...args) => event.execute(...args));
    else
        client.on(event.name, (...args) => event.execute(...args));
});
