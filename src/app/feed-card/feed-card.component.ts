import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { FeedService } from '../feed-service.service';
import {SignInComponent} from '../sign-in/sign-in.component'

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: any;
  
  private feedUrl: string = 'https://www.nasa.gov/rss/dyn/breaking_news.rss';
  // https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/world/rss.xml
  // https://www.yahoo.com/news/rss/world
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
