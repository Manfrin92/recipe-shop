import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipe: Recipe[] = [
    new Recipe(
      'A task recipe',
      'description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636'
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipe.slice();
  }
}
