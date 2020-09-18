import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { StudentService } from '../../services/student.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  model: any = {};
  selectedRegister = 'student';
  allUnivesrity = [];
  allCourse = [];

  errorMessage: string;
  constructor(
    private router: Router,
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
    this.model.courseDetails = [
      {
        universityId: this.model.university._id,
        coursesId: this.model.courseApplied._id,
      },
    ];

    console.log('**before***', this.model);
    this.studentService.addStudent(this.model).subscribe(
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
