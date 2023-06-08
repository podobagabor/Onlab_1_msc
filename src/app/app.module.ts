import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { ArticleModule } from './features/article/article.module';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProbaComponent } from './features/proba/proba.component';
import { RecipeModule } from './features/recipes/recipes.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginDialogComponent } from './shared/layout/login-dialog/login-dialog.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProbaComponent,
    DashboardComponent,
    LayoutComponent,
    LoginDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    AuthenticationModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    CustomMaterialModule,
    FormsModule,
    RecipeModule,
    ArticleModule
  ],
  exports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
