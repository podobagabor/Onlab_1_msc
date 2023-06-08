import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Article, ArticleCreate } from "../shared/models";

@Injectable({
  providedIn: 'any',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) { }

  getArticle(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`https://localhost:7158/api/Article`);
  }

  createArticle(articleCreate: ArticleCreate): Observable<Article> {
    const formData = new FormData();
    formData.append('Title', articleCreate.title);
    formData.append("Body", articleCreate.body);
    if (articleCreate.photo)
      formData.append('Photo', articleCreate.photo);

    // Append Comments
    articleCreate.comments.forEach((comment, index) => {
      formData.append(`Comments[${index}].body`, comment.body);
      formData.append(`Comments[${index}].rating`, comment.rating.toString());
    });

    // Append UserId
    formData.append('UserId', articleCreate.userId.toString());

    return this.httpClient.post<Article>(
      `https://localhost:7158/api/Article`,
      formData
    );
  }

  getArticleById(articleId: number): Observable<Article> {
    return this.httpClient.get<Article>(
      `https://localhost:7158/api/Article/` + articleId.toString()
    );
  }

  updateArticle(articleId: number, article: Article): Observable<Article> {
    return this.httpClient.put<Article>(
      `https://localhost:7158/api/Article/` + articleId.toString(), article);
  }
}
