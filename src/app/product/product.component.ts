import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // parr=[new Product(12,"lays",10),
  //       new Product(13,"kurkure",20),
  //       new Product(14,"sprite",50),
  //     ];

      parr:Product[];
      pob:Product;
      flag=false;
      constructor(private pservice:ProductService){ 
        console.log("in product ctor");
      }
      ngOnInit()
      {
        console.log("ngoninit in productcomponenet");
        this.parr=this.pservice.getAllProduct();
      }
      updateProduct(p:Product){
        this.flag=true;
        //this will assign child to product property
        this.pob=p;
      }
      deleteProd(p:Product)
      {
        this.pservice.deleteProd(p);
      }
      displayForm(){
        this.flag=true;
      }



}
