import { Component } from '@angular/core';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pinboard',
  imports: [
    CommonModule,
    ShoppingListComponent
  ],
  templateUrl: './pinboard.component.html',
  styleUrl: './pinboard.component.scss'
})
export class PinboardComponent {

}
