import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from "./shoppinglist.service";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    @Input() addIngredient:Ingredient;
    ingredients: Ingredient[];
    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.ingredients = this.shoppingListService.getShoppingList();
        this.shoppingListService.ingreditentChange.subscribe((ingredients:Ingredient[]) => {
            this.ingredients = ingredients;
        })
    }
    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        console.log(ingredient.name + ',' + ingredient.amount);
    }
}
