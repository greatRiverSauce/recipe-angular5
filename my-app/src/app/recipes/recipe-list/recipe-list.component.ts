import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from "../recipes.service";
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription: Subscription;
  constructor(private recipeService: RecipeService) {

  }
  ngOnInit() {
    this.recipeSubscription = this.recipeService.recipesChange.subscribe((recipes:Recipe[]) => {
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
  }
  ngOnDestroy () {
    this.recipeSubscription.unsubscribe();
  }
}
