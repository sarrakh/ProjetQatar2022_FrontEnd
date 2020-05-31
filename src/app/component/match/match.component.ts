import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogeService } from 'src/app/services/cataloge.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
   jeus:Observable<Math[]>;
 
  constructor(private  catService:CatalogeService,private router:Router) { }

  ngOnInit(): void {
  }

  onGetMatchs(){
    this.catService.getMatchs()
    .subscribe(data=>{this.jeus=data;}
      ,err=>{console.log(err);

    })
  }
  onDeleteMatch(j){
    let conf=confirm("etes vous sur?");
    if (conf) {
      this.catService.deleteMatch(j).subscribe(data=>{this.onGetMatchs();}
      ,err=>{console.log(err);

    })
    }
}
onEditeMatch(mat){
  let url=mat._links.self.href;

  this.router.navigateByUrl("/modifiermatch/"+ btoa(url));
}
}
