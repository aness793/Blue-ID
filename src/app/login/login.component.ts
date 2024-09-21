import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { users } from '../Data';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
constructor(private formBuilder:FormBuilder , private userService:UserService, private router:Router) { 
  userService.USER = this.currentUser
}
ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
}
get fc (){
  return this.loginForm.controls
}
public currentUser?:{email?:string , password?:string}=undefined
submit (){
  this.isSubmitted=true
  if(this.loginForm.invalid) {
    alert('invalid user')
    return};
  
  this.userService.login({email:this.fc.email.value , password:this.fc.password.value})
  if(this.loginForm.valid){

    for(let user of users){
      if(user.email ===this.fc.email.value && user.password === this.fc.password.value){
        this.currentUser = {email:user.email , password:user.password}
        // alert(`welcome back ${user.name}`)
        this.router.navigateByUrl('#explore')
        return 
      }
    }
    if(this.currentUser==undefined){
      alert('user invalid')
    }
  }
}

on='signup'
login(){
  this.on='login'
  
}
signup(){
  this.on ='signup'
}
// defining and getting form informations
isSubmitted=false
loginForm!:FormGroup



}
