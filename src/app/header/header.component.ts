import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //   /**
  //  * this method is for logging out of user.
  //  */
  // logout() {
  //   this.loginguard.setIsAuthorized(false);
  //   this.router.navigate(['/login']);
  // }

}
