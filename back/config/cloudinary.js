import {CloudinaryStorage} from "multer-storage-cloudinary";
import { v2 as cloudinary } from 'cloudinary'
// import dotenv from 'dotenv';
// dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'Rnet',
        allowedFormats: ['png', 'jpeg', 'jpg', 'webp']
    }
});

// console.log('Cloudinary Configuration:', {
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY
// });

export { storage}