import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { SharedModule } from '../shared/shared.module';
import { NewPortfolioComponent } from './new-portfolio/new-portfolio.component';

const routes: Routes = [
  { path: 'portfolio/list', component: PortfolioListComponent },
  { path: 'portfolio/new', component: NewPortfolioComponent }
];

@NgModule({
  declarations: [PortfolioListComponent, PortfolioCardComponent, NewPortfolioComponent],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PortfolioModule { }
