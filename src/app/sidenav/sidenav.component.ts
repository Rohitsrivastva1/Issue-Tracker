import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  events: string[] = []; // Explicitly specify the type as string[]
  shouldRun = true;
  opened = false;

  toggleSidenav() {
    this.opened = !this.opened;
  }
}
