import { AfterViewInit, Component, ElementRef, HostListener, inject } from '@angular/core';
import { ButtonLayoutComponent } from '../button-layout/button-layout.component';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonLayoutComponent, LucideAngularModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  private elementRef = inject(ElementRef)

  switchImg: boolean = false
  lastScrollTop:number = 0

  closeNavbar() {
    // Sua lógica para fechar a navbar (por exemplo, esconder o menu)
    this.switchImg = false;
    console.log('Navbar fechada');
  }

  // Detecção de clique fora da navbar
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeNavbar();
    }
  }


  setHeaderTheme(isDark: boolean) {
    console.log(isDark)
    if(isDark === true) {
      this.elementRef.nativeElement.classList.add('dark-theme');
    } else {
      this.elementRef.nativeElement?.classList.remove('dark-theme');
    }
  }

  toggleBtn() {
    this.switchImg = !this.switchImg
    console.log(this.switchImg)
  }


  ngAfterViewInit() {
    window.addEventListener('scroll', () => {
      if(scrollY > 100) {
        this.elementRef.nativeElement.classList.add('shadow')
      } else {
        this.elementRef.nativeElement.classList.remove('shadow')
      }
      if((scrollY > this.lastScrollTop)) {
        this.elementRef.nativeElement.style.top = '-150px'
      } else if ((scrollY < this.lastScrollTop) && (innerWidth > 1150)) {
        this.elementRef.nativeElement.style.top = '10px'
      } else if((scrollY < this.lastScrollTop) && (innerWidth < 1150)) {
        this.elementRef.nativeElement.style.top = '0'
      }
      this.lastScrollTop = scrollY
    })
  }

}
