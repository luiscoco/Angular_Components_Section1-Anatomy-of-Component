
import { Component } from '@angular/core';
import { HelloComponent } from './hello.component';
import { StyledCardComponent } from './styled-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent, StyledCardComponent],
  template: `
    <div class="page">
      <header class="topbar">
        <h1>Section 1 - Anatomy of a Component</h1>
        <p>Minimal example of a class, template, selector and component-local styles.</p>
      </header>

      <main class="content">
        <section class="section">
          <h2>HelloComponent</h2>
          <p>A very simple component with a template and a property.</p>
          <hello-component></hello-component>
        </section>

        <section class="section">
          <h2>StyledCardComponent</h2>
          <p>A component with its own encapsulated styles.</p>
          <app-styled-card></app-styled-card>
        </section>
      </main>
    </div>
  `,
  styles: [`
    .page {
      min-height: 100vh;
      background: #f3f4f6;
    }

    .topbar {
      padding: 1rem 1.5rem;
      background: #111827;
      color: #f9fafb;
    }

    .content {
      padding: 1.5rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .section {
      background: #ffffff;
      border-radius: 0.75rem;
      padding: 1.25rem 1.5rem;
      margin-bottom: 1.25rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }

    .section h2 {
      margin-top: 0;
    }
  `]
})
export class AppComponent {}
