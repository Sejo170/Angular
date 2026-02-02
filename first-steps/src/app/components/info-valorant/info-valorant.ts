import { Component, OnInit } from '@angular/core';
import { ValorantAgents } from '../../services/valorant-agents';
import { Ability, Daum, Role, Root } from '../../common/agentsinterface';

@Component({
  selector: 'app-info-valorant',
  standalone: false,
  templateUrl: './info-valorant.html',
  styleUrl: './info-valorant.css',
})
export class InfoValorant implements OnInit {
  dataApi!: Root;
  agents: Daum[] = [];
  role!: Role;
  abilities: Ability[] = [];
  activeIndex: number | null = null;

  constructor(private vlservice: ValorantAgents) { }

  ngOnInit(): void{
    this.loadAgents();
  }

  private loadAgents() {
    this.vlservice.getAgents().subscribe({
      next: value => {
        this.dataApi = value;
        this.agents = this.dataApi.data;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log("Done");
      }
    });
  }

  toggleAccordion(index:number){
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
