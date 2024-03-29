import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  private baseurl = 'https://localhost:5001/api/'
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    alert("hi")
  }

  get404Error() {
    this.http.get(this.baseurl + 'buggy/not-found').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error)
    })
  }


  get400Error() {
    this.http.get(this.baseurl + 'buggy/bad-request').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error)
    })
  }

  get500Error() {
    this.http.get(this.baseurl + 'buggy/server-error').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error)
    })
  }


  get401Error() {
    this.http.get(this.baseurl + 'buggy/auth').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error)
    })
  }



  get400ValidationError() {
    this.http.post(this.baseurl + 'account/register', {}).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error)
    })
  }



}
