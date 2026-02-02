import { Component, OnInit } from '@angular/core';
import { Daum, Root } from '../../common/disneyinterface';
import { Disney } from '../../services/disney';

@Component({
  selector: 'app-info-disney',
  standalone: false,
  templateUrl: './info-disney.html',
  styleUrl: './info-disney.css',
})
export class InfoDisney implements OnInit {
  dataApi!: Root;
  characters: Daum[] = [];
  activeIndex: number | null = null;
  charName: string = " ";
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;

  constructor(private disneyservice: Disney) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.disneyservice.getCharacters(this.currentPage).subscribe({
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
    });
  }

  toggleAccordion(index:number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  nextPage() {
    if(this.currentPage < this.totalPages) {
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
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters();
    }
  }
}
