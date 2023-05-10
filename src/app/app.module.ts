import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProbaComponent } from './features/proba/proba.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { MatInputModule} from '@angular/material/input'
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule} from '@angular/material/button'
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginDialogComponent } from './shared/layout/login-dialog/login-dialog.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component';

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
    CustomMaterialModule
    
  ],
  exports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
