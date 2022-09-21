import { Component, OnInit } from '@angular/core';
import { CharacterResponse } from 'src/app/interfaces/character.interface';
import { EpisodeResponse } from 'src/app/interfaces/episode.interface';
import { ActorService } from 'src/app/services/actor.service';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: CharacterResponse[] = [];
  episodes: EpisodeResponse[] = [];

  constructor(  private actorsService: ActorService,
                private episodeService: EpisodeService
    ) { }

  ngOnInit(): void {
    this.getCharacters();
    this.getEpisodes();
  }

  getCharacters() {
    this.actorsService.getCharacters()
    .subscribe( (resp: CharacterResponse[]) => {
      this.getCharactersBySeason(resp);
    } );
  }

  getEpisodes() {
    this.episodeService.getEpisodes()
    .subscribe( (resp: EpisodeResponse[]) => {
      this.episodes = resp;
    } );
  }

  getCharactersBySeason( characters: CharacterResponse[]) {
    this.getCharacterOrder( this.actorsService.getCharactersBySeason(characters) );
  }

  getCharacterOrder( characters: CharacterResponse[] ) {
    this.getCharaterOrderReverse( this.actorsService.getCharacterOrder(characters) );
  }

  getCharaterOrderReverse( characters: CharacterResponse[] ) {
    this.characters = this.actorsService.getCharaterOrderReverse( characters );
  }

}
