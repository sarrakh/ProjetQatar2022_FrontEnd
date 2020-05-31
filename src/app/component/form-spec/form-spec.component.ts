import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/model/match';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Arbitre } from 'src/app/model/arbitre';
import { Spectateur } from 'src/app/model/spectateur';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-spec',
  templateUrl: './form-spec.component.html',
  styleUrls: ['./form-spec.component.scss']
})
export class FormSpecComponent implements OnInit {
  spec:Spectateur;
  matchs: Observable<Match[]>;
  constructor(private catservice:CatalogeService ,private router:Router) {
   
   }
     
  ngOnInit(): void {
    this.catservice.getMatchs().subscribe(data => {
      this.matchs= data;
      console.log('matchs',data);
     
    })
   

    
  }

  OnSaveSpectateur(f :any){
    this.spec=new Spectateur();
    this.spec.nom=f.nom;
    this.spec.cin=f.cin;
    this.spec.num_passaport=f.num_passaport;
    this.spec.jeus=new Match();
    this.spec.jeus.id=f.jeus;
    console.log(' spectateur');
    console.log(this.spec) ;
    this.catservice.createSpectateur(this.spec) 
    .subscribe(res=>{
      alert("Spectateurs Ajouter avec success");
this.router.navigateByUrl("/spectateurs");
    
    },err=>{
      console.log(err);
    }
    )
  }


}
