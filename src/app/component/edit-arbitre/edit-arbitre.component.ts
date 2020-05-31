import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Arbitre } from 'src/app/model/arbitre';


import { from, Observable } from 'rxjs';
import { Match } from 'src/app/model/match';

@Component({
  selector: 'app-edit-arbitre',
  templateUrl: './edit-arbitre.component.html',
  styleUrls: ['./edit-arbitre.component.scss']
})
export class EditArbitreComponent implements OnInit {
public currentArbitre :Arbitre;
private url:string;
id:number;
matchs: Observable<Match[]>;
arbitre: Arbitre;
constructor(private route: ActivatedRoute,private router: Router,
  private catservice: CatalogeService) { }

ngOnInit() {
  this.arbitre = new Arbitre();

  this.id = this.route.snapshot.params['id'];
  
  this.catservice.getArb(this.id)
    .subscribe(data => {
      console.log(data)
      this.arbitre = data;
    }, error => console.log(error));

    this.catservice.getMatchs().subscribe(data => {
      this.matchs= data;
      console.log('matchs',data);
     
    })
    
}

updateArb() {
  this.catservice.updateArbitre(this.id, this.arbitre)
    .subscribe(data => console.log(data), error => console.log(error));
  this.arbitre = new Arbitre();
  this.gotoList();
}

onSubmit() {
  this.updateArb();    
}

gotoList() {
  this.router.navigate(['/arbitres']);
}

}
