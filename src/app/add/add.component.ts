import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  public result: number | null = null;
  public input1: number | null = null;
  public input2: number | null = null;
  add(): void {
    if (this.input1 !== null && this.input2 !== null) {
      this.result = this.input1 + this.input2;
    }
  }
}
