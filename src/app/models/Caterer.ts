import { isInterfaceDeclaration } from "typescript";

export interface ICaterer{
    CatererId:number;
    CatererName: string;
    Description: string;
    ReviewsCount: number;
    CatererImage: string;
    Location: string;
}
