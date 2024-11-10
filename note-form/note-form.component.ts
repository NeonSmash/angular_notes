import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';
import { Note } from '../note.model';
import { FormsModule } from '@angular/forms';  // Import FormsModule here

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  standalone: true,
  imports: [FormsModule]
})
export class NoteFormComponent {
  note: Note = { id: 0, title: '', content: '' }; // Initialize with empty title and content
  isEditMode = false; // Adjust this flag if you implement editing logic

  constructor(
    private noteService: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const noteId = Number(this.route.snapshot.paramMap.get('id'));
    if (noteId) {
      const existingNote = this.noteService.getNoteById(noteId);
      if (existingNote) {
        this.note = { ...existingNote }; // Clone the note to avoid mutation
        this.isEditMode = true;
      }
    }
  }

  saveNote() {
    if (this.isEditMode) {
      this.noteService.updateNote(this.note);
    } else {
      this.noteService.addNote(this.note);
    }
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
