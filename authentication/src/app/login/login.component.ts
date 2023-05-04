import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private fb: FormBuilder, private as: AuthService, private toastr: ToastrService){

  }

  loginForm = this.fb.group({
    email: this.fb.control("", Validators.compose([Validators.required, Validators.email])),
    password: this.fb.control("", Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]))
  })

  login(){
    if(this.loginForm.valid){
      this.toastr.success("Login Successfully");
      this.router.navigate(['/home']);
    }else{
      this.toastr.warning("Please enter vallid details");
    }
  }
}