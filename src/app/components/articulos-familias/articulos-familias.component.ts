import { Component, OnInit } from "@angular/core";
import {
  ArticuloFamilia,
  ArticulosFamilias
} from "../../models/articulo-familia";

@Component({
  selector: "app-articulos-familias",
  templateUrl: "./articulos-familias.component.html",
  styleUrls: ["./articulos-familias.component.css"]
})
export class ArticulosFamiliasComponent implements OnInit {
  Items = ArticulosFamilias;
  Titulo = "Articulos Familias";
  constructor() {}

  ngOnInit() {}
}
