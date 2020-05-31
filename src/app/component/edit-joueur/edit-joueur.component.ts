import { Component, OnInit } from '@angular/core';
import { Joueur } from 'src/app/model/joueur';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Equipe } from 'src/app/model/equipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-joueur',
  templateUrl: './edit-joueur.component.html',
  styleUrls: ['./edit-joueur.component.scss']
})
export class EditJoueurComponent implements OnInit {
  id:number;
  equipes: Observable<Equipe[]>;
  joueur:Joueur;

constructor(private route: ActivatedRoute,private router: Router,
  private catservice: CatalogeService) { }

ngOnInit() {
  this.joueur = new Joueur();
  this.id = this.route.snapshot.params['id'];
  
  this.catservice.getJor(this.id)
    .subscribe(data => {
      console.log(data)
      this.joueur = data;
    }, error => console.log(error));

    this.catservice.getEquipe().subscribe(data => {
      this.equipes= data;
      console.log('equipe',data);
     
    })
    
}

updatejor() {
  this.catservice.updatejoueur(this.id, this.joueur)
    .subscribe(data => console.log(data), error => console.log(error));
  this.joueur = new Joueur();
  this.gotoList();
}

onSubmit() {
  this.updatejor() ;
}
gotoList() {
  this.router.navigate(['/joueurs']);
}
}
