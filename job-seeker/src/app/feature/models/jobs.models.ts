export interface Job {
  id: number;
  company: string;
  expires: string;
  position: string;
  startingSalary: number;
  workType: 'remote' | 'onsite' | 'hybrid';
  location: string;
  country: string;
  qualifications: string;
  description: string;
  isApplied: boolean;
}
