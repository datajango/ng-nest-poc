
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { CoursesService } from './courses.service';
import { Course as CourseInterface, Course } from './interfaces/course.interface';
import { ErrorMsg } from '../common/ErrorMsg';
import { SuccessMsg } from '../common/SuccessMsg';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {

    constructor(private readonly webService: CoursesService) {}

    @Post()
    async create(@Body() createCourseDto: CreateCourseDto): Promise<Course | ErrorMsg> {
        return this.webService.create(createCourseDto);
    }

    @Get()
    async findAll(): Promise<CourseInterface[]| ErrorMsg> {        
        return this.webService.findAll();
    }
    
    @Get(':id')
    async findById(@Param('id') id: string): Promise<CourseInterface | ErrorMsg> {
      return this.webService.findById(id);
    }
  
    @Delete()
    async deleteAll(): Promise<SuccessMsg | ErrorMsg> {
      return this.webService.deleteAll();
    }
  
    @Delete(':id')
    async findByIdAndDelete(@Param('id') id: string): Promise<SuccessMsg | ErrorMsg> {
      return this.webService.findByIdAndDelete(id);
    }
  
    @Put(':id')
    async findByIdAndUpdate(@Param('id') id: string, @Body() data: UpdateCourseDto): Promise<CourseInterface | ErrorMsg> {
      return this.webService.findByIdAndUpdate(id, data);
    }
}
