import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {StoryComponent} from "./components/story/story.component";
import {NewComponent} from "./components/new/new.component";

import {AuthGuardService} from './services/auth-guard.service';

const  APP_ROUTES: Routes=[
    {path:'home',component:HomeComponent},
    {path:'profile',component:ProfileComponent, 
        canActivate:[AuthGuardService ]
    },
    {path:'new',component:NewComponent, 
        canActivate:[AuthGuardService ]
    },   
    {path:'story/:id',component: StoryComponent},
    {path: '**', pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);