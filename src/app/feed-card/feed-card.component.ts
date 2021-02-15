import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { FeedService } from '../feed-service.service';
import {SignInComponent} from '../sign-in/sign-in.component'

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feedUrl: string;
  @Input() feed: any;
  
  feeds: any;
  
  constructor(
    private feedService: FeedService
  ) { }

  getUrl(url) {
    this.feedUrl = url;
  }

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
    $event.path[2].style.display = 'none';
  }

}
