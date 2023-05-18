export interface Recipe {
    name: string,
    rating: number,
    descriptions: Description[],
    comments: Comment[],
    ingredients: IngredientsGroup[],
    photo: string,
}

export interface RecipeCreate {
    Name: string,
    Photo: File,
    Descriptions: DescriptionCreate[],
    Ingredients: IngredientsGroupCreate[],
    UserId:number,
    Comments: Comment[]
}

export interface DescriptionCreate {
    text: string,
    photo: File,
}

export interface Comment {
    body: string,
    rating: number,
}

export interface Description {
    text: string,
    photo: string,
}

export interface IngredientsGroupCreate {
    name: string,
    ingredients: IngredientItemCreate[]
}

export interface IngredientsGroup {
    name: string,
    ingredients: IngredientItem[]
}

export interface IngredientItemCreate {
    id:number
    amount: number,
}

export interface IngredientItem {
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