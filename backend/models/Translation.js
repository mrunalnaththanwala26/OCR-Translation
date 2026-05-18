const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema(
    {
        originalFileName: String,
        imagePath: String,
        englishText: String,
        hindiText: String,
        docxPath: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Translation', translationSchema);