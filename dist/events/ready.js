"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const discord_js_1 = require("discord.js");
const colorette_1 = require("colorette");
const methods_1 = require("../database/methods");
const saveCommands_1 = __importDefault(require("../utils/saveCommands"));
exports.data = {
    name: discord_js_1.Events.ClientReady,
    once: true,
    async execute(client) {
        if (!client.application?.owner)
            await client.application?.fetch();
        console.log((0, colorette_1.yellowBright)(`${(0, colorette_1.whiteBright)(client.user?.username)} is active!`));
        (0, saveCommands_1.default)(client);
        console.log(await (0, methods_1.fetchGuilds)());
    },
};
