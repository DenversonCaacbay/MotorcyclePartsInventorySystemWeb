import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-report-vendor',
  templateUrl: './report-vendor.component.html',
  styleUrls: ['./report-vendor.component.css']
})
export class ReportVendorComponent implements OnInit {
  tasks: [];
  constructor(private taskservice:TasksService) { }

  ngOnInit() {
    this.displayTasks();
  }
  displayTasks() {
    this.taskservice.getVendor().subscribe((result:any) => {
      //place the return to you variable tasks array
       this.tasks = result.tasks;
    });
 }

 
deleteTask(event:any){
  let id = parseInt(event.target.id);
  this.taskservice.deleteTask(id).subscribe((result: any) => {
    console.log(result);
  });
}
}
