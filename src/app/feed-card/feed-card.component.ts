import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../feed-service.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: any;

  private feedUrl: string = 'https://www.nasa.gov/rss/dyn/breaking_news.rss';
  feeds: any;
  
  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.refreshFeed();
  }

  refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }

  onClickFeed($event) {
    $event.path[2].style.display = 'none'
    console.log(event)
  }

}
