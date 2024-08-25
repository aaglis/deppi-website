import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardLayoutComponent } from '../../components/card-layout/card-layout.component';
import { ICards } from '../../core/interfaces/cards.interface';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [HeaderComponent, CardLayoutComponent],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent {

  cardsArray: ICards[] = [
    {
      title: 'Pesquisa',
      preTitle: 'ideais de inovação',
      description: 'A pesquisa institucional é um dos pilares que suportam a evolução de nossa comunidade (docentes, discentes, técnicos administrativos e toda a sociedade). <span>A PRPI existe para fomentar e direcionar as ações de pesquisa para que haja harmonia nessa evolução. Como Instituto de Tecnologia, o IFCE se destaca na forte aplicação da pesquisa acadêmica desenvolvida em seus laboratórios.</span> Neste contexto, ações que objetivam a transferência de produtos, protótipos e/ou processos para o mercado tem sido alvo de diversas iniciativas internas bem como na busca de fomento externo.',
      img: 'assets/introduction/laboratory.jpg'
    },
    {
      title: 'Gestor de pesquisa',
      preTitle: 'ideais de inovação',
      description: 'Conjuntamente com a equipe da PRPI, os gestores de pesquisa, pós graduação e inovação são os servidores designados em seus campi para coordenar as atividades de pesquisa, pós-graduação e inovação. Dependendo da estrutura organizacional de cada campus eles podem ser representados por chefes de departamentos de pesquisa, diretores de pesquisa, coordenadores de pesquisa ou funções equivalentes. <span>Cada gestor dos campi do IFCE tem como papel fundamental fomentar e incentivas as ações e oportunidades na área de pesquisa, pós-graduação e inovação no âmbito interno e externo do IFCE além de relacionar-se com as políticas e informações disponibilizadas pela PRPI.</span>',
      img: 'assets/pesquisa/managers.jpg'
    }
  ]

}
