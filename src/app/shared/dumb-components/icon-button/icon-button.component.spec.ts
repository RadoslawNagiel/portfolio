import { TranslateModule } from '@ngx-translate/core';
import { render } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { IconButtonComponent } from './icon-button.component';

describe(`IconButtonComponent`, () => {
  const inputs = {
    icon: `testIcon`,
    ariaLabel: `Test aria`,
  };

  const getButton = () =>
    screen.getByRole(`button`, { name: inputs.ariaLabel });

  it(`should displayed button`, async () => {
    await render(IconButtonComponent, {
      inputs,
      imports: [TranslateModule.forRoot()],
    });
    expect(getButton()).toBeDefined();
  });

  it(`should emit clicked event`, async () => {
    const { fixture } = await render(IconButtonComponent, {
      inputs,
      imports: [TranslateModule.forRoot()],
    });

    spyOn(fixture.componentInstance.clicked, `emit`);
    await userEvent.click(getButton());
    expect(fixture.componentInstance.clicked.emit).toHaveBeenCalled();
  });
});
