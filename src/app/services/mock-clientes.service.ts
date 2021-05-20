import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Cliente, Clientes } from "../models/cliente";
 
@Injectable({
  providedIn: "root"
})
export class MockClientesService {
  constructor() {}
  get(Nombre: string, Activo: boolean, pagina: number):any {
    var Items = Clientes.filter(item => 
      // Nombre == null  chequea por null y undefined
      // Nombre === null  chequea solo por null
      (Nombre == null || Nombre == "" || item.Nombre.toUpperCase().includes(Nombre.toUpperCase())) 
      && (Activo == null || item.Activo == Activo)
    );
    //ordenar
    Items = Items.sort( (a,b) => a.Nombre.toUpperCase() > b.Nombre.toUpperCase() ? 1 : -1 )
    // paginar con slice
    var RegistrosTotal = Items.length;
    var RegistroDesde = (pagina - 1) * 10;
    Items = Items.slice(RegistroDesde, RegistroDesde + 10);
    return of({ Items: Items, RegistrosTotal: RegistrosTotal });
  }
  // no usamos get con parametros porque javascript no soporta sobrecarga de metodos!
  getById(Id: number) {
    var item: Cliente = Clientes.filter(x => x.IdCliente === Id)[0];
    return of(item);
  }
 
  post(obj: Cliente) {
    obj.IdCliente = 56;
    
    obj.CreditoMaximo = +obj.CreditoMaximo;
    obj.Cuit = obj.Cuit;

    Clientes.push(obj);
    return of(obj);
  }
 
  put(Id: number, obj: Cliente) {
    var indice;
    var items = Clientes.filter(function(item, index) {
      if (item.IdCliente === Id) {
        indice = index;
      }
    });
    
    obj.CreditoMaximo = +obj.CreditoMaximo;
    obj.Cuit = obj.Cuit;

    Clientes[indice] = obj;
    return of(obj);
  }
 
  delete(Id: number) {
    var items = Clientes.filter(x => x.IdCliente === Id);
    items[0].Activo = !items[0].Activo;
    return of(items[0]);
  }
}
