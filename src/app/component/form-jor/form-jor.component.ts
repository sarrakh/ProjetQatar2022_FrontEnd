import { Component, OnInit } from '@angular/core';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router } from '@angular/router';
import { Joueur } from 'src/app/model/joueur';
import { Match } from 'src/app/model/match';
import { Equipe } from 'src/app/model/equipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-jor',
  templateUrl: './form-jor.component.html',
  styleUrls: ['./form-jor.component.scss']
})
export class FormJorComponent implements OnInit {
  jo:Joueur;
  matchs: Observable<Match[]>;
  equipes: Observable<Equipe[]>;
  constructor(private catservice:CatalogeService ,private router:Router ) { }

  ngOnInit(): void {
    this.catservice.getJoueurs().subscribe(data => {
      this.matchs= data;
      console.log('jo',data);
    })
    
    this.catservice.getEquipe().subscribe(data => {
      this.equipes= data;
      console.log('equipes',data);
    })
     
  }

  OnSaveJoueur(f :any){
    this.jo=new Joueur();
    this.jo.nom=f.nom;
    this.jo.prenom=f.prenom;
    this.jo.age=f.age;
    this.jo.cin=f.cin;
    this.jo.nationnalite=f.nationnalite;
    this.jo.equipes=new Equipe();
    this.jo.equipes.id=f.equipes;
    
    this.catservice.createJoueur(this.jo) 
    .subscribe(res=>{
      alert("Joueur Ajouter avec success");
this.router.navigateByUrl("/joueurs");
    
    },err=>{
      console.log(err);
    }
    )
  }

}
