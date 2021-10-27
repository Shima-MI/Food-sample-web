import { ProductService } from '../../services/product.service';
import { Product } from '../../models/productlist';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  productlist: Product[];
  productListWithService: Product[];

  constructor(private http: HttpClient, private productService: ProductService) { }

  ngOnInit(): void {
    // const apiUrl = "http://apitester.ir/api/Products";
    // this.http.get<Product[]>(apiUrl).subscribe(result => this.productlist= result);

    this.productService.getAll().subscribe(data => this.productListWithService= data);
  }

}
