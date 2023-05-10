import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { LayoutComponent } from "./shared/layout/layout.component";

const appRoutes: Routes = [
    {
        path: 'recipes',
        loadChildren: () => import('./features/recipes/recipes.module').then(m => m.RecipeModule),
    },
    {
        path: 'login',
        loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule),
    },
    {
        path: 'dashboard',
        component: LayoutComponent,
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

export class AppRoutingModule {}