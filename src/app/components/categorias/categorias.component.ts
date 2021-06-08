import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  Items: Categoria[] = [];
  Titulo = 'Categorias';

  constructor(
    private CategoriasService: CategoriasService
  ) 
  {}

  ngOnInit() {
    this.GetCategorias();
  }

  GetCategorias() {
    this.CategoriasService.get().subscribe((res: Categoria[]) => {
      this.Items = res;
    });
  }
}
