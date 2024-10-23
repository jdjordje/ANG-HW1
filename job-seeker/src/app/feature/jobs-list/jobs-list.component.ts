import { Component, inject, OnInit } from '@angular/core';
import { JobsService } from '../../core/services/jobs.service';

import { JobsItemComponent } from '../jobs-item/jobs-item.component';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [JobsItemComponent],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent implements OnInit {
  private jobsService = inject(JobsService);

  jobs = this.jobsService.jobs;

  ngOnInit() {}
}
