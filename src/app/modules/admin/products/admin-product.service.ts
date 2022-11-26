import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as env} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(private http: HttpClient) {
  }

  saveProduct(formData: any) {
    return this.http.post(env.adminApiUrl + 'product/save', formData);
  }
}
