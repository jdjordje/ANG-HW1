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

  ngOnInit() {
    this.jobDetailsEl =
      this.elementRef.nativeElement.querySelector('.more-info');

    this.isOpen = this.isInitiallyOpen();

    this.renderer.setStyle(
      this.jobDetailsEl,
      'display',
      this.isOpen ? 'block' : 'none'
    );
  }

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
    this.renderer.setStyle(
      this.jobDetailsEl,
      'display',
      this.isOpen ? 'block' : 'none'
    );
  }
}
