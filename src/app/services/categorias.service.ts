import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CategoriasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl =
      "https://pav2.azurewebsites.net/api/categorias";
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }
}