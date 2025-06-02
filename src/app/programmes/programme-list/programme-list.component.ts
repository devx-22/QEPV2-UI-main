import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammeService } from '../../services/programme.service';
import { Programme } from '../../models/programme.model';

@Component({
  selector: 'app-programme-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programme-list.component.html'
})
export class ProgrammeListComponent implements OnInit {
  programmes: Programme[] = [];

  constructor(private programmeService: ProgrammeService) {}

  ngOnInit() {
    this.programmeService.getAll().subscribe((data) => {
      this.programmes = data;
    });
  }
}

