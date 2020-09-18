import { Register } from './../models/Student';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {
    // redirect to home if already logged in
  }

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
}
