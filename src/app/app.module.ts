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
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';


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
import { DialogNewStoryComponent } from './components/new/dialog-new-story/dialog-new-story.component';
import { QuestionUsersComponent } from './components/story/question-users/question-users.component';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoginComponent } from './components/login/login.component';
import { CommentsService } from './services/comments.service';
import { CommentComponent } from './components/story/comment/comment.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import { StatisticsComponent } from './components/story/statistics/statistics.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SelectQuestionComponent } from './components/story/question-users/select-question/select-question.component';
import { NormalQuestionComponent } from './components/story/question-users/normal-question/normal-question.component';
import { NumberQuestionComponent } from './components/story/question-users/number-question/number-question.component';
import { RegisterComponent } from './components/register/register.component';
import { FirebaseApp } from '@angular/fire';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { NgFlashMessageService } from 'ng-flash-messages';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GroupsComponent } from './components/groups/home-groups.component';
import { LastStoriesComponent } from './components/last-stories/last-stories.component';
import { NewGroupComponent } from './components/groups/new-group/new-group.component';
import {GroupComponent} from "./components/groups/group/group.component";
import { HorizontalMenuComponent } from './components/home/horizontal-menu/horizontal-menu.component';

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
    DialogNewStoryComponent,
    QuestionUsersComponent,
    LoginComponent,
    CommentComponent,
    StatisticsComponent,
    SelectQuestionComponent,
    NormalQuestionComponent,
    NumberQuestionComponent,
    RegisterComponent,
    GroupsComponent,
    LastStoriesComponent,
    NewGroupComponent,
    GroupComponent,
    HorizontalMenuComponent
   
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
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule,
    MatGridListModule,
    LayoutModule,
    MatDividerModule,
    MatListModule,
    MatSliderModule,
    MatTreeModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule,
    AngularFireAuthModule,
    AngularFirestoreModule, 
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatProgressSpinnerModule,
    NgFlashMessagesModule,
    MatPaginatorModule

  ],
  providers: [AuthService,AuthGuardService,StoriesService,LoginComponent,CommentsService,FirebaseApp,AngularFireModule,NgFlashMessageService],
  bootstrap: [AppComponent],
  entryComponents:[DialogNewStoryComponent]
})
export class AppModule { }
