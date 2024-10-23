import { Injectable, signal } from '@angular/core';
import { Job } from '../../feature/models/jobs.models';
import { jobMock } from '../../feature/jobs.mock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Job[]>(jobMock);
}
