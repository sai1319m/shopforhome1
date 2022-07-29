export class Order {
    
    orderId:number|any
constructor(
    public pid:number,
    public pname:string,
    public price: number,
    public url:string|any,
    public category:string,
    public count:number,
    public total:number,
    public address:string,
    public phNo:string,
    public name:string
    
     ){}
}
