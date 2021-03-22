import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudPlansComponent } from './cloud-plans.component';

describe('CloudPlansComponent', () => {
  let component: CloudPlansComponent;
  let fixture: ComponentFixture<CloudPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
