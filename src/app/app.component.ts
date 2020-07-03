import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Platzi-Store';

  items = ['Nicolas', 'Santiago', 'David'];

  addItem() {
    this.items.push( 'nuevo item' );
  }

  deleteItem( index: number ) {
    this.items.splice(index, 1);
  }

}
