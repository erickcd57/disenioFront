import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';
import {Producto} from '../../modelo/producto';

@Component({
  selector: 'producto',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css'],
  providers: [ProductoService]
})
export class ProductoDetailComponent implements OnInit {
  public producto;
  constructor(
    private productoServicio: ProductoService,
		private _route: ActivatedRoute,
  		private _router: Router,
  ) { }

  ngOnInit() {
    console.log('componente detalle producto, cargando....');
    this.detalleProducto();
  }

  detalleProducto(){
    this._route.params.forEach((params: Params)=>{
      let id = params['id'];
      this.productoServicio.detalleProducto(id).subscribe(
        response => {
          if(response.code == 200){
                      this.producto = response.data;
                  }
          else this._router.navigate(['productos'])
        }, error => {}
      )
    });
  }
}
