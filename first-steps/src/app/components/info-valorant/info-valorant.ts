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
