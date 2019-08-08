import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';

// import {FormBuilder,FormGroup, Validators, AbstractControl} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
// formgroup:FormGroup;

// Email:AbstractControl;
// Password:Abstrapublic formbuilder:FormBuilderctControl;
  constructor(public router:Router ) { 
// this.formgroup =formbuilder.group({

//   Email:['',Validators.required],
//   Password:['',Validators.required]
  
// });
// this.Email =this.formgroup.controls['Email'];
// this. Password=this.formgroup.controls['Password']
  }

  ngOnInit() {
  }

login(){
this.router.navigateByUrl('/home')
}

}
