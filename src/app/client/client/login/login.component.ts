import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  constructor() { }
  
  
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getError(){
    return this.password.hasError('required') ? 'You must enter a value' :
            '';
  }
   hide=true;
   error: { name: string, message: string } = { name: '', message: '' };
  
      
    
    
    ngOnInit() {
     }
    }
  

