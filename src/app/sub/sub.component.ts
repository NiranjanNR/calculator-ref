import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sub',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.scss',
})
export class SubComponent {
  public result: number | null = null;
  public input1: number | null = null;
  public input2: number | null = null;
  sub(): void {
    if (this.input1 !== null && this.input2 !== null) {
      this.result = this.input1 - this.input2;
    }
  }
}
