import { Component, OnInit } from '@angular/core';
import { RickMorty } from '../../services/rick-morty';
import { CharacterRM, InfoApiRM } from '../../common/rminterface';

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info implements OnInit {
  filterByName() {
    throw new Error('Method not implemented.');
  }
  dataApi!: InfoApiRM;
  characters: CharacterRM[] = [];
  activeIndex: number | null = null;
  charName: string = " ";

  constructor(private rmservice: RickMorty) { }
  
  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.rmservice.getCharacters().subscribe({
      next: value => {
        this.dataApi = value;
        this.characters = this.dataApi.results;
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
}
