import { Component, OnInit } from '@angular/core';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Arbitre } from 'src/app/model/arbitre';
import { Match } from 'src/app/model/match';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-arb',
  templateUrl: './form-arb.component.html',
  styleUrls: ['./form-arb.component.scss']
})
export class FormArbComponent implements OnInit {
arb:Arbitre;
matchs: Observable<Match[]>;

  constructor(private catservice:CatalogeService ,private router:Router,private route:ActivatedRoute ) {
   
   }
     
  ngOnInit(){
    
    this.catservice.getMatchs().subscribe(data => {
      this.matchs= data;
      console.log('matchs',data);
     
    })
    
  }
 

  OnSaveArbitre(f :any){
    this.arb=new Arbitre();
    this.arb.nom=f.nom;
    this.arb.prenom=f.prenom;
    this.arb.age=f.age;
    this.arb.cin=f.cin;
    this.arb.nationnalite=f.nationnalite;
    this.arb.jeus=new Match();
    console.log('f.jeus',f.jeus);
    this.arb.jeus.id=f.jeus;
    console.log(' this.arb.jeus.id',this.arb.jeus.id);
    console.log(' arbueur');
    console.log(this.arb) ;
    this.catservice.createArbitre(this.arb) 
    .subscribe(res=>{
      alert(" Arbitre ajout  avec success");
this.router.navigateByUrl("/arbitres");
    
    },err=>{
      console.log(err);
    }
    )
  }
  
}
