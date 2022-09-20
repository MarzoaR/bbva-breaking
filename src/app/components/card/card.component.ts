import { Component, Input, OnInit } from '@angular/core';
import { CharacterResponse } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() characters: CharacterResponse[] = [];

  // @Input() character: CharacterResponse[] = [];

  constructor() {}

  ngOnInit(): void {
    // console.log("porque "+ this.characters);
  }

  alert( name: string): void {
    alert(name);
  }

}
