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
  RecipeCreate
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
  protected displayedCols = ['group', 'actions'];
  protected groups: IngredientsGroupCreate[] = [
    {
      name: 'alma',
      ingredients: []
    },
    {
      name: 'körte',
      ingredients: []
    }
  ];
  protected ingredients: Ingredient[] = [];
  protected filteredIngredients: Ingredient[] = [];
  protected uploadedIngredients: {
    ingredient: Ingredient;
    amount: number,
    group: IngredientsGroupCreate;
  }[] = [{
    group: {
      name: '',
      ingredients: []
    },
    ingredient: {
      name: "",
      id: 0,
      unit: '',
    },
    amount: 0,
  }];
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
  ) { }

  ngOnInit(): void {
    this.updateIngredients();
    this.recipeForm.controls.ingredientName.valueChanges.subscribe(value => {
      if (value) {
        const name = typeof value === 'string' ? value : value?.name;
        this.filteredIngredients = this.ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(name.toLowerCase()))
      }
    })
  }

  displayIngredient(ingredient: Ingredient | string): string {
    if (typeof ingredient === 'object' && ingredient) {
      if (ingredient.name)
        return ingredient.name + " (" + ingredient.unit + ")";
    }
    return '';
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onHeaderChange(event: any) {
    this.header = event.target.files[0];
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

  saveRecipe() {
    this.fixIngredients();
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

  add() {
    this.uploadedIngredients.push({
      group: { name: '', ingredients: [] },
      ingredient: {
        id:0,
        name: '',
        unit:'',
      },
      amount: 0,
    })
    this.uploadedIngredients = [...this.uploadedIngredients];
  }

  selected(event: any, ingredient: {
    ingredient: Ingredient;
    amount: number,
    group: IngredientsGroupCreate;
  }) {
  }

  deleteGroup(element: IngredientsGroupCreate) {
    this.groups = this.groups.filter(group => group !== element);
    this.groups = [...this.groups];
  }
  deleteIngredient(element: {
    ingredient: Ingredient;
    amount: number,
    group: IngredientsGroupCreate;
  }) {
    this.uploadedIngredients = this.uploadedIngredients.filter( item => item !== element);
    this.uploadedIngredients = [...this.uploadedIngredients];
  }

  fixIngredients() {
    this.uploadedIngredients.forEach( element => {
      const ingredient: IngredientItemCreate = {
        amount: element.amount,
        id: element.ingredient.id,
      }
      this.groups.find( group => group == element.group)?.ingredients.push(ingredient);
    })
  }

  deleteStep(item: DescriptionCreate) {
    this.descriptions = this.descriptions.filter( element => element !== item);
    this.descriptions = [...this.descriptions];
  }

  editStep(item: DescriptionCreate) {
    this.recipeForm.controls.description.setValue(item.text);
    this.deleteStep(item);
  }
}
