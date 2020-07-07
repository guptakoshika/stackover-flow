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

  showSidebarInSmallScreens(showSidebar) {
    console.log('im in sidebar compoenent');
    this.showSidebar = showSidebar;
  }
}
