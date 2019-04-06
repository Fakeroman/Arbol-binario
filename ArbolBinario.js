class Nodo {
  constructor(dato) {
    this.dato=dato;
    this.hizq=null;
    this.hder=null;
  }
 /* set Dato(dato){
    this.dato=dato;
  }
  set Hizq(hizq){
    this.hizq=hizq;
  }
  set Hder(hder){
    this.hder=hder;
  }

  get Dato(){
    return dato
  }
  get Hizq(){
    return hizq
  }
  get Hder(){
    return hder
  }*/
}
class ArbolBinario {
  constructor() {
      this.raiz = null;
  }
  agregate(n, r) {
      if (n.dato < r.dato) {
          if (r.hizq == null)
              r.hizq  = n;
          else
              this.agregate(n, r.hizq );
      } else {
          if (r.hder == null)
              r.hder = n;
          else
              this.agregate(n, r.hder);

      }

  }
  agregar(nuevo) {
      if (this.raiz == null){
          this.raiz = nuevo;
          
      }
      else
          this.agregate(nuevo, this.raiz);
  }
  //IRD
  inOrder(){
      if(this.raiz==null)
          return " ";
      else
          return this.inO(this.raiz);
  }
  inO(r){
      var c = " ";
      if(r.hizq  != null){
      c+=this.inO(r.hizq )+" ";
      }
      c+=r.dato;
      if(r.hder != null){
          c+=this.inO(r.hder)+" ";
      }
      return c;
  }

  //RID
  preOrder(){
  if(this.raiz==null){
    return " ";
  }
 
  else{
  return this.preO(this.raiz);
}
  }

  preO(r){
    var c = " ";
    c+=r.dato;
    if(r.hizq  != null){
    c+=this.preO(r.hizq )+" ";
    }
    if(r.hder != null){
        c+=this.preO(r.hder)+" ";
    }
    return c;
 }
  postOrder(){
    if(this.raiz==null){
      return " ";
    }
   
    else{
    return this.postO(this.raiz);
  }
  }
  postO(r){
    var c = " ";

    if(r.hizq  != null){
    c+=this.postO(r.hizq )+" ";
    }
    if(r.hder != null){
        c+=this.postO(r.hder)+" ";
    }
    c+=r.dato;
    return c;
  }

 
}

