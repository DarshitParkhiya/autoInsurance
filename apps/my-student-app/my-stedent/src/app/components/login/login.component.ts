import { StudentService } from './../../services/student.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { UserService } from '../../services/user.service';
import { UserTypes } from '../../enums/UserType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  userTypes = UserTypes;
  selectedUserType = UserTypes.student;
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
    this.adminService.getAllAdmin().subscribe((a) => {
      console.log('*******', a);
    });
  }

  login() {
    if (this.selectedUserType === UserTypes.student) {
      this.studentService
        .authenticateSutdent(this.model.UserName, this.model.Password)
        .subscribe((a) => {
          localStorage.setItem('userType', this.selectedUserType);
          localStorage.setItem('userid', a._id);
          this.router.navigate(['/dashboard']);
        });
    }
    // this.userService.Login(this.model).subscribe(
    //   (data) => {
    // debugger;
    // if (data.Status == 'Success') {
    localStorage.clear();

    //       debugger;
    //     } else {
    //       this.errorMessage = data.Message;
    //     }
    //   },
    //   (error) => {
    //     this.errorMessage = error.message;
    //   }
    // );
  }

  loginChange(value: UserTypes): void {
    this.selectedUserType = value;
  }
}
