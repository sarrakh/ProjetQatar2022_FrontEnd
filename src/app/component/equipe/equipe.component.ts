import { Component, OnInit } from '@angular/core';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Equipe } from 'src/app/model/equipe';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

   equipes:Observable<Equipe[]>;
  constructor(private  catService:CatalogeService,private router:Router) { }

  ngOnInit(): void {
    
  }

  onGetEquipe(){
    this.catService.getEquipe()
    .subscribe(data=>{this.equipes=data;}
      ,err=>{console.log(err);

    })
  }
  onDeleteEquipe(j){
    let conf=confirm("vous etes vous sur?");
    if (conf) {
    this.catService.deleteEquipe(j).subscribe(data=>{this.onGetEquipe();}
      ,err=>{console.log(err);

    })
    
  }
  }
  onEditeEquipe(eq){
    let url=eq._links.self.href;

    this.router.navigateByUrl("/modifiereq/"+ btoa(url));
  }


}
