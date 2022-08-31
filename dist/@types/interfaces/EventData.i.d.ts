import { Events } from 'discord.js';
interface IExecuteData {
    (...args: any[]): any;
}
export interface IEventData {
    name: Events;
    once?: boolean;
    execute: IExecuteData;
}
export {};
