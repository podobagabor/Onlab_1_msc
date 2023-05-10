import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipetService } from 'src/app/api/RecipetService';
import { Recipe } from 'src/app/shared/models';

@Component({
  selector: 'app-proba',
  templateUrl: './proba.component.html',
  styleUrls: ['./proba.component.css']
})
export class ProbaComponent implements OnInit {

  constructor(private recipeService: RecipetService) {}

  recipes?: Observable<Recipe[]>

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecepies();
  }

}
