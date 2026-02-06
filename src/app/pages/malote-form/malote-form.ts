import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaloteService } from '../../services/malote.service';
import { Malote } from '../../models/malote';
import { Page } from '../../models/page';

@Component({
  selector: 'app-malote-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './malote-form.html',
  styleUrl: './malote-form.css',
})
export class MaloteFormComponent implements OnInit {

  malote: Malote = {
    matricula: '',
    descricaoSituacao: '',
    dataEnvio: '',
    nomeFuncionario: '',
    situacaoMalote: ''
  };

  id?: number;

  constructor(
    private service: MaloteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.service.buscarPorId(this.id).subscribe((dados: Malote) => {
        this.malote = dados;
      });
    }
  }

  salvar() {
    if (this.id) {
      this.service.atualizar(this.id, this.malote).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.service.criar(this.malote).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
