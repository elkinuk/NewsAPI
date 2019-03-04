import { Component, OnInit } from "@angular/core";
import { LandingService } from "src/app/services/landing/landing.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  public submitted: boolean;

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(private landingService: LandingService, private router: Router) {}

  hideTitleBlock() {
    this.landingService.updateTitleBlockValue("");
  }

  setUserName(username: string) {
    this.landingService.updateLoginValue(username);
  }

  logIn() {
    this.submitted = true;
    const username = this.loginForm.value.username;
    if (!this.loginForm.invalid) {
      this.setUserName(username);
      this.router.navigate(["/news"]);
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.hideTitleBlock();
  }
}
