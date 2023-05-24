import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IngredientService } from 'src/app/api/IngredientService';
import { RecipeService } from 'src/app/api/RecipeService';
import {
  DescriptionCreate,
  Ingredient,
  IngredientItem,
  IngredientItemCreate,
  IngredientsGroup,
  IngredientsGroupCreate,
  RecipeCreate,
} from 'src/app/shared/models';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  protected file?: File;
  protected header?: File;
  protected descriptions: DescriptionCreate[] = [];
  protected displayedCols = ['text', 'photo'];
  protected groups: IngredientsGroupCreate[] = [];
  protected ingredients: Ingredient[] = [];
  protected filteredIngredients: Ingredient[] = [];
  protected uploadedIngredients: {
    ingredient: IngredientItem;
    group: string;
  }[] = [];
  recipeForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    ingredientGroup: new FormControl<string>(''),
    ingredientName: new FormControl<string | Ingredient>(''),
    ingredientAmount: new FormControl<number>(0),
    selectedIngredientGroup: new FormControl<
      IngredientsGroupCreate | undefined
    >(undefined),
    headerPhoto: new FormControl<File | undefined>(undefined),
    descPhoto: new FormControl<File | undefined>(undefined),
  });
  constructor(
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.updateIngredients();
    this.recipeForm.controls.ingredientName.valueChanges.subscribe( value => {
      if(value) {
        const name = typeof value === 'string' ? value : value?.name;
        console.log(this.ingredients);
        this.filteredIngredients = this.ingredients.filter( ingredient => ingredient.name.toLowerCase().includes(name.toLowerCase()))
      }
    })
  }

  displayIngredient(ingredient: Ingredient | string): string {
    if(typeof ingredient === 'object') {
      return ingredient.name + " (" + ingredient.unit + ")"; 
    }
    else 
      return ingredient;
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onHeaderChange(event: any) {
    this.header = event.target.files[0];
    console.log(this.header);
  }

  saveDescription() {
    const temp: DescriptionCreate = {
      photo: this.file,
      text: this.recipeForm.controls.description.value || '',
    };
    this.descriptions.push(temp);
    this.descriptions = [...this.descriptions];
    this.clearDesc();
  }

  saveIngredientGroup() {
    const name = this.recipeForm.controls.ingredientGroup.value;
    const newElement: IngredientsGroupCreate = {
      name: name!,
      ingredients: [],
    };
    this.groups.push(newElement);
    this.groups = [...this.groups];
    this.clearIngredients();
  }

  saveIngredient() {
    const newIngredient: IngredientItemCreate = {
      amount: this.recipeForm.controls.ingredientAmount.value || 0,
      id: (this.recipeForm.controls.ingredientName.value as Ingredient).id,
    };
    if (this.recipeForm.controls.selectedIngredientGroup.value) {
      const newIngredientForDisplay = {
        ingredient: {
          amount: this.recipeForm.controls.ingredientAmount.value || 0,
          name: (this.recipeForm.controls.ingredientName.value as Ingredient)
            .name,
          unit: (this.recipeForm.controls.ingredientName.value as Ingredient)
            .unit,
        },
        group: this.recipeForm.controls.selectedIngredientGroup.value.name,
      };
      this.uploadedIngredients.push(newIngredientForDisplay);
      this.recipeForm.controls.selectedIngredientGroup.value.ingredients.push(
        newIngredient
      );
    }
    this.clearIngredients();
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

  clearDesc() {
    this.recipeForm.patchValue({
      description: '',
      descPhoto: undefined,
    });
  }

  clearIngredients() {
    this.recipeForm.patchValue({
      ingredientAmount: 0,
      ingredientGroup: "",
      ingredientName: "",
      selectedIngredientGroup: undefined,
    });
  }

  newIngredient() {
    const ref = this.dialog.open(IngredientFormComponent);
    ref.afterClosed().subscribe((result) => {
      this.ingredientService.createIngredient(result).subscribe((value) => {
        this.recipeForm.controls.ingredientName.patchValue(value);
      });
    });
  }

  updateIngredients() {
    this.ingredientService.getIngredients().subscribe((value) => {
      if (value) {
        this.ingredients = value;
        this.filteredIngredients = value;
      }
    });
  }
}
