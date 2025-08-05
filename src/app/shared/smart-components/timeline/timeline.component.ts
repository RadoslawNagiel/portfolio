import { Component, computed, input } from '@angular/core';
import { ProjectInfo } from '../../data/projects';
import { DateTime } from 'luxon';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [DatePipe, NgClass],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.styles.scss',
})
export class TimelineComponent {
  min = input.required<Date>();
  max = input<Date>(new Date());

  selectedYear = input<number>(new Date().getFullYear());

  projects = input<ProjectInfo[]>([]);

  monthsArray = computed(() => {
    return Array.from(
      Array(
        Math.round(
          DateTime.fromJSDate(this.max()).diff(
            DateTime.fromJSDate(this.min()),
            `months`
          ).months
        ) + 1
      ).keys()
    ).map((el, index) =>
      DateTime.fromJSDate(this.max())
        .startOf(`month`)
        .minus({ month: index })
        .toJSDate()
    );
  });
}
