import { Bill } from './Bill';
export class Client
{
  nit:string="";
  name:string="";
  ciudad:string="";
  correo:string="";
  bills: Bill;
  constructor() {
    this.bills = new Bill("", 0,0,0,0,"","",false, ""); // Inicializa la factura con valores predeterminados
  }

}
