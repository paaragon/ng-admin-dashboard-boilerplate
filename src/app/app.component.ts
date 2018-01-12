import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = "My Application";

  public navItems: {title: string, route: string, icon: string}[] = [
    {
      title: 'inicio',
      route: '/home',
      icon: '<i class="material-icons">dashboard</i>'
    }
  ];

  public scrollbarOptions = {
    axis: 'yx',
    theme: 'minimal-dark',
    scrollButtons: {
      enable: true
    },
    keyboard: {
      enable: true,
      scrollType: "stepless"
    },
    documentTouchScroll: true
  };

  public navExpanded: boolean = false;

  expandChange(expanded){
    this.navExpanded = expanded;
  }
}
