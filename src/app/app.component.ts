import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = "My Application";

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
}
