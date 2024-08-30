import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { filter, Observable } from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LucideAngularModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'deppi';
  @ViewChild(HeaderComponent) header?: HeaderComponent;
  constructor(private router: Router) {}

  ngOnInit(): void {
    (this.router.events as Observable<NavigationEnd>)
      .pipe(
        filter((event: NavigationEnd) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.toggleTheme(event.url);
      });
  }

  toggleTheme(routeName: string) {
    if ((routeName === '/home') || (routeName === '/')) {
      this.header?.setHeaderTheme(false);
    } else {
      this.header?.setHeaderTheme(true);
    }
  }


  scrollToTop() {
    scrollTo(0, 0)
  }

}
