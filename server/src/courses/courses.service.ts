import { Injectable } from '@nestjs/common';
import { Course } from './course';

const courses: Course[] =[
    {
        id: '1',
        title: 'NestJS from Novice to Guru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet neque nec nunc mollis sagittis. Pellentesque vulputate facilisis justo, quis facilisis purus imperdiet pulvinar. Sed elementum dictum dictum. In sem mauris, vestibulum quis ligula quis, eleifend pharetra lectus. Vivamus pulvinar leo in ante hendrerit, at varius risus placerat. Fusce molestie quam id lorem facilisis, vitae tempus leo consectetur.',
        author: 'John Smith',
        length: '4 Hour 45 Minutes'
    },
    {
        id: '2',
        title: 'Angular Material Design Essentials',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet neque nec nunc mollis sagittis. Pellentesque vulputate facilisis justo, quis facilisis purus imperdiet pulvinar. Sed elementum dictum dictum. In sem mauris, vestibulum quis ligula quis, eleifend pharetra lectus. Vivamus pulvinar leo in ante hendrerit, at varius risus placerat. Fusce molestie quam id lorem facilisis, vitae tempus leo consectetur.',
        author: 'John Smith',
        length: '3 Hour 33 Minutes'
    },
    {
        id: '3',
        title: 'Mongodb Secrets',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet neque nec nunc mollis sagittis. Pellentesque vulputate facilisis justo, quis facilisis purus imperdiet pulvinar. Sed elementum dictum dictum. In sem mauris, vestibulum quis ligula quis, eleifend pharetra lectus. Vivamus pulvinar leo in ante hendrerit, at varius risus placerat. Fusce molestie quam id lorem facilisis, vitae tempus leo consectetur.',
        author: 'John Smith',
        length: '4 Hour 12 Minutes'
    }
];

@Injectable()
export class CoursesService {

    getCourses(): Course[] {
        return courses;
    }
}
