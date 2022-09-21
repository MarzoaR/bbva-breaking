import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { EpisodeResponse } from 'src/app/interfaces/episode.interface';

@Component({
  selector: 'app-last-episode',
  templateUrl: './last-episode.component.html',
  styleUrls: ['./last-episode.component.scss']
})
export class LastEpisodeComponent implements OnChanges {

  @Input() episodes: EpisodeResponse[] = [];

  allEpisodesBreak: EpisodeResponse[] = [];
  dateLastEpisode: string = '';
  days: number = 0;

  constructor( ) { }

  ngOnChanges( change: SimpleChanges ): void {
    if ( change["episodes"].previousValue ) {
      this.getEpisodes();
    }
  }

  getEpisodes() {
    this.allEpisodesBreak = this.getAllEpisodesBreak( this.episodes );
    this.dateLastEpisode = this.getDateLastEpisode( this.allEpisodesBreak );
    this.getDaysLastEpisode(this.dateLastEpisode);
  }

  getAllEpisodesBreak( episodes: EpisodeResponse[] ): EpisodeResponse[] {
    return episodes.filter( (episode: EpisodeResponse) => episode.series.includes("Breaking Bad") );
  }

  getDateLastEpisode( lastEpisodes: EpisodeResponse[] ): string {
    return lastEpisodes[lastEpisodes.length - 1].air_date;
  }

  getDaysLastEpisode( date: string): void {
    const formatDate = this.formatDate( date );
    const fechaEnd = new Date().getTime();
    const fechaStart = new Date(formatDate).getTime();
    this.days = Math.floor((fechaEnd - fechaStart) / (1000 * 60 * 60 * 24));
  }

  formatDate( date: string ): string {
    const dateArray: string[] = date.split('-');
    return `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;
  }

}
