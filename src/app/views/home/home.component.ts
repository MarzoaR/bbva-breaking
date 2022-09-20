import { Component, OnInit } from '@angular/core';
import { CharacterResponse } from 'src/app/interfaces/character.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: CharacterResponse[] = [];

  constructor(  private actors:ActorService ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.actors.getCharacters()
    .subscribe( (resp: CharacterResponse[]) => {
      this.getCharactersBySeason(resp);
    } );
  }

  getCharactersBySeason( characters: CharacterResponse[]) {
    this.getCharacterOrder( this.actors.getCharactersBySeason(characters) );
  }

  getCharacterOrder( characters: CharacterResponse[] ) {
    this.getCharaterOrderReverse( this.actors.getCharacterOrder(characters) );
  }

  getCharaterOrderReverse( characters: CharacterResponse[] ) {
    this.characters = this.actors.getCharaterOrderReverse( characters );
  }

}
