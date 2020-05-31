import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/model/equipe';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Match } from 'src/app/model/match';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.css']
})
export class FormEquipeComponent implements OnInit {
  matchs: Observable<Match[]>;
  eq:Equipe;
  constructor(private catservice:CatalogeService ,private router:Router,private route:ActivatedRoute ) {
  }

  ngOnInit() {
    this.catservice.getMatchs().subscribe(data => {
      this.matchs= data;
      console.log('matchs',data);
     
    })
  }
  OnSaveEquipe(f :any){
    this.eq=new Equipe();
    this.eq.nom=f.nom;
    this.eq.effectif=f.effectif;
    this.eq.jeus=new Match();
    
    this.eq.jeus.id=f.jeus;
    
    this.catservice.createEquipe(this.eq) 
    .subscribe(res=>{
      alert(" Equipe avec success");
this.router.navigateByUrl("/equipes");
    
    },err=>{
      console.log(err);
    }
    )
  }

}
