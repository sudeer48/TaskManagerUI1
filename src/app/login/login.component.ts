import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthguardServiceService } from '../Services/authguard-service.service';
import { EmployeeService } from '../Services/EmployeeService';
import { PrimeNGConfig } from 'primeng/api';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component'
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  value1: any;
  value2: any;
  //studentservice: any;
  displayModal: boolean;
  
  constructor(private formBuilder: FormBuilder, private employeeservice: EmployeeService, private router: Router,
    private _auth: AuthguardServiceService,private primengConfig: PrimeNGConfig) {

    if (this._auth.loggedIn) {
      this.router.navigate(['/home']);
    }

    this.primengConfig.ripple = true;

  }

  get f() { return this.form.controls; }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    //localStorage.setItem('SeesionUser', this.form.value.username)
  }
  Authenticate() {
    debugger;
    let leaveRequest = this.form.value;
      this.employeeservice.login(leaveRequest)
        .subscribe((item: any) => {
          debugger;
          if (item) {
            if (item.response) {
              debugger;
              localStorage.setItem('token',item.message)
              this.router.navigate(['/home']);
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Login Credentials!',
                footer: 'Please check your Login Credentials.'
              });
            }
          }
          else {
            Swal.fire({
              title: 'Oops...! Something went Wrong !',
              html: 'Your leaves are not applied.',
              icon: 'error',
              confirmButtonColor: 'rgb(54, 69, 116)',
              confirmButtonText: 'Ok'
            });
          }
        });
    //}
  }

  showModalDialog() {
    this.displayModal = true;
  }
}
