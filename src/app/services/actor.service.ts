import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { CharacterResponse } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor( private http: HttpClient ) { }

  getCharacters(): Observable<CharacterResponse[]>{
    return this.http.get<CharacterResponse[]>('/assets/data/character.json').pipe( delay(740) );
  }

  getCharactersBySeason( characters: CharacterResponse[]): CharacterResponse[] {
    return characters.filter( (character: CharacterResponse) => character.appearance.includes(3) && character.appearance.includes(5) );
  }

  getCharacterOrder( characters: CharacterResponse[] ): CharacterResponse[] {
    return characters.sort( (a: CharacterResponse, b: CharacterResponse) => a.name.localeCompare(b.name) );
  }

  getCharaterOrderReverse( characters: CharacterResponse[] ): CharacterResponse[] {
    return characters.reverse();
  }

}

