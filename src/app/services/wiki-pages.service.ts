import { Injectable } from '@angular/core';

import {
  HttpClient, HttpEvent, HttpEventType, HttpProgressEvent,
  HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import { WikiPage } from './wiki-page';

@Injectable({
  providedIn: 'root'
})
export class WikiPagesService {
  apiUrl = 'api/';  // URL to web api

  constructor(private http: HttpClient) { }

  //////// Save methods //////////

  /** POST: add a wiki page to the database */
  createWikiPage (wikiPage: WikiPage) {
    this.http.post(this.apiUrl + 'save/wiki-page', wikiPage)
      .subscribe(response => console.log(response));
  }

  /** POST: get a wiki page/pages from the database */
  getWikiPages (wikiPageId: Object = {}) {
    return this.http.post(this.apiUrl + 'wiki-pages', wikiPageId);
  }
}
