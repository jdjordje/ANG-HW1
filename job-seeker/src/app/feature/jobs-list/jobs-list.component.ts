import { Component, inject, OnInit } from '@angular/core';
import { JobsService } from '../../core/services/jobs.service';
import { JobsItemComponent } from '../jobs-item/jobs-item.component';
import { FilterPipe } from '../../core/pipes/filter.pipe';
import { NumberSortPipe } from '../../core/pipes/number-sort.pipe';
import { WorkTypeSortPipe } from '../../core/pipes/work-type-sort.pipe';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [JobsItemComponent, FilterPipe, NumberSortPipe, WorkTypeSortPipe],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss',
})
export class JobsListComponent implements OnInit {
  private jobsService = inject(JobsService);

  jobs = this.jobsService.jobs;
  filterValue = this.jobsService.filterValue;
  numberSortValue = this.jobsService.sortSalary;
  sortWork = this.jobsService.sortWork;

  ngOnInit() {}
}
