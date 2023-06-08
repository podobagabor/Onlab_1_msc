import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IngredientService } from 'src/app/api/IngredientService';
import { Ingredient, IngredientsGroupCreate } from 'src/app/shared/models';

@Component({
  selector: 'app-ingredient-adding-form',
  templateUrl: './ingredient-adding-form.component.html',
  styleUrls: ['./ingredient-adding-form.component.scss']
})
export class IngredientAddingFormComponent implements OnInit, OnChanges {

  @Input() ingredient?: {
    ingredient: Ingredient;
    amount: number,
    group: IngredientsGroupCreate;
  };
  @Input() ingredientGroups?: IngredientsGroupCreate[];
  @Input() index?: number;
  @Input() selectableIngredients?: Ingredient[];
  @Output() itemChanged = new EventEmitter<{
    ingredient: Ingredient,
    amount: number,
    group: IngredientsGroupCreate,
  }>();
  @Output() itemDeleted = new EventEmitter<{
    ingredient: Ingredient,
    amount: number,
    group: IngredientsGroupCreate,
  }>();

  @Output() itemModified = new EventEmitter<{
    item: {
      ingredient: Ingredient;
      amount: number,
      group: IngredientsGroupCreate;
    },
    index: number
  }>();

  protected ingredients: Ingredient[] = [];
  protected filteredIngredients: Ingredient[] = [];
  protected editing: boolean = false;

  protected form = new FormGroup({
    ingredientName: new FormControl<string | Ingredient>(''),
    ingredientAmount: new FormControl<number>(0),
    selectedIngredientGroup: new FormControl<
      IngredientsGroupCreate | undefined
    >(undefined),
  })

  constructor(private ingredientService: IngredientService) { }

  ngOnChanges(): void {
    if (this.selectableIngredients) {
      console.log("lefut");
      this.ingredients = [...this.selectableIngredients];
      this.filteredIngredients = [...this.selectableIngredients]
    }
  }

  ngOnInit(): void {
    this.form.controls.ingredientName.valueChanges.subscribe(value => {
      const name = typeof value === 'string' ? value : value?.name;
      this.filteredIngredients = this.ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(name!.toLowerCase()))
      console.log(value);
      console.log(this.ingredients);
      console.log(this.filteredIngredients);
    })
    if (this.ingredient) {
      this.form.patchValue({
        ingredientAmount: this.ingredient.amount,
        ingredientName: this.ingredient.ingredient,
        selectedIngredientGroup: this.ingredient.group
      })
      this.form.disable();
    }
  }
  displayIngredient(ingredient: Ingredient | string): string {
    if (typeof ingredient === 'object' && ingredient) {
      if (ingredient.name)
        return ingredient.name + " (" + ingredient.unit + ")";
    }
    return '';
  }

  add() {
    if (typeof this.form.controls.ingredientName.value === 'object') {
      const newIngredient: {
        ingredient: Ingredient;
        amount: number,
        group: IngredientsGroupCreate;
      } = {
        amount: this.form.controls.ingredientAmount.value!,
        group: this.form.controls.selectedIngredientGroup.value!,
        ingredient: this.form.controls.ingredientName.value!,
      }
      this.itemChanged.emit(newIngredient);
      this.form.patchValue({
        ingredientAmount: 0,
        ingredientName: "",
        selectedIngredientGroup: null,
      })
    }
  }

  deleteIngredient() {
    this.itemDeleted.emit(this.ingredient);
  }

  edit() {
    this.form.enable();
    this.editing = true;
  }

  modify() {
    if (this.ingredient) {
      this.ingredient.amount = this.form.controls.ingredientAmount.value!;
      this.ingredient.group = this.form.controls.selectedIngredientGroup.value!,
        this.ingredient.ingredient = this.form.controls.ingredientName.value! as Ingredient,
        console.log(this.index);
      this.itemModified.emit({ item: this.ingredient!, index: this.index! });
    }
  }
}
