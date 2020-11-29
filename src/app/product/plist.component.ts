import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
@Component({
    selector:"plist",
    templateUrl:"./plist.component.html",
    styleUrls:["./plist.component.css"]
})
export class PlistComponent implements OnInit{
    // parr=[new Product(12,"lays",10),
    //     new Product(13,"kurkure",20),
    //     new Product(14,"sprite",50),
    //   ];
    parr:Product[];
    constructor(private pservice:ProductService)
    {
        console.log("plist ctor called");
    }
    //called one time after calling ctor
    ngOnInit(){
        console.log("ngoninit called");
        this.parr=this.pservice.getAllProduct();
    }
               
}