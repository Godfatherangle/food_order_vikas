import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  food!: Food
  foods: Food[] = []; 
  constructor(private foodService:FoodService, activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      // if(params.id)
      this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      
      else if(params.tag)
      this.foods = this.foodService.getAllFoodsByTag(params.tag)
    else
      // this.food = foodService.getFoodById(params.id);
    this.foods = foodService.getAll();

    })
  }


  ngOnInit(): void {
    
  }
}
