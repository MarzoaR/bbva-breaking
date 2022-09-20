import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { EpisodeResponse } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor( private http: HttpClient ) { }

  getEpisodes(): Observable<EpisodeResponse[]>{
    return this.http.get<EpisodeResponse[]>('/assets/data/episodes.json').pipe( delay(1500) );
  }

  getEpisodesByCharacter( name: string, episodes: EpisodeResponse[]): EpisodeResponse[] {
    return episodes.filter( (episode: EpisodeResponse) => episode.characters.includes(name) && episode.series === 'Breaking Bad' );
  }
}
