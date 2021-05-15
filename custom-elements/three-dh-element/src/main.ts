import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '../../../src/environments/environment';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

// Remove ngZone from the app so that dual ngZones are not loaded while using the custom element in a different project.
platformBrowserDynamic()
  .bootstrapModule(
    AppModule, { ngZone: 'noop' })
  .catch(err => console.log(err));
