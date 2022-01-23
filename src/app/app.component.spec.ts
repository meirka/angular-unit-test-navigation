import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
    });

    fixture = TestBed.createComponent(AppComponent);
    const router = TestBed.inject(Router);
    router.initialNavigation();
    fixture.autoDetectChanges(true);
  });

  let fixture: ComponentFixture<AppComponent>;

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render welcome', () => {
    expect(
      fixture.debugElement.query(By.css('.app-main')).nativeElement.textContent
    ).toContain('Navigation test');
  });

  it('has link to go to score', () => {
    expect(
      fixture.debugElement.query(By.css('.app-go-to-score')).nativeElement
        .textContent
    ).toContain('go to score');
  });

  it('navigates to score', async () => {
    fixture.debugElement
      .query(By.css('.app-go-to-score'))
      .triggerEventHandler('click', { button: 0 });
    await fixture.whenStable();

    expect(
      fixture.debugElement.query(By.css('.app-score')).nativeElement.textContent
    ).toContain('score works!');
  });

  it('navigates to score and back', async () => {
    fixture.debugElement
      .query(By.css('.app-go-to-score'))
      .triggerEventHandler('click', { button: 0 });
    await fixture.whenStable();

    fixture.ngZone?.run(() => {
      fixture.debugElement
        .query(By.css('.app-go-back'))
        .triggerEventHandler('click', { button: 0 });
    });
    await fixture.whenStable();

    expect(
      fixture.debugElement.query(By.css('.app-release')).nativeElement
        .textContent
    ).toContain('press-release works!');
  });
});
