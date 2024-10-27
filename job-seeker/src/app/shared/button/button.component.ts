import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  text = input.required<string>();
  buttonClicked = output();
  style = input<{ [key: string]: string }>({});
  type = input<'button' | 'submit'>('submit');

  onButtonClick() {
    this.buttonClicked.emit();
  }
}
