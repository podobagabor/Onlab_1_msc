import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatPaginatorModule
} from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY.MM.DD.',
  },
  display: {
    dateInput: 'YYYY.MM.DD.',
    monthYearLabel: 'YYYY MMMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY MMMM',
  },
};

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatSelectModule,
    MatPaginatorModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatExpansionModule,
    DragDropModule,
    MatSortModule,
    MatRadioModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatSelectModule,
    MatPaginatorModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatExpansionModule,
    DragDropModule,
    MatSortModule,
    MatRadioModule,
  ],
  providers: [],
  declarations: [],
})
export class CustomMaterialModule {
  static forRoot() {
    return {
      ngModule: CustomMaterialModule,
      providers: [],
    };
  }
}
