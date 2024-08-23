import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent {

}
