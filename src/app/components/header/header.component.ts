import { AfterViewInit, Component, ElementRef, Input, inject } from '@angular/core';
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
  private elementReft = inject(ElementRef)

  switchImg: boolean = false
  @Input() darkTheme: boolean = false

  toggleBtn() {
    this.switchImg = !this.switchImg
  }

  lastScrollTop:number = 0

  ngAfterViewInit() {
    if(this.darkTheme) {
      this.elementReft.nativeElement.classList.add('dark-theme')
    }
    window.addEventListener('scroll', () => {
      console.log(scrollY)
      if(scrollY > 100) {
        this.elementReft.nativeElement.classList.add('shadow')
      } else {
        this.elementReft.nativeElement.classList.remove('shadow')
      }
      if((scrollY > this.lastScrollTop) && (innerWidth > 1150)) {
        this.elementReft.nativeElement.style.top = '-150px'
      } else if ((scrollY < this.lastScrollTop) && (innerWidth > 1150)) {
        this.elementReft.nativeElement.style.top = '10px'
      }
      this.lastScrollTop = scrollY
    })
  }

}
