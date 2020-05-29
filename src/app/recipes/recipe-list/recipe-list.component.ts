import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test', 'This is simply a test', 'https://img.taste.com.au/62w0bkp3/w720-h480-cfill-q80/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
