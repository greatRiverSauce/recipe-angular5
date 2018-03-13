import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {ShoppingListService} from "../../shopping-list/shoppinglist.service";
import {Ingredient} from "../../shared/ingredient.model";
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  addToShoppinglist() {
    this.recipe.ingredients.forEach((ingredient: Ingredient) => {
      this.shoppingListService.addIngredient(ingredient);
    })
  }
}
