import { Collection } from 'discord.js';
import { ICmdData } from '../interfaces/CommandData.i';

const cooldowns = new Collection();
export default (command: ICmdData, userId: string, ownerId: string): boolean | number | string => {
    if (userId === ownerId) return false;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Collection());
    }

    const now = Date.now(),
        timestamps = cooldowns.get(command.name) as Collection<string, number>,
        cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(userId)) {
        const expiration = (timestamps.get(userId) as number) + cooldownAmount;
        if (now < expiration) {
            const timeLeft = ((expiration - now) / 1000).toFixed(1);
            return timeLeft;
        } else return false;
    } else {
        timestamps.set(userId, now);
        setTimeout(() => timestamps.delete(userId), cooldownAmount);
        return false;
    }
};
