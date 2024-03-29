import { AccountService } from './../_services/account.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  @Output() cancelRegisterEvent = new EventEmitter();


  model: any = {}
  constructor(private accountService: AccountService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe((response) => {
      console.log(response)
      this.cancel()
    }, error => {
      this.toastr.error(error.error)
    })
  }

  cancel() {
    this.cancelRegisterEvent.emit(false);

  }

}
