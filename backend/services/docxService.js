const {
    Document,
    Packer,
    Paragraph,
    Table,
    TableRow,
    TableCell,
    WidthType,
    TextRun
} = require('docx');

const fs = require('fs');

const generateDocx = async (
    englishText,
    hindiText,
    outputPath
) => {
    const table = new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'English',
                                        bold: true
                                    })
                                ]
                            })
                        ]
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Hindi',
                                        bold: true
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph(englishText)]
                    }),
                    new TableCell({
                        children: [new Paragraph(hindiText)]
                    })
                ]
            })
        ]
    });

    const doc = new Document({
        sections: [
            {
                children: [table]
            }
        ]
    });

    const buffer = await Packer.toBuffer(doc);

    fs.writeFileSync(outputPath, buffer);
};

module.exports = {
    generateDocx
};