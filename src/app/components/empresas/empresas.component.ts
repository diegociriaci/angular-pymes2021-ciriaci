import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Empresa} from "../../models/empresa";
import { EmpresasService } from "../../services/empresas.service";
import { ModalDialogService } from '../../services/modal-dialog.service';

@Component({
  selector: "app-empresas",
  templateUrl: "./empresas.component.html",
  styleUrls: ["./empresas.component.css"]
})
export class EmpresasComponent implements OnInit {
  Titulo = "Empresas";
  TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)"
  };
  AccionABMC = "L"; // inicialmente inicia en el listado de empresas (buscar con parametros)
  Mensajes = {
    SD: " No se encontraron registros...",
    RD: " Revisar los datos ingresados..."
  };

  Items: Empresa[] = [];
  RegistrosTotal: number;
  Pagina = 1; // inicia pagina 1

  constructor(
   public formBuilder: FormBuilder,
   private empresasService: EmpresasService,
  private modalDialogService: ModalDialogService
  ) {}
  FormBusqueda: FormGroup;
  FormRegistro: FormGroup;

  submitted: boolean = false;


  ngOnInit() { this.FormBusqueda = this.formBuilder.group({
      Nombre: [null],
    });
      this.FormRegistro = this.formBuilder.group({
      IdEmpresa: [null],
      RazonSocial: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      CantidadEmpleados: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]  ],
      FechaFundacion: [null, [Validators.required, Validators.pattern(
            '(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}'
          )
]  ],
    });

      }

  Agregar() {
    this.AccionABMC = "A";
    this.FormRegistro.reset({ Activo: true, IdEmpresa: 0 });
    this.submitted = false;
    this.FormRegistro.markAsUntouched();

  }

// Buscar segun los filtros, establecidos en FormRegistro
 Buscar() {
    this.empresasService
      .get()
      .subscribe((res: any) => {
        this.Items = res.Items;
        this.RegistrosTotal = res.RegistrosTotal;
      });
  }

  // Obtengo un registro especifico según el Id
  BuscarPorId(Dto, AccionABMC) {
    window.scroll(0, 0); // ir al incio del scroll

    this.empresasService.getById(Dto.IdEmpresa).subscribe((res: any) => {
      this.FormRegistro.patchValue(res);

      //formatear fecha de  ISO 8061 a string dd/MM/yyyy
      var arrFecha = res.FechaFundacion.substr(0, 10).split('-');
      this.FormRegistro.controls.FechaFundacion.patchValue(
        arrFecha[2] + '/' + arrFecha[1] + '/' + arrFecha[0]
      );

      this.AccionABMC = AccionABMC;
    });
  }

  Consultar(Dto) {
    this.BuscarPorId(Dto, "C");
  }

// grabar tanto altas como modificaciones
  Grabar() {
	this.submitted = true;
     // verificar que los validadores esten OK
     if (this.FormRegistro.invalid) {
      return;
     }

    //hacemos una copia de los datos del formulario, para modificar la fecha y luego enviarlo al servidor
    const itemCopy = { ...this.FormRegistro.value };
 
    //convertir fecha de string dd/MM/yyyy a ISO para que la entienda webapi
    var arrFecha = itemCopy.FechaFundacion.substr(0, 10).split("/");
    if (arrFecha.length == 3)
      itemCopy.FechaFundacion = 
          new Date(
            arrFecha[2],
            arrFecha[1] - 1,
            arrFecha[0]
          ).toISOString();
 
    // agregar post
    if (this.AccionABMC == "A") {
      this.empresasService.post(itemCopy).subscribe((res: any) => {
        this.Volver();
        this.modalDialogService.Alert('Registro agregado correctamente.');
        this.Buscar();
      });
    } else {
      // modificar put
      this.empresasService
        .put(itemCopy.IdEmpresa, itemCopy)
        .subscribe((res: any) => {
          this.Volver();
          this.modalDialogService.Alert('Registro modificado correctamente.');
          this.Buscar();
        });
    }
  }

// representa la baja logica 
  ActivarDesactivar(Dto) {
    this.modalDialogService.Confirm(
      "Esta seguro de " +
        (Dto.Activo ? "desactivar" : "activar") +
        " este registro?",
      undefined,
      undefined,
      undefined,
      () =>
        this.empresasService  
          .delete(Dto.IdEmpresa)
          .subscribe((res: any) => 
            this.Buscar()
          ),
      null
    );
  }

  // Volver desde Agregar/Modificar
  Volver() {
    this.AccionABMC = "L";
  }
  ImprimirListado() {
    this.modalDialogService.Alert
 ('Sin desarrollar...');
  }
}
