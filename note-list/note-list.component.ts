import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {
  constructor(private router: Router) {}

  goToCreateNote() {
    // Navigate to the Add Note page
    this.router.navigate(['/add-note']);
  }
}
