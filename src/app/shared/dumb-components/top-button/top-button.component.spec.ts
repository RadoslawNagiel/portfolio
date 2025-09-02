import { render } from '@testing-library/angular';
import { TopIconButtonComponent } from './top-button.component';
import { screen } from '@testing-library/dom';
import { TranslateModule } from '@ngx-translate/core';
import userEvent from '@testing-library/user-event';
import { NgStyle } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { fakeAsync, tick } from '@angular/core/testing';

describe(`TopIconButtonComponent`, () => {
  const setup = async () =>
    render(TopIconButtonComponent, {
      imports: [TranslateModule.forRoot(), MatTooltipModule, NgStyle],
    });

  const getButton = (): HTMLButtonElement => screen.getByRole(`button`);

  it(`should not display the button at startup`, async () => {
    await setup();

    const button = getButton();
    expect(button.disabled).toBeTrue();
    expect(button.style.opacity).toBe(`0`);
  });

  it(`should display the button while offset exceeds 500px`, async () => {
    const { fixture } = await setup();
    const button = getButton();

    const spy = spyOnProperty(document.documentElement, 'scrollTop', 'get');
    spy.and.returnValue(499);
    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();
    expect(button.disabled).toBeTrue();
    expect(button.style.opacity).toBe(`0`);

    spy.and.returnValue(500);
    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
    expect(button.style.opacity).toBe(`100`);
  });

  it(`should scroll to the top of the page while the button is clicked`, fakeAsync(async () => {
    await setup();
    const scrollSpy = spyOn(document.body, 'scrollIntoView');
    const spy = spyOnProperty(document.documentElement, 'scrollTop', 'get');

    spy.and.returnValue(500);
    window.dispatchEvent(new Event('scroll'));

    const button = getButton();
    userEvent.click(button);
    tick(0);

    expect(scrollSpy).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }));
});
