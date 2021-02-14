import { Component } from '@angular/core';
import { FeedService } from './feed-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feed-reader';

  private feedUrl: string = 'https://www.nasa.gov/rss/dyn/breaking_news.rss';
  feeds: any;

  constructor (
    private feedService: FeedService
  ) {}

  ngOnInit() {
  }

}
