import { Component } from "@angular/core";

@Component({
  selector: "button[app-button-layout]",
  standalone: true,
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './button-layout.component.scss'
})

export class ButtonLayoutComponent {
}
