import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.css']
})
export class ReportItemComponent implements OnInit {

   tasks=[];

   product_name = [];
   quantity:any;

  constructor(private taskservice:TasksService) { }

  displayTasks() {
    this.taskservice.getItem().subscribe((result: any) => {
      //place the return to you variable tasks array
      this.tasks = result.tasks;
      console.log(result);

      var prod_name:any=[];
      var quant:any=[];

      result.tasks.map((data: any) => {
        prod_name.push(data.product_name);
        quant.push(data.quantity);

      });
      //this.product_name=prod_name;
      const myChart = new Chart("myChart", {
        type: 'bar',
        data: {  
            labels: prod_name, //ERROR
            datasets: [{
                label: 'Number of Stocks Per Item',
                data: quant, //ERROR
                backgroundColor: [
                    'rgba(239, 83, 79, 1)',
                    'rgba(91, 107, 192, 1)',
                    'rgba(37, 166, 154, 1)',
                    'rgba(102, 187, 106, 1)',
                    'rgba(29, 136, 229, 1)',
                    'rgba(255, 238, 88, 1)',
                    'rgba(239, 83, 79, 1)',
                    'rgba(91, 107, 192, 1)',
                    'rgba(37, 166, 154, 1)',
                    'rgba(102, 187, 106, 1)',
                    'rgba(29, 136, 229, 1)',
                    'rgba(255, 238, 88, 1)'
                ],
                borderColor: [
                    'rgba(239, 83, 79, 1)',
                    'rgba(91, 107, 192, 1)',
                    'rgba(37, 166, 154, 1)',
                    'rgba(102, 187, 106, 1)',
                    'rgba(29, 136, 229, 1)',
                    'rgba(255, 238, 88, 1)',
                    'rgba(239, 83, 79, 1)',
                    'rgba(91, 107, 192, 1)',
                    'rgba(37, 166, 154, 1)',
                    'rgba(102, 187, 106, 1)',
                    'rgba(29, 136, 229, 1)',
                    'rgba(255, 238, 88, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
            }
        }
    });
    });
  }



  ngOnInit(){
    this.displayTasks();
    if(this.product_name !== [])
    {
        console.log(this.product_name);
    }
    else
    {
        console.log(this.product_name);
    }
  
  }



}
