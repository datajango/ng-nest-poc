import { Model } from 'mongoose';
import { Course } from './interfaces/course.interface';
import { ErrorMsg } from 'src/common/ErrorMsg';
import { SuccessMsg } from 'src/common/SuccessMsg';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesService {
    private readonly courseModel;
    constructor(courseModel: Model<Course>);
    create(createCourseDto: CreateCourseDto): Promise<Course | ErrorMsg>;
    findAll(): Promise<Course[] | ErrorMsg>;
    findById(id: string): Promise<Course | ErrorMsg>;
    deleteAll(): Promise<SuccessMsg | ErrorMsg>;
    findByIdAndDelete(id: string): Promise<SuccessMsg | ErrorMsg>;
    findByIdAndUpdate(id: string, data: UpdateCourseDto): Promise<Course | ErrorMsg>;
    getCourses(): Course[];
}
