import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/api/ArticleService';
import { Article, ArticleCreate } from 'src/app/shared/models';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {
  protected header?: File;

  constructor(private articleService: ArticleService, private router: Router){}
  articleForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    headerPhoto: new FormControl<File | undefined>(undefined),
  });

  onHeaderChange(event: any) {
    this.header = event.target.files[0];
  }

  saveArticle() {
    const userId = Number(localStorage.getItem("userId"));
    const newArticle: ArticleCreate = {
      body: this.articleForm.controls.description.value!,
      comments: [],
      photo: this.header,
      title: this.articleForm.controls.name.value!,
      userId: userId,
    }

    this.articleService.createArticle(newArticle).subscribe( value => {
      this.router.navigateByUrl("/profile");
    })
  }
}
