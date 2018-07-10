import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }  from 'rxjs/Observable';
import { Producto } from '../modelo/producto';

@Injectable()
export class ProductoService {
public url = 'http://localhost/disenio/web/app_dev.php/';

constructor(private _http: Http) { }
//Lista de Productos
listaProductos(){
     return this._http.get(this.url+"producto/lista").map(res => res.json()); 
  }
//Guardar nuevo producto
nuevoProducto(producto: Producto){
  let json = JSON.stringify(producto);
  let params = 'json='+json;
  let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  return this._http.post(this.url+'producto/nuevo', params,{headers: headers})
          .map(res => res.json());
}
//Editar producto
  editarProducto(id, producto: Producto){
    let json = JSON.stringify(producto);
    let params = 'json='+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.post(this.url+'producto/editar/'+id, params,{headers: headers})
          .map(res => res.json());
  }
  //Borrar producto
  eliminarProducto(id, producto: Producto){
    let json = JSON.stringify(producto);
    let params = 'json='+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.post(this.url+'producto/eliminar/'+id, params, {headers: headers})
            .map(res => res.json());
  }
  //Detalle del producto
  detalleProducto(id){
     return this._http.get(this.url+"producto/detalle/"+id).map(res => res.json()); 
  }

}
