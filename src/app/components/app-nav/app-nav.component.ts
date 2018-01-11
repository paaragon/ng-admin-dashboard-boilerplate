import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  @Input() items: {title: string, route: string, icon: string}[];
  @Output() expand: EventEmitter<boolean>;

  constructor() { }

  ngOnInit() {
  }

}
