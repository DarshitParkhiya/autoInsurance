import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../models/studentsModels/Student';
import { AdminService } from '../../services/admin.service';
import { StudentService } from '../../services/student.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  studentModel: Student = new Student();
  selectedRegister = 'student';
  selectedUniversity: any;
  selectedCourse: any;
  allUnivesrity = [];
  allCourse = [];

  errorMessage: string;
  constructor(
    private adminService: AdminService,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    localStorage.clear();
    this.getAdminDetails();
  }

  getAdminDetails() {
    this.adminService.getAllAdmin().subscribe((universites: any[]) => {
      universites.forEach((university) => {
        university.universities.forEach((element) => {
          this.allUnivesrity.push(element);
        });
      });
    });
  }

  submit() {
    debugger;
    this.studentModel.courseDetails = [
      {
        universityId: this.selectedUniversity._id,
        coursesId: this.selectedCourse._id,
      },
    ];

    console.log('**before***', this.studentModel);
    this.studentService.addStudent(this.studentModel).subscribe(
      (a) => {
        console.log(a);
      },
      (error) => {
        console.log('Error');
      }
    );
  }

  registerChange(value: string) {
    this.selectedRegister = value;
  }

  onUniversityChange(selectedUniversity: any) {
    this.allCourse = [];
    selectedUniversity.courses.forEach((course) => {
      this.allCourse.push(course);
    });
  }
}
