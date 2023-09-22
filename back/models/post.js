import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type:String,
        required: true
    },
    description: {
        type:String,
        required:true
    },
    image: {
        type:String,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],

},{
    timestamps:true
})

const Post = mongoose.model('Post', postSchema);
export default Post;