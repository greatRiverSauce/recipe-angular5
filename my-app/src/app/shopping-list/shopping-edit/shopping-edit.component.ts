import { Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from "../shoppinglist.service";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') slForm:NgForm;

  editMode = false;
  deleteMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.shoppinglistService.startEditing.subscribe((id:number) => {
      this.editedItemIndex = id;
      this.editMode = true;
      this.deleteMode = true;
      this.editedItem = this.shoppinglistService.getIngredient(id);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }
  // onAddIngredient() {
  //   const newIngredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
  //   this.shoppinglistService.addIngredient(newIngredient);
  // }
  onSubmit(form:NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppinglistService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppinglistService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }
  onDelete() {
    if (this.editMode) {
      this.deleteMode = true;
    }
    if (this.deleteMode) {
      this.shoppinglistService.deleteIngredient(this.editedItemIndex);
      this.onClear();
    }
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
    this.deleteMode = false;
  }
}
