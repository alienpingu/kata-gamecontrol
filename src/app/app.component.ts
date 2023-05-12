import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameControl KATA';
  value: number = 0;
  
  onCounterChange(counter: number) {
    // counter % 2 === 0 ? this.evens.push(counter) : this.odds.push(counter)
    this.value = counter;
  }

}
