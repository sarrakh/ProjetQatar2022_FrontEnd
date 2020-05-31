import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/model/match';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.scss']
})
export class EditMatchComponent implements OnInit {
  id:number;
  
  match:Match;
  constructor(private route: ActivatedRoute,private router: Router,
    private catservice: CatalogeService) { }
  
  ngOnInit() {
    this.match = new Match();
  
    this.id = this.route.snapshot.params['id'];
    
    this.catservice.getmat(this.id)
      .subscribe(data => {
        console.log(data)
        this.match = data;
      }, error => console.log(error));
  
      
    }
    updatemat() {
      this.catservice.updateMatch(this.id, this.match)
        .subscribe(data => console.log(data), error => console.log(error));
      this.match = new Match();
      this.gotoList();
    }
    
    onSubmit() {
      this.updatemat();    
    }
    
    gotoList() {
      this.router.navigate(['/matchs']);
    }


}
