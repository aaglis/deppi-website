import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
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
        console.log('Rota atual:', event.urlAfterRedirects);
        this.toggleTheme(event.urlAfterRedirects);
      });
  }

  toggleTheme(routeName: string) {
    if (routeName === '/home') {
      this.header?.setHeaderTheme(false);
    } else {
      this.header?.setHeaderTheme(true);
    }
  }


}
