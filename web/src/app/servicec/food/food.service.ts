import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {
    
   }

   getAll():Food[] {
      return[
        
        {
          id:1,
          name:'Belgiam Cake',
          price: 90,
          cookTime:'20-30',
          favorite:false,
          origins:'chinese',
          stars:4.8,
          imageUrl: '/assets/images/images/f5.jpg',
          tags: ['chocolate, tasty'],
        },

        {
          id:2,
          name:'Rava Idly',
          price: 80,
          cookTime:'20-30',
          favorite:false,
          origins:'indian',
          stars:4.5,
          imageUrl: '/assets/images/images/f6.jpg',
          tags: ['breakfast'],
        },

        {
          id:3,
          name:'Channa Masala',
          price: 170,
          cookTime:'20-50',
          favorite:false,
          origins:'karnadaka',
          stars:4.9,
          imageUrl:'/assets/images/images/f4.jpg',
          tags: ['savory'],
        },
        {
          id:4,
          name:'Burger',
          price: 120,
          cookTime:'20-30',
          favorite:false,
          origins:'itally',
          stars:4.5,
          imageUrl:'/assets/images/images/f1.jpg',
          tags: ['SlowFood'],
        },
        {
          id:5,
          name:'Pizza',
          price: 300,
          cookTime:'20-40',
          favorite:false,
          origins:'itally',
          stars:4.5,
          imageUrl: '/assets/images/images/f12.jpg',
          tags: ['fastFood'],
        },
        
        
        {
          id:6,
          name:'Upma',
          price: 100,
          cookTime:'20-30',
          favorite:false,
          origins:'indian',
          stars:3.2,
          imageUrl:'/assets/images/images/f8.jpg',
          tags: ['SlowFood'],
        },
        {
          id:7,
          name:'Biriyani',
          price: 200,
          cookTime:'30-60',
          favorite:false,
          origins:'indian',
          stars:4.9,
          imageUrl:'/assets/images/images/f10.jpg',
          tags: ['tasty','savory'],
        }, 
        {
          id:8,
          name:'French Fries',
          price: 70,
          cookTime:'20-30',
          favorite:false,
          origins:'itally',
          stars:4.5,
          imageUrl:'/assets/images/images/f7.jpg',
          tags: ['fastFood'],
        },

        
        // {
        //   id:9,
        //   name:'Panner Butter Masala',
        //   price: 190,
        //   cookTime:'20-50',
        //   favorite:false,
        //   origins:'telugana',
        //   stars:4.5,
        //   imageUrl:'/assets/images/images/f3.jpg',

        //   tags: ['tasty' ,'savory'],
        // },


      ]
    }
  }

