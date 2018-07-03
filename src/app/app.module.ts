import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WikiNavComponent } from './wiki-nav/wiki-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { WikiDisplayComponentComponent } from './wiki-display-component/wiki-display-component.component';
import { WikiEditComponentComponent } from './wiki-edit-component/wiki-edit-component.component';
import { AppRoutingModule } from './app-routing.module';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { HttpClientModule } from '@angular/common/http';
import { WikiPagesService } from './services/wiki-pages.service';

@NgModule({
  declarations: [
    AppComponent,
    WikiNavComponent,
    WikiDisplayComponentComponent,
    WikiEditComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    CovalentTextEditorModule,
    HttpClientModule
  ],
  providers: [WikiPagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
