import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  standalone: true,
  imports: [/* import FormsModule if not already imported */]
})
export class NoteFormComponent {
  note: Note = { id: 0, title: '', content: '' }; // Initialize with empty title and content
  isEditMode = false; // Adjust this flag if you implement editing logic

  constructor(private noteService: NoteService, private router: Router) {}

  saveNote() {
    // Add the note using NoteService
    this.noteService.addNote(this.note);
    // Navigate back to the notes list after saving
    this.router.navigate(['/']);
  }

  goBack() {
    // Navigate back to the notes list without saving
    this.router.navigate(['/']);
  }
}
