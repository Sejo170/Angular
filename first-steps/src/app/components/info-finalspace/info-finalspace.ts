import { Component, OnInit } from '@angular/core';
import { CharacterFS, Root } from '../../common/finalspaceinterface';
import { Finalspace } from '../../services/finalspace';

@Component({
  selector: 'app-info-finalspace',
  standalone: false,
  templateUrl: './info-finalspace.html',
  styleUrl: './info-finalspace.css',
})
export class InfoFinalspace implements OnInit{
  dataApi!: Root;
  characters: CharacterFS[] = [];
  activeIndex: number | null = null;

  constructor(private fsservice: Finalspace) {};
  
  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.fsservice.getCharacters().subscribe({
      next: value => {
        this.dataApi = value;
        this.characters = this.dataApi;
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
