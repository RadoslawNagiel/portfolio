import { TranslateModule } from '@ngx-translate/core';
import { render, screen } from '@testing-library/angular';
import { ByRoleMatcher, ByRoleOptions } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { FilterLabelComponent } from './filter-label.component';

describe(`FilterLabelComponent`, () => {
  const inputs = {
    label: `Test label`,
    buttonTooltip: `Clear tooltip`,
  };

  const buttonRole: [ByRoleMatcher, ByRoleOptions | undefined] = [
    `button`,
    { name: inputs.buttonTooltip },
  ];

  it(`should displayed label`, async () => {
    await render(FilterLabelComponent, {
      imports: [TranslateModule.forRoot()],
      inputs,
    });
    expect(screen.getByText(inputs.label)).toBeDefined();
  });

  it(`should not display the clear icon if the #displayClearIcon parameter is false`, async () => {
    await render(FilterLabelComponent, {
      imports: [TranslateModule.forRoot()],
      inputs: {
        ...inputs,
        displayClearIcon: false,
      },
    });
    expect(screen.queryByRole(...buttonRole)).toBeNull();
  });

  it(`should display the clear icon if the #displayClearIcon parameter is true`, async () => {
    await render(FilterLabelComponent, {
      imports: [TranslateModule.forRoot()],
      inputs: {
        ...inputs,
        displayClearIcon: true,
      },
    });
    expect(screen.getByRole(...buttonRole)).toBeDefined();
  });

  it(`should emit an event if the clear icon is clicked`, async () => {
    const { fixture } = await render(FilterLabelComponent, {
      imports: [TranslateModule.forRoot()],
      inputs: {
        ...inputs,
        displayClearIcon: true,
      },
    });
    spyOn(fixture.componentInstance.clear, `emit`);
    await userEvent.click(screen.getByRole(...buttonRole));
    expect(fixture.componentInstance.clear.emit).toHaveBeenCalled();
  });
});
