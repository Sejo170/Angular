import { Component, OnInit } from '@angular/core';
import { Daum, Root } from '../../common/valointerface';
import { Valo } from '../../services/valo';

@Component({
  selector: 'app-info-valo',
  standalone: false,
  templateUrl: './info-valo.html',
  styleUrl: './info-valo.css',
})
export class InfoValo implements OnInit {
  dataApi!: Root;
  agents: Daum[] = [];
  activeIndex: number | null = null;

  constructor(private valoservice: Valo) { }

  ngOnInit(): void {
    this.loadAgents();
  }

  private loadAgents() {
    this.valoservice.getAgents().subscribe({
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
    })
  }

  toggleAccordion(index:number){
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
