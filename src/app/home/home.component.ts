import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  taskForm:FormGroup


  constructor(
    
    public router:Router,
    private FB: FormBuilder,
    private taskservice:TasksService
    
    ) {}


 // RedirectToOtherPage()
 // {
    //console.log(this.profileForm.value);

 //   this.router.navigateByUrl('/home');
 // }
/*  updateform()
  {
    this.profileform.patchValue({
      firstname: 'Denverson',
      lastname: 'Caacbay',
      username: 'denver.kun',
      email: 'denversoncaacbay@gmail.com',
      password : '123',
      confirmpassword :'123'
    });
  }
*/
  ngOnInit() {
    this.taskForm=this.FB.group({
      product_name:['',Validators.required],
      description:['',Validators.required],
      price:['', Validators.required],
      quantity:['',Validators.required],

    })
  }

  //db
  additem(){
    console.log(this.taskForm.value)
    if(this.taskForm.valid){
      this.taskservice.saveTask(this.taskForm.value).subscribe((rest:any)=>{
        console.log(rest)
        if(rest.data){
          console.log("Added Successfully")
          //localStorage.setItem('user',JSON.stringify(rest.data))
        }
        else if(rest.error){
          console.log(rest.error)

        }
      })
    }
  }

  
}
