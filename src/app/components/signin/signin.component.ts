import { AuthenticateService } from './../../services/authenticate.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticateService) { }

  ngOnInit(): void {
    this.signinForm= this.fb.group({
      userName: ['', Validators.required],
      Password: ['', Validators.required],
    })
  }

onSubmit(data){
  console.log(data);
  this.authService.signin(data).subscribe(result => {
    console.log('signin result');
    console.log(result);
    
    localStorage.setItem('token', result.token);
    localStorage.setItem('user-info', JSON.stringify(result));
  })
  }

}

