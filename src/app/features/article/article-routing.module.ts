import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../authentication/login/login.component";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleFormComponent } from "./article-form/article-form.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { RecipeDetailComponent } from "../recipes/recipe-detail/recipe-detail.component";
import { RecipeFormComponent } from "../recipes/recipe-form/recipe-form.component";
import { RecipesComponent } from "../recipes/recipes.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'detail/:id', component: ArticleDetailComponent },
            { path: 'create', component: ArticleFormComponent },
            { path: '', component: ArticlesComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArticleRoutingModule { }
