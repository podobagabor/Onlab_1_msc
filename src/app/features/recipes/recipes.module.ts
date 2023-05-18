import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipesRoutingModule } from "./recipes-routing.modul";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { CustomMaterialModule } from "src/app/custom-material/custom-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RecipeFormComponent } from "./recipe-form/recipe-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeFormComponent
    ],
    imports: [
        RecipesRoutingModule,
        CustomMaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
    ],
    exports: [

    ]
})

export class RecipeModule {}