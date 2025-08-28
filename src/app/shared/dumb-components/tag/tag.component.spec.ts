import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { Tag, TAGS } from '../../data/tags';
import TagComponent from './tag.component';

describe(`TagComponent`, () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  let tagElement: HTMLElement;

  const testProjectTypeTag: Tag = structuredClone(TAGS[`private`]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TagComponent, TranslateModule.forRoot(), MatTooltipModule],
    });

    fixture = TestBed.createComponent(TagComponent);
    fixture.componentRef.setInput(`tag`, testProjectTypeTag);
    component = fixture.componentInstance;

    tagElement = fixture.debugElement.query(By.css(`.tag`)).nativeElement;

    fixture.detectChanges();
  });

  it(`should be created`, () => {
    expect(component).toBeDefined();
  });

  it(`should render tag name`, () => {
    expect(tagElement.textContent.trim()).toBe(testProjectTypeTag.name);
  });

  it(`should toggle "cursor-pointer" class based on #selectable input`, () => {
    expect(tagElement.classList).not.toContain(`cursor-pointer`);

    fixture.componentRef.setInput(`selectable`, true);
    fixture.detectChanges();
    expect(tagElement.classList).toContain(`cursor-pointer`);
  });

  it(`should toggle "not-selected" class based on #isNotSelected input`, () => {
    expect(tagElement.classList).not.toContain(`not-selected`);

    fixture.componentRef.setInput(`isNotSelected`, true);
    fixture.detectChanges();
    expect(tagElement.classList).toContain(`not-selected`);
  });

  it(`should emit clicked event when tag is clicked`, () => {
    spyOn(component.clicked, `emit`);
    tagElement.click();
    expect(component.clicked.emit).toHaveBeenCalled();
  });
});
