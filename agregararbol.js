var arbol=new ArbolBinario();

function añadirNodo() {
    var nodo=parseInt(document.getElementById('nodo').value);
    var nuevoNodo= new Nodo(nodo);
    arbol.agregar(nuevoNodo);
}

function inOr(){
   var ino = arbol.inOrder();
   document.getElementById('inO').innerHTML=ino;
}
function preOr(){
    var pre = arbol.preOrder();
    document.getElementById('preO').innerHTML=pre;
 }
 function postOr() {
    var post = arbol.postOrder();
    document.getElementById('postO').innerHTML=post;
 }

 function busqueda() {
   var search=parseInt(document.getElementById('busqueda').value);
   var busqueda = arbol.busqueda(search);
   document.getElementById('SE').innerHTML=busqueda;
 }


document.getElementById('btnAgregar').addEventListener('click',añadirNodo);
document.getElementById('btnIn').addEventListener('click',inOr);
document.getElementById('btnPre').addEventListener('click',preOr);
document.getElementById('btnPost').addEventListener('click',postOr);
document.getElementById('btnB').addEventListener('click',busqueda)
