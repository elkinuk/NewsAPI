import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/services/landing/landing.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private landingService: LandingService) { }

  hideTitleBlock() {
    this.landingService.updateTitleBlockValue('');
  }

  ngOnInit() {
    this.hideTitleBlock();
  }

}
