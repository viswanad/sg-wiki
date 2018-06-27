import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiDisplayComponentComponent } from './wiki-display-component.component';

describe('WikiDisplayComponentComponent', () => {
  let component: WikiDisplayComponentComponent;
  let fixture: ComponentFixture<WikiDisplayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiDisplayComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
