import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appToogleDetails]',
  standalone: true,
})
export class ToogleDetailsDirective implements OnInit {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  isInitiallyOpen = input(false);
  jobDetailsEl: HTMLDivElement;
  isOpen = false;

  jobDetailTitle: HTMLHeadingElement;

  ngOnInit() {
    this.jobDetailsEl =
      this.elementRef.nativeElement.querySelector('.more-info');

    this.jobDetailTitle =
      this.elementRef.nativeElement.querySelector('.heading');

    this.isOpen = this.isInitiallyOpen();

    this.renderer.setStyle(
      this.jobDetailsEl,
      'display',
      this.isOpen ? 'block' : 'none'
    );
  }

  @HostListener('click') onClick() {
    if (!this.isOpen) {
      this.isOpen = !this.isOpen;
      this.renderer.setStyle(
        this.jobDetailsEl,
        'display',
        this.isOpen ? 'block' : 'none'
      );
      this.jobDetailTitle.innerHTML =
        'More info <i class="fa-solid fa-caret-up"></i>';
    } else {
      this.isOpen = !this.isOpen;
      this.renderer.setStyle(
        this.jobDetailsEl,
        'display',
        this.isOpen ? 'block' : 'none'
      );
      this.jobDetailTitle.innerHTML =
        'More info <i class="fa-solid fa-caret-down"></i>';
    }
  }
}
