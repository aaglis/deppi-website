import { Component } from '@angular/core';
import { ButtonLayoutComponent } from '../button-layout/button-layout.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonLayoutComponent, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  switchImg: boolean = false

  toggleBtn() {
    this.switchImg = !this.switchImg
  }
}
