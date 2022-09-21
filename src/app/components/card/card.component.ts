import { Component, Input, OnInit } from '@angular/core';
import { EpisodeService } from 'src/app/services/episode.service';

import { CharacterResponse } from 'src/app/interfaces/character.interface';
import { EpisodeResponse } from 'src/app/interfaces/episode.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() characters: CharacterResponse[] = [];

  episodes: EpisodeResponse[] = [];
  episodesByCharacter: EpisodeResponse[] = [];

  constructor( private episode: EpisodeService ) {}

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this.episode.getEpisodes()
    .subscribe( (resp: EpisodeResponse[]) => {
      this.episodes = resp;
    });
  }

  getInfoEpisodes( name: string): void {
    this.episodesByCharacter = this.episode.getEpisodesByCharacter( name, this.episodes );
    this.callAlert( name, this.episodesByCharacter );
  }

  callAlert( name: string, episodesByCharacter: EpisodeResponse[] ): void {
    let listSeasonEpisode: string = '';
    episodesByCharacter.forEach(episode => listSeasonEpisode += `<p>Season: ${episode.season} - Episode: ${episode.episode}</p><p>Title: ${episode.title}</p>`);
    Swal.fire({
      title: name,
      html: `${listSeasonEpisode}`,
    })
  }

}
