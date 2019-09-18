import { Component, OnInit } from '@angular/core';
import { StarTrekService } from '../services/star-trek.service';
import { Character } from '../models/character'
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  characters: Character[] = [];
  hasNext: boolean = false;
  page: number = 0;
  private infiniteScroll: IonInfiniteScroll;
  
  constructor(private starTrekService: StarTrekService) {}

  ngOnInit() {
    this.starTrekService.loadCharacters(this.page).subscribe(
      data => {
        this.hasNext = data.hasNext;
        this.characters = [...this.characters, ...data.characters];
        // console.log(this.characters)
        this.notifyScrollComplete();
      }
    )
  }

  load(event) {
    this.page ++;
    this.starTrekService.loadCharacters(this.page).subscribe(
      data => {
        this.hasNext = data.hasNext;
        this.characters = [...this.characters, ...data.characters];
        this.notifyScrollComplete();
      })
    this.infiniteScroll =  event.target
  }

  notifyScrollComplete(){
    if (this.infiniteScroll) {
      this.infiniteScroll.complete();
    }
  }
}