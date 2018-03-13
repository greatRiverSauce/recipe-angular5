import { Ingredient } from '../shared/ingredient.model';
import {Subject} from "rxjs/Subject";
export class ShoppingListService {
    ingreditentChange = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Bread', 10)
    ];
    getShoppingList() {
        return this.ingredients;
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingreditentChange.next(this.ingredients);
    }

}