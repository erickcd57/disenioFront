import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-productoslist',
  templateUrl: './productoslist.component.html',
  styleUrls: ['./productoslist.component.css'],
  providers: [ProductoService]
})
export class ProductoslistComponent implements OnInit {

  public productos;

  constructor(
    private _productoService: ProductoService,
  ) { }

  ngOnInit() {
    this.listaProductos();
  }

  listaProductos(){
    this._productoService.listaProductos().subscribe(
      response => {
        this.productos = response.data;
      },
      error => {

      }
    )
  }

  eliminarProducto(id){
    this._productoService.eliminarProducto(id, this.productos).subscribe(
        response => {
            if(response.code == 400) {
              this.listaProductos();
              alert("Producto Eliminado");
            }
            else alert("Error al borrar!");
        },
        error => {}
    );
}
}
