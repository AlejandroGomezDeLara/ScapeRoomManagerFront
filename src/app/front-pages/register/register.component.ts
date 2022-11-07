import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  isSubmit: boolean = false;

  constructor(private readonly formBuilder: FormBuilder,
    private apiService:ApiService,
    private router:Router,
    private auth:AuthenticationService) {}

  public ngOnInit(): void {
    //We initialize the form
    this.form = this.initForm();
  }

  public initForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public submitForm(): void {
    this.isSubmit = true;
    //We process the data
    if (this.form.valid) {
      this.apiService.login(this.form.value).subscribe((user:User)=>{
        console.log(user);
        if(user.api_token)
          this.auth.login(user.api_token);
      },error=>{
        alert("Error de autentificación")
      });
      this.resetForm();
    } else {
      console.log(this.form.errors);
    }
    //Then we reset the form
  }


  //Method for reset the form
  public resetForm(): void {
    this.form.reset();
    this.isSubmit = false;
    this.form.setErrors(null);
  }
}