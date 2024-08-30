import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardLayoutComponent } from '../../components/card-layout/card-layout.component';
import { ICards } from '../../core/interfaces/cards.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-pos-graduacao',
  standalone: true,
  imports: [HeaderComponent, CardLayoutComponent, NgStyle],
  templateUrl: './pos-graduacao.component.html',
  styleUrl: './pos-graduacao.component.scss'
})
export class PosGraduacaoComponent implements OnInit{

  ngOnInit(): void {
    scrollTo(0, 0)
  }


  items: { title: string, details: string}[] = [
    {
      title: 'Mestrado Acadêmico',
      details: 'O mestrado acadêmico é destinado a todos que tenham concluído o ensino superior e desejam obter titulação com grau de mestre, por meio de estudos voltados para o ensino e pesquisa direcionados para a carreira acadêmica.'
    },
    {
      title: 'Mestrado Profissional',
      details: 'O mestrado profissional é destinado a todos que tenham concluído o ensino superior e desejam obter titulação com grau de mestre, por meio de estudos e técnicas diretamente voltadas ao desempenho de um alto nível de qualificação profissional, com vistas a atender à demanda de setores do mercado produtivo.'
    },
    {
      title: 'Doutorado',
      details: 'Os doutorados são cursos de pós-graduação stricto sensu destinados a formar profissionais que desejam obter titulação com grau de doutor, com foco na carreira acadêmica e na área de inovação. No IFCE, os doutorados são interinstitucionais, ou seja, esses cursos são ofertados em parceria com outras instituições que já tem programas de pós-graduação na área de interesse.'
    }
  ];
  selectedItem: number = 0;

  selectItem(index: number) {
    this.selectedItem = index;
  }

  cardPosGraduacao: ICards = {
    preTitle: 'Sempre em crescimento',
    title: 'Pós-Graduação',
    description: 'Os cursos de pós-graduação (lato sensu) são destinados a todos que concluíram o ensino superior e desejam <span>obter atualização acadêmica ou profissional e o consequente progresso das competências obtidas na graduação.</span>',
    img: 'assets/pos-graduacao/colecao-grau.jpg'
  }
}
