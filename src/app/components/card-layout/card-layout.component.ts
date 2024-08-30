import { Component, HostBinding, Input } from '@angular/core';
import { ICards } from '../../core/interfaces/cards.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-layout',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent {
  @Input() cardInfos?: ICards;
  @Input() cardReverse?: string;

  @HostBinding('class') get hostClasses(): string | undefined {
    return this.cardReverse;
  }
}
