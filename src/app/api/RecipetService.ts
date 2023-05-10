import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Recipe } from "../shared/models";

@Injectable({
    providedIn: "any"
})

export class RecipetService {
    constructor(private httpClient: HttpClient) {}

    getRecepies(): Observable<Recipe[]> {
        return this.httpClient.get<Recipe[]>(`https://localhost:7158/api/Recipe`);
    }
}