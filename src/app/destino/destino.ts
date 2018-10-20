export class Destino{
	constructor(
		public id:number,
		public ubicacion:string,
		public sub_ubicacion:string,
		public precio:number,
        public foto:string,
        public titulo:string,
        public descripcion_corta:string,
        public lugar:string
	){}
}