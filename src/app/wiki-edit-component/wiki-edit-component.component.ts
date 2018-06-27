import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { TdTextEditorComponent } from '@covalent/text-editor';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // grab the current page
    this.route.params.subscribe(params => {
      this.page = params.page;
    });
  }

  ngAfterViewInit(): void {
    this._textEditor.togglePreview();
  }
}

