import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  taskVendor:FormGroup

  constructor(
    public router:Router,
    private FB: FormBuilder,
    private taskservice:TasksService
    
    ) {}

  ngOnInit() {
    this.taskVendor=this.FB.group({
      full_name:['',Validators.required],
      status:['',Validators.required],
      vendor_id:['', Validators.required],
      phone:['',Validators.required],
      email:['', Validators.required],
      address:['',Validators.required],

    })
  }

  //db
  addvendor(){
    console.log(this.taskVendor.value)
    if(this.taskVendor.valid){
      this.taskservice.saveVendor(this.taskVendor.value).subscribe((rest:any)=>{
        console.log(rest)
        if(rest.data){
          console.log("Vendor Added Successfully")
          //localStorage.setItem('user',JSON.stringify(rest.data))
        }
        else if(rest.error){
          console.log(rest.error)

        }
      })
    }
  }


}
