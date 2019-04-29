import { Connection } from 'mongoose';
import { CourseSchema } from './courses.schema';
import { COURSE_MODEL } from '../constants';

export const coursesProviders = [
    {
        provide: COURSE_MODEL,
        useFactory: (connection: Connection) => connection.model('Course', CourseSchema),
        inject: ['DATABASE_CONNECTION']
    },
];