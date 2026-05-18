import React, { useState } from 'react';
import api from '../services/api';

const Upload = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [downloadLink, setDownloadLink] = useState('');

    const handleChange = (e) => {
        setFiles(e.target.files);
    };

    const handleUpload = async () => {
        setLoading(true);

        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append('images', files[i]);
        }

        try {
            const response = await api.post(
                '/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            setDownloadLink(
                `http://localhost:5000${response.data.zipUrl}`
            );
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    };

    return (
        <div
            style={{
                padding: '40px'
            }}
        >
            <h2>OCR Translation System</h2>

            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleChange}
            />

            <br />
            <br />

            <button onClick={handleUpload}>
                {loading ? 'Processing...' : 'Upload'}
            </button>

            <br />
            <br />

            {downloadLink && (
                <a href={downloadLink}>
                    Download ZIP
                </a>
            )}
        </div>
    );
};

export default Upload;