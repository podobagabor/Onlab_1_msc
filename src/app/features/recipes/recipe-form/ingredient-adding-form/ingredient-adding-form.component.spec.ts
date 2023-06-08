import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientAddingFormComponent } from './ingredient-adding-form.component';

describe('IngredientAddingFormComponent', () => {
  let component: IngredientAddingFormComponent;
  let fixture: ComponentFixture<IngredientAddingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientAddingFormComponent]
    });
    fixture = TestBed.createComponent(IngredientAddingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
