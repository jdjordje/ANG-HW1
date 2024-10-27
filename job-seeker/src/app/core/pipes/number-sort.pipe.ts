import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../feature/models/jobs.models';

@Pipe({
  name: 'numberSort',
  standalone: true,
})
export class NumberSortPipe implements PipeTransform {
  transform(value: Job[], sortValue: string): Job[] {
    if (!sortValue) return value;

    const sortJobs = value.sort((a, b) => b.startingSalary - a.startingSalary);

    return sortJobs;
  }
}
