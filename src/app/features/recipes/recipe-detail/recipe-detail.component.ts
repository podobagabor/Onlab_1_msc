import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/api/CommentService';
import { RecipeService } from 'src/app/api/RecipeService';
import { Recipe,IngredientsGroup, CommentDto, CommentCreateDto } from 'src/app/shared/models';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  protected recipe?: Recipe;
  protected ingredients?: IngredientsGroup[];
  protected comments?: CommentDto[] = []
  protected file?: File;

  protected commentForm = new FormGroup({
    comment: new FormControl<string>(''),
    photo: new FormControl<File | undefined>(undefined),
    rate: new FormControl<number>(5),
  })
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private commentService: CommentService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      const recipeId = params["id"];
      if(recipeId) {
        this.recipeService.getRecipe(recipeId).subscribe( recipe => {
          this.recipe = recipe;
          this.ingredients = recipe.ingredients;
          this.comments = recipe.comments;
        })
      }
    })
  }

  saveComment() {
    const comment: CommentCreateDto = {
      body: this.commentForm.controls.comment.value!,
      rating: this.commentForm.controls.rate.value!,
      photo: this.file,
      userId: 1,
    }
    this.commentService.createComment(comment).subscribe( comment => {
      console.log(comment);
      this.recipe?.comments.push(comment);

    })
  }

  onHeaderChange(event: any) {
    this.file = event.target.files[0];
  }

}
