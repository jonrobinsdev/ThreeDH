import { NgModule, DoBootstrap, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CoreDataService } from "../../services/core-data.service";
import { ThreeDHPointModule } from "../threedh-point/threedh-point.module";
import { ThreeDHCanvasComponent } from "./threedh-canvas.component";

@NgModule({
    declarations: [
        ThreeDHCanvasComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        ThreeDHPointModule
    ],
    exports: [
        ThreeDHCanvasComponent
    ],
    providers: [
        CoreDataService
    ],
    bootstrap: [ThreeDHCanvasComponent]
})
export class ThreeDHCanvasModule implements DoBootstrap {
    constructor(private injector: Injector) {
        if (true) {
            const custom3DHElement = createCustomElement(ThreeDHCanvasComponent, { injector: this.injector });
            customElements.define('three-dh', custom3DHElement);
        }
    }
    // Remove zone.js for the Angular Element.
    // https://www.angulararchitects.io/aktuelles/angular-elements-part-iii/
    ngDoBootstrap(): void {
        if (true) {
            platformBrowserDynamic().bootstrapModule(ThreeDHCanvasModule, {
                ngZone: 'noop'
            }).catch(err => console.error(err));
        }
    }
}