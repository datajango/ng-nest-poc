"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.CourseSchema = new mongoose.Schema({
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
//# sourceMappingURL=courses.schema.js.map