import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Servey } from '../models/servey';

@Injectable({
  providedIn: 'root'
})
export class ServeysService {
  private serveys : Servey []  = [];
  constructor(private storage : StorageService){
  this.init();
  }
  init(){
    this.storage.get("serveys")?.then((serveys : Servey[])=>{
    this.serveys = serveys;
    })
  }
  public saveSurvey(survey : Servey){
    this.serveys.push(survey);
    this.storage.set("serveys", this.serveys);
  }
  public serveysList() : Promise<Servey[]>{
  return Promise.resolve(this.serveys);
  }
}
