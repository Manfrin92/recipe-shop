import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipe: Recipe[] = [
    new Recipe(
      'A task recipe',
      'description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
      [new Ingredient('Hamburguer', 5)]
    ),
    new Recipe(
      'A task recipe',
      'description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
      [new Ingredient('Pasta', 3)]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipe.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
