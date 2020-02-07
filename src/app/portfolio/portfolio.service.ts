import { Injectable } from '@angular/core';

import { Portfolio } from './portfolio';
import { of, Observable } from 'rxjs';
import { Trade } from './trade';

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
       portfolioType: 2, profit: 6422 },
    { portfolioId: 4, name: 'Mahi', positions: 1, initialAmount: 100000, amountAdded: 0, 
       portfolioType: 2, profit: 6650 }
  ]

  trades: Trade[] = [
    {tradeId: 1, portfolioId: 1, stock: 'Infy', buy: 100, sell: 200, profit: 100, quantity: 1},
    {tradeId: 1, portfolioId: 1, stock: 'Infy', buy: 100, sell: 153, profit: 53, quantity: 1},
    {tradeId: 1, portfolioId: 1, stock: 'Infy', buy: 100, sell: 176, profit: 76, quantity: 1},
    {tradeId: 1, portfolioId: 1, stock: 'Infy', buy: 100, sell: 125, profit: 25, quantity: 1},
    {tradeId: 1, portfolioId: 1, stock: 'Infy', buy: 100, sell: 92, profit: -8, quantity: 1},
    {tradeId: 1, portfolioId: 2, stock: 'Infy', buy: 100, sell: 200, profit: 100, quantity: 1},
    {tradeId: 1, portfolioId: 2, stock: 'Infy', buy: 100, sell: 153, profit: 53, quantity: 1},
    {tradeId: 1, portfolioId: 2, stock: 'Infy', buy: 100, sell: 176, profit: 76, quantity: 1},
    {tradeId: 1, portfolioId: 2, stock: 'Infy', buy: 100, sell: 125, profit: 25, quantity: 1},
    {tradeId: 1, portfolioId: 3, stock: 'Infy', buy: 100, sell: 92, profit: -8, quantity: 1},
    {tradeId: 1, portfolioId: 3, stock: 'Infy', buy: 100, sell: 200, profit: 100, quantity: 1},
    {tradeId: 1, portfolioId: 3, stock: 'Infy', buy: 100, sell: 153, profit: 53, quantity: 1},
    {tradeId: 1, portfolioId: 4, stock: 'Infy', buy: 100, sell: 176, profit: 76, quantity: 1},
    {tradeId: 1, portfolioId: 4, stock: 'Infy', buy: 100, sell: 125, profit: 25, quantity: 1},
    {tradeId: 1, portfolioId: 4, stock: 'Infy', buy: 100, sell: 92, profit: -8, quantity: 1},
    {tradeId: 1, portfolioId: 4, stock: 'Infy', buy: 100, sell: 200, profit: 100, quantity: 1},
  ];
  constructor() { }

  getAllPortfolio(): Observable<Portfolio[]>{
    return of(this.portfolios);
  }

  addPortfolio(newPortfolio: Portfolio) : Observable<Portfolio>{
    let maxId = Math.max.apply(Math, this.portfolios.map((p) => p.portfolioId));
    newPortfolio.portfolioId = maxId + 1;
    newPortfolio.amountAdded = 0;
    newPortfolio.portfolioType = 1;
    newPortfolio.profit = 0; 

    this.portfolios.push(newPortfolio);
    return of(newPortfolio);
  }

  getPortfolio(id: number): Observable<Portfolio>{
    return of(this.portfolios.find(p => p.portfolioId == id));
  }

  getTradeDetails(portfolioId: number): Observable<Trade[]> {
    return of(this.trades.filter(p => p.portfolioId == portfolioId));
  }
}
