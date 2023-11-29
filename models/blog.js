const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            required: [true, "Please add blog name"],
        },
        description: {
            type: String,
            required: [true, "Please add blog description"],
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Blog', blogSchema);