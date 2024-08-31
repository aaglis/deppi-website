import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  arrayLinks: {iconName: string, link: string}[] = [
    {iconName: 'facebook', link: 'https://pt-br.facebook.com/ifcemaracanau'},
    {iconName: 'linkedin', link: 'https://www.linkedin.com/in/deppi-ifce-maracana%C3%BA-183296215'},
    {iconName: 'youtube', link: 'https://www.youtube.com/c/IFCEcampusdeMaracana%C3%BA'},
    {iconName: 'instagram', link: 'https://www.instagram.com/ifcemaracanauoficial/?hl=pt-br'}
  ]

  arrayIcons: string[] = ['facebook', 'linkedin', 'youtube', 'instagram'];

}
