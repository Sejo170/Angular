import { Component } from '@angular/core';
import { ValorantAgents } from '../../services/valorant-agents';
import { Daum, Root } from '../../common/agentsinterface';

@Component({
  selector: 'app-info-valorant',
  standalone: false,
  templateUrl: './info-valorant.html',
  styleUrl: './info-valorant.css',
})
export class InfoValorant {
  dataApi!: Root;
  agents: Daum[] = [];

  constructor(private vlservice: ValorantAgents) { }

  ngOnInit(): void{
    this.loadAgents();
  }

  private loadAgents() {
    this.vlservice.getAgents().subscribe( agents => {
      this.agents = agents.data;
      console.log(this.agents);
    })
  }
}
