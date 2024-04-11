import { NgModule } from "@angular/core";
import { DummyComponent } from "./dummy/dummy.component";


@NgModule({
    declarations: [
        DummyComponent,
    ],
    exports: [DummyComponent]
})
export class SharedModule{

}