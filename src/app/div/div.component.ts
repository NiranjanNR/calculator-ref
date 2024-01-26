import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-div',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './div.component.html',
  styleUrl: './div.component.scss',
})
export class DivComponent {
  public result: number | null = null;
  public input1: number | null = null;
  public input2: number | null = null;
  div(): void {
    if (this.input1 !== null && this.input2 !== null) {
      this.result = this.input1 / this.input2;
    }
  }
}
