import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({    
    title: {
        type: String,
        required: true
    },    
    author: {
        type: String,
        required: true,
    },
    length: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    }
});