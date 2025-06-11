import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // ✅ Add this

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet], // ✅ Include here
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  showAdmin = false;

  toggleAdminSection() {
    this.showAdmin = !this.showAdmin;
  }
}
