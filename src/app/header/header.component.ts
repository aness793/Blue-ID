import { CommonModule, Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, NgModule, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChildren('nav') nav!:QueryList<ElementRef>;
  link:string=''
constructor(private  activatedroute:ActivatedRoute , private location:Location, private render:Renderer2 , public userService:UserService){  
}
ngOnInit(): void {

}
ngAfterViewInit(){

}
USER?= this.userService.USER

navigations = ['home','data','blogs','about']
chosen:string=this.navigations[0]
hello(){
  console.log(this.location.path())

}
}