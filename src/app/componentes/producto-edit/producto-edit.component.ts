import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Producto } from '../../modelo/producto';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'producto/editar',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css'],
  providers: [ProductoService]
})
export class ProductoEditComponent implements OnInit {
  public producto: Producto;
  public titulo: String;
  constructor(
    private productoServicio: ProductoService,
		private _route: ActivatedRoute,
  	private _router: Router,
  ) {
    this.titulo = 'Editar producto';
    this.producto = new Producto("","","","","","",'0');
  }

  ngOnInit() {
    this.detalleProducto();
  }

  editarProducto(){
  	console.log(this.producto);
  	this._route.params.forEach((params: Params) =>{
      let id = params['id'];
      this.productoServicio.editarProducto(id, this.producto).subscribe(
        response => {
        if(response.code == 400) this._router.navigate(['/productos']);
        else console.log(response);
      }, error => {
        
      }
      );  
    })
  }

  detalleProducto(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this.productoServicio.detalleProducto(id).subscribe(
        response => {
          if(response.code == 200 ){
            this.producto = response.data;
            console.log(this.producto);
          }
          else this._router.navigate(['producto'])
        }, error => {}
        )
    }

      );
  }

}
