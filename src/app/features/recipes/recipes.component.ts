import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/api/RecipeService';
import { Recipe } from 'src/app/shared/models';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  protected recipes: Recipe[] = []

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(value => {
      if (value) {
        this.recipes = value;
      }
    })
  }

  goDetail(id: number) {
    this.router.navigateByUrl("recipes/detail/" + id);
  }
}
