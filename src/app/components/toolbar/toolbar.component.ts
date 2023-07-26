import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  language = 'En';

  constructor(private dialog: MatDialog, private router: Router) {}

  setLanguage(lang: string) {
    if (lang === 'En' && this.language === 'Ar') {
      this.language = 'En';
    } else if (lang === 'Ar' && this.language === 'En') {
      this.language = 'Ar';
    }
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
