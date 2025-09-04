import { render } from '@testing-library/angular';
import { SearchComponent } from './search.component';
import { TranslateModule } from '@ngx-translate/core';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { fakeAsync, tick } from '@angular/core/testing';
import { SearchService } from '../../services/search.service';

const testText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis auctor rhoncus. Etiam nisi ex, maximus eu semper vitae, pulvinar aliquam nibh. Fusce ac lacinia eros. Vivamus et gravida dui, id laoreet odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et molestie dui. Mauris lorem metus, aliquam eget metus quis, laoreet consequat felis. Vivamus eleifend tellus sed libero laoreet mattis. Integer non commodo urna. Praesent quis iaculis nisl, eu lacinia lacus.`;

describe(`SearchComponent`, () => {
  class MockSearchService {
    valueChanged = jasmine.createSpy('valueChanged');
  }

  const setup = async (inputs?: { interactive?: boolean; disabled?: boolean }) =>
    render(SearchComponent, {
      imports: [TranslateModule.forRoot()],
      providers: [{ provide: SearchService, useClass: MockSearchService }],
      inputs,
    });

  const getSearchButton = () => screen.getByRole(`button`, { name: `header.search.filter` });
  const getClearButton = () => screen.getByRole(`button`, { name: `header.search.close` });
  const getSearchInput = (): HTMLInputElement => screen.getByRole(`textbox`, { name: `header.search.filter` });

  it(`should display a search icon`, async () => {
    await setup();
    expect(getSearchButton()).toBeDefined();
  });

  it(`should displayed the input if the #interactive parameter is false`, fakeAsync(async () => {
    await setup({ interactive: false });
    expect(getSearchInput()).toHaveClass(`visible`);
  }));

  it(`should hide the input after clicking the clear icon`, fakeAsync(async () => {
    await setup();
    userEvent.click(getSearchButton());
    tick(0);

    userEvent.click(getClearButton());
    tick(0);

    expect(getSearchInput()).not.toHaveClass(`visible`);
  }));

  it(`should send value changes to SearchService`, fakeAsync(async () => {
    const { fixture } = await setup();
    const searchService = fixture.debugElement.injector.get(SearchService);

    userEvent.click(getSearchButton());
    tick(0);

    userEvent.type(getSearchInput(), `Test`);
    tick(0);

    expect(searchService.valueChanged).toHaveBeenCalledWith(`T`);
    expect(searchService.valueChanged).toHaveBeenCalledWith(`Te`);
    expect(searchService.valueChanged).toHaveBeenCalledWith(`Tes`);
    expect(searchService.valueChanged).toHaveBeenCalledWith(`Test`);
  }));

  it(`should cut to 255 characters in the input`, fakeAsync(async () => {
    await setup();
    userEvent.click(getSearchButton());
    tick(0);

    const input = getSearchInput();
    userEvent.type(input, testText);
    tick(0);

    expect(input.value.length).toBe(255);
  }));

  it(`should clear the input after clicking the clear icon`, fakeAsync(async () => {
    await setup();
    userEvent.click(getSearchButton());
    tick(0);

    const input = getSearchInput();
    userEvent.type(input, `Test`);
    tick(0);

    userEvent.click(getClearButton());
    tick(0);

    expect(input.value).toBe(``);
  }));

  it(`should displayed the input after clicking the search icon`, fakeAsync(async () => {
    await setup();
    const button = getSearchButton();
    userEvent.click(button);
    tick(0);

    const input = getSearchInput();
    expect(input).toHaveClass(`visible`);
  }));

  it(`should emit a close event when the #interactive parameter is false and the close button is clicked`, fakeAsync(async () => {
    const { fixture } = await setup({ interactive: false });
    spyOn(fixture.componentInstance.closed, `emit`);
    fixture.componentInstance.openSearch();

    userEvent.click(getClearButton());
    tick(0);

    expect(fixture.componentInstance.closed.emit).toHaveBeenCalled();
  }));

  it(`should disabled the input when the #disabled parameter is true`, async () => {
    await setup({ disabled: true });
    expect(getSearchInput().disabled).toBeTrue();
  });

  it(`should enable the input when the #disabled parameter is false`, async () => {
    await setup({ disabled: false });
    expect(getSearchInput().disabled).toBeFalse();
  });
});
