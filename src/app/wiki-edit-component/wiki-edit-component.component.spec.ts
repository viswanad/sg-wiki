import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiEditComponentComponent } from './wiki-edit-component.component';

describe('WikiEditComponentComponent', () => {
  let component: WikiEditComponentComponent;
  let fixture: ComponentFixture<WikiEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
