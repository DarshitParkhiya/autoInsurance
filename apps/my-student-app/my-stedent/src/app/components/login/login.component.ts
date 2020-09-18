import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};

  errorMessage: string;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    localStorage.clear();
  }

  login() {
    debugger;
    // this.userService.Login(this.model).subscribe(
    //   (data) => {
    // debugger;
    // if (data.Status == 'Success') {
    localStorage.clear();
    localStorage.setItem('userName', 'Darshit');
    localStorage.setItem('userEmailId', 'darshit@gmail.com');
    this.router.navigate(['/dashboard']);
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
}
