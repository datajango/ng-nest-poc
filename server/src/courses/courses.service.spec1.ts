import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './courses.schema';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesService],
      imports: [MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }])],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
