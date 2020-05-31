import { Component, OnInit } from '@angular/core';
import { Spectateur } from 'src/app/model/spectateur';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Match } from 'src/app/model/match';
import { Equipe } from 'src/app/model/equipe';

@Component({
  selector: 'app-edit-spectateur',
  templateUrl: './edit-spectateur.component.html',
  styleUrls: ['./edit-spectateur.component.scss']
})
export class EditSpectateurComponent implements OnInit {
  id:number;
  matchs: Observable<Match[]>;
  spectateur:Spectateur;
  constructor(private route: ActivatedRoute,private router: Router,
    private catservice: CatalogeService) { }
  
  ngOnInit() {
    this.spectateur = new Spectateur();
  
    this.id = this.route.snapshot.params['id'];
    
    this.catservice.getspec(this.id)
      .subscribe(data => {
        console.log(data)
        this.spectateur = data;
      }, error => console.log(error));
  
      this.catservice.getMatchs().subscribe(data => {
        this.matchs= data;
        console.log('matchs',data);
       
      })
    }
    updatespec() {
      this.catservice.updatespectateur(this.id, this.spectateur)
        .subscribe(data => console.log(data), error => console.log(error));
      this.spectateur = new Spectateur();
      this.gotoList();
    }
    
    onSubmit() {
      this.updatespec();    
    }
    
    gotoList() {
      this.router.navigate(['/spectateurs']);
    }
  }
