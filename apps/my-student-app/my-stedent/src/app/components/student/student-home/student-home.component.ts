import { StudentService } from './../../../services/student.service';
import { Student } from './../../../models/studentsModels/Student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss'],
})
export class StudentHomeComponent implements OnInit {
  student: Student = new Student();

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getStudentDetails() {
    const userId = localStorage.getItem('userid');
    this.studentService.getStudentById(userId).subscribe((student) => {
      debugger;
      this.student = student;
    });
  }
}
