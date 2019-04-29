import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Course[]> {

    return this.http.get<Course[]>(this.baseUrl + '/courses');

  }
}
