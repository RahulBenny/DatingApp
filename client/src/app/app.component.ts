import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App v1';

  constructor(private http: HttpClient, private accountService: AccountService) {
  }
  ngOnInit() {
    this.setCurrentUser()
  }
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem("user") || '{}');
    if (user.token) {
      this.accountService.setCurrentUser(user)
    } else {
      this.accountService.setCurrentUser(undefined)
    }

  }

}
