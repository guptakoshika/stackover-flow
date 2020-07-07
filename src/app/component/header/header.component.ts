import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private showSidebarForSmallScreens = false;
  constructor(private router: Router, private sidebar: SidebarComponent) { }

  ngOnInit() {
  }
  /**
   * this method is for logging out of user.
   */
  logout() {
    this.router.navigate(['/login']);
  }

  /**
   * Method is used to trigger the side bar for small screens when hambuger is clicked
   */
  showSidebar() {
    this.showSidebarForSmallScreens = !this.showSidebarForSmallScreens;
    this.sidebar.showSidebarInSmallScreens(this.showSidebarForSmallScreens);
  }
}
