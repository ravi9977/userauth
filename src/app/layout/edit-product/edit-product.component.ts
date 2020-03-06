import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Products} from '../../shared/products';
import { Router ,Params, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  updateproductForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mobjapi: ApiService,
    private routes:ActivatedRoute,  
    ) {} 
  

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;
    this.updateproductForm = this.formBuilder.group({
      id: ['', Validators.required],
      productName: ['', Validators.required],
      productPrice: ['', Validators.required]
    });
    this.mobjapi.getproductbyid(routeParams.id).subscribe(data =>{
      console.log(data);
      this.updateproductForm.patchValue(data);
    });

  }
  get f() { return this.updateproductForm.controls; }

  onSubmit() {
    this.submitted = true; 
    this.mobjapi.updateproduct(this.updateproductForm.value).subscribe(
      (data) => {
        console.log('Response :' +  JSON.stringify(data))
        this.router.navigate(['/layout/product']);
        
      });
  }
}
