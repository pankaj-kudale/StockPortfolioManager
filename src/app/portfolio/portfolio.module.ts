import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { SharedModule } from '../shared/shared.module';
import { NewPortfolioComponent } from './new-portfolio/new-portfolio.component';
import { EditPortfolioComponent } from './edit-portfolio/edit-portfolio.component';

const routes: Routes = [
  { path: 'portfolio/list', component: PortfolioListComponent },
  { path: 'portfolio/new', component: NewPortfolioComponent },
  { path: 'portfolio/edit/:id', component: EditPortfolioComponent }
];

@NgModule({
  declarations: [PortfolioListComponent, PortfolioCardComponent, NewPortfolioComponent, EditPortfolioComponent],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    NgxChartsModule
  ]
})
export class PortfolioModule { }
