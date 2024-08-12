import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ICards } from '../../core/interfaces/cards.interface';
import { CardLayoutComponent } from '../../components/card-layout/card-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  arrayCards: ICards[] = [
    {
      preTitle: 'inicio',
      title: 'Quem somos?',
      description: 'O Departamento de Extensão, Pesquisa, Pós-Graduação e Inovação (DEPPI) tem como objetivo fomentar a <span>pesquisa, extensão e as novas tecnologias, a busca da atualização sistemática de dados da Pesquisa e da Inovação Tecnológica</span>, divulgando-as por meio de periódicos e incentivando a ética na pesquisa do Instituto, bem como promover a interface do IFCE, com empresas e entidades, para implantação de cursos e atividades da extensão na área de atuação do IFCE.',
      img: '../../../assets/introduction/laboratory.jpg'
    },
    {
      preTitle: 'nossas ações',
      title: 'O que fazemos?',
      description: '<span>Possibilitamos meios para captação de recursos externos para a pesquisa básica e aplicada, convocamos pesquisadores para elaboração conjunta de projetos institucionais, e mantemos atualizados os dados junto a órgãos de fomento.</span> Promovemos a coleta sistemática de dados para avaliação da pesquisa científica e incentivamos parcerias com a sociedade civil para o desenvolvimento de pesquisa e extensão. Supervisionamos ações do NEABI, coordenamos cursos de Extensão e a Semana de Integração Científica, além de disseminar a cultura empreendedora através de empresas júnior e grupos estudantis, dentre outros. Para mais informações, clique <a href="#">aqui</a>.',
      img: '../../../assets/introduction/investiments.jpg'
    }
  ]
}
