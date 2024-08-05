import { Component } from '@angular/core';
import { ButtonLayoutComponent } from '../button-layout/button-layout.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonLayoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
