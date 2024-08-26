import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ICards } from '../../core/interfaces/cards.interface';
import { CardLayoutComponent } from '../../components/card-layout/card-layout.component';

@Component({
  selector: 'app-extensao',
  standalone: true,
  imports: [HeaderComponent, CardLayoutComponent],
  templateUrl: './extensao.component.html',
  styleUrl: './extensao.component.scss'
})
export class ExtensaoComponent {

  card: ICards = {
    title: 'Extensão Universitária',
    preTitle: 'Transformação Social',
    description: 'O Plano Nacional de Extensão Universitária define extensão como um processo educativo, cultural e científico que articula ensino e pesquisa de forma indissociável, viabilizando uma relação transformadora entre a instituição de ensino superior (IES) e a sociedade.',
    img: 'assets/extensao/projeto1.png'
  }

}
