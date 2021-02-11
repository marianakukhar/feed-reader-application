import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { FeedService } from './feed-service.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes =[
  { path: '', component: SignInComponent},
  { path: 'feed-card', component: FeedCardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HeaderComponent,
    FeedCardComponent,
    StripHtmlTagsPipe,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    BrowserAnimationsModule
],
  providers: [FeedService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
