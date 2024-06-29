const express = require('express');
const router = express.Router();
const receiveImage = require('../middlewares/multer.middleware'); // Assuming multer middleware is correctly configured
const { uploadImage, getResized } = require('../utils/cloudinary.utils'); // Cloudinary utility functions

router.post('/upload', (req, res) => {
    // Using receiveImage middleware to handle file upload
    receiveImage(req, res, async (err) => {
        // Handling errors from multer
        if (err) {
            return res.json({ error: err.message });
        }

        try {
            // Assuming multer stores the file in req.file.buffer
            const imageStream = req.file.buffer;
            const imageName = new Date().getTime().toString(); // Generate a unique name for the image

            // Upload image to Cloudinary
            const uploadResult = await uploadImage(imageStream, imageName);

            // Create URL for resized image (adjust getResized function implementation accordingly)
            const urlMin = getResized(imageName);

            // Extract the uploaded URL from Cloudinary response
            const uploadedUrl = uploadResult.url;

            // Respond with URLs
            return res.json({ url: uploadedUrl, url_min: urlMin });
        } catch (error) {
            console.error('Error uploading image:', error);
            return res.json({ error: 'Failed to upload image' });
        }
    });
});

module.exports = router;
