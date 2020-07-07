import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
private showSidebar = false;
  ngOnInit() {
  }

  /**
   * this method is used to change the boolean for showing sidebar in small screens.
   * @param showSidebar : boolean - for ngIf condition in frontend
   */
  showSidebarInSmallScreens(showSidebar) {
    console.log('im in sidebar compoenent');
    this.showSidebar = showSidebar;
  }
}
