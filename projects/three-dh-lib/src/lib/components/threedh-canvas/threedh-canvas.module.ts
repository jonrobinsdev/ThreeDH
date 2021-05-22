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
export class ThreeDHCanvasModule { }
