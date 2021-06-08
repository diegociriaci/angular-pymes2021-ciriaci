import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  Items: Persona[] = [];
  Titulo = 'Personas';

  constructor(
    private personasService: PersonasService
  ) 
  {}

  ngOnInit() {
    this.GetPersonas();
  }

  GetPersonas() {
    this.personasService.get().subscribe((res: Persona[]) => {
      this.Items = res;
    });
  }
}
