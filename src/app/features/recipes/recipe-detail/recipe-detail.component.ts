import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/api/RecipeService';
import { Recipe,IngredientsGroup } from 'src/app/shared/models';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  protected recipe?: Recipe;
  protected ingredients?: IngredientsGroup[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipe(9).subscribe( recipe => {
      this.recipe = recipe;
      this.ingredients = recipe.ingredients;
    })
  }

}
