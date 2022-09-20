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

  getCharacters(): Observable<CharacterResponse>{
    return this.http.get<CharacterResponse>('/assets/data/character.json').pipe( delay(740) );
  }

  getCharactersBySeason( characters: any): any {
    return characters.filter( (character: any) => character.appearance.includes(3) && character.appearance.includes(5) );
  }

  getCharacterOrder( characters: any ): any {
    return characters.sort( (a: any, b: any) => {
      if ( a.name > b.name ) {
        return 1;
      }
      if ( a.name < b.name ) {
        return -1;
      }
      return 0;
      // a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    });
  }

  getCharaterOrderReverse( characters: any ): any {
    return characters.reverse();
  }

}

