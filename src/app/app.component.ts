import { LoginService } from './services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: any;
  constructor(private loginService: LoginService) {
    this.loginService.getUniversitties().subscribe((result) => {
      this.data = JSON.stringify(result);
      console.log(result);
    });
  }

  title = 'DemoProject';
}
