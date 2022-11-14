import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porto',
  templateUrl: './porto.component.html',
  styleUrls: ['./porto.component.css']
})
export class PortoComponent implements OnInit {
imgSrc: any;
  constructor() { }


  getImg(e:any)
  {


if(e.path.length == 12){
  let img:any=document.getElementById("img")
  img.src=e.path[2].children[0].currentSrc;

  let pargraph:any=document.getElementById("pargraph")
  pargraph.innerHTML=e.path[2].children[0].alt;



}else{
  let imgSrc=e.path[1].children[0].currentSrc;
  let img:any=document.getElementById("img")
  img.src=imgSrc;

  let pargraph:any=document.getElementById("pargraph")
  pargraph.innerHTML=e.path[1].children[0].alt;




}




}


  ngOnInit(): void {
  }

}

