import { Component, OnInit, ViewChild } from '@angular/core';
import { Portfolio } from '../portfolio';
import { NgForm } from '@angular/forms';
import { PortfolioService } from '../portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-portfolio',
  templateUrl: './new-portfolio.component.html',
  styleUrls: ['./new-portfolio.component.less']
})
export class NewPortfolioComponent implements OnInit {
  portfolio: Portfolio

  constructor(private portfolioService: PortfolioService,
    private router: Router) {
    this.portfolio = new Portfolio();
   }

  ngOnInit() {
  }
  submitForm(form: NgForm){
    form.control.markAsDirty();
    if(form.invalid){
      return false;
    }
    this.portfolioService.addPortfolio(this.portfolio).subscribe();
    this.router.navigate(['/portfolio/list']);
  }
}
