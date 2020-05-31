import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ArbitreComponent } from './component/arbitre/arbitre.component';
import { MatchComponent } from './component/match/match.component';
import { JoueurComponent } from './component/joueur/joueur.component';
import { SpectateurComponent } from './component/spectateur/spectateur.component';
import { EquipeComponent } from './component/equipe/equipe.component';
import { EditArbitreComponent } from './component/edit-arbitre/edit-arbitre.component';
import { EditJoueurComponent } from './component/edit-joueur/edit-joueur.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { EditSpectateurComponent } from './component/edit-spectateur/edit-spectateur.component';
import { FormArbComponent } from './component/form-arb/form-arb.component';
import { FormJeuComponent } from './component/form-jeu/form-jeu.component';
import { FormJorComponent } from './component/form-jor/form-jor.component';
import { FormSpecComponent } from './component/form-spec/form-spec.component';
import { FormEquipeComponent } from './component/form-equipe/form-equipe.component';
import { EditEquipeComponent } from './component/edit-equipe/edit-equipe.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    ArbitreComponent,
    MatchComponent,
    JoueurComponent,
    SpectateurComponent,
    EquipeComponent,
    EditArbitreComponent,
    EditJoueurComponent,
    EditMatchComponent,
    EditSpectateurComponent,
    FormArbComponent,
    FormJeuComponent,
    FormJorComponent,
    FormSpecComponent,
    FormEquipeComponent,
    EditEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
