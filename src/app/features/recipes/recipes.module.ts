import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipesRoutingModule } from "./recipes-routing.modul";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent
    ],
    imports: [
        RecipesRoutingModule
    ],
    exports: [

    ]
})

export class RecipeModule {}