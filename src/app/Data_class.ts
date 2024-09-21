export class Data 
    {
        title!:string
        image!:string
        time!:string
        difficulty!:string
        discription!:string
        Author?:string | 'Anonymous'
    
    }
export class User 
{
    name?:string
    email!:string
    password!:string
    type?:string
}
export interface UserLogin {
    email:string
    password:string
}