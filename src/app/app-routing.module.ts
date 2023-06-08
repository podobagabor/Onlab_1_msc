import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./shared/layout/layout.component";
import { DashboardComponent } from "./features/dashboard/dashboard.component";

const appRoutes: Routes = [
    {
        path: 'recipes',
        loadChildren: () => import('./features/recipes/recipes.module').then(m => m.RecipeModule),
    },
    {
        path: 'article',
        loadChildren: () => import('./features/article/article.module').then(m => m.ArticleModule),
    },
    {
        path: 'login',
        loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule),
    },
    {
        path: 'profile',
        loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule),
    },
    {
        path: 'dashboard',
        component: LayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
        ],
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }