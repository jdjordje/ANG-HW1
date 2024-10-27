import { Component, inject, input } from '@angular/core';
import { Job } from '../models/jobs.models';
import { ToogleDetailsDirective } from '../../core/directives/toogle-details.directive';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { JobsService } from '../../core/services/jobs.service';

@Component({
  selector: 'app-jobs-item',
  standalone: true,
  imports: [
    ToogleDetailsDirective,
    TitleCasePipe,
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './jobs-item.component.html',
  styleUrl: './jobs-item.component.scss',
})
export class JobsItemComponent {
  private jobService = inject(JobsService);
  job = input<Job>();
  selectedJob = this.jobService.selectedJob;

  onJobItemSelect(job: Job) {
    this.jobService.jobSelect(job);
  }

  onApplyWithdraw() {
    this.jobService.applyWithdraw(this.selectedJob().id);
  }
}
