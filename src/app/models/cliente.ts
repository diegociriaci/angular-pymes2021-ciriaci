export class Cliente {
  IdCliente: number;
  Nombre: string;
  CreditoMaximo: number;
  Cuit: string;
  FechaNacimiento: string;
  Activo: boolean;
}
export const Clientes: Cliente[] = [
  {
    IdCliente: 10802,
    Nombre: 'Alejandra Perez',
    CreditoMaximo: 21948,
    Cuit: '27219487875',
    FechaNacimiento: '2017-01-23T00:00:00',
    Activo: false
  },
  {
    IdCliente: 13944,
    Nombre: 'Carlos Rodriguez',
    CreditoMaximo: 38996,
    Cuit: '20389965546',
    FechaNacimiento: '2017-01-04T00:00:00',
    Activo: true
  }
];
