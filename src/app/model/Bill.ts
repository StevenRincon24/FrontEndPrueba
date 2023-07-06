export class Bill
{

  billCode:string="";
  billTotal:number=0;
  billSubTotal:number=0;
  billIva:number=0;
  billRetention:number=0;
  billDate:string="";
  billStatus:string="";
  billpay:boolean=false;
  billPaymetDate:string="";

  constructor(billCode: string, billTotal: number, billSubTotal:number=0, billIva:number, billRetention:number, billDate:string, billStatus:string, billpay:boolean, billPaymetDate:string) {
    this.billCode = billCode;
    this.billTotal = billTotal;
    this.billSubTotal = billSubTotal;
    this.billIva = billIva;
    this.billRetention = billRetention;
    this.billDate = billDate;
    this.billStatus = billStatus;
    this.billpay = billpay;
    this.billPaymetDate = billPaymetDate;
  }
}
