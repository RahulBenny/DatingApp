import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App v1';
  users:any;
  constructor(private http:HttpClient){
  }
  async ngOnInit() {
 this.http.get("https://localhost:5001/api/users").subscribe(response =>{
   this.users =response;
 },error=>{
console.log(error)
 })
  }
}
