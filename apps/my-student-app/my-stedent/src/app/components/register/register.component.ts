import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
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
  constructor(private router: Router, private adminService: AdminService) {}

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

      console.log('*******', this.allUnivesrity);
    });
  }

  login() {
    localStorage.clear();
    localStorage.setItem('userName', 'Darshit');
    localStorage.setItem('userEmailId', 'darshit@gmail.com');
    this.router.navigate(['/dashboard']);
  }

  registerChange(value: string) {
    this.selectedRegister = value;
  }

  onUniversityChange(selectedUniversity: any) {
    console.log('****selectedUniversity****', selectedUniversity);

  }
}
