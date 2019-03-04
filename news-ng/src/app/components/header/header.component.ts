import { Component, OnInit, Input } from "@angular/core";
import { LandingService } from "src/app/services/landing/landing.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() showTitleBlock: string;

  public username: string;
  public titleBlockValue: string;

  constructor(private landingService: LandingService) {}

  ngOnInit() {
    this.landingService.getTitleBlockValue().subscribe(data => {
      this.titleBlockValue = data;
    });

    this.landingService.getLoginValue().subscribe(data => {
      this.username = data;
    });
  }
}
