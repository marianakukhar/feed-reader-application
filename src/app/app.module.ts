import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedService } from './feed-service.service';

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
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
],
  providers: [FeedService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
