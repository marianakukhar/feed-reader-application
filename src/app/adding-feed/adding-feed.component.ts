import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding-feed',
  templateUrl: './adding-feed.component.html',
  styleUrls: ['./adding-feed.component.css']
})
export class AddingFeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddFeed() {
    console.log('added feed')
  }
}
