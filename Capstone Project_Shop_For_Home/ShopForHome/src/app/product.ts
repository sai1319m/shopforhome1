export class Product {
    constructor(
        public pid:number,
        public pname:string,
        public price: number,
        public url:string,
        public category:string,
        public count:number,
        public total:number,
        public stock:number
    ){}
}
