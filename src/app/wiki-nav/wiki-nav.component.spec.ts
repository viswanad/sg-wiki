
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiNavComponent } from './wiki-nav.component';

describe('WikiNavComponent', () => {
  let component: WikiNavComponent;
  let fixture: ComponentFixture<WikiNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
