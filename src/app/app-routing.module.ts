import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ArbitreComponent } from './component/arbitre/arbitre.component';
import { SpectateurComponent } from './component/spectateur/spectateur.component';
import { MatchComponent } from './component/match/match.component';
import { JoueurComponent } from './component/joueur/joueur.component';
import { FormArbComponent } from './component/form-arb/form-arb.component';
import { FormJeuComponent } from './component/form-jeu/form-jeu.component';
import { FormJorComponent } from './component/form-jor/form-jor.component';
import { FormSpecComponent } from './component/form-spec/form-spec.component';
import { EditArbitreComponent } from './component/edit-arbitre/edit-arbitre.component';
import { EditJoueurComponent } from './component/edit-joueur/edit-joueur.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { EditSpectateurComponent } from './component/edit-spectateur/edit-spectateur.component';
import { EquipeComponent } from './component/equipe/equipe.component';
import { FormEquipeComponent } from './component/form-equipe/form-equipe.component';
import { EditEquipeComponent } from './component/edit-equipe/edit-equipe.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'arbitres', component: ArbitreComponent},
  {path: 'spectateurs', component: SpectateurComponent},
  {path: 'matchs', component: MatchComponent},
  {path: 'joueurs', component: JoueurComponent},
  {path: 'ajouterArb', component: FormArbComponent},
  {path: 'ajoutereq', component: FormEquipeComponent},
  {path: 'ajoutermat', component: FormJeuComponent},
  {path: 'ajouterjor', component: FormJorComponent}, 
  {path: 'ajouterspec', component: FormSpecComponent},
  {path: "modifierArb/:id", component: EditArbitreComponent},
  {path: "modifierJor/:id", component: EditJoueurComponent},
  {path: "modifiermatch/:id", component: EditMatchComponent},
  {path: "modifiereq/:id", component: EditEquipeComponent},
  {path: "modifierspectateur/:id", component: EditSpectateurComponent},
  {path: 'equipes', component: EquipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
