"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const cooldowns = new discord_js_1.Collection();
exports.default = (command, userId, ownerId) => {
    if (userId === ownerId)
        return false;
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new discord_js_1.Collection());
    }
    const now = Date.now(), timestamps = cooldowns.get(command.name), cooldownAmount = (command.cooldown || 3) * 1000;
    if (timestamps.has(userId)) {
        const expiration = timestamps.get(userId) + cooldownAmount;
        if (now < expiration) {
            const timeLeft = ((expiration - now) / 1000).toFixed(1);
            return timeLeft;
        }
        else
            return false;
    }
    else {
        timestamps.set(userId, now);
        setTimeout(() => timestamps.delete(userId), cooldownAmount);
        return false;
    }
};
