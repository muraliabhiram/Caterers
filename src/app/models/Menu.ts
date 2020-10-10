
export interface IMenu{
    CatererId:number;
    MenuId:number;
    MenuName:string; 
    MenuDesc:string;  

    Categories : ICategory [];
}

export interface ICategory{
    MenuId: number;
    CategoryId:number;
    CategoryName:string;
    CategoryDesc:string;
    MaxCount:number;

    FoodItems : IFoodItem[];

}

export interface IFoodItem{
    CategoryId: number
    FoodItemId:number;
    FoodItemName:string;    
    FoodItemDesc:string;
    IsAdded : boolean;
}