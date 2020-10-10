import {ICategory} from '../models/Menu'

export class MenuData{

    Categories : ICategory[] =[];
    Pickles : ICategory[] =[];
    Sweets: ICategory[]=[];
    SpecialRice: ICategory[]=[];
    Curries: ICategory[]=[];
    
    constructor(){
        this.buildPickles();
        this.buildSweets();
        this.buildSpecialRice();
        this.buildCurries();
        this.Categories = this.Categories.concat(this.Pickles);
        this.Categories = this.Categories.concat(this.Sweets);
        this.Categories = this.Categories.concat(this.SpecialRice);
        this.Categories = this.Categories.concat(this.Curries);
    }

    buildPickles(){
        this.Pickles.push(
            {
             MenuId:1,
             CategoryId:1,
             CategoryName:"Pickle",
             CategoryDesc:"Pickle",
             MaxCount:1,
             FoodItems:[
                {
                 CategoryId:1,
                 FoodItemId:1,
                 FoodItemName:"Gongura Pickle",
                 FoodItemDesc: "Gongura Pickle",
                 IsAdded:false
                },
                {
                    CategoryId:1,
                    FoodItemId:2,
                    FoodItemName:"Mango Pickle",
                    FoodItemDesc: "Mango Pickle",
                    IsAdded:false
                }
                ]
            }
        );
    }

    buildSweets(){
        this.Sweets.push(
            {
             MenuId:1,
             CategoryId:2,
             CategoryName:"Sweets",
             CategoryDesc:"Sweets",
             MaxCount:1,
             FoodItems:[
                {
                 CategoryId:2,
                 FoodItemId:1,
                 FoodItemName:" Dry Gulab Jam",
                 FoodItemDesc: " Dry Gulab Jam",
                 IsAdded:false
                },
                {
                    CategoryId:2,
                    FoodItemId:2,
                    FoodItemName:"Kalakand",
                    FoodItemDesc: "Kalakand",
                    IsAdded:false
                }
                ]
            }
        );
    }

    buildSpecialRice(){
        this.SpecialRice.push(
            {
             MenuId:1,
             CategoryId:3,
             CategoryName:"Special Rice With Riata",
             CategoryDesc:"Special Rice",
             MaxCount:1,
             FoodItems:[
                {
                 CategoryId:3,
                 FoodItemId:1,
                 FoodItemName:" Veg Pulav",
                 FoodItemDesc: " Veg Pulav",
                 IsAdded:false
                },
                {
                    CategoryId:3,
                    FoodItemId:2,
                    FoodItemName:"Lemon Rice",
                    FoodItemDesc: "Lemon Rice",
                    IsAdded:false
                }
                ]
            }
        );
    }

    buildCurries(){
        this.Curries.push(
            {
             MenuId:1,
             CategoryId:4,
             CategoryName:"Curries",
             CategoryDesc:"Curries",
             MaxCount:2,
             FoodItems:[
                {
                 CategoryId:4,
                 FoodItemId:1,
                 FoodItemName:"Panner",
                 FoodItemDesc: "Panner",
                 IsAdded:false
                },
                {
                    CategoryId:4,
                    FoodItemId:2,
                    FoodItemName:"Kaju Drumsticks",
                    FoodItemDesc: "Kaju Drumsticks",
                    IsAdded:false
                },
                {
                    CategoryId:4,
                    FoodItemId:3,
                    FoodItemName:"Brinjal",
                    FoodItemDesc: "Brinjal",
                    IsAdded:false
                }
                ]
            }
        );
    }



}