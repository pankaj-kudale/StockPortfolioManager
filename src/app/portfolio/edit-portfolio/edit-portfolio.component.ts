import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { Portfolio } from '../portfolio';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.less']
})
export class EditPortfolioComponent implements OnInit {
  portfolio: Portfolio
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor(private activatedRoute: ActivatedRoute, private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    let portfolioId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.portfolioService.getPortfolio(portfolioId)
      .subscribe(
        result => { this.portfolio = result; }
      ); 
  }
}
