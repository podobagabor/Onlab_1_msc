import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentCreateDto, CommentDto, Ingredient, IngredientCreate, IngredientItem, Recipe, RecipeCreate } from '../shared/models';

@Injectable({
  providedIn: 'any',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<CommentDto[]> {
    return this.httpClient.get<CommentDto[]>(`https://localhost:7158/api/Comment`);
  }

  createComment(comment: CommentCreateDto): Observable<CommentDto> {
    const formData = new FormData();
    formData.append('Body', comment.body);
    if(comment.photo) {
        formData.append('Photo', comment.photo);
    }
    formData.append("userId",comment.userId.toString());
    formData.append("rating",comment.rating.toString());
    return this.httpClient.post<CommentDto>(`https://localhost:7158/api/Comment`,formData);
  }

}
