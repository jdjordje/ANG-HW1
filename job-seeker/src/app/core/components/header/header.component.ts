import { Component, inject, output } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private jobsService = inject(JobsService);
  totalJobs = this.jobsService.totalJobs;
  totalAppliedJobs = this.jobsService.totalAppliedJobs;

  filterValue = this.jobsService.filterValue;
  sortSalary = this.jobsService.sortSalary;
  sortWork = this.jobsService.sortWork;

  navOutput = output();

  onFilterClick(event: Event) {
    const target = event.target as HTMLLIElement;
    this.filterValue.set(target.title);
  }

  onSortSalaryClick(event: Event) {
    const target = event.target as HTMLLIElement;
    this.sortSalary.set(target.title);
  }

  onSortWorkTypeClick(event: Event) {
    const target = event.target as HTMLLIElement;
    this.sortWork.set(target.title);
  }

  onSortResetClick(event: Event) {
    const target = event.target as HTMLLIElement;
    this.sortWork.set(null);
    this.sortSalary.set(null);
  }

  onSortClick() {
    this.navOutput.emit();
  }
}
