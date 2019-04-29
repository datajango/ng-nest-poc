"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_schema_1 = require("./courses.schema");
const constants_1 = require("../constants");
exports.coursesProviders = [
    {
        provide: constants_1.COURSE_MODEL,
        useFactory: (connection) => connection.model('Course', courses_schema_1.CourseSchema),
        inject: ['DATABASE_CONNECTION']
    },
];
//# sourceMappingURL=courses.providers.js.map