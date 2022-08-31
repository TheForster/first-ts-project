import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    guildId: string;
    memberCountSystem?: {
        channelId?: string | undefined;
        channelText?: string | undefined;
        enabled?: boolean | undefined;
    } | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    guildId: string;
    memberCountSystem?: {
        channelId?: string | undefined;
        channelText?: string | undefined;
        enabled?: boolean | undefined;
    } | undefined;
}>>;
export default _default;
