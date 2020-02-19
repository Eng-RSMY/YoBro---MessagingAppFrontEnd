import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  })
  sendLoginRequests()
  {
    fetch("",{
      method: 'post',
      body: this.loginForm.value
    })
  }
  signup()
  {

  }
}
