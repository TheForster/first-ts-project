import mongoose from 'mongoose';

export default mongoose.model(
    'Guilds',
    new mongoose.Schema({
        guildId: { type: String, unique: true, required: true },
        memberCountSystem: { channelText: String, channelId: String, enabled: Boolean },
    })
);
