import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'src/environments/environment';
import { ThreeDHCanvasComponent } from 'three-dh-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
      if (environment.element) {
          const custom3DHElement = createCustomElement(ThreeDHCanvasComponent, { injector: this.injector });
          customElements.define('three-dh', custom3DHElement);
      }
  }
  // Remove zone.js for the Angular Element.
  // https://www.angulararchitects.io/aktuelles/angular-elements-part-iii/
  ngDoBootstrap(): void {
      if (environment.element) {
          platformBrowserDynamic().bootstrapModule(AppModule, {
              ngZone: 'noop'
          }).catch(err => console.error(err));
      }
  }
}
