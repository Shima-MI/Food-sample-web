import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.css']
})
export class RecipeslistComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }
}
