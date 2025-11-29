
import { Component } from '@angular/core';

@Component({
  selector: 'hello-component',
  standalone: true,
  template: `
    <h2>Hello from Angular component!</h2>
    <p>The time is: {{ currentTime }}</p>
  `
})
export class HelloComponent {
  currentTime = new Date().toLocaleTimeString();
}
