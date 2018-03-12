import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    @Input() addIngredient:Ingredient;
      ingredients: Ingredient[] = [
          new Ingredient('Apple', 5),
          new Ingredient('Bread', 10)
      ];
      constructor() { }

      ngOnInit() {
      }
    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        console.log(ingredient.name + ',' + ingredient.amount);
    }
}
