import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelevementsComponent } from './prelevements.component';

describe('PrelevementsComponent', () => {
  let component: PrelevementsComponent;
  let fixture: ComponentFixture<PrelevementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrelevementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrelevementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
