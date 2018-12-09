import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {StoryComponent} from "./components/story/story.component";
import {NewComponent} from "./components/new/new.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthGuardService} from './services/auth-guard.service';
import {NewGroupComponent} from "./components/groups/new-group/new-group.component";

const  APP_ROUTES: Routes=[
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile/:id',component:ProfileComponent},
    {path:'new',component:NewComponent, 
        canActivate:[AuthGuardService ]
    },   
    {path:'story/:id',component: StoryComponent},
    {path:'newgroup',component:NewGroupComponent},
    {path: '**', pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);