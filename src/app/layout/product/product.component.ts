import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Products} from '../../shared/products';
import { Router } from '@angular/router';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	allproducts: Products[];
	constructor(private router:Router,private mobjapi: ApiService) { }
	ngOnInit() {
		this.getallproducts();

	}

	getallproducts(){
		this.mobjapi.getproductlist().subscribe((date:Products[])=>{
			this.allproducts = date;
			console.log(this.allproducts)
		});

	}
	deletedata(id:number){
		console.log(id)
		this.mobjapi.deleteproduct(id).subscribe((date:Products)=>{
			var del=confirm("Are you sure you want to delete this product?");
			if (del==true){
				alert ("Product Deleted Succssefully")
				this.getallproducts();
			} else {
				alert("Product Not Deleted")
			}

		});
	}


	editdata(id:number){
		console.log(id);
		this.router.navigate(['/layout/edit-product/' +id]);

	}

}
