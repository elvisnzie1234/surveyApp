
import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: './app-bib',
  templateUrl: './bib.page.html',
  styleUrls: ['./bib.page.scss'],
})
export class BibPage {
  verses: any[] = [];
  constructor() {
    this.getVerses();
  }
  getVerses() {
    const apiURL = 'https://bible-api.com/john%203';

    axios.get(apiURL)
      .then(response => {
        this.verses = response.data.verses;
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des versets:', error);
      });
  }
}
