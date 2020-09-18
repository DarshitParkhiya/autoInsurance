import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  errorMessage: string;
  constructor(private router: Router) {} // private LoginService: LoginService

  ngOnInit(): void {
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }
  login(): void {
    debugger;
    // this.LoginService.Login(this.model).subscribe(
    //   (data) => {
    //     debugger;
    //     if (data.Status == 'Success') {
    //       this.router.navigate(['/Dashboard']);
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
