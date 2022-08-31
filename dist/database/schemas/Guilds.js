"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = mongoose_1.default.model('Guilds', new mongoose_1.default.Schema({
    guildId: { type: String, unique: true, required: true },
    memberCountSystem: { channelText: String, channelId: String, enabled: Boolean },
}));
