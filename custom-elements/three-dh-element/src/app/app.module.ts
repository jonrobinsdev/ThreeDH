import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ThreedhPointComponent } from 'src/app/components/threedh-point/threedh-point.component';

import { ThreedhElementComponent } from './components/threedh-element/threedh-element.component';

@NgModule({
  declarations: [
    ThreedhElementComponent,
    ThreedhPointComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ThreedhElementComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const custom3DHElement = createCustomElement(ThreedhElementComponent, { injector: this.injector });
    customElements.define('three-dh', custom3DHElement);
  }
  ngDoBootstrap(): void {
    platformBrowserDynamic().bootstrapModule(AppModule ,{ 
      ngZone: 'noop'
      }).catch(err => console.error(err));
  }
}
