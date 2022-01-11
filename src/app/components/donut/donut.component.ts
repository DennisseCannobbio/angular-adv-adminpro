import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent implements OnInit {

  @Input() title: string = 'Sin titulo';

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'Label1', 'Label3', 'Label3' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
          { 
            data: [ 350, 450, 100 ],
            backgroundColor: ['#6857E6','#009FEE','#F02059']
          },
        ]
  };

  constructor() { }

  ngOnInit(): void {
  }


    
  public doughnutChartType: ChartType = 'doughnut';

}
