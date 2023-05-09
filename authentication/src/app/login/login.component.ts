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
  userData: any;

  constructor(private router: Router, private fb: FormBuilder, private as: AuthService, private toastr: ToastrService){
    sessionStorage.clear();
  }

  loginForm = this.fb.group({
    userName: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    password: this.fb.control("", Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]))
  })

  login(){
    if(this.loginForm.valid){
      this.as.getById(this.loginForm.value.userName).subscribe(data=>{
        this.userData = data;
        if(this.userData.password === this.loginForm.value.password || this.userData.id === this.loginForm.value.userName){
          if(this.userData.isActive){
            sessionStorage.setItem('username', this.userData.id);
            sessionStorage.setItem('userrole', this.userData.role);
            this.toastr.success("Login Successfully");
            this.router.navigate(['/home']);
            this.as.showMenu(true)
          }else{
            this.toastr.warning('Please contact admin','In Active User')
          }

        }else{
          this.toastr.warning("Wrong Credentials")
        } 
      })
    }else{
      this.toastr.warning("Please enter vallid details");
    }
  }
}