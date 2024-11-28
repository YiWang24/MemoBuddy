const multer = require("multer");
const path = require("path");

// Multer configuration
const storage = multer.diskStorage({
  // Destination to store image
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  // Set filename
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Check file type to be images only
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/gif", "image/png", "image/jpeg", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};
// Set up the middleware
const upload = multer({ storage: storage, fileFilter: fileFilter });
module.exports = upload;
