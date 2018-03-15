import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {Ingredient} from "../../shared/ingredient.model";
import { ActivatedRoute, Router, Params } from '@angular/router';
import {RecipeService} from "../recipes.service";
import {ShoppingListService} from "../../shopping-list/shoppinglist.service";
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    })
  }
  addToShoppinglist() {
    this.recipe.ingredients.forEach((ingredient: Ingredient) => {
      this.shoppingListService.addIngredient(ingredient);
    })
  }
  editRecipe() {
    this.router.navigate(['edit'], {relativeTo:this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo:this.route});
  }
}
