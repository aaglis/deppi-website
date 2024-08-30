import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ICards } from '../../core/interfaces/cards.interface';
import { CardLayoutComponent } from '../../components/card-layout/card-layout.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-extensao',
  standalone: true,
  imports: [HeaderComponent, CardLayoutComponent, NgOptimizedImage],
  templateUrl: './extensao.component.html',
  styleUrl: './extensao.component.scss'
})
export class ExtensaoComponent {

  cardsArray: ICards[] = [
    {
      title: 'Extensão Universitária',
      preTitle: 'Transformação Social',
      description: 'O Plano Nacional de Extensão Universitária define extensão como um processo educativo, cultural e científico que articula ensino e pesquisa de forma indissociável, viabilizando uma relação transformadora entre a instituição de ensino superior (IES) e a sociedade.',
      img: 'assets/extensao/projeto.jpg'
    },
    {
      title: 'Atribuições dos Gestores de Extensão',
      preTitle: 'Compromisso',
      description: 'Gestores de extensão são os servidores, docentes ou técnicos administrativos,designados através de portaria, para coordenar todas as ações de extensão promovidas pelos campi em que atuam.',
      img: 'assets/extensao/gestores.jpg'
    }
  ]

  managersAttributions: string[] = [
    'Disseminar o conhecimento sobre extensão',
    'Acompanhar as ações de extensão',
    'Acompanhar o processo de certificação das ações, ainda que sejam assinados por eventuais parceiros externos',
    'Participar dos planos e diretrizes relacionados à extensão no campus',
    'Prestar orientações gerais aos extensionistas sobre elaboração, execução e avaliação das ações',
    'Atuar, de forma sistêmica, colaborando para garantir a indissociabilidade entre ensino, pesquisa, extensão e assuntos estudantis',
    'Articular ações de desenvolvimento regional e local, mediado pela ciência e tecnologia, e pela construção de novas possibilidades associativas e estratégicas de inclusão socia',
    'Organizar e divulgar calendário das ações de extensão',
    'Incentivar a promoção de eventos que contribuam para o intercâmbio de experiências entre Instituto, Empresa e Comunidade, e manter informações qualiquantitativas atualizadas e organizadas, além de registros fotográficos (no formato JPEG, com legendas e créditos), para que sejam utilizados pelo campus e/ou pela Proext, na elaboração dos relatórios, editoração de livros, revistas, catálogos, cartilhas e/ou outras publicações.'
  ]

}
