import { Component, computed, input, output } from '@angular/core';
import { ProjectInfo } from '../../data/projects';
import { DateTime } from 'luxon';
import { DatePipe, NgClass, NgStyle } from '@angular/common';
import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatTooltipModule,
} from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

export interface MontBlock {
  date: Date;
  projects: (
    | {
        id: string;
        color: string;
        months?: number;
      }
    | undefined
  )[];
}

@Component({
  selector: 'app-timeline',
  imports: [DatePipe, NgClass, NgStyle, MatTooltipModule, TranslateModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.styles.scss',
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        disableTooltipInteractivity: true,
      },
    },
  ],
})
export class TimelineComponent {
  min = input.required<Date>();
  max = input<Date>(new Date());

  selectedYear = input<number>(new Date().getFullYear());

  projects = input<ProjectInfo[]>([]);

  projectClicked = output<string>();
  yearSelected = output<number>();

  monthsArray = computed(() => {
    const elements: MontBlock[] = this.getNArray(
      Math.round(
        DateTime.fromJSDate(this.max()).diff(
          DateTime.fromJSDate(this.min()),
          `months`
        ).months
      ) + 1
    ).map((el, index) => {
      return {
        date: DateTime.fromJSDate(this.max())
          .startOf(`month`)
          .minus({ month: index })
          .toJSDate(),
        projects: [],
      };
    });

    const projects = structuredClone(this.projects());
    projects.sort((a, b) => a.dateFrom.getTime() - b.dateFrom.getTime());
    projects.forEach((el) => {
      const start = DateTime.fromJSDate(el.dateFrom).endOf(`month`).toJSDate();
      let end = el.dateTo;
      if (!end) {
        if (el.inProgress) {
          end = new Date();
        } else {
          end = start;
        }
      }
      end = DateTime.fromJSDate(end).endOf(`month`).toJSDate();

      const months =
        Math.round(
          DateTime.fromJSDate(end).diff(DateTime.fromJSDate(start), `months`)
            .months
        ) + 1;

      const elementsFirstIndex = elements.findIndex(
        (el) => el.date.getTime() < end.getTime()
      );
      const elementsPart = structuredClone(elements).splice(
        elementsFirstIndex,
        months
      );
      let index = -1;
      let found = false;
      do {
        ++index;
        const element = elementsPart.find((el) => el.projects[index]);
        if (!element) {
          found = true;
        }
      } while (!found);
      for (let i = 0; i < elements.length; ++i) {
        if (i >= elementsFirstIndex && i < elementsFirstIndex + months) {
          elements[i].projects[index] = {
            color: el.color,
            id: el.id,
            months: i === elementsFirstIndex ? months : undefined,
          };
        } else {
          if (!elements[i].projects[index]) {
            elements[i].projects[index] = undefined;
          }
        }
      }
    });
    return elements;
  });

  getNArray(amount: number) {
    return Array.from(Array(amount).keys());
  }
}
