import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmalltoolsComponent } from './smalltools.component';

describe('SmalltoolsComponent', () => {
  let component: SmalltoolsComponent;
  let fixture: ComponentFixture<SmalltoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmalltoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmalltoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
