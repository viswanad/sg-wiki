import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wiki-display-component',
  templateUrl: './wiki-display-component.component.html',
  styleUrls: ['./wiki-display-component.component.css']
})
export class WikiDisplayComponentComponent implements OnInit {
  page: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // grab the current page
    this.route.params.subscribe(params => {
      this.page = params.page;
    });
  }



}
