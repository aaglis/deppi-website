import { AfterViewInit, Component, ElementRef, HostListener, inject, ViewChildren, QueryList } from '@angular/core';
import { ButtonLayoutComponent } from '../button-layout/button-layout.component';
import { LucideAngularModule } from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';
import { RouteRedirectService } from '../../core/services/route-redirect.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonLayoutComponent, LucideAngularModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  private router = inject(Router)
  private elementRef = inject(ElementRef)
  private routerRedirect = inject(RouteRedirectService)

  @ViewChildren('link') links?: QueryList<ElementRef>

  switchImg: boolean = false
  lastScrollTop:number = 0



  closeNavbar() {
    this.switchImg = false;
    console.log('Navbar fechada');
  }

  actualUrl(event: Event) {
    event.preventDefault()
    this.routerRedirect.navigateToSobre()
  }

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
    if(this.router.url === '/home') {
      this.setHeaderTheme(false)
    } else {
      this.setHeaderTheme(true)
    }
    window.addEventListener('scroll', () => {
      if(scrollY > 100) {
        this.elementRef.nativeElement.classList.add('shadow')
      } else {
        this.elementRef.nativeElement.classList.remove('shadow')
      }
      if((scrollY > this.lastScrollTop)  && (innerWidth > 1150)) {
        this.elementRef.nativeElement.style.top = '-150px'
      } else if ((scrollY < this.lastScrollTop) && (innerWidth > 1150)) {
        this.elementRef.nativeElement.style.top = '10px'
      } else if((scrollY < this.lastScrollTop) && (innerWidth < 1150)) {
        this.elementRef.nativeElement.style.top = '0'
      }
      this.lastScrollTop = scrollY
    })

    this.links?.forEach(link => {
      link.nativeElement.addEventListener('click', () => {
          this.closeNavbar();
      });
    });

  }

  scrollToSobre() {
    this.router.navigate(['/home'])
  }

}
