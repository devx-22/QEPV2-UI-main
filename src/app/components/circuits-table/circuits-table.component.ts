import { Component } from '@angular/core';

@Component({
  selector: 'app-circuits-table',
  templateUrl: './circuits-table.component.html',
})
export class CircuitsTableComponent {
  rows = Array.from({ length: 15 }, (_, i) => ({
    circuit: `C${i + 1}`,
    dp: 'Casa Anfa',
    programme: i % 2 === 0 ? 'Programme de surveillance' : 'Réclamation',
    typeAnalyse: 'TR1',
    dateCreation: `0${i + 1}-01-2025`,
    planifies: 5 + i,
    realises: i % 6,
    termines: i % 4,
    progress: i * 6
  }));
}

