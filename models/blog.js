const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
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