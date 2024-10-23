import { Component, input, OnInit } from '@angular/core';
import { Job } from '../models/jobs.models';
import { ToogleDetailsDirective } from '../../core/directives/toogle-details.directive';

@Component({
  selector: 'app-jobs-item',
  standalone: true,
  imports: [ToogleDetailsDirective],
  templateUrl: './jobs-item.component.html',
  styleUrl: './jobs-item.component.scss',
})
export class JobsItemComponent implements OnInit {
  job = input<Job>();

  ngOnInit() {}
}
