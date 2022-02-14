import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }
  private apiUrl : string = 'http://localhost/api';

  //Saving Item
  saveTask(task:any) {
    return this.http.post(this.apiUrl+'/save-tasks.php', task);
  }

  //Saving Vendor
  saveVendor(task:any) {
    return this.http.post(this.apiUrl+'/save-vendor.php', task);
  }
  //Saving Customer
  saveCustomer(task:any) {
    return this.http.post(this.apiUrl+'/save-customer.php', task);
  }
  //REPORT CUSTOMER
  getTasks() {
    return this.http.get(this.apiUrl+'/task-customer.php');
  } 

  deleteTask(id:any) {
    const params = new HttpParams().set('id', id);
    return this.http.delete(this.apiUrl+'/delete-customer.php', { params: params});
  }
  //REPORT VENDOR
  getVendor() {
    return this.http.get(this.apiUrl+'/task-vendor.php');
  } 

  deleteVendor(id:any) {
    const params = new HttpParams().set('id', id);
    return this.http.delete(this.apiUrl+'/delete-vendor.php', { params: params});
  }

  getItem() {
    return this.http.get(this.apiUrl+'/tasks.php');
  }

}
