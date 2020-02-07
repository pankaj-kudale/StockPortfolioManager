import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { Portfolio } from '../portfolio';
import { PortfolioService } from '../portfolio.service';
import { Trade } from '../trade';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.less']
})
export class EditPortfolioComponent implements OnInit {
  portfolio: Portfolio
  trades: Trade[];
  profits: number[];
  public lineChartData: ChartDataSets[] = [
    { data: [150, 2000, 2500, 3589, 7566, 9224, 9120], label: 'Profit' },
  ];
  public lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7'];
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

    this.portfolioService.getTradeDetails(portfolioId)
      .subscribe(
        result => { 
          this.trades = result
          this.profits = [];
          let profit = 0;
          this.lineChartLabels = [];
          for (const trade of this.trades) {
            profit = profit + trade.profit;
            this.profits.push(profit);
            this.lineChartLabels.push(this.profits.length.toString());
          }
          this.lineChartData[0].data = this.profits;
        }
      );
  }
}
