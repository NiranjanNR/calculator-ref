import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-mul',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mul.component.html',
  styleUrl: './mul.component.scss',
})
export class MulComponent {
  public result: number | null = null;
  public input1: number | null = null;
  public input2: number | null = null;
  mul(): void {
    if (this.input1 !== null && this.input2 !== null) {
      this.result = this.input1 * this.input2;
    }
  }
}
