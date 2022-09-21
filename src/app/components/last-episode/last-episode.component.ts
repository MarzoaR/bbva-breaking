import { Component, OnInit } from '@angular/core';
import { EpisodeResponse } from 'src/app/interfaces/episode.interface';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-last-episode',
  templateUrl: './last-episode.component.html',
  styleUrls: ['./last-episode.component.scss']
})
export class LastEpisodeComponent implements OnInit {

  lastEpisode: EpisodeResponse[] = [];
  dateLastEpisode: string = '';
  days: number = 0;

  constructor( private episode: EpisodeService ) { }

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this.episode.getEpisodes()
    .subscribe( (resp: EpisodeResponse[]) => {
      this.lastEpisode = this.getLastEpisode( resp );
      this.dateLastEpisode = this.getDateLastEpisode( this.lastEpisode );
      this.getDaysLastEpisode(this.dateLastEpisode)
    });
  }

  getLastEpisode( episodes: EpisodeResponse[] ): EpisodeResponse[] {
    return episodes.filter( episode => episode.title.includes("Felina"));
  }

  getDateLastEpisode( lastEpisode: EpisodeResponse[] ): string {
    return lastEpisode[0].air_date;
  }

  getDaysLastEpisode( date: string): void {
    const formatDate = this.formatDate( date );
    const fechaFin = new Date().getTime();
    const fechaIni = new Date(formatDate).getTime();
    this.days = Math.floor((fechaFin - fechaIni) / (1000 * 60 * 60 * 24));
  }

  formatDate( date: string ): string {
    const dateArray: string[] = date.split('-');
    return `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;
  }

}
