import { Injectable } from '@angular/core';
import { Recipes } from '../models/Recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipe: Recipes[]=[
    new Recipes("https://gcdn.pbrd.co/images/kRa3Yy4U1BVr.jpg?o=1", "Pizza" , "By: Sara Parker") ,
    new Recipes("https://gcdn.pbrd.co/images/z3UlvYqdhs4H.png?o=1", "Passta" , "By: John Alex") ,
    new Recipes("https://gcdn.pbrd.co/images/xOjdCn5a6xFr.jpg?o=1", "Cookie" , "By: Marya Anderson") ,
    new Recipes("https://gcdn.pbrd.co/images/WZz4HA0T2P43.png?o=1", "Caesar Salad" , "By: Alfredo Alpachino") ,
  ]
  constructor() { }

  getAll(): Recipes[] {
    return this.recipe;
  }

  get(recipeName: string): Recipes{
   return this.recipe.find(q => q.recipeName == recipeName)
  }

}
