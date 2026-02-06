import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MaloteService } from '../../services/malote.service';
import { Malote } from '../../models/malote';

@Component({
  selector: 'app-malote-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './malote-list.html',
  styleUrl: './malote-list.css',
})
export class MaloteListComponent implements OnInit {

  malotes: Malote[] = [];

  constructor(
    private service: MaloteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarMalotes();
  }

  carregarMalotes() {
    console.log('MaloteListComponent carregado');
    this.service.listar().subscribe(dados => {
      console.log('Dados recebidos:', dados);
      this.malotes = dados;
     });
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
