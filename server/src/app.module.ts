import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ng-nest-poc'),
    CoursesModule,    
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
