import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/api/ArticleService';
import { CommentService } from 'src/app/api/CommentService';
import { Article, CommentCreateDto, CommentDto } from 'src/app/shared/models';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit{

  protected commentForm = new FormGroup({
    comment: new FormControl<string>(''),
    photo: new FormControl<File | undefined>(undefined),
    rate: new FormControl<number>(5),
  })
  protected article?: Article;
  protected comments?: { comment: CommentDto, userName: string, userPhoto: string }[] = []
  protected file?: File;
  protected hasUser: boolean = false;
  
  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute, private commentService: CommentService, private userService: AuthenticationService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const articleId = params["id"];
      if (articleId) {
        this.articleService.getArticleById(articleId).subscribe(article => {
          this.article = article;
          this.comments = [];
          article.comments.forEach(element => {
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
    if(localStorage.getItem("userId")) {
      this.hasUser = true;
    }
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
      this.article?.comments.push(comment);
      this.articleService.updateArticle(this.article?.id!, this.article!).subscribe(value => {
        this.article = {...value};
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
