import { Injectable } from '@angular/core';

import { Portfolio } from './portfolio';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  portfolios: Portfolio[] = [
    { portfolioId: 1, name: 'RockeX', positions: 10, initialAmount: 250000, amountAdded: 0, 
      portfolioType: 1, profit: 12000 },
    { portfolioId: 2, name: 'TradeX', positions: 1, initialAmount: 25000, amountAdded: 0, 
       portfolioType: 1, profit: 5200 },
    { portfolioId: 3, name: 'Sniper', positions: 1, initialAmount: 25000, amountAdded: 0, 
       portfolioType: 2, profit: 6422 }
  ]
  constructor() { }

  getAllPortfolio(): Observable<Portfolio[]>{
    return of(this.portfolios);
  }
}
