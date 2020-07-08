import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'Platzi-Store';

  items = ['Nicolas', 'Santiago', 'David'];

  power = 10;

  objeto = {}; // objeto no son iterables solo arrays

  constructor() { }

  ngOnInit(): void {
    // code
  }

  addItem() {
    this.items.push( 'nuevo item' );
  }

  deleteItem( index: number ) {
    this.items.splice(index, 1);
  }
}
