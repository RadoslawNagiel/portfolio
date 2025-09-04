import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe(`ThemeService`, () => {
  let store: Record<string, string>;
  let prefersDark: boolean;

  beforeEach(() => {
    // mock localStorage
    store = {};
    spyOn(localStorage, 'getItem').and.callFake((k: string) => store[k] ?? null);
    spyOn(localStorage, 'setItem').and.callFake((k: string, v: string) => {
      store[k] = v;
    });

    // mock matchMedia
    prefersDark = false;
    spyOn(window, 'matchMedia').and.callFake((query: string) => {
      return {
        matches: prefersDark,
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
        addListener: () => {},
        removeListener: () => {},
      } as MediaQueryList;
    });

    document.documentElement.className = '';

    TestBed.configureTestingModule({
      providers: [ThemeService],
    });
  });

  const create = () => TestBed.inject(ThemeService);

  const documentContainDarkPaletteClass = () => document.documentElement.classList.contains('ion-palette-dark');

  it(`should be created`, () => {
    const service = create();
    expect(service).toBeTruthy();
  });

  it(`set the default theme with prefers-color-scheme: dark`, () => {
    prefersDark = true;
    const service = create();

    expect(localStorage.setItem).toHaveBeenCalledWith('dark-theme', 'true');
    expect(service.isDarkThemeSelected()).toBeTrue();
    expect(documentContainDarkPaletteClass()).toBeTrue();
  });

  it(`set the default theme with prefers-color-scheme: light`, () => {
    prefersDark = false;
    const service = create();

    expect(localStorage.setItem).toHaveBeenCalledWith('dark-theme', 'false');
    expect(service.isDarkThemeSelected()).toBeFalse();
    expect(documentContainDarkPaletteClass()).toBeFalse();
  });

  it(`initialize from localStorage if the value is set`, () => {
    store['dark-theme'] = 'true';
    (window.matchMedia as jasmine.Spy).calls.reset();
    const service = create();

    expect(window.matchMedia).not.toHaveBeenCalled();
    expect(service.isDarkThemeSelected()).toBeTrue();
    expect(documentContainDarkPaletteClass()).toBeTrue();
  });

  it(`#setMode(true) function should set a dark theme`, () => {
    const service = create();
    service.setMode(true);

    expect(localStorage.setItem).toHaveBeenCalledWith('dark-theme', 'true');
    expect(service.isDarkThemeSelected()).toBeTrue();
    expect(documentContainDarkPaletteClass()).toBeTrue();
  });

  it(`#setMode(false) function should set a light theme`, () => {
    const service = create();
    service.setMode(false);

    expect(localStorage.setItem).toHaveBeenCalledWith('dark-theme', 'false');
    expect(service.isDarkThemeSelected()).toBeFalse();
    expect(documentContainDarkPaletteClass()).toBeFalse();
  });

  it(`#setDefaultTheme function should set theme from prefers-color-scheme`, () => {
    prefersDark = true;
    const service = create();

    prefersDark = false;
    service.setDefaultTheme();

    expect(localStorage.setItem).toHaveBeenCalledWith('dark-theme', 'false');
    expect(service.isDarkThemeSelected()).toBeFalse();
    expect(documentContainDarkPaletteClass()).toBeFalse();
  });
});
