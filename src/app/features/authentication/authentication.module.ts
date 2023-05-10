import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from "@angular/common";
import { RegistrationComponent } from "./registration/registration.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CustomMaterialModule } from "src/app/custom-material/custom-material.module";

@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent,
    ],
    imports: [
        AuthenticationRoutingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        CommonModule,
        FlexLayoutModule,
        CustomMaterialModule
    ],
    exports: [
        LoginComponent,
    ]
})

export class AuthenticationModule {}