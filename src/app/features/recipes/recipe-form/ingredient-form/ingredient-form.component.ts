import { Component } from '@angular/core';
import { IngredientService } from 'src/app/api/IngredientService';
import { IngredientCreate } from 'src/app/shared/models';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css'],
})
export class IngredientFormComponent {

  constructor() {}

  protected ingredient: IngredientCreate = {
    name: "",
    unit: "",
  };
}
