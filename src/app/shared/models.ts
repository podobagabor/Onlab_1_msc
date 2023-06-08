export interface Recipe {
    id: number
    name: string,
    rating: number,
    descriptions: Description[],
    comments: CommentDto[],
    ingredients: IngredientsGroup[],
    photo: string,
    user: User,
}

export interface RecipeCreate {
    Name: string,
    Photo: File,
    Descriptions: DescriptionCreate[],
    Ingredients: IngredientsGroupCreate[],
    UserId: number,
    Comments: CommentDto[]
}

export interface DescriptionCreate {
    text: string,
    photo?: File,
}

export interface CommentDto {
    body: string,
    rating: number,
    photo?: string,
    userId: number,
    id: number,
}

export interface CommentCreateDto {
    body: string,
    rating: number,
    photo?: File,
    userId: number,
}

export interface Description {
    id:number,
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
    id: number
    amount: number,
}

export interface IngredientItem {
    name: string,
    unit: string,
    amount: number,
}

export interface IngredientCreate {
    unit: string,
    name: string,
}

export interface Ingredient {
    name: string,
    id: number,
    unit: string,
}

export interface User {
    id: number,
    name: string,
    email: string,
    photo: string,
    userName: string;
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
    photo?: File,
}

export interface Article {
    id: number,
    title: string,
    body: string,
    photo: string,
    userId: number,
    comments: CommentDto[],
    user: User,
}

export interface ArticleCreate {
    title: string,
    body: string,
    photo?: File,
    userId: number,
    comments: CommentDto[]
}