# OCR + English to Hindi Translation System

This project is a full-stack OCR and Translation system built using React.js, Node.js, and MongoDB.

The system allows users to:

- Upload JPEG/PNG images
- Extract English text using OCR
- Translate English text into Hindi
- Generate editable DOCX files
- Download translated documents in ZIP format

---

# Tech Stack

## Frontend
- React.js
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Tesseract OCR
- OpenAI / Google Translate API

---

# Features

- Multiple image upload
- OCR text extraction
- English to Hindi translation
- DOCX generation
- ZIP generation
- MongoDB integration
- REST APIs

---

# Project Structure

```text
project-root
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── uploads
│   ├── generated
│   └── zips
│
├── frontend
│   ├── public
│   └── src
│
└── README.md

# Backend Setup
    1. Go to backend folder
        cd backend
    2. Install dependencies
        npm install
    3. Create .env file
        PORT=5000
        MONGO_URI=mongodb://127.0.0.1:27017/ocr_translation
        OPENAI_API_KEY=YOUR_OPENAI_API_KEY 
    4. Run backend
        npm run dev

# Frontend Setup
    1. Go to frontend folder
        cd frontend
    2. Install dependencies
        npm install
        # If react-scripts error occurs:
        npm install react react-dom react-scripts axios
    3. Run frontend
        npm start

# Workflow
Upload Images
      ↓
OCR Text Extraction
      ↓
English Text
      ↓
Hindi Translation
      ↓
DOCX Generation
      ↓
ZIP Creation
      ↓
Download ZIP        
