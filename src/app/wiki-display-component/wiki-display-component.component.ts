import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiPagesService } from '../services/wiki-pages.service';
import { TdTextEditorComponent } from '@covalent/text-editor';
import { WikiPage } from '../services/wiki-page';

@Component({
  selector: 'app-wiki-display-component',
  templateUrl: './wiki-display-component.component.html',
  styleUrls: ['./wiki-display-component.component.css']
})
export class WikiDisplayComponentComponent implements OnInit {
  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;
  page: String;
  newPage: Object;
  wikiPage: any;
  constructor(private route: ActivatedRoute, private wikiPageService: WikiPagesService) { }

  ngOnInit() {
    // grab the current page
    this.route.params.subscribe(params => {
      this.page = params.page;
    });
    this.newPage = {
      wikiPageId: 'home'
    };
    this.wikiPageService.getWikiPages(this.newPage).subscribe(Response => {
      this.wikiPage = Response[0];
    });
  }



}
