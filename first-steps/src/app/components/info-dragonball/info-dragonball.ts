import { Component, OnInit } from '@angular/core';
import { CharactersDB, InfoApiDB } from '../../common/dragonballinterface';
import { Dragonball } from '../../services/dragonball';

@Component({
  selector: 'app-info-dragonball',
  standalone: false,
  templateUrl: './info-dragonball.html',
  styleUrl: './info-dragonball.css',
})
export class InfoDragonball implements OnInit {
  dataApi!: InfoApiDB;
  characters: CharactersDB[] = [];
  activeIndex: number | null = null;
  charRace: string = " ";
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;
  currentLimit: number = 6;
  limitForPage: number = 6;
  totalItems: number = 0;

  constructor(private dbservice: Dragonball) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.dbservice.getCharacters(this.currentPage, this.currentLimit).subscribe({
      next: value => {
        this.dataApi = value;
        this.characters = this.dataApi.items;
        this.totalPages = this.dataApi.meta.totalPages;
        this.totalItems = this.dataApi.meta.totalItems;
        console.log(this.totalItems);
        
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log("Done");
      }
    });
  }

  toggleAccordion(index:number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  filterByRace() {
    this.characters = this.characters.filter(char => char.race.toLowerCase().includes(this.charRace.toLowerCase()))
  }

  resetFilter() {
    this.loadCharacters();
    this.charRace="";
  }

  sortByNameAs() {
    this.characters.sort((a,b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      else return 0;
    });
  }

  sortByNameDes() {
    this.characters.sort((a,b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
      else if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      else return 0;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages){
      this.currentPage=page;
      this.loadCharacters();
    }
  }

  limitInPage(limit: number) {
    if (limit >= 1 && limit <= this.totalItems){
      this.currentLimit=limit;
      this.loadCharacters();
    }
  }

  last() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.totalPages;
      this.loadCharacters();
    }
  }

  first() {
    if (this.currentPage > 1) {
      this.currentPage = 1;
      this.loadCharacters();
    }
  }
}
