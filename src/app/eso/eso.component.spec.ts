import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EsoComponent } from './eso.component';

describe('EsoComponent', () => {
  let component: EsoComponent;
  let fixture: ComponentFixture<EsoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EsoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
