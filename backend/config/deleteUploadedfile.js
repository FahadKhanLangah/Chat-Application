import fs from 'fs';
import path from 'path';

const deleteUploadedFile = (req, res, next) => {
  if (req.file) {
    const filePath = path.join(__dirname, '../uploads/', req.file.filename);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Failed to delete file:', err);
      } else {
        console.log('File deleted successfully');
      }
    });
  }

  next();
};

export default deleteUploadedFile;
