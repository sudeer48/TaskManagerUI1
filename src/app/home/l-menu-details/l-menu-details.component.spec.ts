import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LMenuDetailsComponent } from './l-menu-details.component';

describe('LMenuDetailsComponent', () => {
  let component: LMenuDetailsComponent;
  let fixture: ComponentFixture<LMenuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LMenuDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LMenuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
