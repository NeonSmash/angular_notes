import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  standalone: true,
  imports: [ CommonModule ]
})
export class NoteListComponent implements OnInit {
  notes: Note[] = []; // Array to hold notes

  constructor(private noteService: NoteService, private router: Router) {}

  goToCreateNote() {
    // Navigate to the Add Note page
    this.router.navigate(['/add-note']);
  }

  ngOnInit() {
    this.notes = this.noteService.getNotes(); // Get notes when the component initializes
  }

  editNote(noteId: number) {
    this.router.navigate(['/edit-note', noteId]);
  }
  

}
