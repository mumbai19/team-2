import { Component, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _opened: boolean = false;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  title = 'Trishul';
  @ViewChild('sidenav', { static: true }) public el: any;
  @HostListener('swiperight', ['$event']) public swipePrev(event: any) {
    this.el.show();
}
}



