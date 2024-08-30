import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardLayoutComponent } from '../../components/card-layout/card-layout.component';
import { ICards } from '../../core/interfaces/cards.interface';
import { ButtonLayoutComponent } from '../../components/button-layout/button-layout.component';

@Component({
  selector: 'app-inovacao',
  standalone: true,
  imports: [HeaderComponent, CardLayoutComponent, ButtonLayoutComponent],
  templateUrl: './inovacao.component.html',
  styleUrl: './inovacao.component.scss'
})
export class InovacaoComponent implements OnInit{

  ngOnInit(): void {
    scrollTo(0, 0)
  }

  inovacaoIntroduction: ICards = {
    title: 'Inovação',
    preTitle: 'O que nos move',
    description: 'A inovação no IFCE acontece de forma integrada, promovendo mudanças que impactam vidas, negócios e a sociedade. Aqui, <span>criatividade e ciência caminham juntas para transformar realidades e abrir novos horizontes para o desenvolvimento tecnológico e social.</span>',
    img: 'assets/inovacao/materiais.jpg'
  };

  comprometimentosArray: {
    compName: string;
    title?: string;
    description: string
  }[] = [
    {
      compName: 'Art 4°',
      description: 'A Política de Inovação Tecnológica do IFCE visa estabelecer diretrizes e medidas de incentivo à pesquisa aplicada à inovação, extensão tecnológica, à gestão da propriedade intelectual, negociação e transferência de tecnologias, ao desenvolvimento de ambientes e atividades promotoras do empreendedorismo e dos negócios sociais e cooperados, com vistas à capacitação e à formação profissional e tecnológica, à inserção de egressos e ao alcance da autonomia tecnológica e desenvolvimento dos Arranjos Produtivos, Sociais e Culturais em nível estadual ou regional, nacional e internacional.',
    },
    {
      compName: 'Art 5°',
      title: '<p class="title">A Política de Inovação Tecnológica do IFCE tem como objetivos:</p>',
      description: '<p>I - promover a cultura de inovação, empreendedorismo e proteção à propriedade intelectual, zelando pela adequada proteção das inovações geradas pela comunidade interna e externa;</p><p>II - definir as ações de inovação tecnológica nas esferas da ciência e da tecnologia, no âmbito do IFCE, em alinhamento com os campos do saber;</p><p>III - estabelecer diretrizes e regras quanto ao processo de inovação tecnológica, criação e transferência de tecnologias, licenciamento, produção, distribuição e exploração;</p><p>IV - fomentar a inovação no IFCE, em âmbito científico e tecnológico, e o desenvolvimento de projetos de cooperação, visando à geração de produtos e processos inovadores;</p><p>V - fomentar a criação, a expansão e viabilizar o acesso a ambientes de inovação por meio de incubadoras, empresas juniores e parques tecnológicos; startups, spin-off, aceleradoras, Instituições de Ciência, Tecnologia e Inovação (ICTs), entidades representativas dos setores público, privado e afins;</p><p>VI - fomentar e estabelecer parcerias e buscar financiamento junto a órgãos governamentais, empresas e outras instituições da sociedade, para o desenvolvimento da inovação;</p><p>VII - regulamentar o compartilhamento e o uso de laboratórios, instrumentos, materiais e instalações, no âmbito do IFCE, por pesquisadores e instituições externas, em suporte à atividade de pesquisa cientifica e tecnológica interna ou externa;</p><p>VIII - fomentar e regular a transferência de tecnologia e inventos, oriundos de pesquisa do IFCE, ao setor produtivo local, nacional ou estrangeiro;</p><p>IX - realizar parcerias com empresas para projetos cooperados de pesquisa aplicada à inovação;</p><p>X - promover o apoio, incentivo e integração dos inventores independentes às atividades da Instituição e ao sistema produtivo;</p><p>XI - promover o apoio e incentivo aos pesquisadores através de mecanismos de estímulo à pesquisa, desenvolvimento, inovação e intercâmbio de pesquisadores e atividades de ensino em temas correlacionados à inovação.</p>'
    }
  ]

  getDescription(index: number): string {
    if(this.comprometimentosArray[index].title) {
      return `${this.comprometimentosArray[index].title} ${this.comprometimentosArray[index].description}`;
    } else {
      return this.comprometimentosArray[index].description;
    }
  }
}
