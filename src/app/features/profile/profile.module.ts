import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';
import { RecipeCardComponent } from '../recipes/recipe-card/recipe-card.component';
import { RecipeModule } from '../recipes/recipes.module';
import { ArticleModule } from '../article/article.module';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomMaterialModule,
    ProfileRoutingModule,
    RecipeModule,
    ArticleModule,
  ]
})
export class ProfileModule { }
