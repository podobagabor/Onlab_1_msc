import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { RecipeDetailComponent } from "../recipes/recipe-detail/recipe-detail.component";
import { RecipeFormComponent } from "../recipes/recipe-form/recipe-form.component";
import { RecipesComponent } from "../recipes/recipes.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', component: ProfileComponent },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
  })
  export class ProfileRoutingModule {}