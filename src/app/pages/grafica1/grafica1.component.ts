import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public labels1: string[] = [ 'Pan', 'Bebida', 'Cartas' ];
  public labels2: string[] = ['Algo', 'Algo 1', 'Algo 2'];
  public labels3: string[] = ['A', 'B', 'C'];
  public labels4: string[] = ['D', 'E', 'F']

  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
        { 
          data: [ 10, 15, 40 ],
          backgroundColor: ['#6857E6','#009FEE','#F02059']
        },
      ]
  };

  public data2: ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [
        { 
          data: [ 10, 15, 40 ],
          backgroundColor: ['#6857E6','#009FEE','#F02059']
        },
      ]
  };

  public data3: ChartData<'doughnut'> = {
    labels: this.labels3,
    datasets: [
        { 
          data: [ 10, 15, 40 ],
          backgroundColor: ['#6857E6','#009FEE','#F02059']
        },
      ]
  };

  public data4: ChartData<'doughnut'> = {
    labels: this.labels4,
    datasets: [
        { 
          data: [ 10, 15, 40 ],
          backgroundColor: ['#6857E6','#009FEE','#F02059']
        },
      ]
  };



}
