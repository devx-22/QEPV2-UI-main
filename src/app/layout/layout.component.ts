import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';            // ✅ Import this
import { RouterModule } from '@angular/router';            // ✅ Import this

@Component({
  selector: 'app-layout',
  standalone: true,                                        // ✅ Required for Angular 17+
  imports: [CommonModule, RouterModule],                   // ✅ Add these
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  showQepMenu = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showQepMenu = this.router.url.startsWith('/qep');
      }
    });
  }
}

