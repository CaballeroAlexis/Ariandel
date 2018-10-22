import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { APP_ROUTING } from './app.routes';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import * as $ from 'jquery';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Services
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import { StoryComponent } from './components/story/story.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyStoriesComponent } from './components/profile/my-stories/my-stories.component';
import { MyInfoComponent } from './components/profile/my-info/my-info.component';
import { NewComponent } from './components/new/new.component';
import { MyActivityComponent } from './components/profile/my-activity/my-activity.component';
import {HttpClientModule} from '@angular/common/http';
import { StoriesService } from './services/stories.service';
import { QuestionComponent } from './components/new/question/question.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    StoryComponent,
    FooterComponent,
    MyStoriesComponent,
    MyInfoComponent,
    NewComponent,
    MyActivityComponent,
    QuestionComponent,
    
   
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthService,AuthGuardService,StoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
