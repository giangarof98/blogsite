import multer from 'multer';
import {storage} from './cloudinary.js';

const upload = multer({storage:storage});
// const upload = multer({ dest: 'uploads/' });
const multerPost = upload.array("image");

export {multerPost}