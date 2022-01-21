import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {PressReleaseComponent} from "./press-release/press-release.component";
import {ScoreComponent} from "./score/score.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {Router, RouterModule} from "@angular/router";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PressReleaseComponent,
        ScoreComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        RouterTestingModule,
        RouterModule,
      ]
    }).compileComponents();

    const router = TestBed.inject(Router);
    router.initialNavigation();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render welcome', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.app-main')?.textContent).toContain('Navigation test');
  });

  it('has link to go to score', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.app-go-to-score')?.textContent).toContain('go to score');
  });

  it('navigates to score', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    let querySelector = compiled.querySelector('.app-go-to-score') as HTMLElement;
    querySelector?.click();

    fixture.detectChanges();
    await fixture.whenStable();

    expect(compiled.querySelector('.app-score')?.textContent).toContain('score works!');
  });

  it('navigates to score and back', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    let gotoScore = compiled.querySelector('.app-go-to-score') as HTMLElement;
    gotoScore.click();

    fixture.detectChanges();
    await fixture.whenStable();

    let goBack = compiled.querySelector('.app-go-back') as HTMLElement;
    goBack.click();

    fixture.detectChanges();
    await fixture.whenStable();

    expect(compiled.querySelector('.app-release')?.textContent).toContain('press-release works!');
  });

});
