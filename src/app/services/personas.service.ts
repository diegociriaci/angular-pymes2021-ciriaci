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
export class PersonasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl =
      "https://pav2.azurewebsites.net/api/personas";
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }
}
