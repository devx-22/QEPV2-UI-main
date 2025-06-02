import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniteService } from '../services/unite.service';

@Component({
  selector: 'app-unite-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './unite-form.component.html',
})
export class UniteFormComponent {
  unite = {
    nom: ''
  };

  constructor(private uniteService: UniteService) {}

  onSubmit() {
    this.uniteService.create(this.unite).subscribe(() => {
      alert('Unite created!');
      this.unite.nom = ''; // Clear the form
    });
  }
}

