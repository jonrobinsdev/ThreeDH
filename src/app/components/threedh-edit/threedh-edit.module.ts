import { NgModule, DoBootstrap, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CoreDataService } from "src/app/services/core-data.service";
import { environment } from "src/environments/environment";
import { ThreedhPointModule } from "../threedh-point/threedh-point.module";
import { ThreedhEditComponent } from "./threedh-edit.component";

@NgModule({
  declarations: [
    ThreedhEditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ThreedhPointModule
  ],
  exports: [
    ThreedhEditComponent
  ],
  providers: [
    CoreDataService
  ],
  bootstrap: [ThreedhEditComponent]
})
export class ThreedhEditModule implements DoBootstrap {
  constructor(private injector: Injector) {
    if (environment.element) {
      const custom3DHElement = createCustomElement(ThreedhEditComponent, { injector: this.injector });
      customElements.define('three-dh', custom3DHElement);
    }
  }
  
  // Remove zone.js for the Angular Element.
  // https://www.angulararchitects.io/aktuelles/angular-elements-part-iii/
  ngDoBootstrap(): void {
    platformBrowserDynamic().bootstrapModule(ThreedhEditModule ,{ 
      ngZone: 'noop'
      }).catch(err => console.error(err));
  }
}
