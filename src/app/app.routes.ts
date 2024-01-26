import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { SubComponent } from './sub/sub.component';
import { HomeComponent } from './home/home.component';
import { MulComponent } from './mul/mul.component';
import { DivComponent } from './div/div.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'sub', component: SubComponent },
  { path: 'mul', component: MulComponent },
  { path: 'div', component: DivComponent },
];
