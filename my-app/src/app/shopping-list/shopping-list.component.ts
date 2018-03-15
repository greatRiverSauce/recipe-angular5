import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from "./shoppinglist.service";
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    @Input() addIngredient:Ingredient;
    subscription: Subscription;
    ingredients: Ingredient[];
    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.ingredients = this.shoppingListService.getShoppingList();
        this.subscription = this.shoppingListService.ingreditentChange.subscribe((ingredients:Ingredient[]) => {
            this.ingredients = ingredients;
        })
    }
    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        console.log(ingredient.name + ',' + ingredient.amount);
    }
    onEditItem(id: number) {
        this.shoppingListService.startEditing.next(id);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
