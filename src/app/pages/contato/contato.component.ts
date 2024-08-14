import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IManager } from '../../core/interfaces/manager.interface';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonLayoutComponent } from '../../components/button-layout/button-layout.component';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, LucideAngularModule, ButtonLayoutComponent, TruncatePipe],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContatoComponent {

  managersArray: IManager[] = [
    {
      name: 'Luis Sousa',
      role: 'Chefe do departamento' ,
      fone: '(85) 3512-8733',
      email: 'deppi.maracanau@ifce.edu.br'
    },
    {
      name: 'Fábio Timbó',
      role: 'Coordenador de Pesquisa',
      fone: '(85) 3512-8733',
    },
    {
      name : 'Bruno César Barroso Salgado',
      role: 'Coordenadoria do mestrado em Energias Renováveis',
      fone: '(85) 3512-8762',
      email: 'brunocesar@ifce.edu.br'
    },
    {
      name : 'Débora Viana de Araújo',
      role: 'Auxiliar em Administração',
      email: 'debora.viana@ifce.edu.br'
    }
  ]

  formBuilder = inject(FormBuilder)

  formSended = false

  form = this.formBuilder.group({
    name: ['', Validators.required, Validators.minLength(5)],
    email: ['', Validators.required, Validators.email],
    message: ['', Validators.required, Validators.minLength(10)]
  })

  submitForm() {
    if (this.form.valid) {
      this.formSended = true
      console.log(this.form.value)
    } else {
      console.log('Formulário inválido')
    }
  }
}
