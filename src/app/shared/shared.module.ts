import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        RouterModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    exports: [
        ReactiveFormsModule,
        RouterModule,
        FlexLayoutModule,
    ]
})
export class SharedModule {}