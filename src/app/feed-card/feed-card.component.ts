import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../feed-service.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feedUrl: string = "https://www.nasa.gov/rss/dyn/breaking_news.rss";
  @Input() feed: any;

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
}