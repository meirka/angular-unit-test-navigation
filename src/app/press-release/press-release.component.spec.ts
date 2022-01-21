import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseComponent } from './press-release.component';

describe('PressReleaseComponent', () => {
  let component: PressReleaseComponent;
  let fixture: ComponentFixture<PressReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
