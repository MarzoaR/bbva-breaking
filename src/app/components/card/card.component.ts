import { Component, Input, OnInit } from '@angular/core';
import { EpisodeService } from 'src/app/services/episode.service';

import { CharacterResponse } from 'src/app/interfaces/character.interface';
import { EpisodeResponse } from 'src/app/interfaces/episode.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() characters: CharacterResponse[] = [];

  episodes: EpisodeResponse[] = [];

  constructor( private episode: EpisodeService ) {}

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this.episode.getEpisodes()
    .subscribe( (resp: EpisodeResponse[]) => {
      // console.log(resp);
      this.episodes = resp;
    });
  }

  alert( name: string): void {
    alert( name );
    console.log(this.episode.getEpisodesByCharacter(name, this.episodes));

    console.log(this.episodes)
  }

}
