import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'src/environments/environment';
import { ThreeDHViewerComponent } from 'three-dh-lib';

@NgModule({
  imports: [
    BrowserModule
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
      if (environment.element) {
          // Create Custom Element based on ThreeDH Canvas component
          const custom3DHElement = createCustomElement(ThreeDHViewerComponent, { injector: this.injector });
          // Check it's not already been created in our custom elements, then proceed to define it.
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
