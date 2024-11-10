import { Routes } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteFormComponent } from './note-form/note-form.component';

export const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'note/:id', component: NoteDetailComponent },
  { path: 'add-note', component: NoteFormComponent },
  { path: 'edit-note/:id', component: NoteFormComponent }
];
