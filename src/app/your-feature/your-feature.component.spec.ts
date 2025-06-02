import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFeatureComponent } from './your-feature.component';

describe('YourFeatureComponent', () => {
  let component: YourFeatureComponent;
  let fixture: ComponentFixture<YourFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
