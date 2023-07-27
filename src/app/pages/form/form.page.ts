import { Component, OnInit } from '@angular/core';
import { Servey } from 'src/app/models/servey';
import { ServeysService } from 'src/app/services/serveys.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  public serveysList : Servey []  = [];
  public serveyBeingCreated : Servey = {
  name:"",
  birthday:"",
  description:""
  };
  public isModalOpen = false;

  constructor(private serveysService : ServeysService ) { }

  ngOnInit() {
    this.loadServeys();
  }
    public loadServeys(){
    this.serveysService.serveysList().then(list => {
      this.serveysList = list;
    })
  }
  public showServeyForm(){
    this.serveyBeingCreated = {
      name:"",
      birthday:"",
      description:""  
    };
    this.isModalOpen = true;
  }
  public cancel(){
    this.isModalOpen = false;
  }
  public save(){
    this.serveysService.saveSurvey(this.serveyBeingCreated);
    this.loadServeys()
    this.isModalOpen = false;
  }
}
