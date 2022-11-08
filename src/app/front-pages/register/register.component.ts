import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { confirmPassword } from 'src/app/utils/utils';

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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', [Validators.required, confirmPassword]]
    });
  }

  public submitForm(): void {
    this.isSubmit = true;
    //We process the data
    
    this.apiService.register(this.form.value).subscribe(res=>{
      console.log(res);
    },error=>{
      console.log(error);
    });
    //Then we reset the form
  }


  //Method for reset the form
  public resetForm(): void {
    this.form.reset();
    this.isSubmit = false;
    this.form.setErrors(null);
  }
}
