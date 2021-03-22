import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudFeaturesComponent } from './cloud-features.component';

describe('CloudFeaturesComponent', () => {
  let component: CloudFeaturesComponent;
  let fixture: ComponentFixture<CloudFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
