import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CoreDataService } from "../../services/core-data.service";
import { ThreeDHCanvasModule } from "../threedh-canvas/threedh-canvas.module";
import { ThreeDHViewerComponent } from "./threedh-viewer.component";

@NgModule({
    declarations: [
        ThreeDHViewerComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        ThreeDHCanvasModule
    ],
    exports: [
        ThreeDHViewerComponent
    ],
    providers: [
        CoreDataService
    ],
    bootstrap: [ThreeDHViewerComponent]
})
export class ThreeDHViewerModule { }
