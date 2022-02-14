import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  
  
  constructor(public router:Router, private FB:FormBuilder, private crudservice:CrudService) {
  }

  ngOnInit() {
    this.loginForm=this.FB.group({
      email:['',Validators.required],
      password:['',Validators.required],

    })
  }

  login(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
      this.crudservice.loginRequest(this.loginForm.value).subscribe((rest:any)=>{
        console.log(rest)
        if(rest.data){
          this.router.navigate(['../home'])
          localStorage.setItem('user',JSON.stringify(rest.data))
        }
        else if(rest.error){
          console.log(rest.error)

        }
      })
    }
  }
}
