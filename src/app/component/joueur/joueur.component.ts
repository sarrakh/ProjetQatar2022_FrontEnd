import { Component, OnInit } from '@angular/core';
import { Joueur } from 'src/app/model/joueur';
import { HttpClient } from '@angular/common/http';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/model/equipe';
import { Observable } from 'rxjs';
import { Match } from 'src/app/model/match';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.scss']
})
export class JoueurComponent implements OnInit {
  joueurs: Observable<Joueur[]>;
  
  
  
  constructor(private  catService:CatalogeService,private router:Router) { }

  ngOnInit(): void {
    
    
  }

  onGetJoueurs(){
    this.catService.getJoueurs()
    .subscribe(data=>{this.joueurs=data;}
      ,err=>{console.log(err);

    })
  }
  onDeleteJoueur(j){
    
    let conf=confirm("vous etes vous sur?");
    if (conf) {
    
    this.catService.deleteJoueur(j).subscribe(data=>{this.onGetJoueurs();}
      ,err=>{console.log(err);

    })
    }
  }

onEditeJoueur(jor){
  let url=jor._links.self.href;

  this.router.navigateByUrl("/modifierJor/"+ btoa(url));
}
}
