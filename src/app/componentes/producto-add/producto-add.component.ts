import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../modelo/producto';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css'],
  providers: [ProductoService]
})
export class ProductoAddComponent implements OnInit {
  public titulo: string;
	public producto: Producto;
  constructor(
    private _productoService: ProductoService,
		private _route: ActivatedRoute,
		private _router: Router
  ) { 
    this.titulo = 'Agrega un nuevo producto';
		this.producto = new Producto("","","","","","",'0');
  }

  ngOnInit(){
		console.log('producto-add.component.ts cargado...');
  }
  
  agregarProducto(){
    console.log(this.producto);
  	this._productoService.nuevoProducto(this.producto).subscribe(
  		response => {
  			if(response.code == 402) this._router.navigate(['/productos']);
  			else console.log(response);
  		},
  		error => {}
  	);
	}

}
