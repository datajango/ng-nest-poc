import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './course';

@Controller('courses')
export class CoursesController {

    constructor(private readonly webService: CoursesService) {}

    @Get()
    getCourses(): Course[] {
      return this.webService.getCourses();
    }
  
}
