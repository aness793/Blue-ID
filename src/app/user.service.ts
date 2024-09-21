import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';
import { User, UserLogin } from './Data_class';

const user_key = 'user'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
login(loginner:UserLogin){
  this.setUserToLocalStorage(loginner)
}
logout(){
  this
}
public USER?:{email?:string , password?:string}=undefined
  private setUserToLocalStorage(user:User){
    localStorage.setItem(user_key,JSON.stringify(user))
  }
  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(user_key)
    if(userJson) return JSON.parse(userJson) as User
    return new User()
  }

}
