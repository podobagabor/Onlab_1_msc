import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/api/ArticleService';
import { RecipeService } from 'src/app/api/RecipeService';
import { Recipe, Article } from 'src/app/shared/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
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
      if (value) {
        const userId = Number(localStorage.getItem("userId"));
        //value.forEach( recipe => {
        //  if(recipe.user.id === userId) {
        //    this.recipes.push(recipe);
        //  }
        //})
        this.recipes = value;
      }
    })
    this.articleService.getArticle().subscribe(value => {
      if(value) {
        this.articles = value;
      }
    })
  }
}
