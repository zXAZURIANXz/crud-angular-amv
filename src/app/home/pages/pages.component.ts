import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor( private _fb: FormBuilder ) { }

  productosArr:any = [];

  labelAddOrEdit = '';
  editar = false;
  indexElement:any = 1;

  formAddProduct: FormGroup = this._fb.group({

    producto:[''],
    descripcionProducto:[''],
    precioProducto:['']

  })

  ngOnInit(): void {

    this.labelAddOrEdit = 'Agregar Producto';
  }


  agregarProducto(){

    console.log(this.editar);
    if(this.editar){
      console.log('vas a editar')

      this.formAddProduct.value.producto
      this.productosArr[this.indexElement].nombre = this.formAddProduct.value.producto
      this.productosArr[this.indexElement].descripcion = this.formAddProduct.value.descripcionProducto
      this.productosArr[this.indexElement].precio = this.formAddProduct.value.precioProducto


    }else {
      let idAleatorio = Math.floor(Math.random() * 30);
      console.log(idAleatorio);
      const productoObj = {
  
        id: idAleatorio,
        nombre : this.formAddProduct.value.producto,
        descripcion: this.formAddProduct.value.descripcionProducto,
        precio: this.formAddProduct.value.precioProducto
  
  
      }
  
      this.productosArr.push(productoObj);
      console.log(this.productosArr);
    }



  }

  eliminarProducto(productoId:any){


    let index = this.productosArr.findIndex( (x:any) => x.id == productoId);
    this.productosArr.splice(index,1);

    console.log(this.productosArr);
    console.log(index);

  }

  editarProducto(productoId:any){

    this.labelAddOrEdit = 'Editar Producto';
    let index = this.productosArr.findIndex( (x:any) => x.id == productoId);
    this.productosArr[index];
    console.log(this.productosArr[index]);

    this.formAddProduct.controls['producto'].setValue( this.productosArr[index].nombre );
    this.formAddProduct.controls['descripcionProducto'].setValue(this.productosArr[index].descripcion);
    this.formAddProduct.controls['precioProducto'].setValue(this.productosArr[index].precio);

    this.editar = true;
    this.indexElement = index;

  }




}
