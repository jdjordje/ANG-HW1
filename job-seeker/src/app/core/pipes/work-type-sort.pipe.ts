import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../feature/models/jobs.models';

@Pipe({
  name: 'workTypeSort',
  standalone: true,
})
export class WorkTypeSortPipe implements PipeTransform {
  transform(value: Job[], workType: string): Job[] {
    if (!workType) return value;

    const sortWorkType = value.sort((a, b) => {
      if (a.workType < b.workType) {
        return -1;
      } else if (a.workType > b.workType) {
        return 1;
      } else {
        return 0;
      }
    });
    return sortWorkType;
  }
}
