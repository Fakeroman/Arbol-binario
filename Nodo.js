class Nodo {
  constructor(dato) {
    this.dato=dato;
    this.hizq=null;
    this.hder=null;
  }
  set Dato(dato){
    this.dato=dato;
  }
  set Hizq(hizq){
    this.hizq=hizq;
  }
  set Hder(hder){
    this.hder=hder;
  }

  get Dato(dato){
    return dato
  }
  get Hizq(hizq){
    return hizq
  }
  get Hder(hder){
    return hder
  }
}
var nodo1= set Dato(25);
var nodo2=set Dato(15)
export default Nodo {}
