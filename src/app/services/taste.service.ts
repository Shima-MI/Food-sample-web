import { Injectable } from '@angular/core';
import { Taste } from '../models/taste'

@Injectable({
  providedIn: 'root'
})
export class TasteService {
  
  taste: Taste[]= [
    new Taste ("https://images-na.ssl-images-amazon.com/images/I/71XwVXWoupL._SX296_.jpg", 
    "First begin by making your frosting: Add the coconut cream, chocolate chips and a pinch of salt to a small pot and place over low heat. Whisk until melted. Transfer to a bowl, cover with plastic wrap and place in the fridge to harden for 6 hours or until hard. Overnight is best!Preheat oven to 350 degrees F. Line the bottom of three round cake pans with parchment paper rounds. Spray parchment paper and side of pan with nonstick cooking spray. YOU SHOULD USE PARCHMENT PAPER or the cake is likely to stick. Please do not forget.In a large bowl, mix together the melted and cooled coconut oil, coconut sugar, eggs, vanilla and apple cider vinegar until smooth.", 
    "n.1","2021/5/1", "Shima", 1584),
    new Taste ("https://images-na.ssl-images-amazon.com/images/I/71SRBskrRWL._SX296_.jpg", "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "n.2","2021/5/1", "Shima", 1600),
    new Taste ("https://images-na.ssl-images-amazon.com/images/I/71-QU9-9qHL._SX296_.jpg", "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "n.3","2021/5/1", "Shima", 200),
    new Taste ("https://images-na.ssl-images-amazon.com/images/I/71xYgyO5PuL._SX296_.jpg", "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "n.4","2021/5/1", "Shima", 587),
    new Taste ("https://images-na.ssl-images-amazon.com/images/I/61mv5oyRz7L._SX296_.jpg", "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "n.5","2021/5/1", "Shima", 2159),
    new Taste ("https://images-na.ssl-images-amazon.com/images/I/817HO82lyzL._SX296_.jpg", "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "n.6","2021/5/1", "Shima", 230),
    new Taste ("https://images-na.ssl-images-amazon.com/images/I/61LMEYhWypL._SX296_.jpg", "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "n.7","2021/5/1", "Shima", 198),
    new Taste ("https://images-na.ssl-images-amazon.com/images/I/61rM5PF+vRL._SX296_.jpg", "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "n.8","2021/5/1", "Shima", 1874),
    new Taste ("https://images-na.ssl-images-amazon.com/images/I/71qHIBXOloL._SX296_.jpg", "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "n.9","2021/5/1", "Shima", 256),
    new Taste ("https://images-na.ssl-images-amazon.com/images/I/61KNPWmYoKL._SX296_.jpg", "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "n.10","2021/5/1", "Shima", 312),

  ]
  constructor() { }
  getAll(): Taste[]{
    return this.taste;
  }

  get(recipeName: string): Taste{
    return this.taste.find(q => q.recipeName == recipeName)
  }
}
