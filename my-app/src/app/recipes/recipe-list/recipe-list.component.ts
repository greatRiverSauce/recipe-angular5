import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
      new Recipe(
          'A test of the recipe',
          'This is a simple test',
          'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
      new Recipe(
          'Another test of the recipe',
          'This is another simple test',
          'https://i.ndtvimg.com/i/2015-07/junk-food_625x350_51437398803.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
