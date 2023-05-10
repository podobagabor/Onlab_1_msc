export interface Recipe {
    id: number,
    name: string,
    rating: number,
    description: Description[],
    comments: Comment[],
    ingredients: IngredientsGroup[],
}

export interface Comment {
    body: string,
    rating: number,
}

export interface Description {
    text: string,
}

export interface IngredientsGroup {
    id: number,
    name: string,
    ingredients: IngredientItem[]
}

export interface IngredientItem {
    id: number,
    name: string,
    unit: string,
    amount: number,
}

export interface User {
    id:number,
    name: string,
    email: string,
}

export interface LoginUser {
    email: string,
    password: string,
}

export interface UserCreate {
    email: string,
    password: string,
    userName: string,
    name: string,
}