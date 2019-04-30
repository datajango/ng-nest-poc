import { Component, OnInit } from '@angular/core';
import { Course } from '../../course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [];
  hidden = false;
  clickCount = 0;

  constructor(private webService: CoursesService) { 
    console.log('hidden:' + this.hidden);
  }

  ngOnInit() {    
    this.webService.getMessages().subscribe((res: any[]) => {
      this.courses = res;
    });
  }

  onClick() {
    this.hidden = !this.hidden;
    this.clickCount += 1;    
  }
}
