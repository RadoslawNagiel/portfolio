import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { FilterLabelComponent } from './filter-label.component';

describe(`FilterLabelComponent`, () => {
  let fixture: ComponentFixture<FilterLabelComponent>;
  let component: FilterLabelComponent;

  const labelText = `Test label`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterLabelComponent, TranslateModule.forRoot()],
    });

    fixture = TestBed.createComponent(FilterLabelComponent);
    fixture.componentRef.setInput(`label`, labelText);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it(`should be created`, () => {
    expect(component).toBeDefined();
  });

  it(`should displayed label`, () => {
    const labelElement: HTMLElement = fixture.debugElement.query(
      By.css(`.filter-label`)
    ).nativeElement;
    expect(labelElement.textContent.trim()).toBe(labelText);
  });

  it(`should toggle the clear icon if the #displayClearIcon parameter is set`, () => {
    let clearIcon = fixture.debugElement.query(By.css(`#clear-icon`));
    expect(clearIcon?.nativeElement).not.toBeDefined();

    fixture.componentRef.setInput(`displayClearIcon`, true);
    fixture.detectChanges();
    clearIcon = fixture.debugElement.query(By.css(`#clear-icon`));
    expect(clearIcon.nativeElement).toBeDefined();
  });

  it(`should emit an event if the clear icon is clicked`, () => {
    spyOn(component.clear, `emit`);

    fixture.componentRef.setInput(`displayClearIcon`, true);
    fixture.detectChanges();

    const clearIcon = fixture.debugElement.query(
      By.css(`#clear-icon`)
    ).nativeElement;
    clearIcon.click();

    expect(component.clear.emit).toHaveBeenCalled();
  });
});
