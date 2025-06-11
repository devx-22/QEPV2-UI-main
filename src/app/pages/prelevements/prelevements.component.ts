import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrelevementService } from '../../services/prelevement.service';
import { Prelevement } from '../../models/prelevement.model';

@Component({
  selector: 'app-prelevements',
  templateUrl: './prelevements.component.html',
  styleUrls: ['./prelevements.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PrelevementsComponent {
  data: Prelevement[] = [];
  filteredData: Prelevement[] = [];
  openDropdownIndex: number | null = null;

  selectedProgramme: string = '';
  selectedDp: string = '';
  selectedCircuit: string = '';

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  programmes: string[] = [];
  dps: string[] = [];
  circuits: string[] = [];
  uniqueProgrammes: string[] = [];
  uniqueDps: string[] = [];
  uniqueCircuits: string[] = [];

  fetchPrelevements(): void {
    this.prelevementService.getPrelevements().subscribe((res: Prelevement[]) => {
      this.data = res.map(p => ({
        ...p,
        avancement: p.planifies ? Math.floor(((p.realises + p.termines) / p.planifies) * 100) : 0
      }));
      this.filteredData = [...this.data];
      this.uniqueProgrammes = [...new Set(this.data.map(p => p.programme))];
      this.uniqueDps = [...new Set(this.data.map(p => p.dp))];
      this.uniqueCircuits = [...new Set(this.data.map(p => p.circuit))];
    });
  }


  constructor(private prelevementService: PrelevementService) {
    this.fetchPrelevements();
  }

  toggleDropdown(index: number): void {
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
  }

  sortData(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredData.sort((a, b) => {
      const valA = a[column as keyof Prelevement];
      const valB = b[column as keyof Prelevement];
      if (typeof valA === 'number' && typeof valB === 'number') {
        return this.sortDirection === 'asc' ? valA - valB : valB - valA;
      } else {
        return this.sortDirection === 'asc'
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      }
    });
  }

  applyFilters(): void {
    this.filteredData = this.data.filter(item => {
      return (
        (!this.selectedProgramme || item.programme === this.selectedProgramme) &&
        (!this.selectedDp || item.dp === this.selectedDp) &&
        (!this.selectedCircuit || item.circuit === this.selectedCircuit)
      );
    });
  }
}
