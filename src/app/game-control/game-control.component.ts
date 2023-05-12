import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  counter: number = 0;
  intervalId: any;
  
  @Output() counterChange = new EventEmitter<number>();

  onStart() {
    this.intervalId = setInterval(() => {
      this.counter++;
      this.counterChange.emit(this.counter);
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervalId);
  }

}
