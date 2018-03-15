import { Ingredient } from '../shared/ingredient.model';
import {Subject} from "rxjs/Subject";
export class ShoppingListService {
    ingreditentChange = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Bread', 10)
    ];
    getShoppingList() {
        return this.ingredients;
    }
    getIngredient(id: number) {
        return this.ingredients[id];
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingreditentChange.next(this.ingredients);
    }
    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingreditentChange.next(this.ingredients.slice());
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingreditentChange.next(this.ingredients.slice());
    }

}