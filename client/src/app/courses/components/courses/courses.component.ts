import { Component, OnInit } from '@angular/core';
import { Course } from '../../course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {
  courses = [];

  constructor(private webService: CoursesService) { 
   
  }

  ngOnInit() {    
    this.webService.getMessages().subscribe((res: any[]) => {
      this.courses = res;
    });
  }

}
