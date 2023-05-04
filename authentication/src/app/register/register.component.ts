import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // registerationForm: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService, private as: AuthService, private router: Router){

  }

  registerationForm = this.fb.group({
    id: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.fb.control('male'),
    role: this.fb.control(''),
    isActive: this.fb.control(false)
  });

  proceedRegistration(){
    if(this.registerationForm.valid){
      this.as.proceedRegistration(this.registerationForm.value).subscribe((response)=>{
        this.toastr.success("Successfully Registered");
        this.router.navigate(['/login']);
      })
  }else{
    this.toastr.warning("Please enter valid details")
  }
}
}
