import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrss',
  templateUrl: './rrss.component.html',
  styleUrls: ['./rrss.component.scss']
})
export class RrssComponent implements OnInit {

  links:any[] = [
    {
      alt: 'Facebook',
      icon: 'fa-facebook-f',
      url: 'https://www.facebook.com/BBVAenespana/'
    },
    {
      alt: 'Twitter',
      icon: 'fa-twitter',
      url: 'https://twitter.com/BBVA_espana'
    },
    {
      alt: 'Linkedin',
      icon: 'fa-linkedin-in',
      url: 'https://www.linkedin.com/company/bbva-espana/'
    },
    {
      alt: 'Youtube',
      icon: 'fa-youtube',
      url: 'https://www.youtube.com/user/BBVAespana'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
