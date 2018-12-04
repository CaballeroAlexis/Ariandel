import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  usernameText: string;
  usernameAvailable: boolean;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private auth:AuthService
    ) {
      //auth.handleAuthentication();
    }
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
          username:[''],
          name:[''],
          lastname: ['']
      });
    


      // reset login status
      

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;


      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

  }
  onSubmitAddUser(){

    this.auth.registerUser(this.registerForm.value)
    .then((res) =>{
        console.log(res);
        this.router.navigate(["/home"]);
    }).catch ((err)=> {
        console.log(err)
    });
  }


  checkUsername() {
    this.auth.checkUsername(this.usernameText).subscribe(username => {
      this.usernameAvailable = !username;
    })
  }

  updateUsername() {
    console.log("Subido")
    this.auth.updateUsername(this.usernameText)
  }
}
