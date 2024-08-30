import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LucideAngularModule, Menu, X, MoveRight, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ Menu, X, MoveRight, Facebook, Instagram, Linkedin, Youtube, ArrowUp }))
  ]
};
