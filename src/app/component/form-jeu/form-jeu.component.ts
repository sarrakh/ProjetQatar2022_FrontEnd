import { Component, OnInit } from '@angular/core';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router } from '@angular/router';
import { Match } from 'src/app/model/match';
import { Equipe } from 'src/app/model/equipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-jeu',
  templateUrl: './form-jeu.component.html',
  styleUrls: ['./form-jeu.component.scss']
})
export class FormJeuComponent implements OnInit {
mat:Match;

  constructor(private catservice:CatalogeService ,private router:Router ) { }

  ngOnInit(): void {
   
  }

  OnSaveMatch(f :any){
    this.mat=new Match();
    this.mat.duree=f.duree;
    this.mat.espace=f.espace;
    this.mat.lieu=f.lieu;
    

    this.catservice.createMatch(this.mat)
    .subscribe(res=>{
      alert("Match Ajouter avec success");
this.router.navigateByUrl("/matchs");
    
    },err=>{
      console.log(err);
    }
    )
  }

}
