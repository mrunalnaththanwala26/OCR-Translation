const {
    createZip
} = require('../services/zipService');

const processImages = async (req, res) => {
    try {
        const files = req.files;

        let generatedFiles = [];

        for (const file of files) {
            const englishText = await extractTextFromImage(file.path);

            const hindiText = await translateToHindi(
                englishText
            );

            const docName = `${uuidv4()}.docx`;

            const docPath = path.join(
                __dirname,
                '../generated',
                docName
            );

            await generateDocx(
                englishText,
                hindiText,
                docPath
            );

            await Translation.create({
                originalFileName: file.originalname,
                imagePath: file.path,
                englishText,
                hindiText,
                docxPath: docPath
            });

            generatedFiles.push(docPath);
        }

        const zipName = `${uuidv4()}.zip`;

        const zipPath = path.join(
            __dirname,
            '../zips',
            zipName
        );

        await createZip(generatedFiles, zipPath);

        res.json({
            success: true,
            zipUrl: `/zips/${zipName}`
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    processImages
};