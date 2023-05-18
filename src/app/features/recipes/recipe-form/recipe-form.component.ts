import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from 'src/app/api/RecipeService';
import {
  DescriptionCreate,
  IngredientItem,
  IngredientItemCreate,
  IngredientsGroup,
  IngredientsGroupCreate,
  RecipeCreate,
} from 'src/app/shared/models';
@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent {
  protected file?: File;
  protected header?: File;
  protected descriptions: DescriptionCreate[] = [];
  protected displayedCols = ['text', 'photo'];
  protected groups: IngredientsGroupCreate[] = [];
  recipeForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    ingredientGroup: new FormControl<string>(''),
    ingredientName: new FormControl<string>(''),
    ingredientUnit: new FormControl<string>(''),
    ingredientAmount: new FormControl<number>(0),
    selectedIngredientGroup: new FormControl<IngredientsGroupCreate | undefined>(
      undefined
    ),
  });
  constructor(private recipeService: RecipeService) {}

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onHeaderChange(event: any) {
    this.header = event.target.files[0];
    console.log(this.header);
  }

  saveDescription() {
    const temp: DescriptionCreate = {
      photo: this.file!,
      text: this.recipeForm.controls.description.value || '',
    };

    this.descriptions.push(temp);
    this.descriptions = [...this.descriptions];
  }

  saveIngredientGroup() {
    const name = this.recipeForm.controls.ingredientGroup.value;
    const newElement: IngredientsGroupCreate = {
      name: name!,
      ingredients: [],
    };
    this.groups.push(newElement);
    this.groups = [...this.groups];
  }

  saveIngredient() {
    const newIngredient: IngredientItemCreate = {
      amount: this.recipeForm.controls.ingredientAmount.value || 0,
      id:1,
    };
    if (this.recipeForm.controls.selectedIngredientGroup.value) {
      this.recipeForm.controls.selectedIngredientGroup.value.ingredients.push(
        newIngredient
      );
    }
  }

  saveRecipe() {
    const newRecipe: RecipeCreate = {
      Descriptions: this.descriptions,
      Ingredients: this.groups,
      Name: this.recipeForm.controls.name.value || '',
      Photo: this.header!,
      UserId: 1,
      Comments: [],
    };
    console.log(newRecipe);
    this.recipeService.createRecipe(newRecipe).subscribe((value) => {
      console.log(value);
    });
  }
}
