import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './interfaces/course.interface';
import { COURSE_MODEL } from '../constants';
import { ErrorMsg } from 'src/common/ErrorMsg';
import { SuccessMsg } from 'src/common/SuccessMsg';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';


/* lorem pixel categories
abstract
animals
business
cats
city
food
nightlife
fashion
people
nature
sports
technics
transport
*/

const courses: Course[] = [
    {
        id: '1',
        title: 'NestJS from Novice to Guru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet neque nec nunc mollis sagittis. Pellentesque vulputate facilisis justo, quis facilisis purus imperdiet pulvinar. Sed elementum dictum dictum. In sem mauris, vestibulum quis ligula quis, eleifend pharetra lectus. Vivamus pulvinar leo in ante hendrerit, at varius risus placerat. Fusce molestie quam id lorem facilisis, vitae tempus leo consectetur.',
        author: 'John Smith',
        length: '4 Hour 45 Minutes',
        category: 'business'
    },
    {
        id: '2',
        title: 'Angular Material Design Essentials',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet neque nec nunc mollis sagittis. Pellentesque vulputate facilisis justo, quis facilisis purus imperdiet pulvinar. Sed elementum dictum dictum. In sem mauris, vestibulum quis ligula quis, eleifend pharetra lectus. Vivamus pulvinar leo in ante hendrerit, at varius risus placerat. Fusce molestie quam id lorem facilisis, vitae tempus leo consectetur.',
        author: 'John Smith',
        length: '3 Hour 33 Minutes',
        category: 'people'
    },
    {
        id: '3',
        title: 'Mongodb Secrets',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet neque nec nunc mollis sagittis. Pellentesque vulputate facilisis justo, quis facilisis purus imperdiet pulvinar. Sed elementum dictum dictum. In sem mauris, vestibulum quis ligula quis, eleifend pharetra lectus. Vivamus pulvinar leo in ante hendrerit, at varius risus placerat. Fusce molestie quam id lorem facilisis, vitae tempus leo consectetur.',
        author: 'John Smith',
        length: '4 Hour 12 Minutes',
        category: 'nightlife'
    }
];

@Injectable()
export class CoursesService {

    constructor(@InjectModel('Course') private readonly courseModel: Model<Course>) { }

    async create(createCourseDto: CreateCourseDto): Promise<Course | ErrorMsg> {
        //let _id: number = new Types.ObjectId();
        console.log('create', createCourseDto);

        try {
            const createdCourse = new this.courseModel(createCourseDto);

            console.log('New Course', createdCourse);


            return await createdCourse.save();
        } catch (err) {
            return { msg: err };
        }
    }

    async findAll(): Promise<Course[] | ErrorMsg> {
        try {
            return await this.courseModel.find().exec();
        } catch (err) {
            return { msg: err };
        }
    }

    // this method retrieves only one entry, by entry ID
    async findById(id: string): Promise<Course | ErrorMsg> {

        console.log(`findById ${id}`);

        try {
            let query: any = await this.courseModel.findById(id).exec();
            return query;
        } catch (err) {
            return { msg: err };
        }
    }

    async deleteAll(): Promise<SuccessMsg | ErrorMsg> {
        try {
            let results = await this.courseModel.deleteMany({}).exec();
            console.log('deleteAll:', results);
            //return await this.courseModel.find().exec();
            return { msg: 'Success' };
        } catch (err) {
            return { msg: err };
        }
    }

    async findByIdAndDelete(id: string): Promise<SuccessMsg | ErrorMsg> {
        try {
            let results = await this.courseModel.findByIdAndDelete(id).exec();
            console.log('findByIdAndDelete:', results);
            return { msg: 'Success' };
        } catch (err) {
            return { msg: err };
        }
    }

    async findByIdAndUpdate(id: string, data: UpdateCourseDto): Promise<Course | ErrorMsg> {
        try {
            return await this.courseModel.findByIdAndUpdate(id, data).exec();
        } catch (err) {
            return { msg: err };
        }
    }

    getCourses(): Course[] {
        return courses;
    }
}
