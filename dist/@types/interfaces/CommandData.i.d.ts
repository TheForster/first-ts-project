import { CommandInteraction } from 'discord.js';
interface IRunFunction {
    (interaction: CommandInteraction): any;
}
export interface ICmdData {
    name: string;
    description: string;
    developer?: boolean;
    category?: string;
    cooldown?: number;
    run: IRunFunction;
}
export {};
