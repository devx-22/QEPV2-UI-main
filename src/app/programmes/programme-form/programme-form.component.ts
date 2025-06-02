import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgrammeService } from '../../services/programme.service';
import { Programme } from '../../models/programme.model';

@Component({
  selector: 'app-programme-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './programme-form.component.html'
})
export class ProgrammeFormComponent {
  programme: Programme = {
    nom: '',
    type: '',
    dateCreation: new Date().toISOString().slice(0, 10) // today's date
  };

  constructor(private programmeService: ProgrammeService) {}

  onSubmit() {
    this.programmeService.create(this.programme).subscribe(() => {
      alert('Programme créé avec succès');
      this.programme = { nom: '', type: '', dateCreation: new Date().toISOString().slice(0, 10) };
    });
  }
}

