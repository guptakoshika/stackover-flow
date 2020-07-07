import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/LoginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  private isAdmin: boolean;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.isAdmin = false;
  }

  /**
   * this method is for submitting the form, will validate the input and
   * process accrodingly.
   */
  onSubmit() {
   const crediants = {
      username : this.username,
      password : this.password
    };
   this.loginService.validateUser(crediants).subscribe(data => this.processResponse(),
     error => this.processError());
  }

  /**
   * this method is used to redirect to home page if crediantials are correct.
   */
  processResponse() {
      // this.loginGuard.setIsAuthorized(true);
      this.router.navigate(['/stackoverflow/questions' , 1]);
  }

  /**
   * this method is used to show error messgae on wrong credentials.
   */
  processError() {
    this.isAdmin = true;
  }
}
