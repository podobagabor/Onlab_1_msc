import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/api/ArticleService';
import { RecipeService } from 'src/app/api/RecipeService';
import { Article, Recipe } from 'src/app/shared/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  protected recipes: Recipe[] = [];
  protected articles: Article[] = [];
  constructor(private router: Router, private recipeService: RecipeService, private articleService: ArticleService) {}

  goDetailRecipe(id: number) {
    this.router.navigateByUrl("recipes/detail/" + id);
  }

  goDetailArticle(id: number) {
    this.router.navigateByUrl("article/detail/" + id);
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(value => {
      const userId = Number(localStorage.getItem("userId"));
      if (value && userId) {
        value.forEach( recipe => {
          if(recipe.user.id === userId) {
            this.recipes.push(recipe);
          }
        })
      }
    })
    this.articleService.getArticle().subscribe(value => {
      const userId = Number(localStorage.getItem("userId"));
      if(value && userId) {
        value.forEach( article => {
          if(article.user.id === userId) {
            this.articles.push(article);
          }
        })
      }
    })
  }
}
