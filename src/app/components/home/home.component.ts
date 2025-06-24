import { Component } from '@angular/core';
import { PROJECTS } from '../../../assets/data/projects';
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe, NgStyle } from '@angular/common';
import { TAG, TAGS } from '../../../assets/data/tags';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, DatePipe, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  readonly projects = PROJECTS;

  getTagInfo(value: TAG) {
    return TAGS[value];
  }
}
