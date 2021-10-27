import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeForm: FormGroup;

  constructor(private formb: FormBuilder) { }

  ngOnInit(): void {
    this.recipeForm= this.formb.group({
      foodName: ['', [Validators.required, Validators.maxLength(20)]],
      Recipe: ['', Validators.required],
      country: ['', Validators.required],
      writtenBy: ['', Validators.required],
      picture: [''],

    })
  }
save(){
  if(this.recipeForm.invalid){
    alert("Invalid Forms");
    return;
  }
  alert("Form Saved Successfully!")
}

}
