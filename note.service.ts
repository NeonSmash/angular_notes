import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [];
  private idCounter = 1;

  getNotes() {
    return this.notes;
  }

  getNoteById(id: number): Note | undefined {
    return this.notes.find(note => note.id === id);
  }

  addNote(note: Note) {
    note.id = this.idCounter++;
    this.notes.push(note);
  }

  updateNote(updatedNote: Note) {
    const index = this.notes.findIndex(n => n.id === updatedNote.id);
    if (index > -1) {
      this.notes[index] = updatedNote;
    }
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
  }
}
