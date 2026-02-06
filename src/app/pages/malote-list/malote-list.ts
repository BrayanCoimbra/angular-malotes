import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MaloteService } from '../../services/malote.service';
import { Malote } from '../../models/malote';
import { Page } from '../../models/page';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-malote-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './malote-list.html',
  styleUrl: './malote-list.css',
})
export class MaloteListComponent implements OnInit {

  malotes$!: Observable<Malote[]>;
  page!: Page<Malote>;
  
  constructor(
    private service: MaloteService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.carregarMalotes();
  }

  carregarMalotes() {
  this.malotes$ = this.service.listar().pipe(
      map((page: Page<Malote>) => page.content)
    );
  }

  novo() {
    this.router.navigate(['/novo']);
  }

  editar(id: number) {
    this.router.navigate(['/editar', id]);
  }

  excluir(id: number) {
    if (confirm('Deseja excluir este malote?')) {
      this.service.excluir(id).subscribe(() => {
        this.carregarMalotes();
      });
    }
  }
}
