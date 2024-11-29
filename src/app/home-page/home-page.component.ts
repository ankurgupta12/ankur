import {Component} from '@angular/core';
import {NgxSplideModule} from 'ngx-splide';
import {PhoneFormComponent} from './phone-form/phone-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgxSplideModule,
    PhoneFormComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public sliderOptions = {
    type: 'loop',
    perPage: 2,
    gap: '1rem',
    arrows: false,
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      }
    }
  }
}
