import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router } from '@angular/router';
import { Arbitre } from 'src/app/model/arbitre';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-arbitre',
  templateUrl: './arbitre.component.html',
  styleUrls: ['./arbitre.component.scss']
})
export class ArbitreComponent implements OnInit {
  public arbitres:any;
  
  nom :String;
  constructor(private  catService:CatalogeService,private router:Router) { }

  ngOnInit(): void {

  }

  onGetArbitres(){
    this.catService.getArbitres()
    .subscribe(data=>{this.arbitres=data;}
      ,err=>{console.log(err);

    })
  }
  onDeleteArbitre(j){
    let conf=confirm("vous etes vous sur?");
    if (conf) {
    this.catService.deleteArbitre(j).subscribe(data=>{this.onGetArbitres();}
      ,err=>{console.log(err);

    })
  }
   
  }
  onEditeArbitre(arb,index){

    console.log("arbitre",arb);
    this.router.navigateByUrl('/modifierArb/+');
  }

 

}
