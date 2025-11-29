# Angular-Components Section1: Anatomy-of-Component

## Application verification

<img width="1397" height="728" alt="image" src="https://github.com/user-attachments/assets/afd9074b-5758-478b-a08c-50a56b8a8378" />

## Project Folders and Files structure

<img width="418" height="626" alt="image" src="https://github.com/user-attachments/assets/1faeee76-a86b-4933-b104-aba722f84d63" />

## Source Code

**main.ts**

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
```

**app.component.ts**

```typescript

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
```

**hello.component.ts**

```typescript
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
```

**style-card.component.ts**

```typescript
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
```
