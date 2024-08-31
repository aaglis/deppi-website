import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IManager } from '../../core/interfaces/manager.interface';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonLayoutComponent } from '../../components/button-layout/button-layout.component';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';
import { ContatoService } from '../../core/services/contato.service';
import { IContato } from '../../core/interfaces/contato.interface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, LucideAngularModule, ButtonLayoutComponent, TruncatePipe],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContatoComponent implements OnInit{
  form: FormGroup;

  @ViewChildren('input') inputs?: ElementRef<HTMLInputElement>[];
  @ViewChild('textarea') textarea?: ElementRef<HTMLTextAreaElement>;

  constructor(private formBuilder: FormBuilder, private contatoService: ContatoService) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitForm() {
    if (this.form.valid) {
      if(this.canSendEmail()) {
        const formData = this.form.value;
        this.sendEmail(formData);
      } else {
        Swal.fire({
          position: "center",

          icon: "error",
          title: "Você nos enviou um email recentemente. Aguarde 10 minutos para enviar um novo email.",
          showConfirmButton: true,
          showCloseButton: true,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    } else {
      console.log('Formulário inválido');
    }
  }

  sendEmail(formContato: IContato) {
    this.contatoService.sendEmail(formContato.name, formContato.email, formContato.message).then(() => {
      localStorage.setItem('lastEmailSended', new Date().toISOString());

      this.inputs?.forEach(input => input.nativeElement.value = '');
      this.textarea ? this.textarea.nativeElement.value = '' : null;

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email enviado com sucesso!",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3000,
        timerProgressBar: true,
      });
    }).catch((error) => {
      console.log('Erro ao enviar email', error);
    })
  }

  canSendEmail(): boolean {
    const lastEmailSended = localStorage.getItem('lastEmailSended');
    if (lastEmailSended) {
      const lastEmailDate = new Date(lastEmailSended);
      const currentDate = new Date();
      const timeDifference = (currentDate.getTime() - lastEmailDate.getTime()) / (1000 * 60); // Converte para minutos

      return timeDifference > 10;
    }
    return true;
  }


  ngOnInit(): void {
    scrollTo(0, 0)
  }

  breakpoints = {
    1400: { slidesPerView: 2 },
    1000: { slidesPerView: 2 },
    600: { slidesPerView: 1 },
    400: { slidesPerView: 1 }
  };

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
}
