import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/model/equipe';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Match } from 'src/app/model/match';
import { Arbitre } from 'src/app/model/arbitre';

@Component({
  selector: 'app-edit-equipe',
  templateUrl: './edit-equipe.component.html',
  styleUrls: ['./edit-equipe.component.css']
})
export class EditEquipeComponent implements OnInit {

  id:number;
matchs: Observable<Match[]>;
equipe:Equipe;
constructor(private route: ActivatedRoute,private router: Router,
  private catservice: CatalogeService) { }

ngOnInit() {
  this.equipe = new Equipe();

  this.id = this.route.snapshot.params['id'];
  
  this.catservice.getEq(this.id)
    .subscribe(data => {
      console.log(data)
      this.equipe = data;
    }, error => console.log(error));

    this.catservice.getMatchs().subscribe(data => {
      this.matchs= data;
      console.log('matchs',data);
     
    })
    
}

updateEq() {
  this.catservice.updateEquipe(this.id, this.equipe)
    .subscribe(data => console.log(data), error => console.log(error));
  this.equipe = new Equipe();
  this.gotoList();
}

onSubmit() {
  this.updateEq();    
}

gotoList() {
  this.router.navigate(['/equipes']);
}
}
