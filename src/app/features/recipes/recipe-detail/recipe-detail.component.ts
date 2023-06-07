import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/api/CommentService';
import { RecipeService } from 'src/app/api/RecipeService';
import { Recipe, IngredientsGroup, CommentDto, CommentCreateDto } from 'src/app/shared/models';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  protected recipe?: Recipe;
  protected ingredients?: IngredientsGroup[];
  protected comments?: { comment: CommentDto, userName: string, userPhoto: string }[] = []
  protected file?: File;

  protected commentForm = new FormGroup({
    comment: new FormControl<string>(''),
    photo: new FormControl<File | undefined>(undefined),
    rate: new FormControl<number>(5),
  })
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private commentService: CommentService, private userService: AuthenticationService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const recipeId = params["id"];
      if (recipeId) {
        this.recipeService.getRecipe(recipeId).subscribe(recipe => {
          this.recipe = recipe;
          this.comments = [];
          recipe.comments.forEach(element => {
            this.userService.getUser(element.userId).subscribe(user => {
              this.comments?.push({
                comment: element,
                userName: user.name,
                userPhoto: user.photo,
              })
            })
          });
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
    this.commentService.createComment(comment).subscribe(comment => {
      console.log(comment);
      this.recipe?.comments.push(comment);
      this.recipeService.updateRecipe(this.recipe?.id!, this.recipe!).subscribe(value => {
        this.recipe = {...value};
        this.comments = [];
        value.comments.forEach(element => {
          this.userService.getUser(element.userId).subscribe(user => {
            if(user.photo === null) {
              user.photo = "https://containeraccount.blob.core.windows.net/msc-onlab/avatar.jpg";
            }
            this.comments?.push({
              comment: element,
              userName: user.name,
              userPhoto: user.photo || "https://containeraccount.blob.core.windows.net/msc-onlab/avatar.jpg",
            })
          })
        });
        this.comments = [...this.comments!];
      })
    })
  }

  onHeaderChange(event: any) {
    this.file = event.target.files[0];
  }

}
