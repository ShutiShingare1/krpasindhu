const multer = require('multer');
const path = require('path');
const fs = require('fs');

// On Render (and most cloud hosts) the filesystem is ephemeral — uploaded files
// are lost on every restart.  We use memoryStorage in production so files are
// held in RAM for the duration of the request (e.g. to forward to cloud storage
// or simply accept the form data without saving).  Disk storage is kept for
// local development where files can be persisted.
const isProduction = process.env.NODE_ENV === 'production';

let storage;

if (isProduction) {
  // Memory storage — no disk writes, safe on Render / ephemeral hosts
  storage = multer.memoryStorage();
} else {
  // Disk storage — ensure uploads directory exists in development
  const uploadDir = path.join(__dirname, '..', 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const cleanExt = path.extname(file.originalname).toLowerCase();
      const cleanBase = path.basename(file.originalname, cleanExt).replace(/[^a-zA-Z0-9]/g, '_');
      cb(null, `${cleanBase}-${uniqueSuffix}${cleanExt}`);
    }
  });
}

// File filter (PDF, DOC, DOCX, JPG, PNG)
const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];
  const allowedMimeTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/png'
  ];

  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(ext) && allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, DOCX, JPG, and PNG formats are allowed.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB limit
  }
});

module.exports = upload;
