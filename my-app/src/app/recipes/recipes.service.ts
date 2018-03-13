import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from "../shared/ingredient.model";
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A test of the recipe',
            'This is a simple test',
            'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
            [
                new Ingredient('apple', 5),
                new Ingredient('banana', 10)
            ]),
        new Recipe(
            'Another test of the recipe',
            'This is another simple test',
            'https://i.ndtvimg.com/i/2015-07/junk-food_625x350_51437398803.jpg',
            [
                new Ingredient('bread', 5),
                new Ingredient('meat', 10)
            ]),
    ];
    getRecipes() {
        return this.recipes.slice();
    }
}