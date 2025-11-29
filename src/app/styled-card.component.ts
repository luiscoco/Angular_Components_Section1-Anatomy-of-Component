
import { Component } from '@angular/core';

@Component({
  selector: 'app-styled-card',
  standalone: true,
  template: `
    <section class="card">
      <h2>Styled Angular Component</h2>
      <p>This component has its own isolated styles.</p>
    </section>
  `,
  styles: [`
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      max-width: 320px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
      background: #ffffff;
    }

    h2 {
      margin-top: 0;
      font-size: 1.2rem;
      color: #1976d2;
    }
  `]
})
export class StyledCardComponent {}
