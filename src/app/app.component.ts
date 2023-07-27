import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'servey forms', url: '/form', icon: 'help-circle' },
    { title: 'take a picture', url: '/picture', icon: 'camera' },
    { title: 'Bible', url: '/bib', icon: 'book' },
    { title: 'About me', url: '/about', icon: 'person' },
  ];
  constructor () {}
}
