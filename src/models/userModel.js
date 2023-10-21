import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            require: false,
        },
        avt: {
            type: String,
            require: false,
        },
        address: {
            type: String,
            require: false,
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('users', userSchema);
export default User;
