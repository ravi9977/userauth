import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Products} from '../../shared/products';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addproductForm: FormGroup;
  submitted = false;
  products :Products[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mobjapi: ApiService,
    ) {} 
  

  ngOnInit() {
    this.addproductForm = this.formBuilder.group({
      id: ['', Validators.required],
      productName: ['', Validators.required],
      productPrice: ['', Validators.required]
    });
  }

  get f() { return this.addproductForm.controls; }

  onSubmit() {
    this.submitted = true; 
    this.mobjapi.addproduct(this.addproductForm.value).subscribe(
      (data) => {
        console.log('Response :' +  JSON.stringify(data))
        this.router.navigate(['/layout/product']);
        
      });

    
  }
}
