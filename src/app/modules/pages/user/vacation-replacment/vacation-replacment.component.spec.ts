import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationReplacmentComponent } from './vacation-replacment.component';

describe('VacationReplacmentComponent', () => {
  let component: VacationReplacmentComponent;
  let fixture: ComponentFixture<VacationReplacmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationReplacmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationReplacmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
