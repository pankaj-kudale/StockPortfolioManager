import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.less']
})
export class PortfolioListComponent implements OnInit {
  portfolios: Portfolio[];
  
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getAllPortfolio().subscribe(
      result => this.portfolios = result
    );
  }

}
