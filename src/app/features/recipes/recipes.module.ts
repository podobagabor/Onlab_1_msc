import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipesRoutingModule } from "./recipes-routing.modul";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { CustomMaterialModule } from "src/app/custom-material/custom-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent
    ],
    imports: [
        RecipesRoutingModule,
        CustomMaterialModule,
        FlexLayoutModule
    ],
    exports: [

    ]
})

export class RecipeModule {}