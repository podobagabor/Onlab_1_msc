import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe, RecipeCreate } from '../shared/models';

@Injectable({
  providedIn: 'any',
})
export class RecipeService {
  constructor(private httpClient: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`https://localhost:7158/api/Recipe`);
  }

  createRecipe(recipeCreate: RecipeCreate): Observable<Recipe> {
    const formData = new FormData();
    formData.append('Name', recipeCreate.Name);
    formData.append('Photo', recipeCreate.Photo);

    // Append Descriptions
    recipeCreate.Descriptions.forEach((description, index) => {
      formData.append(`Descriptions[${index}].text`, description.text);
      formData.append(`Descriptions[${index}].photo`, description.photo);
    });

    // Append Ingredients
    recipeCreate.Ingredients.forEach((group, index) => {
      formData.append(`Ingredients[${index}].name`, group.name);
      group.ingredients.forEach((item, subIndex) => {
        formData.append(
          `Ingredients[${index}].ingredients[${subIndex}].id`,
          item.id.toString()
        );
        formData.append(
          `Ingredients[${index}].ingredients[${subIndex}].amount`,
          item.amount.toString()
        );
      });
    });

    // Append Comments
    recipeCreate.Comments.forEach((comment, index) => {
      formData.append(`Comments[${index}].body`, comment.body);
      formData.append(`Comments[${index}].rating`, comment.rating.toString());
    });

    // Append UserId
    formData.append('UserId', recipeCreate.UserId.toString());

    return this.httpClient.post<Recipe>(
      `https://localhost:7158/api/Recipe`,
      formData
    );
  }

  getRecipe(recipeId: number): Observable<Recipe> {
    return this.httpClient.get<Recipe>(
      `https://localhost:7158/api/Recipe/` + recipeId.toString()
    );
  }
}
