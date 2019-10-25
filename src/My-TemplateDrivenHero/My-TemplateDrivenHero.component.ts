import { Component, OnInit } from '@angular/core'; 
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-My-TemplateDrivenHero',
  templateUrl: './My-TemplateDrivenHero.component.html',
  styleUrls: ['./My-TemplateDrivenHero.component.css']
})
export class MyTemplateDrivenHeroComponent implements OnInit {

  constructor() { }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];


  hero = new Hero(1,'some','','some');          
  ngOnInit() {
  }

}
