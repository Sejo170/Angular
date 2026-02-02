import { Component, OnInit } from '@angular/core';
import { CharacterDS, InfoApiDisney } from '../../common/disney2interface';
import { Disney2 } from '../../services/disney2';

@Component({
  selector: 'app-info-disney2',
  standalone: false,
  templateUrl: './info-disney2.html',
  styleUrl: './info-disney2.css',
})
export class InfoDisney2 implements OnInit{
  dataApi!: InfoApiDisney;
  characters: CharacterDS[] = [];
  activeIndex: number | null = null;
  charName: string = " ";
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;

  constructor(private ds2service: Disney2) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters(){
    this.ds2service.getCharacters(this.currentPage).subscribe({
      next: value => {
        this.dataApi = value;
        this.characters = this.dataApi.data;
        this.totalPages = this.dataApi.info.totalPages;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log("Done");
      }
    })
  }

  toggleAccordion(index:number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  filterByName() {
    this.characters = this.characters.filter(char => char.name.toLowerCase().includes(this.charName.toLowerCase()))
  }

  resetFilter() {
    this.loadCharacters();
    this.charName="";
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
}
