import { Component, OnInit } from '@angular/core';
import { pie } from '../../fakedata/pie';
import { line } from '../../fakedata/line';
import { bar } from '../../fakedata/bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // options
  showLegend = false;
  showXAxis = false;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Y Axis';

  colorScheme = {
    domain: ['#acdcf2', '#84cbec', '#5cbae6', '#27a3dd', '#1b7ead', '#15658a']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  autoScale = true;

  pieData = pie;
  barData = bar;
  lineData = line;

  constructor() {
    this.lineData = this.lineData.map(group => {
      group.series = group.series.map((dataItem: any) => {
        dataItem.name = new Date(dataItem.name);
        return dataItem;
      })
      return group;
    })
  }

  ngOnInit() {
  }
}
