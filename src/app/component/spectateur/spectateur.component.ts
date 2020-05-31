import { Component, OnInit } from '@angular/core';
import { Spectateur } from 'src/app/model/spectateur';

import { HttpClient } from '@angular/common/http';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router } from '@angular/router';
import { Match } from 'src/app/model/match';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-spectateur',
  templateUrl: './spectateur.component.html',
  styleUrls: ['./spectateur.component.scss']
})
export class SpectateurComponent implements OnInit {
  spectateurs:Observable<Spectateur[]>;
  public Match:Match;
  
  constructor(private  catService:CatalogeService,private router:Router) { }

  ngOnInit(): void {
  }

  onGetSpectateurs(){
    this.catService.getSpectateurs()
    .subscribe(data=>{this.spectateurs=data;}
      ,err=>{console.log(err);

    })
  }
 
  onDeleteSpectateur(j){
    let conf=confirm("vous etes vous sur?");
    if (conf) {
      
    this.catService.deleteSpectateur(j).subscribe(data=>{this.onGetSpectateurs();}
      ,err=>{console.log(err);

    })
}
  }
onEditeSpectateur(spec){
  let url=spec._links.self.href;

  this.router.navigateByUrl("/modifierspectateur/"+ btoa(url));
}
}
