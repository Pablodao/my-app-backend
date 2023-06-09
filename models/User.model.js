const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },

        email: {
            type: String,
            unique: true,
            required: true
        },

        password: {
            type: String,
            unique: true,
            required: true
        },
        isAdopter: {
            type: Boolean,
        }
    }
)

const User = model("User", userSchema);

module.exports = User;
