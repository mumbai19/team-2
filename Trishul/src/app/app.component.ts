import { Component, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trishul';
  @ViewChild('sidenav', { static: true }) public el: any;
  @HostListener('swiperight', ['$event']) public swipePrev(event: any) {
    this.el.show();

  
}
}
