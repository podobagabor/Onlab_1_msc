import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/api/RecipeService';
import { Recipe } from 'src/app/shared/models';

@Component({
  selector: 'app-proba',
  templateUrl: './proba.component.html',
  styleUrls: ['./proba.component.css']
})
export class ProbaComponent implements OnInit {

  constructor(private recipeService: RecipeService) {}

  recipes?: Observable<Recipe[]>

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
