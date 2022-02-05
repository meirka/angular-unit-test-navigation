import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {render} from "@testing-library/angular";
import user from "@testing-library/user-event";

describe('AppComponent-TestingLibrary', () => {

  it('should create the app', async () => {
    let subject = await render(AppComponent, {imports: [AppModule, RouterTestingModule]});

    const app = subject.fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render welcome', async () => {
    let subject = await render(AppComponent, {imports: [AppModule, RouterTestingModule]});

    expect(subject.fixture.debugElement.query(By.css('.app-main')).nativeElement.textContent).toContain('Navigation test');
  });

  it('navigates to score', async () => {
    let subject = await render(AppComponent, {imports: [AppModule, RouterTestingModule]});
    await subject.navigate('/');

    user.click(await subject.findByText("go to score", {selector: 'a'}));

    expect(await subject.findByText('score works!')).toBeTruthy();
  });

  it('navigates to score and back', async () => {
    let subject = await render(AppComponent, {imports: [AppModule, RouterTestingModule]});
    await subject.navigate('/');

    expect(await subject.findByText('press-release works!')).toBeTruthy();

    user.click(await subject.findByText("go to score", {selector: 'a'}));

    expect(await subject.findByText('score works!')).toBeTruthy();

    user.click(await subject.findByText('Back', {selector: 'button'}));

    expect(await subject.findByText('press-release works!')).toBeTruthy();
  });
});
