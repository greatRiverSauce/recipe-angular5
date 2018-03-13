import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A test of the recipe',
            'This is a simple test',
            'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
        new Recipe(
            'Another test of the recipe',
            'This is another simple test',
            'https://i.ndtvimg.com/i/2015-07/junk-food_625x350_51437398803.jpg'),
    ];
    getRecipes() {
        return this.recipes.slice();
    }
}