import { CoursesService } from './courses.service';
import { Course as CourseInterface, Course } from './interfaces/course.interface';
import { ErrorMsg } from '../common/ErrorMsg';
import { SuccessMsg } from '../common/SuccessMsg';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesController {
    private readonly webService;
    constructor(webService: CoursesService);
    create(createCourseDto: CreateCourseDto): Promise<Course | ErrorMsg>;
    findAll(): Promise<CourseInterface[] | ErrorMsg>;
    findById(id: string): Promise<CourseInterface | ErrorMsg>;
    deleteAll(): Promise<SuccessMsg | ErrorMsg>;
    findByIdAndDelete(id: string): Promise<SuccessMsg | ErrorMsg>;
    findByIdAndUpdate(id: string, data: UpdateCourseDto): Promise<CourseInterface | ErrorMsg>;
}
