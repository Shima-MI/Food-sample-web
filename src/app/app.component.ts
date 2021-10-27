import { AuthenticateService } from './services/authenticate.service';
import { Recipes } from './models/Recipes';
import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
   
  isAuthenticate= false;

  recipe: Recipes[];

  Recipes = [
    { image: "https://gcdn.pbrd.co/images/kRa3Yy4U1BVr.jpg?o=1", recepieName: "Pizza"  , writerName: "By: Sara Parker"} ,
    { image: "https://gcdn.pbrd.co/images/z3UlvYqdhs4H.png?o=1", recepieName: "Passta"  , writerName: "By: John Alex"} ,
    { image: "https://gcdn.pbrd.co/images/xOjdCn5a6xFr.jpg?o=1", recepieName: "Cookei"  , writerName: "By: Marya Anderson"} ,
    { image: "https://gcdn.pbrd.co/images/WZz4HA0T2P43.png?o=1", recepieName: "Caesar Salad"  , writerName: "By: Alfredo Alpachino"} 
  ]
 constructor(private recipeService: RecipeService, private authService: AuthenticateService){}

 ngOnInit(): void{
    this.recipe= this.recipeService.getAll();
    this.isAuthenticate= this.authService.isAuthenticate;
 }
}