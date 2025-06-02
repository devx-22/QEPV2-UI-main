import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniteService } from '../services/unite.service';

@Component({
  selector: 'app-unite-list',
  standalone: true,  // <-- Important for v17+ components
  imports: [CommonModule],  // <-- This allows *ngFor, *ngIf
  templateUrl: './unite-list.component.html',
})
export class UniteListComponent {
  unites: any[] = [];

  constructor(private uniteService: UniteService) {}

  ngOnInit() {
    this.uniteService.getAll().subscribe((data: any) => {
      this.unites = data;
    });
  }
}
