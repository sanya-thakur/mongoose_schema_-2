const mongoose= require('mongoose');

const commentsSchema= new mongoose.Schema({
    username: {
        type: String,
    },
    message: {
        type: String, 
        required: true
    },
    commentedAt: {
        type: Date,
        default: Date.now
    }
})

const blogPostSchema= new mongoose.Schema({
    
    title: {
        type: String,
        unique: true, 
        minlength: 5
    },
    content: {
        type: String, 
        required: true,
        minlegnth: 50,
    },
    author: {
        type: String
    },
    tags: {
        type: [String],
        default: []
    },
    category: {
        type: String,
        default: "General"
    },
    likes: {
        type: [String]
    },
    comments: [commentsSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date
    }
});

module.exports=mongoose.model('Blog Post', blogPostSchema);