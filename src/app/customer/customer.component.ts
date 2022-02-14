import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  taskCustomer:FormGroup
  constructor(
    public router:Router,
    private FB: FormBuilder,
    private taskservice:TasksService
  ) { }

  ngOnInit() {
    this.taskCustomer=this.FB.group({
      full_name:['',Validators.required],
      status:['',Validators.required],
      customer_id:['', Validators.required],
      phone:['',Validators.required],
      email:['', Validators.required],
      address:['',Validators.required],

    })
  }

  addcustomer(){
    console.log(this.taskCustomer.value)
    if(this.taskCustomer.valid){
      this.taskservice.saveCustomer(this.taskCustomer.value).subscribe((rest:any)=>{
        console.log(rest)
        if(rest.data){
          console.log("Customer Added Successfully")
          //localStorage.setItem('user',JSON.stringify(rest.data))
        }
        else if(rest.error){
          console.log(rest.error)

        }
      })
    }
  }

}
