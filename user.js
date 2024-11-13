import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    session: { type: String },
    year: { type: Number },
    course: { type: String },
    fee: { type: Number }
});

const User = mongoose.model('User', userSchema);

export default User;
