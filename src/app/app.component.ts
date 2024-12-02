import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ankur';

  ngOnInit() {
    if (window.location.protocol === 'https:') {
      // Redirect from HTTPS to HTTP
      const httpUrl = window.location.href.replace('https://', 'http://');
      window.location.replace(httpUrl);
    }
  }
}
