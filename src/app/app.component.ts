import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements  OnInit {
  title = 'app';
  page: String;
  constructor(private router: Router, location: Location) {}
  ngOnInit() {
    // grab the current page
    // console.log(location.pathname);
    // console.log(this.router.navigated);
  }
}
