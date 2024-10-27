import { computed, Injectable, signal } from '@angular/core';
import { Job } from '../../feature/models/jobs.models';
import { jobMock } from '../../feature/jobs.mock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Job[]>(jobMock);
  selectedJob = signal<Job>(null);
  filterValue = signal('');
  sortSalary = signal('');
  sortWork = signal('');

  jobSelect(job: Job) {
    this.selectedJob.set(job);
  }

  totalJobs = computed(() => this.jobs().length);

  totalAppliedJobs = computed(
    () => this.jobs().filter((job) => job.isApplied === true).length
  );

  applyWithdraw(jobId: number) {
    this.jobs.update((prevJobs) =>
      prevJobs.map((job) => {
        if (job.id === jobId) {
          return {
            ...job,
            isApplied: !job.isApplied,
          };
        }
        return job;
      })
    );
  }
}
