import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient, IngredientCreate, IngredientItem, Recipe, RecipeCreate } from '../shared/models';

@Injectable({
  providedIn: 'any',
})
export class IngredientService {
  constructor(private httpClient: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>(`https://localhost:7158/api/Ingredient`);
  }

  createIngredient(ingredient: IngredientCreate): Observable<Ingredient> {
    return this.httpClient.post<Ingredient>(`https://localhost:7158/api/Ingredient`,ingredient);
  }

}
