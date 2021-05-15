import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThreedhElementComponent } from './components/threedh-element/threedh-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreedhElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ThreedhElementComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const custom3DHElement = createCustomElement(ThreedhElementComponent, { injector });
    customElements.define('three-dh', custom3DHElement);
  }
  ngDoBootstrap(): void {
  }
}
