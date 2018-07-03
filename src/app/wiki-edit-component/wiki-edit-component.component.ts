import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { TdTextEditorComponent } from '@covalent/text-editor';
import { ActivatedRoute } from '@angular/router';
import { WikiPagesService } from '../services/wiki-pages.service';

@Component({
  selector: 'app-wiki-edit-component',
  templateUrl: './wiki-edit-component.component.html',
  styleUrls: ['./wiki-edit-component.component.css']
})
export class WikiEditComponentComponent implements  AfterViewInit, OnInit {
  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;
  title = 'app';
  options: any = {
    status: false,
    spellChecker: false,
    toolbar: [
      'bold',
      'italic',
      'heading',
      'heading-1',
      'heading-2',
      'heading-3',
      '|',
      'code',
      'quote',
       '|',
       'unordered-list',
       'ordered-list',
       '|',
       'preview']
  };

  page: String;
  wikiPage: any;
  editPage: Object;
  constructor(private route: ActivatedRoute, private wikiPageService: WikiPagesService) { }

  ngOnInit() {
    // grab the current page
    this.route.params.subscribe(params => {
      this.page = params.page;
    });

    this.editPage = {
      wikiPageId: this.page
    };

    this.wikiPageService.getWikiPages(this.editPage).subscribe(Response => {
      this.wikiPage = Response[0];
    });
    // this.wikiPageService.createWikiPage(newPage);
  }

  ngAfterViewInit(): void {
    if (this._textEditor) {
     this._textEditor.togglePreview();
    }
  }

  saveWikipage() {
    this.wikiPage.wiki_page_content = this._textEditor.value;
    console.log(this._textEditor.value);
    this.wikiPageService.createWikiPage(this.wikiPage);
  }

}

