import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arbitre } from '../model/arbitre';
import { Joueur } from '../model/joueur';
import { Match } from '../model/match';
import { Spectateur } from '../model/spectateur';
import { Equipe } from '../model/equipe';



@Injectable({
  providedIn: 'root'
})
export class CatalogeService {

  public host:string="http://localhost:8083";


  constructor(private httpClient:HttpClient) { }

  
  public getArbitres():Observable<any>{
    return this.httpClient.get(this.host+"/listarbitres")
  }
  public getEquipe():Observable<any>{
    return this.httpClient.get(this.host+"/listequipe")
  }
  public getJoueurs():Observable<any>{
    return this.httpClient.get(this.host+"/listjoueurs")
  }
  public getMatchs():Observable<any>{
    return this.httpClient.get(this.host+"/listjeus") 
  }
  public getSpectateurs():Observable<any>{
    return this.httpClient.get(this.host+"/listspectateurs")
  }
  createSpectateur(spectateur: object): Observable<object> {
    return this.httpClient.post(`${this.host}` + '/addspectateurs', spectateur); 
  }
  createArbitre(arbitre: object): Observable<object> {
    return this.httpClient.post(`${this.host}` + '/addarbitre', arbitre); 
  }
  createEquipe(equipe: object): Observable<object> {
    return this.httpClient.post(`${this.host}` + '/addequipes', equipe); 
  }
  createMatch(match: object): Observable<object> {
    return this.httpClient.post(`${this.host}` + '/addjeus', match); 
  }
  createJoueur(joueur: object): Observable<object> {
    return this.httpClient.post(`${this.host}` + '/addjoueurs', joueur); 
  }
  
  
 
  public getResourceA(url):Observable<Arbitre>{
    return this.httpClient.get<Arbitre>(url);
  }
  public getResourceJ(url):Observable<Joueur>{
    return this.httpClient.get<Joueur>(url);
  }
  
  public getResourceM(url):Observable<Match>{
    return this.httpClient.get<Match>(url);
  }
  public getResourceS(url):Observable<Spectateur>{
    return this.httpClient.get<Spectateur>(url);
  }
  public getResourceE(url):Observable<Equipe>{
    return this.httpClient.get<Equipe>(url);
  }
  
  public updateResource(url,data){
    return this.httpClient.put(url,data);
  }
  public saveResource(url,data){
    return this.httpClient.post(url,data);
  }
  public deleteResource(url){
    return this.httpClient.delete(url);
  }
public deleteEquipe(id){
  return this.httpClient.delete(`${this.host}`+"/deleteequipe/"+id);
}
public deleteArbitre(id){
  return this.httpClient.delete(`${this.host}` + '/deletearbitres/'+id);
}
public deleteJoueur(id){
  return this.httpClient.delete(`${this.host}`+"/deletejoueurs/"+id);
}
public deleteMatch(id){
  return this.httpClient.delete(`${this.host}`+"/deletejeus/"+id);
}
public deleteSpectateur(id){
  return this.httpClient.delete(`${this.host}`+"/deletespectateurs/"+id);
}

 


getArb(id: number): Observable<any> {
  return this.httpClient.get(`${this.host}/listarbitres/${id}`);
}
getEq(id: number): Observable<any> {
  return this.httpClient.get(`${this.host}/getequipes/${id}`);
}
getJor(id: number): Observable<any> {
  return this.httpClient.get(`${this.host}/listjoueurs/${id}`);
}
getmat(id: number): Observable<any> {
  return this.httpClient.get(`${this.host}/listjeus/${id}`);
}
getspec(id: number): Observable<any> {
  return this.httpClient.get(`${this.host}/listspectateurs/${id}`);
}


updateArbitre(id: number, value: any): Observable<Object> {  
  return this.httpClient.put(`${this.host}`+"/updatearbitres/"+id, value);  
} 
updateEquipe(id: number, value: any): Observable<Object> {  
  return this.httpClient.put(`${this.host}`+"/updateequipe/"+id, value);  
} 
updateMatch(id: number, value: any): Observable<Object> {  
  return this.httpClient.put(`${this.host}`+"/updatejeus/"+id, value);  
} 
updatejoueur(id: number, value: any): Observable<Object> {  
  return this.httpClient.put(`${this.host}`+"/updatejoueurs/"+id, value);  
} 
updatespectateur(id: number, value: any): Observable<Object> {  
  return this.httpClient.put(`${this.host}`+"/updatespectateurs/"+id, value);  
} 
findByTitle(nom) {
  return this.httpClient.get(`${this.host}?title=${nom}`);
}
}
