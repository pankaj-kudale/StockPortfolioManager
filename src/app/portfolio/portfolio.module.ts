import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';

const routes: Routes = [
  { path: 'portfolio/list', component: PortfolioListComponent}
];

@NgModule({
  declarations: [PortfolioListComponent, PortfolioCardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PortfolioModule { }
