import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { coursesProviders } from './courses.providers';
import { DatabaseModule } from '../database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from '../courses/courses.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }])],
    controllers: [CoursesController],
    providers: [CoursesService],
    exports: [CoursesService, MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }])],
})
export class CoursesModule { }