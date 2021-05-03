import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_640.jpg'),
    new Recipe('A Test Recipe', 'This is a test description', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_640.jpg'),
    new Recipe('A Test Recipe', 'This is a test description', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_640.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
