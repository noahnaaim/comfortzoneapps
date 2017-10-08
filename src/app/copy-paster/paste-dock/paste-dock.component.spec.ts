import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteDockComponent } from './paste-dock.component';

describe('PasteDockComponent', () => {
  let component: PasteDockComponent;
  let fixture: ComponentFixture<PasteDockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteDockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
