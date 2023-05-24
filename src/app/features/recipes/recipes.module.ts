import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipesRoutingModule } from "./recipes-routing.modul";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { CustomMaterialModule } from "src/app/custom-material/custom-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RecipeFormComponent } from "./recipe-form/recipe-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IngredientFormComponent } from './recipe-form/ingredient-form/ingredient-form.component';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeFormComponent,
        IngredientFormComponent,
        RecipeCardComponent
    ],
    imports: [
        RecipesRoutingModule,
        CustomMaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule
    ],
    exports: [

    ]
})

export class RecipeModule {}