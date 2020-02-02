import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';

import { Portfolio } from '../portfolio';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.less']
})
export class EditPortfolioComponent implements OnInit {
  portfolio: Portfolio
  
  view: any[] = [700, 300];

  // options
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Trades';
  yAxisLabel: string = 'Profit';

  multi = [
    {
      "name": "Profit",
      "series": [
        {
          "name": "1",
          "value": 1200
        },
        {
          "name": "2",
          "value": 1700
        },
        {
          "name": "3",
          "value": 2450
        }
      ]
    }
  ]

  colorScheme = {
    domain: ['#5AA454']
  };
  
  constructor(private activatedRoute: ActivatedRoute, private portfolioService: PortfolioService) {
    Object.assign(this, { multi: this.multi });
  }

  ngOnInit() {
    let portfolioId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.portfolioService.getPortfolio(portfolioId)
      .subscribe(
        result => { this.portfolio = result; }
      ); 
  }

}
