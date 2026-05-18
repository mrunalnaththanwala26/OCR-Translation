const archiver = require('archiver');
const fs = require('fs');

const createZip = async (files, zipPath) => {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(zipPath);

        const archive = archiver('zip', {
            zlib: { level: 9 }
        });

        output.on('close', () => {
            resolve();
        });

        archive.on('error', (err) => {
            reject(err);
        });

        archive.pipe(output);

        files.forEach((file) => {
            archive.file(file, {
                name: file.split('/').pop()
            });
        });

        archive.finalize();
    });
};

module.exports = {
    createZip
};