import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../feature/models/jobs.models';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: Job[], filterValue: string): Job[] {
    if (!filterValue) return value;

    const filterJobs = value.filter(
      (job) =>
        job.isApplied.toString().toLowerCase() === filterValue.toLowerCase()
    );

    return filterJobs;
  }
}
