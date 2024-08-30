import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteRedirectService {

  private router = inject(Router)

  private subject = new Subject<boolean>();
  getSubject() {
    return this.subject.asObservable();
  }

  navigateToSobre() {
    if(this.router.url != '/home') {
      this.subject.next(false)
      this.router.navigate(['/home'])
    } else {
      this.subject.next(true)
    }
  }

}
