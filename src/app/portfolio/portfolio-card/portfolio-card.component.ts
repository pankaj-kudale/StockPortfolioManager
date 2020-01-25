import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.less']
})
export class PortfolioCardComponent implements OnInit {
  @Input() portfolio;

  constructor() { }

  ngOnInit() {
  }

}
