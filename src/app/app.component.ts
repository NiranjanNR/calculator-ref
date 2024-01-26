import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterOutlet, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, AddComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // public result: number | null = null;
  // public input1: number | null = null;
  // public input2: number | null = null;
  // add(): void {
  //   if (this.input1 !== null && this.input2 !== null) {
  //     this.result = this.input1 + this.input2;
  //   }
  // }
  // subtract(): void {
  //   if (this.input1 !== null && this.input2 !== null) {
  //     this.result = this.input1 - this.input2;
  //   }
  // }
  // multiply(): void {
  //   if (this.input1 !== null && this.input2 !== null) {
  //     this.result = this.input1 * this.input2;
  //   }
  // }
  // divide(): void {
  //   if (this.input1 !== null && this.input2 !== null && this.input2 !== 0) {
  //     this.result = this.input1 / this.input2;
  //   }
  // }
}
