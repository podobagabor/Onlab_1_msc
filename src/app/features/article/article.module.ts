import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleRoutingModule } from './article-routing.module';



@NgModule({
  declarations: [
    ArticleFormComponent,
    ArticleCardComponent,
    ArticlesComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomMaterialModule,
    ArticleRoutingModule
  ],
  exports: [
    ArticleCardComponent,
  ]
})
export class ArticleModule { }
