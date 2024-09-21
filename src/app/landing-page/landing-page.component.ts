import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import {Tags,data, exchange, courses} from '../Data'

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  @ViewChildren('difficulty') difficulty!:QueryList<ElementRef>
  constructor( private renderer:Renderer2){

  }
  ngOnInit(): void {
    
  }
  ngOnChnages(){
    alert('it works')
  }
  ngAfterViewInit(){
    this.difficulty.forEach((element:ElementRef)=>{
      if(element.nativeElement.innerHTML=='easy'){
        this.renderer.addClass(element.nativeElement,'easy')
      }
      else if (element.nativeElement.innerHTML=='intermediate'){
        this.renderer.addClass(element.nativeElement,'intermediate')
      }
      else {
        this.renderer.addClass(element.nativeElement,'advanced')
      }
    })
    
  }
  // reprsents Tags
  Tags=Tags
  // represents data-cards
  data=data
  highlight:boolean=false
  // to highlight the selected tag 
  selected:number |null=null
  // the method used to highlight the selected tag 
  change(index:number){
    this.selected = index
  }
  // represents the exchange data 
  Exchange=exchange
courses = courses
  


qst1=false
qst2=false
qst3=false
qst4=false
qst5=false
change1(){
  this.qst1 =!this.qst1
}
change2(){
  this.qst2 =!this.qst2
}
change3(){
  this.qst3 =!this.qst3
}
change4(){
  this.qst4 =!this.qst4
}
change5(){
  this.qst5 =!this.qst5
}








}
