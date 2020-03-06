import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products} from '../shared/products';

const headrsOptions ={ 

headers :new HttpHeaders({'Content-Type':'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

   
  SERVER_URL: string = "http://localhost:3000/product";
  product: Products[];
 
  constructor(private http: HttpClient) { }

    getproductlist():Observable<Products[]> {
     return this.http.get<Products[]>(this.SERVER_URL,headrsOptions);
    } 

    deleteproduct(id:number):Observable<Products> {
     return this.http.delete<Products>(this.SERVER_URL +'/'+id,headrsOptions);
    } 
    addproduct(data):Observable<Products> {
     return this.http.post<Products>(this.SERVER_URL,data,headrsOptions);
    }

    getproductbyid(id:number):Observable<Products> {
     return this.http.get<Products>(this.SERVER_URL+'/'+id,headrsOptions);
    }
      updateproduct(data):Observable<Products> {
     return this.http.put<Products>(this.SERVER_URL +'/'+data.id,data,headrsOptions);
    }

}