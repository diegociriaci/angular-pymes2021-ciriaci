import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";
import { Empresa } from "../models/empresa";

@Injectable({
  providedIn: "root"
})
export class EmpresasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = "https://labsys.frc.utn.edu.ar:8443/api/empresas/";
  }

  get(Nombre: string, Activo: boolean, Pagina: number) {
    let params = new HttpParams();
    if (Nombre != null) {
      params = params.append("Nombre", Nombre);
    }
    if (Activo != null) {   // para evitar error de null.ToString()
      params = params.append("Activo", Activo.toString());
    }
    params = params.append("Pagina", Pagina.toString());

    return this.httpClient.get(this.resourceUrl, { params: params });
  }

  getById(Id: number) {
    return this.httpClient.get(this.resourceUrl + Id);
  }

  post(obj:Empresa) {
    return this.httpClient.post(this.resourceUrl, obj);
  }

  put(Id: number, obj:Empresa) {
    return this.httpClient.put(this.resourceUrl + Id, obj);
  }

  delete(Id) {
    return this.httpClient.delete(this.resourceUrl + Id);
  }
}